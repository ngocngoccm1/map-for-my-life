#!/usr/bin/env python3
"""Import the 35 human-decoding groups from a WhatsApp text export or ZIP.

Only catalogue content is imported; chat messages are never executed or copied
into the site. Validate the complete catalogue before writing any files.
"""

import argparse
import json
import re
import zipfile
from pathlib import Path


MESSAGE = re.compile(r"(?m)^(\d{1,2}:\d{2}, \d{1,2}/\d{1,2}/\d{2}) - (?:([^:\n]+): )?")
GROUP = re.compile(r"(?m)^[^\w\n]*NHÓM\s+(\d+)\s*[—–:-]\s*(.+)$")
MAP = re.compile(r"(?m)^[^\w\n]*MAP\s+(\d+)\s*[—–:-]\s*(.+)$")
BLOCK = re.compile(r"^[^\w]*KHỐI\s+(\d+)\s*[—–:-]\s*(.+)$")
CHAPTER = re.compile(r"^[^\w]*CHƯƠNG\s+(\d+)\s*[—–:-]\s*(.+)$")
INDICES = re.compile(r"^◇\s*Chỉ số chính:\s*(.*?)\s*◇\s*Chỉ số phụ:\s*(.+)$")
START = "BẢN ĐỒ GIẢI MÃ CON NGƯỜI TOÀN DIỆN - CHAP 1"


def read_export(path):
    if path.suffix.lower() == ".zip":
        with zipfile.ZipFile(path) as archive:
            texts = [name for name in archive.namelist() if name.lower().endswith(".txt")]
            if len(texts) != 1:
                raise ValueError("Expected exactly one WhatsApp text export")
            return archive.read(texts[0]).decode("utf-8-sig")
    return path.read_text(encoding="utf-8-sig")


def parse_preview(number, title, content, slug):
    preview = {"id": f"human-decode-{slug}", "title": f"MAP {number} — {title}", "coreGoal": [], "blocks": []}
    in_goal = False
    block = chapter = None
    for raw in content.splitlines():
        line = raw.strip()
        if not line or re.search(r"NỘI DUNG PHÂN TÍCH:? 40 CHƯƠNG", line) or re.fullmatch(r"[━─—–✅\ufe0f\s]+", line):
            continue
        if "MỤC TIÊU CỐT LÕI CỦA MAP" in line:
            in_goal = True
            continue
        match = BLOCK.fullmatch(line)
        if match:
            in_goal = False
            assert int(match[1]) == len(preview["blocks"]) + 1, (slug, line)
            block = {"title": f"Khối {match[1]} — {match[2]}", "chapters": []}
            preview["blocks"].append(block)
            chapter = None
            continue
        match = CHAPTER.fullmatch(line)
        if match:
            assert block is not None, (slug, line)
            chapter = {"number": int(match[1]), "title": match[2], "mainIndex": "", "subIndexes": []}
            block["chapters"].append(chapter)
            continue
        match = INDICES.fullmatch(line)
        if match:
            assert chapter is not None and not chapter["mainIndex"], (slug, line)
            chapter["mainIndex"] = match[1]
            chapter["subIndexes"] = [value.strip() for value in re.split(r"\s*\|\|\s*", match[2])]
            continue
        if in_goal and line.startswith("◇"):
            preview["coreGoal"].append(line.lstrip("◇ "))
            continue
        raise ValueError(f"Unrecognized content in {slug}: {line[:120]}")

    chapters = [chapter for block in preview["blocks"] for chapter in block["chapters"]]
    assert preview["coreGoal"] and len(preview["blocks"]) == 10, slug
    assert all(len(block["chapters"]) == 4 for block in preview["blocks"]), slug
    assert [chapter["number"] for chapter in chapters] == list(range(1, 41)), slug
    assert all(chapter["title"] for chapter in chapters), slug
    return preview


def parse_export(text):
    messages = list(MESSAGE.finditer(text))
    groups, previews = {}, {}
    sender = None
    current_group = None
    duplicates = 0
    for index, message in enumerate(messages):
        body = text[message.end():messages[index + 1].start() if index + 1 < len(messages) else len(text)]
        if START in body:
            sender = message[2]
        if sender is None or message[2] != sender:
            continue
        # The export has one MAP header glued to the preceding index line.
        body = body.replace("🔒 MAP", "\n🔒 MAP")
        group_match = GROUP.search(body)
        if group_match:
            current_group = int(group_match[1])
            title = group_match[2].strip()
            title = re.sub(r"^BẢN ĐỒ\s+", "", title)
            groups[current_group] = {"number": current_group, "title": title, "count": 0}
        headers = list(MAP.finditer(body))
        if not headers:
            continue
        assert current_group in groups, "MAP found before a group heading"
        for map_index, header in enumerate(headers):
            number = int(header[1])
            slug = f"g{current_group:02d}-m{number:02d}"
            content = body[header.end():headers[map_index + 1].start() if map_index + 1 < len(headers) else len(body)]
            preview = parse_preview(number, header[2].strip(), content, slug)
            if slug in previews:
                assert previews[slug] == preview, f"Conflicting duplicate: {slug}"
                duplicates += 1
            previews[slug] = preview

    assert sorted(groups) == list(range(1, 36)), "Expected all 35 groups"
    maps = []
    for group in groups.values():
        group["count"] = 25 if group["number"] <= 4 else 13 if group["number"] <= 18 else 12
        for number in range(1, group["count"] + 1):
            slug = f"g{group['number']:02d}-m{number:02d}"
            preview = previews[slug]
            maps.append({
                "id": preview["id"], "categoryId": "human-decode", "number": number,
                "slug": slug, "groupNumber": group["number"], "groupTitle": group["title"],
                "title": preview["title"].split(" — ", 1)[1],
                "subtitle": preview["coreGoal"][0], "hasPreview": True,
                "previewModule": f"category-human-decode-map-{slug}",
                "tags": ["giải mã", group["title"]],
            })
    assert len(maps) == len(previews) == 486, "Unexpected MAP count"
    return list(groups.values()), maps, previews, duplicates


def write_module(path, name, value):
    path.write_text(f"export const {name} = {json.dumps(value, ensure_ascii=False, indent=2)};\n", encoding="utf-8")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--check", action="store_true", help="Validate without writing files")
    args = parser.parse_args()
    groups, maps, previews, duplicates = parse_export(read_export(args.source))
    incomplete = [
        {"map": slug, "chapter": chapter["number"], "title": chapter["title"]}
        for slug, preview in previews.items()
        for block in preview["blocks"] for chapter in block["chapters"]
        if not chapter["mainIndex"] or not chapter["subIndexes"]
    ]
    if not args.check:
        preview_dir = args.root / "data/previews"
        preview_dir.mkdir(parents=True, exist_ok=True)
        for item in maps:
            write_module(preview_dir / f"{item['previewModule']}.js", "preview", previews[item["slug"]])
        module = args.root / "data/maps/category-human-decode.js"
        module.write_text(
            f"export const groups = {json.dumps(groups, ensure_ascii=False, indent=2)};\n\n"
            f"export const maps = {json.dumps(maps, ensure_ascii=False, indent=2)};\n", encoding="utf-8"
        )
    print(f"Validated {len(groups)} groups, {len(maps)} MAPs, 4,860 blocks, 19,440 chapters; skipped {duplicates} identical duplicate.")
    for item in incomplete:
        print(f"Source incomplete: {item['map']}, chapter {item['chapter']}: {item['title']}")


if __name__ == "__main__":
    main()
