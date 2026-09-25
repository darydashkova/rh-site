import fs from 'node:fs';import{load}from'cheerio';import crypto from'node:crypto';import path from'node:path';
const pages=JSON.parse(fs.readFileSync('app/data/servicePages.json','utf8'));const p=pages['online-presence-management'];const ref=pages['personal-reputation-monitoring'];
const $=load(fs.readFileSync('scripts/reference/online-presence-management.html','utf8'));
const assets=JSON.parse(fs.readFileSync('scripts/reference/service-assets.json','utf8'));
function asset(url){if(!url)return;const name=`service-${crypto.createHash('sha1').update(url).digest('hex').slice(0,10)}${path.extname(new URL(url).pathname)||'.png'}`;assets[name]=url;return '/images/'+name;}
const clean=e=>$(e).text().trim().replace(/\s+/g,' ');
p.personalService=true;p.newService=true;p.theme='control';p.hero.split=true;p.hero.eyebrow='RH Personal · Personal Digital Profile Management';
const hero=$('#rec3001645803');p.hero.pattern=asset(hero.find('[data-original]').toArray().map(e=>$(e).attr('data-original')).find(u=>/pattern|spiral|back/i.test(u)));
const styleKeys=['layout','paddingTop','paddingBottom','background','tone','coverImage','coverHeight','coverCopyWidth','patternImage','headingSize','headingWeight','cardWidth','formButtonWidth','formButtonLabel'];
function appearance(s,source){if(source)for(const k of styleKeys)if(source[k]!==undefined)s[k]=source[k];}
for(const s of p.sections){
 const block=$('#'+s.referenceId),type=block.attr('data-record-type');
 if(type==='1152'){
  s.eyebrow=clean(block.find('.t-section__title'));s.title=clean(block.find('.t-section__descr'));s.body=block.find('[field=text]').text().trim()?[block.find('[field=text]').html()]:[];s.aside=[];
  appearance(s,ref.sections.find(s=>s.layout==='editorial-heading'));s.layout='editorial-heading';
 }
 if(s.cards?.length===4)s.columns=4;
 if(s.referenceId==='rec3001646403'){const a=block.find('.tn-elem[data-elem-type=text] > .tn-atom').toArray();s.layout='split-prose';s.title='';s.eyebrow='';s.body=[$(a[0]).html()];s.aside=a.slice(1).map(e=>$(e).html());}
 if(type==='179'){s.kind='cta';s.title=clean(block.find('[field=descr]'));s.body=[block.find('[field=text]').html()].filter(Boolean);}
 if(type==='179'||type==='213')appearance(s,ref.sections.find(x=>x.layout==='banner'&&x.title===s.title)||ref.sections.find(x=>x.layout==='banner'));
 if(type==='716')appearance(s,ref.sections.find(x=>x.kind==='form'));
 if(s.kind==='cases'){appearance(s,ref.sections.find(x=>x.kind==='cases'));s.columns=2;}
 if(s.referenceId==='rec3001647203'){appearance(s,ref.sections.find(x=>x.kind==='process'));s.kind='process';for(const c of s.cards){const m=c.title.match(/^(\d{2})(.*)/);if(m){c.number=m[1];c.title=m[2];}}}
 if(s.referenceId==='rec3001648203')appearance(s,ref.sections.find(x=>x.layout==='limits'));
 if(s.referenceId==='rec3001648503'){appearance(s,ref.sections.find(x=>x.layout==='investment'));s.columns=2;}
 if(s.referenceId==='rec3001648803')appearance(s,ref.sections.find(x=>x.layout==='numbers'));
 if(s.referenceId==='rec3104279803'){s.kind='related';s.tone='outlined';s.columns=4;s.title='You Also Might Be Interested In';for(const c of s.cards){c.eyebrow=c.title;c.title=load(c.parts.shift()||'').text();c.parts=c.parts.filter(v=>load(v).text()!=='Learn more');}}
}
for(const[id,after]of[['rec3001646203','rec3001646103'],['rec3001647603','rec3001647503']]){
 const imgs=$('#'+id).find('img[data-original]').toArray();
 const section={referenceId:id,kind:'image-pair',images:imgs.map((e,i)=>({src:asset($(e).attr('data-original')),alt:i?'After reputation management':'Before reputation management'})),background:'#fff',paddingTop:30,paddingBottom:60};
 p.sections=p.sections.filter(s=>s.referenceId!==id);p.sections.splice(p.sections.findIndex(s=>s.referenceId===after)+1,0,section);
}
fs.writeFileSync('app/data/servicePages.json',JSON.stringify(pages,null,2)+'\n');fs.writeFileSync('scripts/reference/service-assets.json',JSON.stringify(assets,null,2)+'\n');
console.log('Updated presence layouts',p.sections.length);
