from PIL import Image
from pathlib import Path
import sys
slug=sys.argv[1]
im=Image.open(Path('C:/Users/Nikita/Downloads')/f'reputation.house-{slug}.png')
y=int(sys.argv[2]) if len(sys.argv)>2 else 0
h=int(sys.argv[3]) if len(sys.argv)>3 else 1000
dest=Path('scripts/reference')/f'{slug}-crop.png'
im.crop((0,y,im.width,min(im.height,y+h))).save(dest)
print(dest.resolve())
