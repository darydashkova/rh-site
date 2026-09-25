import fs from 'node:fs';
import {load} from 'cheerio';
const pages=JSON.parse(fs.readFileSync('app/data/servicePages.json','utf8'));
for(const slug of process.argv.slice(2)) {
 const $=load(fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'));
 for(const s of pages[slug].sections) {
  const r=$('#'+s.referenceId);
  console.log(s.referenceId, s.kind, s.layout, `${s.paddingTop}/${s.paddingBottom}`,r.attr('class'),r.attr('style'),s.copyWidth||'',s.title||'');
 }
}
