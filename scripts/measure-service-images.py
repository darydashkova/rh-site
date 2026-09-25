import json
from pathlib import Path
from PIL import Image
data=json.loads(Path('app/data/servicePages.json').read_text(encoding='utf-8'))
for page in data.values():
    for section in page['sections']:
        for image in section.get('images', []):
            with Image.open(Path('public') / image['src'].lstrip('/')) as source:
                image['width'], image['height'] = source.size
Path('app/data/servicePages.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
