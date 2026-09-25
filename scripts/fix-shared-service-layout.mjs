import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { load } from 'cheerio';
const file = 'app/data/servicePages.json';
const pages = JSON.parse(fs.readFileSync(file, 'utf8'));
const assets = JSON.parse(fs.readFileSync('scripts/reference/service-assets.json', 'utf8'));
const normalize = s => s.replace(/\s+/g, ' ').trim();
function asset(url) {
  if (!url?.startsWith('https://')) return undefined;
  const name = `service-${crypto.createHash('sha1').update(url).digest('hex').slice(0,10)}${path.extname(new URL(url).pathname) || '.png'}`;
  assets[name] = url;
  return '/images/' + name;
}
for (const [slug, page] of Object.entries(pages)) {
  const html = fs.readFileSync(`scripts/reference/${slug}.html`, 'utf8');
  const $ = load(html);
  const cssPath = `scripts/reference/${slug}.css`;
  const css = html + (fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '');
  for (const s of page.sections) {
    let r = $('#' + s.referenceId);
    if (!r.length && !s.synthetic) {
      const label = s.callout?.title || s.title || s.items?.[0] || s.cards?.[0]?.title;
      if (label) {
        const atom = $('.tn-atom, [field="title"], [field="btitle"]').toArray().find(e => normalize($(e).text()) === normalize(label));
        r = $(atom).closest('[data-record-type]');
        if (r.length) s.referenceId = r.attr('id');
      }
    }
    const texts = r.find('.tn-elem[data-elem-type="text"] > .tn-atom').toArray();
    const type = r.attr('data-record-type');
    const icons = r.find('img[data-original]').toArray().map(e => $(e).attr('data-original')).filter(u => /\.svg(?:$|\?)/.test(u));
    // Source artboard heights are editor coordinates, not intrinsic content heights.
    delete s.asideHeight;
    if (s.aside?.length) {
      if (!s.title && !s.eyebrow) s.layout = 'split-prose';
      const title = texts.find(e => normalize($(e).text()) === normalize(s.title || ''));
      const body = texts.find(e => normalize($(e).text()) === normalize(load(s.body?.[0] || '').text()));
      const titleWidth = Number($(title).parent().attr('data-field-width-value'));
      const bodyWidth = Number($(body).parent().attr('data-field-width-value'));
      s.copyWidth = titleWidth >= 300 && titleWidth <= 700 ? titleWidth : bodyWidth >= 300 && bodyWidth <= 700 ? bodyWidth : 560;
      s.splitTitleFull = titleWidth > 700;
      const bg = r.find('.tn-molecule[data-original]').first().attr('data-original') || r.find('img[data-original]').toArray().map(e=>$(e).attr('data-original')).find(u=>/Rectangle_1018/.test(u));
      if (bg) s.asideImage = asset(bg);
    }
    if (s.layout === 'banner' || s.layout === 'wide-form') {
      s.coverHeight = r.find('.t-cover__wrapper').first().attr('style')?.match(/height:([^;]+)/)?.[1] || '300px';
      s.background = (r.attr('style') || '').match(/background-color:([^;]+)/)?.[1] || '#ffffff';
      s.paddingTop = Number((r.attr('style') || '').match(/padding-top:(\d+)/)?.[1] || 0);
      s.paddingBottom = Number((r.attr('style') || '').match(/padding-bottom:(\d+)/)?.[1] || 0);
    }
    if (type === '858') {
      s.standardCards = true;
      const cols = r.find('.t-card__col').toArray();
      (s.cards || []).forEach((c,i) => {
        const col = $(cols[i]);
        const t = col.find('.t-card__title').first().clone();
        if (s.kind === 'related') {
          const href = col.find('.t-card__link[href]').first().attr('href');
          if (href) c.link = { ...c.link, label: c.link?.label || 'Learn more', href };
          c.titleSize = 20; c.titleWeight = 600; c.titleLineHeight = 1.35;
        }
        if (s.layout === 'numbers') {
          const lead = t.find('strong,span').toArray().filter(e => /font-size:\s*(24|28|30|32|36|40|44)px/.test($(e).attr('style') || '') && normalize($(e).text()).length < 80);
          if (lead.length) {
            c.title = lead.map(e => normalize($(e).text())).join(' ');
            lead.forEach(e => $(e).remove());
            c.parts = [normalize(t.text()), (col.find('.t-card__descr').html() || '').replace(/^(?:\s|<br\s*\/?>)+/g,'').trim()];
            c.titleSize = Number($(lead[0]).attr('style')?.match(/font-size:\s*(\d+)px/)?.[1]) || 24; c.titleWeight = 700; c.titleLineHeight = 1.3;
            c.titleColor = $(lead[0]).attr('style')?.match(/color:\s*([^;]+)/)?.[1];
            c.descriptionWeight = c.titleSize === 32 ? 600 : 400;
            s.layout = 'numbers';
          }
        } else if (s.kind !== 'related') {
          t.find('br').replaceWith('\n');
          c.title = t.text().trim().replace(/[^\S\n]+/g,' ');
          if (c.number) c.title = c.title.replace(/^0\d\s*/, '');
          c.titleSize = 20; c.titleWeight = 600; c.titleLineHeight = 1.35;
        }
      });
    }
    if (slug === 'brand-positioning-services' && s.referenceId === 'rec2815643801') {
      s.title = ''; s.eyebrow = ''; s.layout = 'split-prose';
    }
    if (s.layout === 'editorial-heading') {
      s.editorialBody = true;
      if (s.title === 'Not just logic — the numbers') { s.eyebrow = s.title; s.title = ''; }
    }
    if (s.callout && icons.length) s.callout.icon = asset(icons.at(-1));
    if (s.kind === 'modules') s.moduleIcons = icons.map(asset);
    if (s.kind === 'cases' && s.cards?.length <= 2) {
      s.bleed = false;
      delete s.cardWidth;
      s.columns = s.cards.length;
      if (!s.title && texts.length && !s.cards.some(c => normalize(c.eyebrow || '') === normalize($(texts[0]).text()))) {
        s.eyebrow = normalize($(texts[0]).text());
        s.title = normalize($(texts[1]).text());
      }
    }
    if (s.layout === 'strategy-banner') {
      s.disclaimer = s.aside?.[0] || 'NDA from the first contact';
      s.aside = [];
      s.actions = [{label:'Request a confidential review audit', href:'#popup:consultation'}];
    }
    for (const c of s.cards || []) {
      const el = texts.find(e => normalize($(e).text()) === normalize(c.title));
      if (el) {
        const id = $(el).parent().attr('data-elem-id');
        const prefix = `#${s.referenceId} .tn-elem[data-elem-id="${id}"] .tn-atom{`;
        const pos = css.indexOf(prefix);
        const elementPrefix = `#${s.referenceId} .tn-elem[data-elem-id="${id}"]{`;
        const elementPos = css.indexOf(elementPrefix);
        const style = (elementPos < 0 ? '' : css.slice(elementPos + elementPrefix.length, css.indexOf('}',elementPos))) + ';' + (pos < 0 ? '' : css.slice(pos + prefix.length, css.indexOf('}',pos)));
        c.titleSize = Number(style.match(/font-size:(\d+)px/)?.[1]) || undefined;
        c.titleWeight = Number(style.match(/font-weight:(\d+)/)?.[1]) || undefined;
        c.titleLineHeight = Number(style.match(/line-height:([\d.]+);/)?.[1]) || undefined;
        if (page.newService) {
          c.titleSize = Number(style.match(/font-size:(?:var\([^,]+,\s*)?(\d+)px/)?.[1]) || c.titleSize;
          c.titleWeight = Number(style.match(/font-weight:(?:var\([^,]+,\s*)?(\d+)/)?.[1]) || c.titleWeight;
          c.titleLineHeight = Number(style.match(/line-height:(?:var\([^,]+,\s*)?([\d.]+)/)?.[1]) || c.titleLineHeight;
        }
        const emphasis = $(el).find('strong,b,[style]').toArray().find(e => normalize($(e).text()) === normalize(c.title) && (['strong','b'].includes(e.name) || /font-weight:\s*(bold|[6-9]00)/.test($(e).attr('style') || '')));
        if (emphasis) c.titleWeight = 700;
      }
      if (s.layout === 'numbers' && type !== '858') { c.titleSize = 32; c.titleWeight = 700; }
    }
    if(s.kind === 'form') {
      const form = r.find('[data-elem-type="form"]').first();
      s.formButtonLabel = form.attr('data-field-buttontitle-value') || s.formButtonLabel;
      s.formButtonWidth = Number(form.attr('data-field-buttonwidth-value')) || undefined;
    }
    if(page.newService && ['card-form','pattern-callout','compact-banner'].includes(s.layout)) {
      s.patternImage = asset(r.find('.tn-molecule[data-original]').first().attr('data-original'));
    }
  }
}
fs.writeFileSync(file, JSON.stringify(pages,null,2)+'\n');
fs.writeFileSync('scripts/reference/service-assets.json', JSON.stringify(assets,null,2)+'\n');
console.log('Updated shared layout metadata for', Object.keys(pages).length, 'pages');
