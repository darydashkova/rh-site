import fs from 'node:fs';
const path='app/data/servicePages.json',pages=JSON.parse(fs.readFileSync(path,'utf8'));
// The seven new pages use their own authored responsive records, not the service template.
for(const slug of ['cis-market-entry-strategy','china-market-entry-strategy','ai-digital-reputation-protection','reputation-audit'])delete pages[slug];
fs.writeFileSync(path,JSON.stringify(pages,null,2)+'\n');
