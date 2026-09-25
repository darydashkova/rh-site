import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { load } from "cheerio";
const slugs = process.argv.slice(2).length ? process.argv.slice(2) : [
  "serm-services",
  "online-review-management",
  "ai-influence-services",
  "brand-positioning-services",
  "brand-launch-strategy",
  "employer-reputation-management",
];
const pages = JSON.parse(fs.readFileSync("app/data/servicePages.json", "utf8"));
const assets = JSON.parse(
  fs.readFileSync("scripts/reference/service-assets.json", "utf8"),
);
function asset(url) {
  if (!url?.startsWith("https://")) return "";
  const name = `service-${crypto.createHash("sha1").update(url).digest("hex").slice(0, 10)}${path.extname(new URL(url).pathname) || ".png"}`;
  assets[name] = url;
  return "/images/" + name;
}
for (const slug of slugs) {
  const p = pages[slug],
    $ = load(fs.readFileSync(`scripts/reference/${slug}.html`, "utf8"));
  const clean = (e) => $(e).text().replace(/\s+/g, " ").trim();
  const rich = (e) => {
    const n = $(e).clone();
    n.find("script,style").remove();
    n.find("span[style]").each((_, x) => {
      if (/font-weight:\s*(bold|[6-9]00)/.test($(x).attr("style") || ""))
        $(x).replaceWith(`<strong>${$(x).html()}</strong>`);
    });
    n.find("*").each((_, x) => {
      if (
        !["strong", "b", "i", "em", "br", "a", "ul", "li", "ol", "p"].includes(
          x.name,
        )
      )
        $(x).replaceWith($(x).contents());
      else
        for (const a of Object.keys(x.attribs || {}))
          if (a !== "href") $(x).removeAttr(a);
    });
    return (n.html() || "").trim();
  };
  const atoms = (r) =>
    $(r)
      .find('.tn-elem[data-elem-type="text"] > .tn-atom')
      .toArray()
      .filter((e) => clean(e));
  const values = (r) => atoms(r).map(clean);
  const find = (id) => p.sections.find((s) => s.referenceId === id);
  const set = (id, props) => Object.assign(find(id), props);
  const pair = (id, n = 2) => {
    const a = atoms($("#" + id));
    return Array.from({ length: Math.floor(a.length / n) }, (_, i) => ({
      title: clean(a[i * n]),
      parts: a.slice(i * n + 1, i * n + n).map(rich),
    }));
  };
  const hero = $('#allrecords > .r[data-record-type="396"]').first();
  const ht = atoms(hero);
  const left = ht.filter(
    (e) => Number($(e).parent().attr("data-field-left-value")) < 100,
  );
  const h =
    left.find((e) => $(e).is("h1") || $(e).find("h1").length) ||
    left.find((e) => clean(e) === p.hero.title);
  p.hero.title = clean(h);
  p.hero.body = left.filter((e) => clean(e).length > 180 && e !== h).map(rich);
  p.hero.eyebrow = clean(
    left.find(
      (e) =>
        e !== h &&
        clean(e).length < 150 &&
        /^(RH |Reputation house|Reputation Building)/i.test(clean(e)),
    ),
  );
  const cov = ht.filter(
    (e) => Number($(e).parent().attr("data-field-left-value")) > 600,
  );
  if (slug !== "online-review-management" && slug !== "serm-services") {
    p.hero.coverageTitle = clean(cov[0]);
    p.hero.coverage = cov.slice(1).map(rich);
  }
  if (slug === "ai-influence-services")
    p.hero.logos = hero
      .find("img[data-original]")
      .toArray()
      .filter((e) => /\.png/.test($(e).attr("data-original")))
      .map((e) => ({
        src: asset($(e).attr("data-original")),
        alt: $(e).attr("alt") || "",
      }));
  if (slug === "online-review-management") {
    p.hero.coverage = [];
    p.hero.logos = hero
      .find("img[data-original]")
      .toArray()
      .filter((e) => /\.png/.test($(e).attr("data-original")))
      .map((e) => ({
        src: asset($(e).attr("data-original")),
        alt: path.basename($(e).attr("data-original"), ".png"),
      }));
    p.hero.reviewScale = asset(
      hero.find('img[data-original*="scale__main"]').attr("data-original"),
    );
  }
  p.variant = "control";
  for (const s of p.sections) {
    const r = $("#" + s.referenceId),
      type = r.attr("data-record-type"),
      a = atoms(r),
      v = a.map(clean);
    if (type === "1152") {
      s.eyebrow = clean(r.find('[field="btitle"]'));
      s.title = clean(r.find('[field="bdescr"]'));
      s.body = r
        .find('[field="text"], [field="text2"]')
        .toArray()
        .map(rich)
        .filter(Boolean);
      s.aside = [];
      s.kind = "intro";
      s.layout = "editorial-heading";
    }
    if (type === "179" || type === "213") {
      s.title =
        clean(r.find('[field="title"]').first()) ||
        clean(r.find('[field="descr"]').first());
      s.body = r
        .find(type === "179" ? '[field="text"]' : '[field="descr"]')
        .toArray()
        .map(rich)
        .filter(Boolean);
      s.kind = "cta";
      s.background = "#262626";
      s.layout = "banner";
    }
    if (type === "716") {
      s.background = "#262626";
      s.layout = "wide-form";
      s.paddingTop = 60;
      s.paddingBottom = 60;
    }
    if (type === "858") {
      const cols = r.find(".t-card__col").toArray();
      s.cards?.forEach((c, i) => {
        const col = $(cols[i]),
          title = col.find(".t-card__title").first();
        const raw = rich(title);
        const inner = col.find(".t858__inner-col").attr("style") || "";
        c.background = (inner.match(/background-color:([^;]+)/) || [])[1];
        if (c.background === "#606c59" || c.background === "#5d6c57")
          c.color = "#f4f8f2";
        if (/^0[1-9]/.test(c.title)) {
          c.number = c.title.slice(0, 2);
          c.title = c.title.slice(2);
        }
        if (/RH (Control|Defence|Detection)/.test(c.title)) {
          const pieces = raw
            .split(/<br\s*\/?\s*>/)
            .map((x) => load(x).text())
            .filter(Boolean);
          c.eyebrow = pieces.shift();
          c.title =
            pieces.join(" ") ||
            c.title
              .replace(
                /^RH (Control|Defence|Detection)\s*·?\s*(Influence)?/,
                "",
              )
              .trim();
          s.kind = "related";
        }
      });
      if (s.cards?.every((c) => c.number)) {
        s.kind = "process";
        s.columns = s.cards.length;
      }
    }
    if (s.kind === "gallery") {
      delete s.title;
      delete s.eyebrow;
      s.body = [];
      s.layout = "ai-gallery";
      s.bleed = true;
      s.cardWidth = 520;
    }
    if (s.kind === "cases") {
      s.bleed = true;
      s.cardWidth = 372;
      s.columns = Math.min(3, s.cards.length);
    }
    if (v.includes("Overview & RPN Score")) {
      s.kind = "modules";
      s.items = v.filter((x) => x !== "⟶");
      delete s.cards;
      delete s.columns;
    }
    if (s.kind === "process" && type === "396") {
      const start = v.indexOf("01"),
        cardEnd = [];
      s.cards = [];
      for (let i = start; i < v.length && /^0[1-9]$/.test(v[i]); i += 3) {
        s.cards.push({
          number: v[i],
          title: v[i + 1],
          parts: [rich(a[i + 2])],
        });
        cardEnd.push(i + 3);
      }
      s.columns = s.cards.length;
      s.note = a.slice(cardEnd.at(-1)).map(rich);
    }
    if (
      s.cards?.length &&
      /You're not pricing|You're Not Pricing/i.test(s.cards[0].title)
    ) {
      s.layout = "investment";
      s.columns = 2;
      s.tone = "white";
    }
    if (s.kind === "process")
      s.layout =
        slug === "online-review-management" ? "review-process" : "process";
    if (s.kind === "cta" && s.background !== "#262626") {
      s.layout = "compact-banner";
    }
    if (s.kind === "form" && type === "396") s.layout = "card-form";
    if (s.kind === "intro" && s.aside?.length) s.layout = "split";
  }
  // Native role cards with a separate dark title strip in the source.
  for (const id of slug === "brand-launch-strategy"
    ? ["rec2733489501"]
    : slug === "employer-reputation-management"
      ? ["rec2764286401"]
      : []) {
    const s = find(id);
    s.kind = "roles";
    s.layout = "capped-roles";
    s.cards = pair(id, 6);
    delete s.title;
    delete s.eyebrow;
    s.body = [];
    s.aside = [];
    s.tone = "outlined";
  }
  const compactCallouts =
    slug === "brand-launch-strategy"
      ? ["rec2733488201"]
      : slug === "employer-reputation-management"
        ? ["rec2764286001"]
        : [];
  for (const id of compactCallouts) {
    const v = values($("#" + id));
    set(id, {
      kind: "callout",
      layout: "pattern-callout",
      title: v[0],
      eyebrow: "",
      body: [v[1]],
      aside: [],
    });
  }
  if (slug === "brand-positioning-services") {
    set("rec2815643801", {
      title:
        "What It Takes To Fix A Brand Positioning Statement That Has Gone Blurry",
      eyebrow: "What's included",
      body: [rich(atoms($("#rec2815643801"))[0])],
      aside: atoms($("#rec2815643801")).slice(1).map(rich),
      layout: "split",
    });
    set("rec2946446601", {
      kind: "roles",
      tone: "outlined",
      layout: "standard-roles",
    });
    set("rec2947737401", { layout: "limits", tone: "outlined", columns: 4 });
    set("rec2947833601", { layout: "investment", columns: 2, tone: "green" });
  }
  if (slug === "brand-launch-strategy")
    set("rec2733490201", { layout: "limits", tone: "outlined", columns: 4 });
  if (slug === "employer-reputation-management")
    set("rec2764288101", { layout: "limits", tone: "outlined", columns: 4 });
  if (slug === "ai-influence-services") {
    set("rec2508888503", {
      kind: "signs",
      tone: "white",
      layout: "signs",
      bleed: true,
      cardWidth: 330,
      paddingTop: 45,
      paddingBottom: 60,
    });
    for (const id of ["rec2498464963", "rec2497346713", "rec2497346843"]) {
      const s = find(id);
      [s.title, s.eyebrow] = [s.eyebrow, s.title];
    }
    const s = find("rec2497346843"),
      a = atoms($("#rec2497346843"));
    s.headings = [
      clean(a[1]) + "\n" + clean(a[2]),
      clean(a[3]) + "\n" + clean(a[4]),
      clean(a[5]) + "\n" + clean(a[6]),
    ];
    s.rows = Array.from({ length: 6 }, (_, i) =>
      a.slice(7 + i * 4, 11 + i * 4).map(rich),
    );
    s.layout = "product-compare";
    const c = find("rec2497346863"),
      ca = atoms($("#rec2497346863"));
    c.eyebrow = clean(ca[0]);
    c.title = clean(ca[1]);
    c.body = [rich(ca[2])];
    c.layout = "case-spotlight";
    set("rec2497346893", {
      layout: "limits",
      tone: "outlined",
      eyebrow: "What we don't promise",
      title: "The limits of this solution",
      callout: undefined,
    });
    set("rec2497346943", { layout: "numbers", columns: 4 });
  }
  if (slug === "online-review-management") {
    set("rec2472370231", {
      columns: 2,
      layout: "review-process",
      tone: "white",
    });
    const intro = find("rec2472370081");
    intro.eyebrow = "Where it fits";
    intro.title = values($("#rec2472370081"))[0];
    intro.body = atoms($("#rec2472370081")).slice(1).map(rich);
    intro.aside = [];
    set("rec2472370101", {
      kind: "cta",
      background: "#606c59",
      layout: "strategy-banner",
      title: "Find out where your brand stands right now",
      eyebrow: "Start today",
      actions: [
        {
          label: "Find strategy online",
          href: "https://strategy.reputation.house/strategy/",
        },
        { label: "Get your tailored strategy", href: "#popup:consultation" },
      ],
      paddingTop: 100,
      paddingBottom: 100,
    });
    set("rec2473767481", { layout: "limits", tone: "outlined", columns: 4 });
  }
  if (slug === "serm-services") {
    p.hero.form = true;
    p.hero.action = "";
    const s = find("rec3729258103");
    [s.body, s.aside] = [s.aside, s.body];
    s.layout = "definition";
    set("rec3729363503", { tone: "green", layout: "serm-situations" });
    set("rec3739839003", { tone: "outlined", layout: "serm-steps" });
    set("rec3749154203", { layout: "serm-cases", bleed: true, cardWidth: 372 });
    set("rec3749257603", { layout: "trust", columns: 3 });
  }
  // Respect source spacing and keep card collections with the heading above them.
  for (let i = 0; i < p.sections.length; i++) {
    const s = p.sections[i];
    if (
      s.kind === "cards" &&
      s.cards?.some((c) => /^SOURCE:/i.test(load(c.parts.at(-1) || "").text()))
    )
      s.layout = "numbers";
    if (
      s.kind === "cards" &&
      s.cards?.length &&
      s.cards.every((c) => c.icon === undefined) &&
      s.layout === undefined
    )
      s.tone = s.tone || "outlined";
    if (s.cards && p.sections[i - 1]?.eyebrow?.match(/don't promise/i)) {
      s.layout = "limits";
      s.tone = "outlined";
    }
  }
}
fs.writeFileSync(
  "app/data/servicePages.json",
  JSON.stringify(pages, null, 2) + "\n",
);
fs.writeFileSync(
  "scripts/reference/service-assets.json",
  JSON.stringify(assets, null, 2) + "\n",
);
for (const slug of slugs)
  fs.writeFileSync(
    `app/pages/${slug}.vue`,
    `<template>\n  <ServicePage slug="${slug}" />\n</template>\n`,
  );
console.log("Refined", slugs.join(", "));
