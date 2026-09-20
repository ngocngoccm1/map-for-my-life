"""Classify Chap 2 posters by their printed group and MAP labels."""

from collections import defaultdict
from pathlib import Path
import json
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
FOLDER = ROOT / "masterdata" / "chap2"
AUDIT = ROOT / "tools" / "chap2-ocr-audit.json"
OUTPUT = ROOT / "data" / "maps" / "chap2-assets.json"

GROUP_TITLES = [
    "Cấu trúc cốt lõi của con người", "Hệ điều hành tư duy", "Hệ cảm xúc",
    "Hệ thần kinh và phản ứng", "Ra quyết định và lựa chọn", "Ưu tiên và phân bổ nguồn lực",
    "Giao tiếp cá nhân", "Thuyết phục và gây ảnh hưởng", "Đàm phán và thỏa thuận",
    "Ranh giới và quyền tự quyết", "Làm việc và hiệu suất", "Năng lực thực thi",
    "Quản trị mục tiêu", "Hợp tác và làm việc nhóm", "Giải quyết xung đột",
    "Lãnh đạo bản thân", "Lãnh đạo con người", "Quyền lực, trách nhiệm và vị thế",
    "Sự nghiệp và con đường nghề nghiệp", "Năng lực nghề nghiệp", "Danh tiếng và thương hiệu cá nhân",
    "Mạng lưới quan hệ và vốn xã hội", "Tiền bạc và hành vi tài chính",
    "Tạo thu nhập và giá trị kinh tế", "Kinh doanh và kiến tạo giá trị",
    "Khách hàng và giá trị phục vụ", "Sáng tạo và kiến tạo cái mới",
    "Giải quyết vấn đề phức tạp", "Thích nghi và quản trị thay đổi",
    "Bất định, rủi ro và khủng hoảng", "Thành tựu và thành công", "",
    "Hạnh phúc và chất lượng sống", "Tự do, đủ đầy và quyền lựa chọn",
]

TOPICS = {
    1: ["CAU TRUC COT", "COT LOI CUA CON"], 2: ["DIEU HANH TU DUY", "GIAI MA CACH NAO VAN HANH"],
    3: ["HE CAM XUC", "CAM XUC DUGC HINH", "CAM XTIC DUGC HINH"], 4: ["HE THAN KINH"],
    5: ["RA QUYET DINH", "RA QUYET BINH"], 6: ["UU TIEN & PHAN BO", "PHAN BO NGUON LUC"],
    7: ["GIAO TIEP CA NHAN"], 8: ["THUYET PHUC &", "GAY ANH HUONG"],
    9: ["DAM PHAN", "THOA THUAN"], 10: ["RANH GIO", "TU QUYET"],
    11: ["LAM VIEC & HIEU SUAT"], 12: ["NANG LUC THUC THI"],
    13: ["QUAN TRI MUC TIEU"], 14: ["HOP TAC &", "LAM VIEC NHOM"],
    15: ["GIAI QUYET XUNG DOT"], 16: ["LANH DAO BAN THAN"],
    17: ["LANH DAO CON NGUOI"], 18: ["QUYEN LUC, TRACH", "TRACH NHIEM & VI THE"],
    19: ["SU NGHIEP &", "CON DUONG NGHE NGHIEP"], 20: ["NANG LUC NGHE NGHIEP"],
    21: ["DANH TIENG &", "THUONG HIEU CA NHAN"],
    22: ["MANG LUOI QUAN HE", "MANG LUGI QUAN HE", "VON XA HOI"],
    23: ["TIEN BAC &", "HANH VI TAI CHINH"], 24: ["TAO THU NHAP", "GIA TRI KINH TE"],
    25: ["KINH DOANH &", "HOAT DONG KINH DOANH"],
    26: ["KHACH HANG &", "GIA TRI PHUC VU"],
    27: ["SANG TAO &", "KIEN TAO CAI MOI"], 28: ["VAN DE PHUC TAP"],
    29: ["QUAN TRI THAY DOI", "THICH NGHI &"], 30: ["RUI RO &", "KHUNG HOANG"],
    31: ["THANH TUU &", "THANH CONG"],
    33: ["HANH PHUC &", "CHAT LUONG SONG", "CHAT LUGNG SONG"],
    34: ["TU DO, DU DAY", "QUYEN LUA CHON"],
}

