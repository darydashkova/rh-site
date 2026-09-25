import fs from 'node:fs';
const urls=['https://static.tildacdn.net/css/tilda-grid-3.0.min.css','https://static.tildacdn.net/css/tilda-forms-1.0.min.css','https://ws.tildacdn.com/project2365390/custom.css'];
const css=await Promise.all(urls.map(async url=>{const r=await fetch(url);if(!r.ok)throw Error(r.status);return r.text();}));
fs.writeFileSync('scripts/reference/situation-foundation.css',css.join('\n'));
