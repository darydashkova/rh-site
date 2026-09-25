import fs from 'node:fs';
import {load} from 'cheerio';
const pages=JSON.parse(fs.readFileSync('app/data/servicePages.json','utf8'));
for(const slug of process.argv.slice(2)) {
 const html=fs.readFileSync(`scripts/reference/${slug}.html`,'utf8');const $=load(html);
 console.log(slug);
 for(const s of pages[slug].sections) {
  const r=$('#'+s.referenceId);
  console.log(JSON.stringify({id:s.referenceId,k:s.kind,t:s.title,e:s.eyebrow,b:s.body,a:s.aside,c:s.cards,heads:s.headings,rows:s.rows,call:s.callout}));
 }
 const r=$('#allrecords > .r[data-record-type="396"]').first();
 console.log('HERO IMAGES',r.find('[data-original]').toArray().map(e=>$(e).attr('data-original')));
}
