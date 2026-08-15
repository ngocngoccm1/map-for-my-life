from pathlib import Path
import re, shutil
from PIL import Image
from rapidocr_onnxruntime import RapidOCR

root = Path('map-need-rename')
out = root / 'chap2-renamed'
out.mkdir(exist_ok=True)
for f in out.glob('*'):
    f.unlink()
ocr = RapidOCR()
logs=[]
used={}
for src in sorted(root.glob('*.jpeg')):
    im=Image.open(src).convert('RGB')
    w,h=im.size
    # MAP label is consistently in the lower-left content panel.
    # Exclude the upper “Loại phân tích: 1 MAP” field; the real MAP number
    # is in the lower-left title block.
    crop=im.crop((0, int(h*0.66), int(w*0.78), int(h*0.94))).resize((int(w*2.0), int(h*2.0)))
    result,_=ocr(crop)
    text=' '.join(x[1] for x in (result or []))
    hits=re.findall(r'MAP\s*[:.]?\s*(\d{1,3})', text, re.I)
    if not hits:
        hits=re.findall(r'(?:^|\s)(\d{1,3})\s*MAP\b', text, re.I)
    number=int(hits[-1]) if hits else None
    if number is None or number < 1 or number > 500:
        logs.append(f'UNREAD\t{src.name}\t{text}')
        continue
    used[number]=used.get(number,0)+1
    suffix='' if used[number]==1 else f'-{used[number]}'
    dest=out/f'{number}{suffix}.jpeg'
    shutil.copy2(src,dest)
    logs.append(f'{"OK" if used[number]==1 else "DUPLICATE"}\t{src.name}\t{dest.name}\t{text}')
(out/'rename_log.txt').write_text('\n'.join(logs),encoding='utf-8')
print(f'processed={len(logs)} unread={sum(1 for x in logs if x.startswith("UNREAD"))} unique={len(used)} duplicates={sum(v-1 for v in used.values())}')
print('numbers='+','.join(map(str,sorted(used))))
