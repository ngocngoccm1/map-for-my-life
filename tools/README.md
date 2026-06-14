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
