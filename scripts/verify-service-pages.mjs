import fs from "node:fs";
import assert from "node:assert/strict";
import { load } from "cheerio";
const pages = JSON.parse(fs.readFileSync("app/data/servicePages.json", "utf8"));
const base = process.argv[2] || "http://127.0.0.1:3001";
for (const [slug, p] of Object.entries(pages)) {
  const r = await fetch(`${base}/${slug}`);
  assert.equal(r.status, 200, slug);
  const $ = load(await r.text());
  assert.equal($("h1").text(), p.hero.title, slug);
  assert.equal($("h1").length, 1);
  assert.equal($("main").length, 1);
  for (const e of $("main button, main .action-button").toArray()) {
    assert.ok($(e).text().length < 300, `${slug}: readable button labels`);
    assert.ok(
      !/t-btnflex|--uc-button|#rec\d/.test($(e).text()),
      `${slug}: no source styles in button labels`,
    );
  }
  assert.equal(
    $(".service-section--faq .question").length,
    p.sections
      .filter((s) => s.kind === "faq")
      .reduce((n, s) => n + s.questions.length, 0),
    `${slug}: complete FAQ`,
  );
  assert.equal(
    $(".tn-atom,.tn-elem,[data-record-type]").length,
    0,
    `${slug}: native Vue layout`,
  );
  for (const [index, s] of p.sections.entries()) {
    const section = $(`[data-section-index="${index}"]`);
    if (s.kind === 'form' && s.formButtonLabel) assert.equal(section.find('button[type="submit"]').text(), s.formButtonLabel, `${slug}: source form label`);
    if (s.layout === 'capped-signs') assert.equal(section.find('.service-card__icon').length, s.cards.length, `${slug}: every cap has its source icon`);
    if (s.aside?.length && s.copyWidth) assert.ok(s.copyWidth <= 700, `${slug}: copy width leaves room for the aside`);
    if (s.splitTitleFull) assert.ok(section.hasClass('service-section--full-split-title'), `${slug}: wide title spans both columns`);
    if (s.coverHeight) assert.ok(section.hasClass('service-section--cover'), `${slug}: cover spacing is separated from its background`);
    if (s.standardCards && s.kind === 'process')
      for (const c of s.cards) assert.ok(!/^0\d\s/.test(c.title), `${slug}: step numbers are not repeated in headings`);
    if (s.kind === 'cases' && s.cards.length <= 2) {
      assert.equal(section.find('.carousel').length, 0, `${slug}: short case collections use the full grid`);
      assert.equal(section.find('.service-card').length, s.cards.length);
    }
    if (s.callout?.icon)
      assert.equal(section.find('.service-callout h3 img').attr('src'), s.callout.icon, `${slug}: callout icon`);
    if (s.kind === 'modules' && s.moduleIcons?.length)
      assert.equal(section.find('.service-modules img').length, s.moduleIcons.length, `${slug}: module icons`);
    if (s.layout === 'strategy-banner') {
      assert.equal(section.find('.service-section__aside').length, 0, `${slug}: NDA is not a split card`);
      assert.equal(section.find('.service-disclaimer').length, 1);
      assert.equal(section.find('.service-actions .action-button').length, 1);
    }
    if (["cards", "roles", "process", "cases", "gallery"].includes(s.kind))
      assert.ok(s.cards?.length, `${slug}: nonempty ${s.kind}`);
    if (s.kind === "compare")
      for (const row of s.rows)
        assert.equal(
          row.length,
          s.headings.length + 1,
          `${slug}: comparison columns`,
        );
  }
  if (slug === 'brand-positioning-services') {
    assert.equal($('h2').toArray().filter(e => $(e).text().includes('What It Takes To Fix A Brand Positioning Statement')).length, 1, 'No duplicate positioning section title');
    const stats = p.sections.find(s => s.referenceId === 'rec2948008801');
    assert.equal(stats.cards[0].title, '44% of market value');
    assert.ok(stats.cards.every(c => c.titleSize === 24 && c.parts.length === 2), 'Separate highlighted values, explanations and sources');
  }
  if (p.newService) {
    assert.equal($('.service-coverage').length, p.hero.split ? 1 : 0, `${slug}: hero layout`);
    for (const s of p.sections) {
      if (s.layout === 'capped-roles') assert.equal(s.cards.length, 3, `${slug}: three complete role cards`);
      if (s.layout === 'coverage-five') { assert.equal(s.cards.length, 5); assert.equal(s.columns, 5); }
      if (s.kind === 'related') assert.ok(s.cards.every(c => c.link?.href), `${slug}: all related cards have destinations`);
    }
    if (slug === 'brand-protection-services') assert.ok(p.sections.find(s => s.layout === 'coverage-five').title, 'Coverage heading survives regeneration');
    if (slug === 'business-media-presence') {
      assert.ok(p.sections.find(s => s.layout === 'plain-note').body[0]?.length > 40, 'Pricing note survives regeneration');
      assert.equal(p.sections.find(s => s.kind === 'compare').rows.length, 4);
      assert.equal(p.sections.find(s => s.layout === 'horizontal-features').cards.length, 5);
    }
  }
  for (const other of Object.keys(pages))
    assert.equal(
      $(`a[href="https://reputation.house/${other}"]`).length,
      0,
      `${slug}: local service links`,
    );
  assert.equal($(".service-hero button").length, 1);
  assert.equal(
    $(
      'nav[aria-label="Primary navigation"] a[href="/online-reputation-monitoring"]',
    ).length,
    1,
    "Monitoring menu opens the local page",
  );
  console.log(
    `OK ${slug}: ${p.sections.length} sections, ${$(".service-section--faq .question").length} answers`,
  );
}
const paths = [...new Set(JSON.stringify(pages).match(/\/images\/[^"\\]+/g))];
for (const p of paths) {
  assert.ok(fs.existsSync(`public${p}`), `Missing asset ${p}`);
  assert.equal((await fetch(base + p)).status, 200, p);
}
console.log(`OK ${paths.length} local service images`);
