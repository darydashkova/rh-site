import fs from 'node:fs';
import {load} from 'cheerio';
const pages=JSON.parse(fs.readFileSync('app/data/servicePages.json'));
for(const slug of process.argv.slice(2)){
 const $=load(fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'));
 console.log('\n'+slug);
 for(const s of pages[slug].sections){
  const r=$('#'+s.referenceId),type=r.attr('data-record-type');
  console.log(JSON.stringify({id:s.referenceId,kind:s.kind,layout:s.layout,type,title:s.title,cards:s.cards?.length,width:s.cardWidth,bleed:s.bleed,sourceClass:r.find('.t1186__item,.t1196__item').first().attr('class'),sourceStyle:r.find('style').text().slice(0,1100)}));
 }
}
