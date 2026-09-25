import fs from 'node:fs';
import {load} from 'cheerio';
const [slug,...ids]=process.argv.slice(2);
const $=load(fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'));
for(const id of ids){const r=$('#'+id); if(process.env.RECORD_HTML)console.log(r.html()); else {
console.log(id, r.attr('style'));
console.log(r.find('style').text().slice(0,900));
console.log(r.find('.tn-elem[data-elem-type="text"]').toArray().map(e=>({text:$(e).text().trim(),x:$(e).attr('data-field-left-value'),y:$(e).attr('data-field-top-value'),w:$(e).attr('data-field-width-value')})));
console.log(r.find('.tn-group').toArray().map(e=>({id:$(e).attr('data-group-id'),w:$(e).attr('data-group-width-value'),padding:$(e).attr('data-group-padding'),text:$(e).text().trim().slice(0,180)})));
console.log(r.find('[data-original]').toArray().map(e=>({tag:e.name,src:$(e).attr('data-original'),style:$(e).attr('style'),cl:$(e).attr('class')})));
console.log(r.find('.t-container').first().html()?.slice(0,15000));
}}