MANUAL_GROUPS = {
    "1-2.jpeg": 2, "3.jpeg": 1, "4-6.jpeg": 3, "10-2.jpeg": 3,
    "10-3.jpeg": 4, "12-6.jpeg": 3, "15-3.jpeg": 3, "15-6.jpeg": 3,
    "19-3.jpeg": 3, "23-2.jpeg": 3, "23-7.jpeg": 4,
    "24-3.jpeg": 3, "24-5.jpeg": 2, "25-5.jpeg": 3,
}
MANUAL_MAPS = {"1-2.jpeg": 22, "2.jpeg": 25}


def sort_key(name):
    parts = Path(name).stem.split("-")
    return int(parts[0]), int(parts[1]) if len(parts) > 1 else 1


def classify(row):
    name = row["file"]
    if name in MANUAL_GROUPS:
        return MANUAL_GROUPS[name]
    text = " ".join((row["text"] + " " + row.get("second_text", "")).upper().split())
    matches = [group for group, words in TOPICS.items() if any(word in text for word in words)]
    if len(matches) == 1:
        return matches[0]
    numbers = [int(value) for value in row["groups"] + row.get("group_second", [])]
    numbers = [value for value in numbers if value in TOPICS]
    return numbers[0] if numbers else None


def fill_unknown(rows):
    by_map = defaultdict(list)
    for row in rows:
        by_map[row["map"]].append(row)
    for sequence in by_map.values():
        for index, row in enumerate(sequence):
            if row["group"] is not None:
                continue
            before = next((item["group"] for item in reversed(sequence[:index]) if item["group"]), None)
            after = next((item["group"] for item in sequence[index + 1:] if item["group"]), None)
            if before == 31 and after == 34:
                row["group"] = 33  # No image in the source set is labelled group 32.
            elif before and after and before < after:
                row["group"] = before + 1
            elif before == 33 and after is None:
                row["group"] = 34
    return rows


def build_plan():
    source = json.loads(AUDIT.read_text(encoding="utf-8"))
    rows = []
    for item in source:
        name = item["file"]
        rows.append({"old": name, "group": classify(item),
                     "map": MANUAL_MAPS.get(name, sort_key(name)[0])})
    rows = fill_unknown(rows)
    unresolved = [row["old"] for row in rows if row["group"] is None]
    if unresolved:
        raise ValueError(f"Unresolved group labels: {unresolved}")
    versions = defaultdict(int)
    for row in rows:
        key = (row["group"], row["map"])
        versions[key] += 1
        base = f"nhom-{row['group']:02d}-map-{row['map']:02d}"
        row["new"] = f"{base}{'-' + str(versions[key]) if versions[key] > 1 else ''}.jpeg"
    assert len(rows) == 534 and len({row["old"] for row in rows}) == 534
    assert len({row["new"] for row in rows}) == 534
    return rows


def main():
    rows = build_plan()
    grouped = defaultdict(lambda: defaultdict(list))
    for row in rows:
        grouped[row["group"]][row["map"]].append(row["new"])
    print(f"{len(rows)} ảnh, {sum(map(len, grouped.values()))} MAP, {len(grouped)} nhóm")
    for group in sorted(grouped):
        numbers = sorted(grouped[group])
        print(f"Nhóm {group:02d}: {len(numbers)} MAP, {sum(map(len, grouped[group].values()))} ảnh; MAP {numbers}")
    if "--rename" not in sys.argv:
        return
    originals = {path.name for path in FOLDER.glob("*.jpeg")}
    if originals != {row["old"] for row in rows}:
        raise ValueError("Source directory no longer matches audited images")
    occupied = [row["new"] for row in rows if (FOLDER / row["new"]).exists()]
    if occupied:
        raise ValueError(f"Target names already exist: {occupied[:5]}")
    for row in rows:
        (FOLDER / row["old"]).rename(FOLDER / row["new"])
    manifest = {
        "groups": [
            {"number": group, "title": GROUP_TITLES[group - 1],
             "maps": [{"number": number, "images": grouped[group][number]}
                      for number in sorted(grouped[group])]}
            for group in sorted(grouped)
        ]
    }
    OUTPUT.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Renamed all posters and wrote {OUTPUT}")


if __name__ == "__main__":
    main()
