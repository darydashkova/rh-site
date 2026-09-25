import assert from 'node:assert/strict';
import fs from 'node:fs';
import { h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { load } from 'cheerio';
import { parseFormattedText, renderFormattedText } from '../app/utils/formattedText.ts';

const render = async text => renderToString(h('div', renderFormattedText(parseFormattedText(text), href => href.replace('https://reputation.house/','/'), () => {})));
assert.equal(await render('A &amp; B&nbsp;&lt;script&gt;'), '<div>A &amp; B &lt;script&gt;</div>');
assert.equal(await render('<p><strong>Bold</strong><br><em>Emphasis</em></p><ul><li>Item</li></ul>'), '<div><p><strong>Bold</strong><br><em>Emphasis</em></p><ul><li>Item</li></ul></div>');
assert.equal(await render('<a href="https://reputation.house/serm-services">Read</a>'), '<div><a href="/serm-services">Read</a></div>');
assert.equal(await render('<script>alert(1)</script><a href="javascript:alert(1)" onclick="bad()">Safe</a>'), '<div><a>Safe</a></div>');
let opened = false, prevented = false;
const [link] = renderFormattedText(parseFormattedText('<a href="#popup:form"><strong>Ask</strong></a>'), href => href, () => { opened = true; });
link.props.onClick({ preventDefault() { prevented = true; } });
assert.ok(opened && prevented);
assert.equal(link.props.href, '#consultation');

// Check actual service content, including entity decoding and nested formatting.
const snippets = new Set();
function collect(value) {
  if (typeof value === 'string' && /<(?:p|a|strong|b|em|i|br|ul|ol|li)\b|&(?:\w+|#\d+);/.test(value)) snippets.add(value);
  else if (value && typeof value === 'object') Object.values(value).forEach(collect);
}
collect(JSON.parse(fs.readFileSync('app/data/servicePages.json','utf8')));
for (const text of snippets) {
 const expected = load(`<div>${text}</div>`,null,false).text();
 const actual = load(await render(text),null,false).text();
 assert.equal(actual,expected,`Changed editorial text: ${text.slice(0,100)}`);
}
console.log(`PASS formatted text: formatting, entities, links, consultation handler, ${snippets.size} real snippets`);
