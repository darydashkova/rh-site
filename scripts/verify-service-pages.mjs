import fs from "node:fs";
import assert from "node:assert/strict";
import { load } from "cheerio";
const pages = JSON.parse(fs.readFileSync("app/data/servicePages.json", "utf8"));
const base = process.argv[2] || "http://127.0.0.1:3001";
const faqCounts = [9, 17, 8, 9, 9, 14];
let i = 0;
for (const [slug, p] of Object.entries(pages)) {
  const r = await fetch(`${base}/${slug}`);
  assert.equal(r.status, 200, slug);
  const $ = load(await r.text());
  assert.equal($("h1").text(), p.hero.title, slug);
  assert.equal($("h1").length, 1);
  assert.equal($("main").length, 1);
  assert.equal(
    $(".service-section--faq .question").length,
    faqCounts[i++],
    `${slug}: complete FAQ`,
  );
  assert.equal(
    $(".tn-atom,.tn-elem,[data-record-type]").length,
    0,
    `${slug}: native Vue layout`,
  );
  for (const s of p.sections) {
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
