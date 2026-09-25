import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import {load} from 'cheerio';
const dir='scripts/reference/calculators/';
fs.mkdirSync('app/pages/calculator',{recursive:true});
fs.mkdirSync('app/components/calculators',{recursive:true});
fs.mkdirSync('app/data/calculators',{recursive:true});
fs.mkdirSync('app/utils/calculators',{recursive:true});
const slugs=fs.readdirSync(dir).filter(f=>f.endsWith('.html')).map(f=>f.slice(0,-5));
const clean=s=>load('<div>'+s+'</div>')('div').text().trim();
const mathNames={
 'serp-reputation-score':['rhScCalc'],
 'executive-reputation-score':['rhExCalc'],
 'brand-monitoring-roi':['rhRiCalcEMV'],
 'review-impact-revenue':['rhRiConversionMultiplier','rhRiReviewCountMultiplier'],
 'crisis-response-time':['baseTime','spreadMult','platformMult','checklist','crisisLabels'],
 'reputation-damage-cost':['rhRevenueFromSlider','rhIncidentRanges','rhReachMultiplier','rhRecoveryRate','rhPlanDiscount','rhComputeTotal'],
 'reputation-recovery-timeline':['rhRtIncidentRanges','rhRtReachMult','rhRtActiveMult','rhRtPositiveMult','rhRtSizeMult'],
};
for(const slug of slugs){
 const $=load(fs.readFileSync(dir+slug+'.html','utf8'));
 const blocks=$('.t123').toArray().slice(3).filter(e=>!$(e).find('script[type="application/ld+json"]').length);
 const extraCss=(fs.existsSync(dir+slug+'.css')?fs.readFileSync(dir+slug+'.css','utf8'):'').replace(/max-width:\s*1600px/g,'max-width:1160px');
 const css=(blocks.map(e=>$(e).find('style').text()).join('\n')+extraCss).replace(/\*\s*\{[^}]*\}/g,'').replace(/max-width:\s*1600px/g,'max-width:1160px')+'\n.rh-action-block{max-width:960px;width:calc(100% - 40px);margin:48px auto;}';
 const defaults={};
 const body=[]; let widgetImport='';
 for(let i=0;i<blocks.length;i++){
  const b=$(blocks[i]).clone(); b.find('script,style,meta,link').remove();
  b.find('.t-col,.t-container').toArray().reverse().forEach(el=>$(el).replaceWith($(el).contents()));
  if(i===1){
   const component='Calculator'+slug.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join('');
   widgetImport=`import ${component} from '~/components/calculators/${component}.vue';\n`;
   body.push(`<${component} />`);
   const widget=load(b.html(),{xmlMode:false},false);
   if(['reputation-risk-score','reputation-recovery-timeline'].includes(slug)){
    const steps=[];
    const selectors=slug==='reputation-risk-score'?'.rh-cp-section':'.rh-rt-step';
    widget(selectors).each((_,el)=>{
     const groups=[];const block=widget(el);
     if(slug==='reputation-risk-score'){
      block.find('.rh-cp-q').each((_,q)=>{
       const item=widget(q);groups.push({key:item.find('input').first().attr('name'),title:item.find('.rh-cp-q-text').text(),options:item.find('.rh-cp-option').map((_,o)=>({value:widget(o).find('input').attr('value'),label:widget(o).text().trim()})).get()});
      });
     }else block.find('[data-q]').each((_,g)=>groups.push({key:widget(g).attr('data-q'),title:block.find('.rh-rt-q-title').text(),options:widget(g).find('[data-val]').map((_,o)=>({value:widget(o).attr('data-val'),label:widget(o).find('.rh-rt-opt-text,.rh-rt-toggle-text').text(),description:widget(o).find('.rh-rt-opt-sub').text()})).get()}));
     steps.push({title:block.find('.rh-surface-title,.rh-rt-q-title').text(),subtitle:block.find('.rh-surface-sub').text(),groups});
    });
    fs.writeFileSync(`app/data/calculators/${slug}.json`,JSON.stringify(steps,null,2));
    fs.writeFileSync(`app/components/calculators/${component}.vue`,`<script setup lang="ts">import CalculatorWizard from './CalculatorWizard.vue';</script><template><CalculatorWizard kind="${slug}" /></template>\n`);
   }else{
    widget('[data-val]').each((_,el)=>{
     const e=widget(el);let key=e.closest('[data-q]').attr('data-q');
     if(!key)key=e.closest('#rh-reach-group').length?'reach':'plan';
     const val=e.attr('data-val'); if(e.hasClass('selected'))defaults[key]=val;
     el.tagName='button';e.attr('type','button').removeClass('selected').attr(':class',`{ selected: state['${key}'] === '${val}' }`).attr('@click',`state['${key}'] = '${val}'`).attr(':aria-pressed',`state['${key}'] === '${val}'`);
    });
    widget('input').each((_,el)=>{
     const e=widget(el),key=e.attr('id')||e.attr('name'),radio=e.attr('type')==='radio';
     if(radio){if(e.is('[checked]'))defaults[key]=e.attr('value');e.attr('v-model',`state['${key}']`).removeAttr('checked');const parent=e.closest('label');parent.removeClass('selected').attr(':class',`{selected: state['${key}'] === '${e.attr('value')}'}`);}
     else {defaults[key]=Number(e.attr('value'));e.removeAttr('value').attr('v-model.number',`state['${key}']`);e.attr('aria-label',key.replace(/^rh-(sc-|ri-)?/,'').replaceAll('-',' '));}
    });
    const empty=widget('[id$="-empty"]');const filled=widget('[id$="-filled"]');
    empty.attr('v-if','!submitted');filled.replaceWith('<calculator-result v-else :result="result"></calculator-result>');
    const displays={'rh-sc-owned-val':"state['rh-sc-owned']",'rh-neg-val':"state['rh-negative'] + '%'",'rh-resp-val':"state['rh-response'] + ' h'",'rh-ri-rating-val':"(Number(state['rh-ri-rating']) / 10).toFixed(1)",'rh-ri-neg-val':"state['rh-ri-negative'] + '%'",'rh-rev-val':"money(revenue(Number(state['rh-revenue'])))"};
    for(const[id,expr]of Object.entries(displays)) widget('#'+id).text('{{ '+expr+' }}');
    widget('[onclick]').each((_,el)=>{const e=widget(el);if(/Calculate\(\)/.test(e.attr('onclick')))e.attr('@click','submitted = true');else if(/classList/.test(e.attr('onclick')))e.attr('@click','sourcesOpen = !sourcesOpen');});
    widget('[id$="-src"],[id$="src-list"]').removeAttr('style').attr('v-show','sourcesOpen');
    widget('*').each((_,el)=>{for(const a of Object.keys(el.attribs||{}))if(a.startsWith('on'))widget(el).removeAttr(a);});
    widget('section').first().attr(':data-calculator-ready','ready');
    const markup=widget.html().replace(/<!--[^]*?-->/g,'');
    fs.writeFileSync(`app/components/calculators/${component}.vue`,`<script setup lang="ts">\nimport CalculatorResult from './CalculatorResult.vue';\nimport {calculate, money, revenue} from '~/utils/calculators/model';\nconst state = reactive<Record<string, string | number>>(${JSON.stringify(defaults)});\nconst submitted = ref(${slug==='crisis-response-time'});\nconst sourcesOpen = ref(false);\nconst result = computed(() => calculate('${slug}',state));\n</script>\n<template>${markup}</template>\n<style scoped>${($(blocks[i]).find('style').text()+extraCss).replace(/\*\s*\{[^}]*\}/g,'')}\nbutton {font-family:inherit; text-align:inherit;} input[type=range] {accent-color:#99ad8f;}\n</style>`);
   }
   continue;
  }
  b.find('[onclick]').each((_,el)=>{
   const e=$(el),handler=e.attr('onclick');
   if(/classList.toggle/.test(handler)){
    const item=e.parent();const answer=item.children().not(e).last();
    el.tagName='summary';item[0].tagName='details';e.removeAttr('onclick');answer.css('display','block');
   }
  });
  b.find('[class*="faq"][class$="-item"]').each((_,el)=>{const item=$(el),q=item.children('[class$="-q"]').first(),answer=item.children('[class$="-a"]').first();if(q.length&&answer.length){el.tagName='details';q[0].tagName='summary';answer.css('display','block');}});
  b.find('a').each((_,el)=>{const e=$(el),href=e.attr('href')||'';if(href.startsWith('#popup:')){el.tagName='button';e.removeAttr('href').attr('type','button').attr('@click','consultation.open()');}else if(href.startsWith('https://reputation.house/'))e.attr('href',href.replace('https://reputation.house',''));});
  b.find('*').each((_,el)=>{for(const a of Object.keys(el.attribs||{}))if(a.startsWith('on'))$(el).removeAttr(a);});
  body.push(b.html().replace(/<!--[^]*?-->/g,''));
 }
 fs.writeFileSync(`app/pages/calculator/${slug}.vue`,`<script setup lang="ts">\n${widgetImport}const consultation = useConsultation();\nuseSeoMeta({title:${JSON.stringify($('title').text())},description:${JSON.stringify($('meta[name=description]').attr('content')||'')}});\n</script>\n<template><main class="calculator-page"><nav class="calculator-breadcrumb"><SiteLink href="/">Reputation.house</SiteLink> / <SiteLink href="/risk-calculator">Calculator</SiteLink> / ${$('title').text().replaceAll('&','&amp;')}</nav>${body.join('\n')}</main></template>\n<style scoped>\n${css}\n.calculator-page{color:#262626;font-family:var(--font-body,Montserrat,sans-serif)}\n.calculator-breadcrumb{max-width:1160px;margin:auto;padding:100px 0 50px;font-size:14px;color:#888}.calculator-breadcrumb a{color:inherit}\nsummary{list-style:none;cursor:pointer}summary::-webkit-details-marker{display:none}details[open] summary{margin-bottom:12px}button{cursor:pointer;font-family:inherit}\n@media(max-width:760px){.calculator-breadcrumb{padding:40px 20px 24px}}\n</style>`);
 if(mathNames[slug]){
  const source=fs.readFileSync(dir+slug+'.js','utf8');const ast=ts.createSourceFile('s.js',source,ts.ScriptTarget.Latest,true);
  const code=[];for(const stmt of ast.statements){let names=[];if(ts.isFunctionDeclaration(stmt))names=[stmt.name?.text];if(ts.isVariableStatement(stmt))names=stmt.declarationList.declarations.map(d=>d.name.getText(ast));if(names.some(n=>mathNames[slug].includes(n)))code.push(stmt.getText(ast));}
  let module=code.join('\n');if(slug==='crisis-response-time')module=module.replace(/<\/?b>/g,'');
  fs.writeFileSync(`app/utils/calculators/${slug}.js`,module+'\nexport { '+mathNames[slug].join(', ')+' };\n');
 }
 console.log(slug);
}
for(const folder of ['app/pages/calculator','app/components/calculators'])for(const file of fs.readdirSync(folder).filter(f=>f.endsWith('.vue'))){const name=folder+'/'+file;let s=fs.readFileSync(name,'utf8').replace(/max-width:\s*1600px/g,'max-width:1160px');if(s.includes(':data-calculator-ready="ready"'))s=s.replace('const submitted =','const ready = ref(false);onMounted(() => {ready.value=true});\nconst submitted =');if(folder.includes('pages'))s=s.replace('<main class="calculator-page">','<main id="main-content" class="calculator-page">');fs.writeFileSync(name,s);}
