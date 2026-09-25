import fs from 'node:fs';
import {load} from 'cheerio';
const $=load(fs.readFileSync('scripts/reference/solutions.html','utf8'));
for(const r of JSON.parse(fs.readFileSync('scripts/reference/solutions.json'))){
 if(r.atoms.some(a=>/Detection Solutions|They Google|Or start/.test(a.text))){
 console.log(r.id, $('#'+r.id).attr('style'));
 console.log(r.atoms.slice(0,12));
 console.log($('#'+r.id).find('.tn-group').toArray().slice(0,5).map(e=>({w:$(e).attr('data-group-width-value'),h:$(e).attr('data-group-height-value'),padding:$(e).attr('data-group-padding')})));
 }
}
