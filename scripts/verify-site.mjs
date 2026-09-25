import assert from 'node:assert/strict';
import {load} from 'cheerio';
const base=process.argv[2]||'http://127.0.0.1:3001';
const routes=['/','/solutions','/reputation-management-pricing','/faq','/contacts','/risk-control-center','/company','/case-studies','/rh-detection','/rh-control','/rh-defence','/rh-personal','/team'];
const assets=new Set();
for(const route of routes) {
 const response=await fetch(base+route);
 assert.equal(response.status,200,route);
 const html=await response.text();
 const $=load(html);
 assert.equal($('h1').length,1,`${route}: one H1`);
 assert.equal($('main').length,1,`${route}: main landmark`);
 assert.ok($('title').text().includes('Reputation'),`${route}: page title`);
 assert.equal($('.tn-atom,[data-record-type]').length,0,`${route}: no legacy layout`);
 if(route.startsWith('/rh-')) {
  const counts={detection:[6,6,6],control:[6,6,12],defence:[6,6,4],personal:[5,4,7]};
  const key=route.slice(4), [features,roles,questions]=counts[key];
  assert.equal($('.rh-mode-feature-grid article').length,features,`${route}: full technology layer`);
  assert.equal($('.rh-mode-scenario-tabs button').length,roles,`${route}: role tabs`);
  assert.equal($('.rh-mode-scenario__row').length,3,`${route}: three distinct scenario rows`);
  assert.equal($('.rh-mode-faq .question').length,questions,`${route}: full FAQ`);
  assert.equal($('.rh-contact-form input[required]').length,3,`${route}: required contact fields`);
  assert.equal($('.rh-mode-scope').length,['control','defence'].includes(key)?1:0,`${route}: correct section structure`);
 }
 $('script[src],link[rel="stylesheet"],img[src]').each((_,e)=>{ const url=$(e).attr('src')||$(e).attr('href');if(url?.startsWith('/')) assets.add(url); });
 $('a[href]').each((_,e)=>{const href=$(e).attr('href');for(const path of routes.slice(1)) assert.notEqual(href,`https://reputation.house${path}`,`${route}: ${path} must be local`);});
 console.log(`OK ${route}: ${$('h1').text().trim()}`);
}
const results=await Promise.all([...assets].map(async path=>({path,status:(await fetch(base+path)).status})));
for(const {path,status} of results) assert.equal(status,200,`Asset ${path}`);
assert.equal((await fetch(base+'/not-a-real-page')).status,404,'Unknown route returns 404');
console.log(`OK ${results.length} local assets; unknown route returns 404.`);
