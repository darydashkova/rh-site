import fs from 'node:fs';
import {load} from 'cheerio';
const slug=process.argv[2]||'reputation-services-for-companies';
const $=load(fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'));
const r=$('#allrecords > .r').filter((_,e)=>$(e).attr('data-record-type')==='396').first();
if(process.argv[3])console.log($('#'+process.argv[3]).clone().find('script,style').remove().end().html()?.slice(0,22000));
else console.log($('a[name]').toArray().map(e=>({html:$.html(e),parent:$(e).parent().attr('id'),record:$(e).closest('.r').attr('id'),next:$(e).next().attr('id')})));
