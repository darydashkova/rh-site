import fs from 'node:fs';
import {load} from 'cheerio';
const slugs=process.argv.slice(2);
const pages=JSON.parse(fs.readFileSync('app/data/servicePages.json','utf8'));
for(const slug of slugs){
 console.log('\nPAGE',slug,JSON.stringify(pages[slug]?.hero));
 const $=load(fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'));
 for(const s of pages[slug]?.sections||[]){
 console.log(JSON.stringify(s));
 }
 console.log('HERO ATOMS',JSON.stringify($('#allrecords > .r[data-record-type="396"]').first().find('.tn-elem[data-elem-type="text"]').toArray().map(e=>({text:$(e).text().trim(),x:$(e).attr('data-field-left-value'),y:$(e).attr('data-field-top-value')}))));
}
