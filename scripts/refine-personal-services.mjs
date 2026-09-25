import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import {load} from 'cheerio';
const pages=JSON.parse(fs.readFileSync('app/data/servicePages.json'));
const assets=JSON.parse(fs.readFileSync('scripts/reference/service-assets.json'));
const slugs=Object.keys(pages).filter(s=>s.startsWith('personal-')||s.startsWith('public-figure'));
function asset(url){if(!url?.startsWith('https://'))return;const name=`service-${crypto.createHash('sha1').update(url).digest('hex').slice(0,10)}${path.extname(new URL(url).pathname)||'.png'}`;assets[name]=url;return '/images/'+name;}
for(const slug of slugs){
 const p=pages[slug],$=load(fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'));
 const css=fs.readFileSync(`scripts/reference/${slug}.css`,'utf8')+$('style').text();
 const clean=e=>{const n=$(e).clone();n.find('style,script').remove();return n.text().replace(/\s+/g,' ').trim();};
 const atoms=r=>$(r).find('.tn-elem[data-elem-type="text"] > .tn-atom').toArray().filter(e=>clean(e));
 function rich(e){const n=$(e).clone();n.find('script,style').remove();n.find('*').each((_,x)=>{if(!['strong','b','em','i','br','p','ul','ol','li','a'].includes(x.name))$(x).replaceWith($(x).contents());else for(const k of Object.keys(x.attribs||{}))if(k!=='href')$(x).removeAttr(k);});return(n.html()||'').trim();}
 function rule(prefix){const i=css.indexOf(prefix);return i<0?'':css.slice(i+prefix.length,css.indexOf('}',i));}
 p.personalService=true;p.newService=true;p.theme=slug==='personal-reputation-crisis'?'defence':'control';
 const split=['public-figure-reputation-management','personal-reputation-monitoring'].includes(slug);
 p.hero.split=split;p.hero.compact=['personal-reputation-repair','personal-reputation-building'].includes(slug);
 if(!split){p.hero.coverage=[];p.hero.coverageIcons=[];p.hero.titleWidth=1160;p.hero.bodyWidth=900;}
 if(p.hero.compact)p.hero.titleWidth=967;
 const hero=$('#allrecords > .r[data-record-type="396"]').first();
 p.hero.pattern=asset(hero.find('.tn-molecule[data-original], .tn-elem[data-elem-type="shape"] [data-original]').first().attr('data-original'))||p.hero.pattern;
 if(split)p.hero.pattern=asset(hero.find('img[data-original]').toArray().map(e=>$(e).attr('data-original')).find(url=>/pattern|spiral|bg/i.test(url)))||p.hero.pattern;
 for(const s of p.sections){
  const r=$('#'+s.referenceId),a=atoms(r);
  const pair=a.filter(e=>[s.title,s.eyebrow].includes(clean(e))).sort((x,y)=>Number($(x).parent().attr('data-field-top-value'))-Number($(y).parent().attr('data-field-top-value')));
  if(pair.length===2&&s.kind!=='compare'){s.eyebrow=clean(pair[0]);s.title=clean(pair[1]);}
  if(s.cards?.length===5){s.columns=5;if(s===p.sections[0]){s.layout='coverage-five';s.title=s.title||s.eyebrow;s.eyebrow='';}}
  if(s.layout==='coverage-five'&&slug!=='personal-reputation-crisis'){s.eyebrow=s.eyebrow||s.title;s.title='';}
  if(s.cards?.length===4&&!['investment','crisis-risks'].includes(s.layout)&&s.kind!=='cases')s.columns=4;
  if(a.length===18&&s.cards?.length===3&&r.attr('data-record-type')==='396')Object.assign(s,{kind:'roles',layout:'capped-roles',title:'',eyebrow:'',body:[],aside:[],columns:3,tone:'outlined',cards:Array.from({length:3},(_,i)=>({title:clean(a[i*6]),parts:a.slice(i*6+1,i*6+6).map(rich)}))});
  if(s.kind==='intro'&&a.length===2&&Math.max(...a.map(e=>clean(e).length))>180&&!s.body?.length){Object.assign(s,{kind:'callout',layout:'pattern-callout',title:clean(a.find(e=>clean(e).length<180)),eyebrow:'',body:a.filter(e=>clean(e).length>=180).map(rich),aside:[]});}
  if(['rec2973249603','rec3008766703'].includes(s.referenceId))Object.assign(s,{kind:'intro',layout:'split',title:'',eyebrow:'',body:[rich(a[0])],aside:a.slice(1).map(rich),copyWidth:560});
  if(s.kind==='cta'&&!s.layout){s.layout='centered-cta';s.background='#262626';s.paddingTop=100;s.paddingBottom=100;}
  if(s.kind==='cases'){s.layout=split?'personal-wide-cases':'case-results';s.body=[];s.columns=split?2:3;s.cardWidth=split?570:372;s.bleed=split;}
  if(s.cards&&/don't promise/i.test(s.eyebrow||'')){s.layout='limits';s.tone='outlined';}
  if(s.referenceId==='rec2574129901'){s.layout='limits';s.title='The limits of this solution';s.eyebrow="What we don't promise";delete s.callout;}
  if(['rec2574128101','rec2528214101'].includes(s.referenceId))s.layout='capped-signs';
  if(s.cards?.some(c=>/^RH Personal/.test(c.title))){
   s.kind='related';s.tone='outlined';
   if(a.length===s.cards.length*3)s.cards=Array.from({length:s.cards.length},(_,i)=>({eyebrow:clean(a[i*3]),title:clean(a[i*3+1]),parts:[rich(a[i*3+2])]}));
   else for(const c of s.cards){const parts=c.title.split(/\n+/).map(x=>x.trim()).filter(Boolean);if(parts.length>1){c.eyebrow=parts.shift();c.title=parts.join(' ');}}
  }
  for(const c of s.cards||[]){
   const el=a.find(e=>clean(e)===c.title);
   const g=$(el).parents('.tn-group').toArray().find(g=>{const w=+$(g).attr('data-group-width-value');return w>=180&&w<=600&&parseFloat($(g).attr('data-group-padding'))>=12;});
   const gid=$(g).attr('data-group-id'),st=rule(`#${s.referenceId} .tn-group[data-group-id="${gid}"] #molecule-${gid}{`);
   c.background=st.match(/(?:--t396-bgcolor-color|background-color):(#[a-f\d]+)/i)?.[1]||c.background;
   if(['#66403f','#606c59','#5d6c57','#262626'].includes(c.background?.toLowerCase()))c.color='#f4f4f4';
   if(s.layout==='capped-roles'){c.background='#fff';c.color='#464646';}
   const icon=$(g).find('img[data-original]').first();if(icon.length)c.icon=asset(icon.attr('data-original'));
   if(s.kind==='related'){
    const button=r.find('.tn-elem[data-elem-type="button"] a, .t-card__btn').toArray()[s.cards.indexOf(c)];
    if(button){const col=$(button).closest('.t-card__col');const href=$(button).attr('href')||$(button).closest('a[href]').attr('href')||col.find('a[href]').first().attr('href');if(href)c.link={label:clean(button)||'Learn more',href};}
   }
  }
  const heading=a.find(e=>clean(e)===s.title);
  if(heading){const sel=`#${s.referenceId} .tn-elem[data-elem-id="${$(heading).parent().attr('data-elem-id')}"]`;const hs=rule(sel+'{')+';'+rule(sel+' .tn-atom{');s.headingSize=Number(hs.match(/font-size:(?:var\([^,]+,\s*)?(\d+)px/)?.[1])||undefined;s.headingWeight=Number(hs.match(/font-weight:(?:var\([^,]+,\s*)?(\d+)/)?.[1])||undefined;}
 }
 if(slug==='personal-online-reputation'){
  const a=atoms(hero);p.hero.eyebrow='Individual Reputation Management';
  const cov={referenceId:'personal-identity',kind:'cards',layout:'identity',title:clean(a[1]),eyebrow:clean(a[0]),cards:Array.from({length:5},(_,i)=>({eyebrow:clean(a[4+i*3]),title:clean(a[5+i*3]),parts:[rich(a[6+i*3])],background:'#262626',color:'#eee'})),columns:5,background:'#fff',paddingTop:60,paddingBottom:60};
  const metrics={referenceId:'personal-metrics',kind:'cards',layout:'metrics-strip',cards:Array.from({length:4},(_,i)=>({title:clean(a[21+i*2]),parts:[rich(a[22+i*2])],background:'#606c59',color:'#fff'})),columns:4,background:'#606c59',paddingTop:24,paddingBottom:24};
  cov.synthetic=true;metrics.synthetic=true;
  p.sections=p.sections.filter(s=>!['identity','metrics-strip'].includes(s.layout));p.sections.unshift(cov,metrics);
  const gallery=p.sections.find(s=>s.referenceId==='rec3811329903');gallery.cards=gallery.cards.slice(0,8);gallery.layout='personal-situations';gallery.cardWidth=372;gallery.columns=3;
  const note=p.sections.find(s=>s.referenceId==='rec3811349403'),na=atoms($('#rec3811349403'));Object.assign(note,{title:clean(na[0]),eyebrow:'',body:[rich(na[1])],layout:'personal-note'});
  const steps=p.sections.find(s=>s.referenceId==='rec3810992903');steps.kind='cards';steps.layout='investment';steps.columns=2;
  for(const id of ['rec3805578203','rec3805669103']){
   const r=$('#'+id),groups=r.find('.tn-group[data-group-width-value="360"]').toArray();
   const section={referenceId:id,kind:'cards',layout:'identity-surfaces',columns:3,background:'#f3f3f3',paddingTop:20,paddingBottom:40,cards:groups.map(g=>{const a=atoms(g);return{title:clean(a[0]),parts:a.slice(1).map(rich),icon:asset($(g).find('img[data-original]').first().attr('data-original')),background:'#fff'};})};
   const old=p.sections.findIndex(s=>s.referenceId===id);if(old>=0)p.sections[old]=section;else{const at=p.sections.findIndex(s=>s.referenceId===(id==='rec3805578203'?'rec3805578003':'rec3805578203'));p.sections.splice(at+1,0,section);}
  }
 }
 // Paired search/AI examples are source illustrations, not screenshots of page layout.
 const records=$('#allrecords > .r').toArray();
 for(let i=0;i<records.length;i++){
  const r=$(records[i]),id=r.attr('id');
  const imgs=r.find('img[data-original]').toArray().filter(e=>/before|after/i.test($(e).attr('data-original')));
  if(imgs.length!==2)continue;
  const section={referenceId:id,kind:'image-pair',images:imgs.map((e,j)=>({src:asset($(e).attr('data-original')),alt:j?'After reputation management':'Before reputation management'})),background:r.attr('style')?.match(/background-color:([^;]+)/)?.[1]||'#fff',paddingTop:60,paddingBottom:60};
  const existing=p.sections.findIndex(s=>s.referenceId===id);
  if(existing>=0)p.sections[existing]=section;
  else{let at=-1;for(let j=i-1;j>=0&&at<0;j--)at=p.sections.findIndex(s=>s.referenceId===$(records[j]).attr('id'));p.sections.splice(at+1,0,section);}
 }
}
fs.writeFileSync('app/data/servicePages.json',JSON.stringify(pages,null,2)+'\n');
fs.writeFileSync('scripts/reference/service-assets.json',JSON.stringify(assets,null,2)+'\n');
console.log('Personal service layouts refined');
