import fs from 'node:fs';
import {load} from 'cheerio';
for(const slug of process.argv.slice(2)){
const $=load(fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'));
const p=JSON.parse(fs.readFileSync('app/data/servicePages.json','utf8'))[slug];
const r=$('#allrecords > .r[data-record-type="396"]').first();
console.log('\nPAGE',slug);
console.log('HERO',r.find('.tn-elem[data-elem-type="text"]').toArray().map(e=>({id:$(e).attr('data-elem-id'),x:$(e).attr('data-field-left-value'),y:$(e).attr('data-field-top-value'),w:$(e).attr('data-field-width-value'),html:$(e).find('.tn-atom').html()})));
console.log('STYLES',r.find('style').text().split('}').filter(x=>!x.includes('@media')&&x.includes('font-size')).slice(0,25).join('}\n'));
console.log('SECTIONS',p.sections.map(s=>({id:s.referenceId,k:s.kind,l:s.layout,t:s.title,ey:s.eyebrow,pt:s.paddingTop,pb:s.paddingBottom,n:s.cards?.length,cols:s.columns})));
}
