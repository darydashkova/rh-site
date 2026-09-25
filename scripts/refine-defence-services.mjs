import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import {load} from 'cheerio';
const slugs=['brand-protection-services','online-reputation-repair','crisis-management-agency','business-media-presence'];
const pages=JSON.parse(fs.readFileSync('app/data/servicePages.json','utf8'));
const assets=JSON.parse(fs.readFileSync('scripts/reference/service-assets.json','utf8'));
function asset(url){if(!url?.startsWith('https://'))return undefined;const name=`service-${crypto.createHash('sha1').update(url).digest('hex').slice(0,10)}${path.extname(new URL(url).pathname)||'.png'}`;assets[name]=url;return '/images/'+name;}
for(const slug of slugs){
 const p=pages[slug],html=fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'),$=load(html);
 const css=html+fs.readFileSync(`scripts/reference/${slug}.css`,'utf8');
 const clean=e=>$(e).text().replace(/\s+/g,' ').trim();
 const atoms=r=>$(r).find('.tn-elem[data-elem-type="text"] > .tn-atom').toArray().filter(e=>clean(e));
 function rich(e){const n=$(e).clone();n.find('script,style').remove();n.find('span[style]').each((_,x)=>{if(/font-weight:\s*(bold|[6-9]00)/.test($(x).attr('style')||''))$(x).replaceWith(`<strong>${$(x).html()}</strong>`);});n.find('*').each((_,x)=>{if(!['strong','b','em','i','br','p','ul','ol','li','a'].includes(x.name))$(x).replaceWith($(x).contents());else for(const k of Object.keys(x.attribs||{}))if(!(k==='href'&&x.name==='a'))$(x).removeAttr(k);});return (n.html()||'').trim();}
 const find=id=>p.sections.find(s=>s.referenceId===id);
 const set=(id,v)=>Object.assign(find(id),v);
 function rule(prefix){const pos=css.indexOf(prefix);return pos<0?'':css.slice(pos+prefix.length,css.indexOf('}',pos));}
 function groupFor(e){return $(e).parents('.tn-group').toArray().find(g=>{const w=Number($(g).attr('data-group-width-value'));return w>=180&&w<=600&&parseFloat($(g).attr('data-group-padding'))>=12;});}
 function groupStyle(g,id){return rule(`#${id} .tn-group[data-group-id="${$(g).attr('data-group-id')}"] #molecule-${$(g).attr('data-group-id')}{`);}
 function textStyle(e,id){const selector=`#${id} .tn-elem[data-elem-id="${$(e).parent().attr('data-elem-id')}"]`;return rule(selector+'{')+';'+rule(selector+' .tn-atom{');}
 function headings(s){const a=atoms($('#'+s.referenceId));if(a.length<2)return;const pair=a.filter(e=>[s.title,s.eyebrow].includes(clean(e))).sort((a,b)=>Number($(a).parent().attr('data-field-top-value'))-Number($(b).parent().attr('data-field-top-value')));if(pair.length===2){s.eyebrow=clean(pair[0]);s.title=clean(pair[1]);}}
 function role(id){const a=atoms($('#'+id));set(id,{kind:'roles',layout:'capped-roles',title:'',eyebrow:'',body:[],aside:[],callout:undefined,columns:3,tone:'outlined',cards:Array.from({length:3},(_,i)=>({title:clean(a[i*6]),parts:a.slice(i*6+1,i*6+6).map(rich)}))});}
 function callout(id){const a=atoms($('#'+id));set(id,{kind:'callout',layout:'pattern-callout',title:clean(a[0]),body:a.slice(1).map(rich),eyebrow:'',aside:[]});}
 const hero=$('#allrecords > .r[data-record-type="396"]').first(),ha=atoms(hero);
 p.theme=slug==='business-media-presence'?'control':'defence';p.newService=true;
 p.hero.coverage=[];p.hero.coverageIcons=[];p.hero.pattern=asset(hero.find('[data-original]').first().attr('data-original'));
 p.hero.titleWidth=slug==='brand-protection-services'||slug==='business-media-presence'?1160:967;
 p.hero.bodyWidth=slug==='brand-protection-services'?901:slug==='crisis-management-agency'?862:962;
 p.hero.compact=slug==='online-reputation-repair'||slug==='crisis-management-agency';
 p.hero.body=ha.filter(e=>clean(e).length>180).map(rich);
 for(const s of p.sections){
  headings(s);
  if(s.cards?.length===5){s.columns=5;}
  if(s.cards?.length===4&&s.kind==='cards'&&!s.layout)s.columns=4;
  if(s.kind==='cta'&&s.background==='#262626'){s.layout='centered-cta';s.paddingTop=100;s.paddingBottom=100;}
  if(s.kind==='related')s.tone='outlined';
  if(s.kind==='cases'){
   s.body=[];s.layout=slug==='business-media-presence'?'media-cases':'case-results';
   if(s.cards.length===3){s.bleed=false;s.cardWidth=undefined;}
  }
 }
 if(slug==='brand-protection-services'){
  role('rec2703379801');callout('rec2703379401');
  set('rec2703378701',{layout:'coverage-five',title:'What Brand Protection & Community Safety Covers',eyebrow:''});
  set('rec2703378901',{layout:'capped-signs',columns:4});
  set('rec2703380701',{layout:'limits',tone:'outlined',columns:4});
  set('rec2703381101',{layout:'investment',columns:2});
  // These source cards use a separate eyebrow/title/button inside each group.
  const s=find('rec2703381601'),a=atoms($('#rec2703381601'));s.kind='related';
  s.cards=Array.from({length:4},(_,i)=>({eyebrow:clean(a[i*3]),title:clean(a[i*3+1]),parts:[rich(a[i*3+2])]}));
 }
 if(slug==='online-reputation-repair'){
  role('rec2633907001');callout('rec2632585401');
  set('rec2632584701',{layout:'coverage-five'});
  set('rec2632586701',{layout:'limits',tone:'outlined',columns:3,title:'The Limits of This Solution',eyebrow:"What we don't promise"});
  set('rec2632587101',{layout:'investment',columns:2});
  set('rec2632587401',{layout:'evidence',columns:4});
 }
 if(slug==='crisis-management-agency'){
  role('rec2489331831');callout('rec2492665581');
  set('rec2489305101',{layout:'capped-signs',columns:4});
  const s=find('rec2489326331'),a=atoms($('#rec2489326331'));s.title=clean(a[0]);s.body=[rich(a[1])];s.eyebrow='';s.callout=undefined;s.layout='crisis-risks';s.columns=2;
  set('rec2489379561',{layout:'limits',tone:'outlined',columns:4});
  const end=atoms($('#rec2489588291'));set('rec2489588291',{kind:'intro',layout:'split',eyebrow:clean(end[0]),title:clean(end[1]),body:[rich(end[2])],aside:end.slice(3).map(rich),cards:undefined});
  set('rec2489590751',{layout:'investment',columns:2});
  set('rec2489374611',{eyebrow:'Case Studies',title:clean(atoms($('#rec2489374611'))[1]),body:[]});
 }
 if(slug==='business-media-presence'){
  const s=find('rec3104440003'),a=atoms($('#rec3104440003'));
  Object.assign(s,{kind:'compare',title:'',eyebrow:'',body:[],aside:[],cards:undefined,headings:[clean(a[0])+'\n'+clean(a[1]),clean(a[2])+'\n'+clean(a[3]),clean(a[4])],rows:Array.from({length:4},(_,i)=>a.slice(5+i*4,9+i*4).map(rich))});
  set('rec3104441103',{layout:'limits',tone:'outlined',columns:4});
  set('rec3104439703',{layout:'horizontal-features',columns:4});
  set('rec3104503803',{layout:'inline-heading',eyebrow:'What people find under your company name',title:'Coverage verifies what your company says about itself'});
  set('rec3104616403',{layout:'evidence'});
  const c=find('rec3104554403'),ca=atoms($('#rec3104554403'));c.layout='proof-flow';c.cards=Array.from({length:4},(_,i)=>({eyebrow:clean(ca[i*3]),title:clean(ca[i*3+1]),parts:[rich(ca[i*3+2])]}));
  const note=find('rec3118781403');note.body=atoms($('#rec3118781403')).map(rich);note.eyebrow='';note.layout='plain-note';
  find('rec3115662703').actions=[{label:'See more Industry Cases',href:'/case-studies'}];
 }
 // Recover exact card fills, text styling, icons and actions from their source groups.
 for(const s of p.sections){
  const r=$('#'+s.referenceId),a=atoms(r);
  if(s.layout==='pattern-callout')s.icon=asset(r.find('img[data-original]').first().attr('data-original'));
  for(const c of s.cards||[]){
   const el=a.find(e=>clean(e)===c.title),g=groupFor(el),st=groupStyle(g,s.referenceId),ts=textStyle(el,s.referenceId);
   c.background=st.match(/(?:--t396-bgcolor-color|background-color):(#[a-f\d]+)/i)?.[1]||c.background;
   c.borderColor=st.match(/border-color:(#[a-f\d]+)/i)?.[1]||c.borderColor;
   if(/(?:--t396-borderwidth|border-width):0px(?: 0px)*;/.test(st))delete c.borderColor;
   if(c.borderColor&&!c.background)c.background='#fff';
   c.color=ts.match(/(?:^|;)color:(?:var\([^,]+,\s*)?(#[a-f\d]+)/i)?.[1]||undefined;
   const im=$(g).find('img[data-original]').first();if(im.length)c.icon=asset(im.attr('data-original'));
   const bg=$(g).find('.tn-molecule[data-original]').first();if(bg.length)c.backgroundImage=asset(bg.attr('data-original'));
   const link=$(g).find('a[href]').toArray().find(e=>$(e).closest('[data-elem-type="button"]').length);
   if(link)c.link={label:clean(link),href:$(link).attr('href')};
   if(s.kind==='related'&&!c.link){const button=r.find('.tn-elem[data-elem-type="button"] a').toArray()[s.cards.indexOf(c)];if(button)c.link={label:clean(button),href:$(button).attr('href')};}
   if(s.layout==='capped-roles'){c.background='#ffffff';c.color='#464646';}
   if(p.theme==='defence' && ['#66403f','#262626'].includes(c.background?.toLowerCase()) && s.layout!=='capped-signs')c.color='#eeeeee';
  }
 }
}
fs.writeFileSync('app/data/servicePages.json',JSON.stringify(pages,null,2)+'\n');
fs.writeFileSync('scripts/reference/service-assets.json',JSON.stringify(assets,null,2)+'\n');
console.log('Refined Defence and Media layouts');
