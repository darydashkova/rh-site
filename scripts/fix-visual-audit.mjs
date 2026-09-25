import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {load} from 'cheerio';
const file='app/data/servicePages.json',pages=JSON.parse(fs.readFileSync(file));
const assets=JSON.parse(fs.readFileSync('scripts/reference/service-assets.json'));
const asset=url=>{if(!url?.startsWith('https://'))return;const name=`service-${crypto.createHash('sha1').update(url).digest('hex').slice(0,10)}${path.extname(new URL(url).pathname)||'.png'}`;assets[name]=url;return '/images/'+name;};
const report=[];
for(const [slug,p] of Object.entries(pages)){
 const $=load(fs.readFileSync(`scripts/reference/${slug}.html`,'utf8'));
 const clean=e=>{const n=$(e).clone();n.find('script,style').remove();n.find('br').replaceWith(' ');return n.text().replace(/\s+/g,' ').trim();};
 const seen=new Set();p.sections=p.sections.filter(s=>{const key=JSON.stringify(s);if(seen.has(key)){report.push(`${slug}: removed exact duplicate ${s.referenceId}`);return false;}seen.add(key);return true;});
 for(const s of p.sections){
  if(slug==='digital-risk-protection'&&s.referenceId==='rec2955319703'&&s.kind==='cards')s.referenceId='rec2942800403';
  const r=$('#'+s.referenceId),type=r.attr('data-record-type');
  if(type==='1152'&&!s.layout){
   s.eyebrow=clean(r.find('[field="btitle"]'));
   s.title=clean(r.find('[field="bdescr"]'));
   s.body=r.find('[field="text"], [field="text2"]').toArray().map(e=>$(e).html()).filter(Boolean);
   s.aside=[];s.layout='editorial-heading';s.editorialBody=true;
  }
  if(type==='858'&&r.find('.t-card__descr').text().includes('SOURCE:'))s.layout='numbers';
  if(type==='1186'&&s.cards?.length>2&&!s.cardWidth){s.bleed=true;s.cardWidth=560;s.columns=2;}
  if(s.coverHeight){
   const sourceCol=r.find('.t-cover__wrapper').first().parent().attr('class')||'';
   const columns=Number(sourceCol.match(/t-col_(\d+)/)?.[1]);
   if(columns)s.coverCopyWidth=columns*100-40;
   const url=r.find('.t-cover__carrier').attr('data-content-cover-bg')||r.find('.t-cover__carrier').attr('data-content-cover-bg-mobile');
   if(url)s.coverImage=asset(url);
  }
  if(type==='1186'||type==='1196'){
   if(type==='1196'&&s.layout!=='ai-gallery'){s.layout='text-carousel';s.cardWidth=360;s.bleed=true;}
   const buttons=r.find('.t1186__buttons .t-btn, .t1196__buttons .t-btn').toArray();
   if(buttons.length)s.actions=buttons.map(e=>({label:clean($(e).find('.t-btnflex__text').first())||clean(e),href:$(e).attr('href')}));
  }
  if(s.cards){
   const long=s.cards.filter(c=>c.title.length>120);
   if(long.length)report.push(`${slug} ${s.referenceId}: ${long.length} long headings (${s.layout})`);
  }
 }
 if(slug==='personal-online-reputation'){
  const find=id=>p.sections.find(s=>s.referenceId===id);
  find('rec3811167703').layout='editorial-cases';find('rec3811167703').bleed=true;find('rec3811167703').cardWidth=460;
  find('rec3811332103').descriptionEmphasis=true;
  for(const id of ['rec3810992903','rec3811303003']){
   const s=find(id);s.layout=id==='rec3810992903'?'personal-disciplines':'personal-steps';
   for(const c of s.cards){c.color='#464646';c.titleColor='#262626';c.titleWeight=600;c.titleSize=20;}
  }
  for(const id of ['rec3805578203','rec3805669103']){
   const s=find(id);s.layout='identity-surfaces';s.paddingTop=45;s.paddingBottom=id==='rec3805669103'?60:0;
  }
  const note=find('rec3811349403');note.icon=asset($('#rec3811349403 img[data-original]').first().attr('data-original'));
 }
}
fs.writeFileSync(file,JSON.stringify(pages,null,2)+'\n');
fs.writeFileSync('scripts/reference/service-assets.json',JSON.stringify(assets,null,2)+'\n');
fs.writeFileSync('scripts/reference/visual-audit-findings.txt',report.join('\n'));
console.log(report.join('\n')||'No remaining structural flags');
