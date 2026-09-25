import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { load } from "cheerio";
const pages = JSON.parse(fs.readFileSync("app/data/servicePages.json", "utf8"));
const assets = JSON.parse(
  fs.readFileSync("scripts/reference/service-assets.json", "utf8"),
);
function asset(url) {
  if (!url?.startsWith("https://")) return undefined;
  const name = `service-${crypto.createHash("sha1").update(url).digest("hex").slice(0, 10)}${path.extname(new URL(url).pathname) || ".png"}`;
  assets[name] = url;
  return "/images/" + name;
}
for (const [slug, p] of Object.entries(pages).filter(
  ([slug, p]) => p.variant === "control" && (!process.argv.slice(2).length || process.argv.slice(2).includes(slug)),
)) {
  const html = fs.readFileSync(`scripts/reference/${slug}.html`, "utf8"),
    $ = load(html),
    css = html + fs.readFileSync(`scripts/reference/${slug}.css`, "utf8");
  const clean = (e) => $(e).text().replace(/\s+/g, " ").trim();
  for (const s of p.sections) {
    const r = $("#" + s.referenceId);
    if (s.referenceId === "rec2497346683") {
      const a = r.find('.tn-elem[data-elem-type="text"] > .tn-atom').toArray();
      s.headings = [
        clean(a[1]) + "\n" + clean(a[2]),
        clean(a[3]) + "\n" + clean(a[4]),
        clean(a[5]) + "\n" + clean(a[6]),
      ];
      s.rows = Array.from({ length: 5 }, (_, i) =>
        a.slice(7 + i * 4, 11 + i * 4).map(clean),
      );
    }
    const icons = r
      .find("img[data-original]")
      .toArray()
      .filter((e) => /\.svg(?:$|\?)/.test($(e).attr("data-original")))
      .map((e) => asset($(e).attr("data-original")));
    if (s.kind === "showcase")
      s.slides.forEach((slide, i) => {
        slide.icon = icons[i] || icons[0];
      });
    if (s.layout === "pattern-callout") s.icon = icons[0];
    if (
      slug === "ai-influence-services" &&
      [
        "rec2497346623",
        "rec2498464963",
        "rec2497346683",
        "rec2497346703",
        "rec2498478523",
        "rec2497346713",
        "rec2497346843",
        "rec2498782683",
        "rec2497346863",
        "rec2497346893",
      ].includes(s.referenceId)
    ) {
      const headings = r
        .find('.tn-elem[data-elem-type="text"] > .tn-atom')
        .toArray()
        .filter((e) => [s.eyebrow, s.title].includes(clean(e)))
        .sort(
          (a, b) =>
            Number($(a).parent().attr("data-field-top-value")) -
            Number($(b).parent().attr("data-field-top-value")),
        );
      if (headings.length === 2) {
        s.eyebrow = clean(headings[0]);
        s.title = clean(headings[1]);
        s.stackedHeadings = true;
      }
    }
    if (s.eyebrow === s.title) s.eyebrow = "";
    if (s.layout === "banner") {
      s.paddingTop = Number(
        (r.attr("style") || "").match(/padding-top:(\d+)/)?.[1] || 0,
      );
      s.paddingBottom = Number(
        (r.attr("style") || "").match(/padding-bottom:(\d+)/)?.[1] || 0,
      );
    }
    if (s.aside?.length && s.layout !== "definition") {
      const ta = r.find('.tn-elem[data-elem-type="text"] > .tn-atom').toArray();
      const title = ta.find((e) => clean(e) === s.title),
        aside = ta.find(
          (e) =>
            clean(e) === load(s.aside[0]).text().replace(/\s+/g, " ").trim(),
        );
      if (title)
        s.copyWidth = Number($(title).parent().attr("data-field-width-value"));
      const g = $(aside)
        .parents(".tn-group")
        .toArray()
        .find((g) => /32px/.test($(g).attr("data-group-padding")));
      if (g) s.asideHeight = Number($(g).attr("data-group-height-value"));
    }
    if (slug === "online-review-management" && s.kind === "related")
      for (const c of s.cards)
        if (c.eyebrow) {
          c.parts = [c.title];
          c.title = c.eyebrow;
          delete c.eyebrow;
        }
    for (const c of s.cards || []) {
      const atom = r
        .find('.tn-elem[data-elem-type="text"] > .tn-atom')
        .toArray()
        .find((e) => clean(e) === c.title);
      if (!atom) continue;
      const group = $(atom)
        .parents(".tn-group")
        .toArray()
        .find((g) => {
          const w = Number($(g).attr("data-group-width-value"));
          return (
            w >= 200 &&
            w < 650 &&
            /24px|20px|32px/.test($(g).attr("data-group-padding"))
          );
        });
      if (!group) continue;
      const gid = $(group).attr("data-group-id"),
        prefix = `#${s.referenceId} .tn-group[data-group-id="${gid}"] #molecule-${gid}{`;
      const start = css.indexOf(prefix),
        style =
          start < 0
            ? ""
            : css.slice(start + prefix.length, css.indexOf("}", start));
      const bg = style.match(
        /(?:--t396-bgcolor-color|background-color):(#[a-fA-F0-9]+)/,
      )?.[1];
      const border = style.match(/border-color:(#[a-fA-F0-9]+)/)?.[1];
      if (bg) c.background = bg;
      if (border) {
        c.borderColor = border;
        if (!bg) c.background = "#ffffff";
      }
      if (s.layout === "capped-roles") c.background = "#ffffff";
      console.log(slug, s.referenceId, c.title.slice(0, 25), bg, border);
    }
    if (
      s.kind === "related" &&
      s.title === "Related solutions by reputation house"
    )
      [s.title, s.eyebrow] = [s.eyebrow, s.title];
  }
  if (slug === "serm-services") {
    const trust = p.sections.find((s) => s.layout === "trust");
    for (const c of trust.cards)
      if (/^0\d$/.test(c.title)) {
        c.number = c.title;
        c.title = load(c.parts.shift()).text();
      }
  }
}
function cleanLabels(value) {
  if (!value || typeof value !== "object") return;
  for (const [key, item] of Object.entries(value)) {
    if (key === "label" && typeof item === "string")
      value[key] = item
        .replace(/\s*(?:#rec\d+|\.t-btnflex)[\s\S]*$/, "")
        .trim();
    else cleanLabels(item);
  }
}
cleanLabels(pages);
fs.writeFileSync(
  "app/data/servicePages.json",
  JSON.stringify(pages, null, 2) + "\n",
);
fs.writeFileSync(
  "scripts/reference/service-assets.json",
  JSON.stringify(assets, null, 2) + "\n",
);
await import('./fix-shared-service-layout.mjs');
