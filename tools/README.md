# GEIN MAP parser tools

Use `parse_map_text.py` to convert pasted MAP text files into preview modules.

Example:

```powershell
python tools\parse_map_text.py input.txt `
  --category companion-growth `
  --id-prefix companion-growth `
  --module-prefix category-companion-growth-map `
  --out-dir data\previews
```

Common category arguments:

```text
companion-growth:
  --id-prefix companion-growth
  --module-prefix category-companion-growth-map

peaceful-home:
  --id-prefix peaceful-home
  --module-prefix category-peaceful-home-map

family-child:
  --id-prefix family-child
  --module-prefix category-family-child-map
```

The script only writes preview files. Update map list entries separately when needed.

## Import the human-decoding WhatsApp catalogue

`import_whatsapp_human_decode.py` reads a WhatsApp `.txt` export or a ZIP
containing one export. It starts at the “BẢN ĐỒ GIẢI MÃ CON NGƯỜI TOÀN DIỆN -
CHAP 1” message and imports catalogue messages from that sender.

```bash
python3 tools/import_whatsapp_human_decode.py /path/to/chat.zip --check
python3 tools/import_whatsapp_human_decode.py /path/to/chat.zip
```

The importer validates all 35 groups and 486 MAPs before writing the catalogue
to `data/maps/category-human-decode.js` and individual previews to
`data/previews/category-human-decode-map-gXX-mXX.js`. Group and MAP numbers
form the identity because MAP numbering restarts in each group. Images remain
in the existing `chap2-assets.json` manifest and are matched by both numbers.

The October 10–12, 2026 export contains one identical duplicate (group 12,
MAP 8) and a MAP header joined to the previous line (group 12, MAP 1).
The importer deduplicates the former and splits the latter.

Two chapter endings are incomplete in the supplied source:

- Group 8, MAP 13, chapter 40: “Bài học trưởng thành cố”.
- Group 23, MAP 2, chapter 40: “Bạn thiết lập lộ trình nhận diện nguyên tắc
  hiện tại, kiểm chứng niềm tin, xác định mục tiêu, thu thập”.

Both retain the supplied title fragment with empty indices; the website shows
its existing “Đang cập nhật” fallback. Replace these fragments only when the
missing source text is supplied. No missing content is generated.
