import fs from 'node:fs';import{load}from'cheerio';const $=load(fs.readFileSync('scripts/reference/online-presence-management.html','utf8'));
$('#allrecords > .r').each((i,e)=>{const b=$(e).clone();b.find('style,script').remove();console.log($(e).attr('id'),$(e).attr('data-record-type'),b.text().trim().replace(/\s+/g,' ').slice(0,500));});
