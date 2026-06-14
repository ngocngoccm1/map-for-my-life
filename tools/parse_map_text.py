#!/usr/bin/env python3
"""
Parse nội dung MAP tiếng Việt từ file .txt và xuất các file JavaScript preview.

Bản này ưu tiên "lọc" input bẩn:
- chuẩn hóa dấu tiếng Việt bị lỗi OCR
- bỏ ký tự trang trí
- nhận nhiều biến thể header MAP / Khối / Chương / Chỉ số
- gom nhiều dòng nội dung thành đúng field hiện có
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable, Sequence

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
    sys.stderr.reconfigure(encoding="utf-8")


MAP_HEADER_RE = re.compile(
    r"^\s*[\(\[\{\"“'‹«>]*\s*MAP\s+(\d+)\s*(?:[-—–:]\s*(.*?))?\s*[\)\]\}\"”'›»]*\s*$",
    re.IGNORECASE,
)
BLOCK_HEADER_RE = re.compile(
    r"^\s*(?:\d+\s*)?(?:KHỐI|KHOI)\s*(\d+)\s*[,.:]?\s*(?:(?:[-—–:])\s*(.*?))?\s*$",
    re.IGNORECASE,
)
CHAPTER_HEADER_RE = re.compile(
    r"^\s*(?:\d+\s*)?(?:CHƯƠNG|CHUONG)\s*(\d+)\s*[,.:]?\s*(?:(?:[-—–:])\s*(.*?))?\s*$",
    re.IGNORECASE,
)
CORE_GOAL_RE = re.compile(
    r"^\s*(?:\d+\s*['\"“”]?\s*)?(?:MỤC\s*TIÊU\s*CỐT\s*LÕI|MUC\s*TIEU\s*COT\s*LOI)\s*[:：]?\s*(.*?)\s*$",
    re.IGNORECASE,
)
MAIN_INDEX_RE = re.compile(
    r"^\s*(?:\d+\s*)?(?:CHỈ\s*SỐ\s*CHÍNH|CHI\s*SO\s*CHINH)\s*[:：]\s*(.*?)\s*$",
    re.IGNORECASE,
)
SUB_INDEX_RE = re.compile(
    r"^\s*(?:\d+\s*)?(?:CHỈ\s*SỐ\s*PHỤ|CHI\s*SO\s*PHU)\s*[:：]\s*(.*?)\s*$",
    re.IGNORECASE,
)
DECORATION_RE = re.compile(r"^[\s\-_=—–━┄┈┉]+$")
OCR_NOISE_RE = re.compile(r"^[\s\W_]*[©®�]+[\s\W_]*$")
PAGE_NOISE_RE = re.compile(r"^\s*(?:PAGE|TRANG)\s*\d+\s*$", re.IGNORECASE)
MAP_ANYWHERE_RE = re.compile(r"\bMAP\s*(\d+)\b", re.IGNORECASE)
MAP_HEADER_ANYWHERE_RE = re.compile(
    r"\bMAP\s*(\d+)\s*[-—–:]\s*([A-ZÀ-Ỹ0-9][A-ZÀ-Ỹ0-9\s“”\"'().,?!/&+\-]{5,})",
    re.IGNORECASE,
)


class ParseMapError(Exception):
    """Lỗi cấu trúc input khiến parser không thể tiếp tục."""


@dataclass(slots=True)
class SourceLine:
    number: int
    text: str


@dataclass(slots=True)
class Chapter:
    number: int
    title: str
    source_line: int
    main_index_lines: list[str] = field(default_factory=list)
    sub_index_lines: list[str] = field(default_factory=list)

    @property
    def main_index(self) -> str:
        return " ".join(part.strip() for part in self.main_index_lines if part.strip()).strip()

    @property
    def sub_indexes(self) -> list[str]:
        raw_value = " ".join(part.strip() for part in self.sub_index_lines if part.strip()).strip()
        if not raw_value:
            return []
        parts = re.split(r"\s*\|\|\s*|\s*\|\s*", raw_value)
        return [item.strip() for item in parts if item.strip()]


@dataclass(slots=True)
class Block:
    number: int | None
    title: str
    source_line: int
    chapters: list[Chapter] = field(default_factory=list)


@dataclass(slots=True)
class ParsedMap:
    number: int
    title: str
    source_line: int
    core_goal: list[str] = field(default_factory=list)
    blocks: list[Block] = field(default_factory=list)


@dataclass(slots=True)
class MapSection:
    number: int
    title_text: str
    source_line: int
    lines: list[SourceLine]


def _strip_bom_and_control(text: str) -> str:
    text = text.replace("\ufeff", "")
    return "".join(ch for ch in text if ch == "\t" or ch == "\n" or ch == "\r" or ord(ch) >= 32)


def normalize_text(text: str) -> str:
    """
    Chuẩn hóa nhẹ để tăng khả năng bắt header.
    Không cố "sửa" nội dung MAP, chỉ làm sạch ký tự lỗi OCR/phá format.
    """
    text = _strip_bom_and_control(text).strip()
    if not text:
        return ""

    replacements = {
        "Â©": "",
        "©": "",
        "Â®": "",
        "®": "",
        "�": "",
        "“": '"',
        "”": '"',
        "„": '"',
        "’": "'",
        "‘": "'",
        "–": "-",
        "—": "-",
        "━": "-",
        "┄": "-",
        "┈": "-",
        "┉": "-",
        "｜": "|",
        "∣": "|",
        "：": ":",
        "．": ".",
        "…": "...",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)

    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"\s*-\s*", " - ", text)
    text = re.sub(r"\s*:\s*", ": ", text)
    text = re.sub(r"\s*\.\s*", ". ", text)
    text = re.sub(r"\s*\|\|\s*", " || ", text)
    text = re.sub(r"\s*\|\s*", " | ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def is_ignorable_line(text: str) -> bool:
    stripped = normalize_text(text)
    return (
        not stripped
        or bool(DECORATION_RE.fullmatch(stripped))
        or bool(OCR_NOISE_RE.fullmatch(stripped))
        or bool(PAGE_NOISE_RE.fullmatch(stripped))
    )


def canonical_map_title(number: int, title_text: str) -> str:
    title_text = title_text.strip()
    return f"MAP {number} — {title_text}" if title_text else f"MAP {number}"


def canonical_block_title(number: int, title_text: str) -> str:
    title_text = title_text.strip()
    return f"Khối {number} — {title_text}" if title_text else f"Khối {number}"


def canonical_chapter_title(number: int, title_text: str) -> str:
    title_text = title_text.strip()
    return f"Chương {number} — {title_text}" if title_text else f"Chương {number}"


def extract_map_number_anywhere(text: str) -> int | None:
    match = MAP_ANYWHERE_RE.search(text)
    return int(match.group(1)) if match else None


def extract_map_header_anywhere(text: str) -> tuple[int, str] | None:
    match = MAP_HEADER_ANYWHERE_RE.search(text)
    if not match:
        return None
    number = int(match.group(1))
    title = (match.group(2) or "").strip()
    return number, title


def split_map_sections(lines: Sequence[str]) -> list[MapSection]:
    sections: list[MapSection] = []
    current: MapSection | None = None
    preamble_lines: list[SourceLine] = []

    for line_number, raw_line in enumerate(lines, start=1):
        text = normalize_text(raw_line.rstrip("\r\n"))
        if not text:
            continue

        map_match = MAP_HEADER_RE.match(text)
        if map_match:
            map_number = int(map_match.group(1))
            map_title = (map_match.group(2) or "").strip()
            if current is not None and current.number == map_number:
                continue
            if current is not None:
                sections.append(current)
            current = MapSection(
                number=map_number,
                title_text=map_title,
                source_line=line_number,
                lines=[],
            )
            continue

        if "MAP" in text.upper():
            candidate = extract_map_header_anywhere(text)
            if candidate is not None:
                if current is not None and current.number == candidate[0]:
                    continue
                if current is not None:
                    sections.append(current)
                current = MapSection(
                    number=candidate[0],
                    title_text=candidate[1],
                    source_line=line_number,
                    lines=[],
                )
                continue

        source_line = SourceLine(number=line_number, text=text)
        if current is None:
            if not is_ignorable_line(text):
                preamble_lines.append(source_line)
        else:
            current.lines.append(source_line)

    if current is not None:
        sections.append(current)

    if not sections:
        raise ParseMapError(
            "Không tìm thấy tiêu đề hợp lệ dạng 'MAP <number> — <title>'."
        )

    return sections


def _push_core_goal_line(parsed: ParsedMap, text: str) -> None:
    cleaned = text.strip().rstrip(":-")
    if cleaned:
        parsed.core_goal.append(cleaned)


def parse_map_section(section: MapSection, warnings: list[str]) -> ParsedMap:
    parsed = ParsedMap(
        number=section.number,
        title=canonical_map_title(section.number, section.title_text),
        source_line=section.source_line,
    )

    if not section.title_text:
        warnings.append(f"MAP {section.number}, dòng {section.source_line}: thiếu title MAP.")

    current_block: Block | None = None
    current_chapter: Chapter | None = None
    collecting_core_goal = False
    active_field: str | None = None

    for source_line in section.lines:
        text = normalize_text(source_line.text)
        if is_ignorable_line(text):
            continue

        core_match = CORE_GOAL_RE.match(text)
        if core_match:
            collecting_core_goal = True
            active_field = None
            inline_value = core_match.group(1).strip()
            if inline_value:
                _push_core_goal_line(parsed, inline_value)
            continue

        block_match = BLOCK_HEADER_RE.match(text)
        if block_match:
            block_number = int(block_match.group(1))
            block_title_text = (block_match.group(2) or "").strip()
            current_block = Block(
                number=block_number,
                title=canonical_block_title(block_number, block_title_text),
                source_line=source_line.number,
            )
            parsed.blocks.append(current_block)
            current_chapter = None
            collecting_core_goal = False
            active_field = None
            continue

        chapter_match = CHAPTER_HEADER_RE.match(text)
        if chapter_match:
            chapter_number = int(chapter_match.group(1))
            chapter_title = canonical_chapter_title(chapter_number, (chapter_match.group(2) or "").strip())
            if current_block is None:
                current_block = Block(number=None, title="", source_line=source_line.number)
                parsed.blocks.append(current_block)
                warnings.append(
                    f"MAP {section.number}, dòng {source_line.number}: gặp Chương trước Khối; chương được đặt trong block không có title."
                )
            current_chapter = Chapter(
                number=chapter_number,
                title=chapter_title,
                source_line=source_line.number,
            )
            current_block.chapters.append(current_chapter)
            collecting_core_goal = False
            active_field = None
            if not (chapter_match.group(2) or "").strip():
                warnings.append(
                    f"MAP {section.number}, Chương {chapter_number}, dòng {source_line.number}: thiếu title chương."
                )
            continue

        main_match = MAIN_INDEX_RE.match(text)
        if main_match:
            if current_chapter is None:
                warnings.append(
                    f"MAP {section.number}, dòng {source_line.number}: 'Chỉ số chính' nằm ngoài Chương nên bị bỏ qua."
                )
                active_field = None
                continue
            value = main_match.group(1).strip()
            if current_chapter.main_index_lines:
                warnings.append(
                    f"MAP {section.number}, Chương {current_chapter.number}, dòng {source_line.number}: có nhiều mục 'Chỉ số chính'; parser giữ theo đúng thứ tự."
                )
            if value:
                current_chapter.main_index_lines.append(value)
            active_field = "main"
            collecting_core_goal = False
            continue

        sub_match = SUB_INDEX_RE.match(text)
        if sub_match:
            if current_chapter is None:
                warnings.append(
                    f"MAP {section.number}, dòng {source_line.number}: 'Chỉ số phụ' nằm ngoài Chương nên bị bỏ qua."
                )
                active_field = None
                continue
            value = sub_match.group(1).strip()
            if current_chapter.sub_index_lines:
                warnings.append(
                    f"MAP {section.number}, Chương {current_chapter.number}, dòng {source_line.number}: có nhiều mục 'Chỉ số phụ'; parser giữ theo đúng thứ tự."
                )
            if value:
                current_chapter.sub_index_lines.append(value)
            active_field = "sub"
            collecting_core_goal = False
            continue

        if collecting_core_goal and current_block is None:
            _push_core_goal_line(parsed, text)
            continue

        if current_chapter is not None and active_field == "main":
            current_chapter.main_index_lines.append(text)
            continue

        if current_chapter is not None and active_field == "sub":
            current_chapter.sub_index_lines.append(text)
            continue

        warnings.append(
            f"MAP {section.number}, dòng {source_line.number}: không nhận diện được nên bị bỏ qua: {text!r}"
        )

    for block in parsed.blocks:
        if not block.chapters:
            warnings.append(
                f"MAP {section.number}, dòng {block.source_line}: block {block.title!r} không có Chương."
            )
        for chapter in block.chapters:
            if not chapter.main_index:
                warnings.append(
                    f"MAP {section.number}, Chương {chapter.number}, dòng {chapter.source_line}: thiếu Chỉ số chính."
                )
            if not chapter.sub_indexes:
                warnings.append(
                    f"MAP {section.number}, Chương {chapter.number}, dòng {chapter.source_line}: thiếu Chỉ số phụ."
                )

    return parsed


def parsed_map_to_dict(parsed_map: ParsedMap, id_prefix: str) -> dict[str, object]:
    return {
        "id": f"{id_prefix}-{parsed_map.number}",
        "title": parsed_map.title,
        "coreGoal": parsed_map.core_goal,
        "blocks": [
            {
                "title": block.title,
                "chapters": [
                    {
                        "number": chapter.number,
                        "title": chapter.title,
                        "mainIndex": chapter.main_index,
                        "subIndexes": chapter.sub_indexes,
                    }
                    for chapter in block.chapters
                ],
            }
            for block in parsed_map.blocks
        ],
    }


def render_javascript_preview(data: dict[str, object]) -> str:
    json_body = json.dumps(data, ensure_ascii=False, indent=2)
    return f"export const preview = {json_body};\n"


def validate_slug(value: str, option_name: str) -> str:
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", value):
        raise ParseMapError(
            f"{option_name} không hợp lệ: {value!r}. Chỉ dùng chữ thường, số và dấu gạch ngang."
        )
    return value


def write_preview_files(
    parsed_maps: Iterable[ParsedMap],
    *,
    id_prefix: str,
    module_prefix: str,
    out_dir: Path,
) -> list[Path]:
    out_dir.mkdir(parents=True, exist_ok=True)
    output_paths: list[Path] = []
    seen_numbers: set[int] = set()

    for parsed_map in parsed_maps:
        if parsed_map.number in seen_numbers:
            raise ParseMapError(f"MAP number bị trùng trong input: MAP {parsed_map.number}.")
        seen_numbers.add(parsed_map.number)

        output_path = out_dir / f"{module_prefix}-{parsed_map.number}.js"
        output_path.write_text(
            render_javascript_preview(parsed_map_to_dict(parsed_map, id_prefix)),
            encoding="utf-8",
            newline="\n",
        )
        output_paths.append(output_path)

    return output_paths


def build_argument_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Parse nội dung MAP tiếng Việt từ .txt và xuất file JavaScript preview."
    )
    parser.add_argument("input", type=Path, help="Đường dẫn file .txt chứa một hoặc nhiều MAP.")
    parser.add_argument("--category", required=True, help="Slug category của project.")
    parser.add_argument("--id-prefix", required=True, help="Prefix cho preview.id.")
    parser.add_argument("--module-prefix", required=True, help="Prefix tên file output.")
    parser.add_argument("--out-dir", type=Path, required=True, help="Thư mục chứa file JS được tạo.")
    return parser


def main(argv: Sequence[str] | None = None) -> int:
    parser = build_argument_parser()
    args = parser.parse_args(argv)

    try:
        validate_slug(args.category, "--category")
        validate_slug(args.id_prefix, "--id-prefix")
        validate_slug(args.module_prefix, "--module-prefix")

        input_path: Path = args.input
        if not input_path.exists():
            raise ParseMapError(f"Không tìm thấy file input: {input_path}")
        if not input_path.is_file():
            raise ParseMapError(f"Input không phải là file: {input_path}")
        if input_path.suffix.lower() != ".txt":
            raise ParseMapError(f"Input phải là file .txt, nhận được: {input_path.name}")

        raw_text = input_path.read_text(encoding="utf-8-sig")
        sections = split_map_sections(raw_text.splitlines())

        warnings: list[str] = []
        parsed_maps = [parse_map_section(section, warnings) for section in sections]

        output_paths = write_preview_files(
            parsed_maps,
            id_prefix=args.id_prefix,
            module_prefix=args.module_prefix,
            out_dir=args.out_dir,
        )

        print(f"Đã parse {len(parsed_maps)} MAP.")
        print(f"Đã tạo {len(output_paths)} file preview trong {args.out_dir}.")
        for output_path in output_paths:
            print(f"- {output_path}")

        if warnings:
            print(f"\nCảnh báo ({len(warnings)}):", file=sys.stderr)
            for warning in warnings[:120]:
                print(f"- {warning}", file=sys.stderr)
            if len(warnings) > 120:
                print(f"- ... và {len(warnings) - 120} cảnh báo nữa", file=sys.stderr)

        return 0
    except ParseMapError as exc:
        print(f"Lỗi: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
