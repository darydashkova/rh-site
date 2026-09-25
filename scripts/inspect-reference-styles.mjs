import fs from 'node:fs';import{load}from'cheerio';
for(const slug of process.argv.slice(2)){
const $=load(fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'));
const urls=$('link[rel="stylesheet"]').toArray().map(e=>$(e).attr('href')).filter(u=>u.includes('tilda-blocks-page')||u.startsWith('/_tilda_css/'));
const styles=[];
for(let i=0;i<urls.length;i+=6)styles.push(...await Promise.all(urls.slice(i,i+6).map(async u=>{const r=await fetch(new URL(u,'https://reputation.house'));if(!r.ok)throw Error(r.status);return r.text();})));
fs.writeFileSync(`scripts/reference/${slug}.css`,styles.join('\n'));console.log(slug,urls.length,'stylesheets');
}
