import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { load } from 'cheerio';

const base = process.env.NUXT_APP_BASE_URL || '/rh-site/';
const output = path.resolve('docs');
assert.ok(fs.existsSync(path.join(output, '.nojekyll')), 'Missing .nojekyll');
const errors = new Set();
function check(url, source) {
  if (!url || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(url)) return;
  const resolved = new URL(url, 'https://example.test' + source);
  if (!resolved.pathname.startsWith(base)) {
    errors.add(`${source}: URL escapes base: ${url}`);
    return;
  }
  const relative = decodeURIComponent(resolved.pathname.slice(base.length));
  const file = path.join(output, relative);
  if (!fs.existsSync(file) && !fs.existsSync(path.join(file, 'index.html'))) {
    errors.add(`${source}: missing ${url}`);
  }
}
let pages = 0;
for (const file of fs.readdirSync(output, { recursive: true })) {
  const filename = path.join(output, file);
  const source = base + file.replaceAll('\\', '/');
  if (base !== '/' && /\.(?:html|js|json|css)$/.test(file)) {
    const text = fs.readFileSync(filename, 'utf8');
    if (/["'`(]\/(?:images|fonts|styles)\//.test(text)) errors.add(`${source}: unprefixed public asset`);
  }
  if (file.endsWith('.html')) {
    pages++;
    const $ = load(fs.readFileSync(filename, 'utf8'));
    $('[href], [src], [poster]').each((_, el) => {
      for (const attr of ['href', 'src', 'poster']) check($(el).attr(attr), source);
    });
    $('[style]').each((_, el) => {
      for (const m of ($(el).attr('style') || '').matchAll(/url\(\s*["']?([^"')\s]+)["']?\s*\)/g)) check(m[1], source);
    });
  }
  if (file.endsWith('.css')) {
    const css = fs.readFileSync(filename, 'utf8');
    for (const m of css.matchAll(/url\(\s*["']?([^"')\s]+)["']?\s*\)/g)) check(m[1], source);
  }
}
for (const file of fs.readdirSync('app/pages', { recursive: true }).filter(f => f.endsWith('.vue'))) {
  const route = file.replaceAll('\\', '/').replace(/\.vue$/, '').replace(/(^|\/)index$/, '$1');
  assert.ok(fs.existsSync(path.join(output, route, 'index.html')), `Page not generated: ${route}`);
}
assert.equal(errors.size, 0, [...errors].join('\n'));
console.log(`Verified ${pages} static HTML files, every page route, local links, images, scripts, styles and CSS resources under ${base}.`);
