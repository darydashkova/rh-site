import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { load } from "cheerio";

// Reference HTML is used only at build time to extract editorial content.
// The website renders native responsive Vue sections, not Tilda markup or scripts.
const slugs = [
  "online-reputation-monitoring",
  "social-listening",
  "brand-audit",
  "ai-brand-monitoring",
  "digital-risk-protection",
  "brand-reputation-services",
];
const assets = {};
function asset(url) {
  if (!url || !/^https:\/\/(static|optim)\.tildacdn\.(net|com)\//.test(url))
    return "";
  const name = `service-${crypto.createHash("sha1").update(url).digest("hex").slice(0, 10)}${path.extname(new URL(url).pathname).toLowerCase() || ".png"}`;
  assets[name] = url;
  return `/images/${name}`;
}
const override = {
  rec3364859103: { kind: "callout" },
  rec2786390903: { kind: "facts" },
  rec2786085703: { kind: "signs", chunk: 4, columns: 3 },
  rec2636909901: { kind: "cards", tone: "green", columns: 5 },
  rec2636910501: { kind: "callout" },
  rec2636910901: { kind: "roles", chunk: 6 },
  rec2690602301: { kind: "insights", chunk: 3 },
  rec2487124293: { kind: "intro", order: [3, 2, 1, 0] },
  rec2488447263: { kind: "quote" },
  rec2488444063: { kind: "intro", order: [0] },
  rec2786086803: { kind: "compare", head: 7, columns: 4, tail: 32 },
  rec2786087103: { kind: "cases", intro: 3 },
};

const output = {};
for (const slug of slugs) {
  const $ = load(fs.readFileSync(`scripts/reference/${slug}.html`, "utf8"));
  const clean = (e) => $(e).text().replace(/\s+/g, " ").trim();
  function rich(el) {
    if (!el) return "";
    const node = $(el).clone();
    node.find("script,style,iframe,form,input").remove();
    node.find("span[style]").each((_, e) => {
      if (/font-weight:\s*(bold|[6-9]00)/.test($(e).attr("style") || ""))
        $(e).replaceWith(`<strong>${$(e).html()}</strong>`);
    });
    node.find("*").each((_, e) => {
      if (
        !["strong", "b", "em", "i", "br", "p", "ul", "ol", "li", "a"].includes(
          e.name,
        )
      )
        $(e).replaceWith($(e).contents());
      else
        for (const k of Object.keys(e.attribs || {}))
          if (!(e.name === "a" && k === "href")) $(e).removeAttr(k);
    });
    node.find("a").each((_, e) => {
      const href = $(e).attr("href") || "";
      if (!/^(https?:|mailto:|tel:|\/|#)/.test(href)) $(e).removeAttr("href");
    });
    return (node.html() || "").trim();
  }
  const texts = (r) =>
    $(r)
      .find('.tn-elem[data-elem-type="text"] > .tn-atom')
      .toArray()
      .filter((e) => clean(e));
  const imageData = (e) => ({
    src: asset($(e).attr("data-original") || $(e).attr("src")),
    alt: $(e).attr("alt") || "",
    width: Number($(e).closest(".tn-elem").attr("data-field-width-value") || 0),
  });
  const images = (r) =>
    $(r)
      .find("img[data-original],img[src]")
      .toArray()
      .map(imageData)
      .filter((e) => e.src);
  const links = (r) =>
    $(r)
      .find(
        '.tn-elem[data-elem-type="button"] a, .t-btn, .t-card__btn, a[href^="#popup:"]',
      )
      .toArray()
      .map((e) => ({ label: clean(e), href: $(e).attr("href") || "#audit" }))
      .filter((e) => e.label);
  function header(els, order) {
    const t = order ? order.map((i) => els[i]).filter(Boolean) : els;
    if (!t.length) return {};
    if (t.length === 1) return { eyebrow: clean(t[0]) };
    const heading = t.find(
      (e) => $(e).is("h1,h2,h3") || $(e).find("h1,h2,h3").length,
    );
    let title = heading || t[1],
      eyebrow = heading
        ? t.find((e) => e !== heading && clean(e).length < 100) || t[0]
        : t[0];
    const body = t.filter((e) => e !== title && e !== eyebrow).map(rich);
    return {
      eyebrow: clean(eyebrow),
      title: clean(title),
      body: body.slice(0, 1),
      aside: body.slice(1),
    };
  }
  function paddedCards(r) {
    const candidates = $(r)
      .find(".tn-group")
      .toArray()
      .filter((e) => {
        const w = Number($(e).attr("data-group-width-value")),
          p = parseFloat($(e).attr("data-group-padding") || "0");
        return w >= 180 && w <= 600 && p >= 12 && texts(e).length >= 2;
      });
    return candidates.filter(
      (e) =>
        !$(e)
          .parents()
          .toArray()
          .some((p) => candidates.includes(p)),
    );
  }
  function makeCard(r) {
    const els = texts(r),
      im = images(r).filter((e) => e.width < 500),
      action = $(r)
        .find("a")
        .filter((_, e) => /^(Learn more|See Full|Read Full)/i.test(clean(e)))
        .first(),
      link =
        links(r)[0] ||
        (action.length
          ? { label: clean(action), href: action.attr("href") }
          : undefined);
    return {
      title: clean(els[0]),
      parts: els.slice(1).map(rich),
      icon: im[0]?.src,
      link,
    };
  }
  function pairCards(els, chunk = 2) {
    const result = [];
    for (let i = 0; i < els.length; i += chunk)
      result.push({
        title: clean(els[i]),
        parts: els.slice(i + 1, i + chunk).map(rich),
      });
    return result;
  }
  function standard(r, type) {
    const title = $(r).find(".t-section__title,.t-title").first(),
      eyebrow = $(r).find(".t-section__uptitle,.t-uptitle").first();
    const desc = $(r)
      .find(".t-section__descr,.t-descr")
      .filter((_, e) => !$(e).closest(".t-card__col,.t-item").length)
      .first();
    const s = {
      title: clean(title),
      eyebrow: clean(eyebrow),
      body: desc.length ? [rich(desc)] : [],
    };
    if (["858", "1186", "1196"].includes(type)) {
      s.kind = type === "1196" ? "gallery" : "cards";
      s.columns =
        type === "1196"
          ? 3
          : Number(
              $(r).find("[data-columns-in-row]").attr("data-columns-in-row") ||
                4,
            );
      s.cards = $(r)
        .find(".t-card__col, .t1196__item, .t1186__item")
        .toArray()
        .map((e) => {
          const image = $(e).find("[data-original]").first();
          return {
            title: clean($(e).find(".t-card__title,.t1186__title")),
            eyebrow: clean($(e).find(".t-card__uptitle,.t1186__descr")),
            parts: [rich($(e).find(".t-card__descr,.t1186__text"))],
            icon: asset(image.attr("data-original")),
            link: links(e)[0],
          };
        });
      if (type === "1186") s.kind = "cases";
    } else if (type === "716") s.kind = "form";
    else if (["179", "213"].includes(type)) {
      s.kind = "cta";
      s.actions = links(r);
      if (type === "179") s.kind = "callout";
    } else if (type === "1331") {
      s.kind = "actions";
      s.actions = links(r);
    } else s.kind = "intro";
    return s;
  }
  const sections = [];
  const records = $("#allrecords > .r").toArray();
  let hero;
  for (const r of records) {
    const id = $(r).attr("id"),
      type = $(r).attr("data-record-type"),
      t = texts(r),
      str = t.map(clean),
      style = $(r).attr("style") || "",
      css = $(r).find("style").text();
    if (["131", "270", "702"].includes(type)) continue;
    const bg =
      (style.match(/background-color:([^;]+)/) ||
        css.match(/artboard\{[^}]*?background-color:([^;}]+)/) ||
        [])[1] || "#ffffff";
    const base = {
      background: bg,
      paddingTop: Number((style.match(/padding-top:(\d+)/) || [])[1] || 0),
      paddingBottom: Number(
        (style.match(/padding-bottom:(\d+)/) || [])[1] || 0,
      ),
    };
    if (type === "668" || type === "849") {
      sections.push({
        ...base,
        kind: "faq",
        questions: $(r)
          .find(".t668__accordion,.t849__accordion")
          .toArray()
          .map((e) => ({
            title: clean($(e).find(".t668__title,.t849__title")),
            answer: clean($(e).find(".t668__text,.t849__text")),
          })),
      });
      continue;
    }
    if (type !== "396") {
      const s = standard(r, type);
      if (["rec2942801403", "rec2942803503"].includes(id)) {
        base.background = "#262626";
        base.paddingTop = 100;
        base.paddingBottom = 100;
      }
      if (
        s.title ||
        s.eyebrow ||
        s.cards?.length ||
        s.body.length ||
        s.actions?.length
      )
        sections.push({ ...base, ...s });
      continue;
    }
    if (!t.length) {
      const actions = links(r);
      if (actions.length) sections.push({ ...base, kind: "actions", actions });
      continue;
    }
    if (!hero) {
      const hi = t.findIndex((e) => $(e).is("h1") || $(e).find("h1").length),
        title = hi >= 0 ? hi : str.findIndex((s) => /Brand Audit &/.test(s));
      const ei = str.findIndex((s) => /^RH (Detection|Control)/i.test(s));
      const ci = str.findIndex((s) => /covers$/i.test(s));
      const count = slug === "ai-brand-monitoring" ? 4 : 5;
      hero = {
        title: str[title],
        eyebrow: str[ei],
        body: t.slice(title + 1, ei).map(rich),
        action: links(r)[0]?.label || "Request a confidential audit",
        note: str.find((s) => s.startsWith("NDA")),
        coverageTitle: str[ci],
        coverage: ci >= 0 ? t.slice(ci + 1, ci + 1 + count).map(rich) : [],
        background: bg,
        logos:
          slug === "ai-brand-monitoring"
            ? images(r)
                .filter((i) => /_1.png/.test(assets[i.src.split("/").at(-1)]))
                .map((i) => ({ src: i.src, alt: i.alt }))
            : [],
      };
      if (slug === "brand-audit") hero.body = t.slice(1, 2).map(rich);
      hero.coverageIcons = images(r)
        .filter((i) => i.width > 0 && i.width <= 32)
        .slice(0, count)
        .map((i) => i.src);
      hero.pattern = images(r).find((i) => i.width > 800)?.src;
      hero.coverage = hero.coverage.map((v) =>
        v.replace(/^([^<—]+)(\s*—)/, "<strong>$1</strong>$2"),
      );
      continue;
    }
    const forced = override[id] || {};
    let s = { ...base, ...forced };
    const cs = paddedCards(r);
    const slide = /^\d{2}\/\d{2}$/.test(str.at(-1));
    if (slide) {
      const im = images(r).sort((a, b) => b.width - a.width)[0];
      const item = {
        title: str[0],
        parts: [rich(t[1])],
        eyebrow: str[2],
        image: im?.src,
      };
      if (sections.at(-1)?.kind === "showcase")
        sections.at(-1).slides.push(item);
      else sections.push({ ...base, kind: "showcase", slides: [item] });
      continue;
    }
    if (str[0] === "A") {
      const columns =
          forced.columns || (/What it gives you/.test(str[5]) ? 3 : 4),
        head = forced.head || (columns === 3 ? 5 : 6);
      let end =
        forced.tail ||
        str.findIndex(
          (v, i) =>
            i >= head &&
            /^(how we|Who|End-to-end|Platform & Expert|Which RH)/i.test(v),
        );
      // First-cell labels are allowed to start with "Who".
      if (!forced.tail) {
        end = str.findIndex(
          (v, i) =>
            i >= head &&
            /^(how we're different|End-to-end solution|Platform & Expert|Which RH product)/i.test(
              v,
            ),
        );
      }
      if (end < 0) end = t.length;
      const rows = [];
      for (let i = head; i + columns <= end; i += columns)
        rows.push(t.slice(i, i + columns).map(rich));
      const headings =
        columns === 3
          ? [str[1] + "\n" + str[2], str[3] + "\n" + str[4]]
          : head === 7
            ? [
                str[1] + "\n" + str[2],
                str[3] + "\n" + str[4],
                str[5] + "\n" + str[6],
              ]
            : [str[1] + "\n" + str[2], str[3] + "\n" + str[4], str[5]];
      s = { ...s, kind: "compare", ...header(t.slice(end)), headings, rows };
    } else if (forced.kind === "intro")
      s = { ...s, ...header(t, forced.order) };
    else if (forced.kind === "quote") s = { ...s, body: t.map(rich) };
    else if (forced.kind === "callout")
      s = { ...s, title: str[0], body: t.slice(1).map(rich) };
    else if (forced.kind === "facts")
      s = {
        ...s,
        cards: str.map((v) => ({ title: "", parts: [v] })),
        columns: 3,
      };
    else if (forced.kind === "insights")
      s = { ...s, eyebrow: str.at(-1), cards: pairCards(t.slice(0, 15), 3) };
    else if (forced.kind === "roles") s = { ...s, cards: pairCards(t, 6) };
    else if (forced.kind === "signs") s = { ...s, cards: pairCards(t, 4) };
    else if (str.includes("01") && str.includes("04")) {
      const start = str.indexOf("01");
      const end = str.indexOf("04") + 3;
      s = {
        ...s,
        kind: "process",
        ...header(t.slice(0, start)),
        cards: [],
        note: t.slice(end).map(rich),
      };
      for (let i = start; i < end; i += 3)
        s.cards.push({
          number: str[i],
          title: str[i + 1],
          parts: [rich(t[i + 2])],
        });
    } else if (/^(Who it's for|Who it’s for)$/i.test(str[0]) && t.length > 5) {
      s = { ...s, kind: "roles", ...header(t.slice(0, 2)), cards: [] };
      if (cs.length >= 3) s.cards = cs.map(makeCard);
      else s.cards = pairCards(t.slice(2), 6);
    } else if (
      str.includes("Overview & RPN Score") &&
      str.includes("Reports Archive")
    )
      s = { ...s, kind: "modules", items: str };
    else if ($(r).find('[data-elem-type="form"]').length)
      s = { ...s, kind: "form", title: str[0], body: t.slice(1).map(rich) };
    else if (bg === "#262626")
      s = {
        ...s,
        kind: "cta",
        title: str[0],
        body: t.slice(1).map(rich),
        actions: links(r),
      };
    else if (
      forced.kind === "cases" ||
      str.includes("RH client result") ||
      str.includes("Market pattern")
    ) {
      const intro = forced.intro || 0;
      s = {
        ...s,
        kind: "cases",
        ...header(t.slice(0, intro)),
        cards: cs.map(makeCard),
      };
      if (!s.cards.length) s.cards = pairCards(t.slice(intro), 9);
    } else if (
      /^(Related solutions|Related solutions by reputation house)$/i.test(
        str.at(-2),
      ) ||
      str.some((v) => v === "Learn more")
    ) {
      const idx = str.findIndex((v) => /^Related solutions/i.test(v));
      s = {
        ...s,
        kind: "related",
        ...header(idx >= 0 ? t.slice(idx) : []),
        cards: cs.map(makeCard),
        columns: 4,
      };
      if (!s.cards.length) {
        for (let i = 0; i < (idx >= 0 ? idx : t.length); i += 4)
          s.cards.push({
            eyebrow: str[i],
            title: str[i + 1],
            parts: [rich(t[i + 2])],
            link: {
              label: "Learn more",
              href:
                $(t[i + 3])
                  .find("a")
                  .attr("href") || "/solutions",
            },
          });
      }
    } else if (t.length === 10 && /What we don't promise/i.test(str[8]))
      s = {
        ...s,
        kind: "cards",
        ...header(t.slice(8)),
        cards: pairCards(t.slice(0, 8)),
        columns: 2,
        tone: "plain",
      };
    else if (cs.length >= 2) {
      const outside = t.filter(
        (e) => !cs.some((c) => $(e).parents().toArray().includes(c)),
      );
      s = {
        ...s,
        kind: s.kind || "cards",
        cards: cs.map(makeCard),
        columns: s.columns || Math.min(cs.length, 4),
        tone: s.tone || (bg === "#f3f3f3" ? "white" : "pale"),
      };
      if (outside.length === 2) {
        s.callout = { title: clean(outside[0]), body: [rich(outside[1])] };
      } else if (outside.length) s = { ...s, ...header(outside) };
    } else if (t.length >= 6 && t.length % 2 === 0)
      s = {
        ...s,
        kind: "cards",
        cards: pairCards(t),
        columns: t.length === 8 ? 2 : 4,
        tone: "plain",
      };
    else if (t.length >= 6 && t.length % 3 === 0)
      s = { ...s, kind: "statistics", cards: pairCards(t, 3), columns: 4 };
    else if (t.length <= 3 && links(r).length)
      s = {
        ...s,
        kind: "cta",
        title: str[0],
        body: t.slice(1).map(rich),
        actions: links(r),
      };
    else s = { ...s, kind: "intro", ...header(t) };
    sections.push(s);
  }
  // Apply deliberate layout variations instead of inheriting editor coordinates.
  for (const section of sections) {
    if (section.kind === "compare" && section.aside?.length) {
      section.note = section.aside;
      delete section.aside;
    }
    if (
      section.kind === "cards" &&
      section.cards?.[0]?.title.startsWith("You're")
    ) {
      section.columns = 2;
      section.tone = "plain";
    }
    if (
      section.kind === "cards" &&
      section.cards?.[0]?.title.startsWith("Full-field Data Pull")
    )
      section.tone = "outlined";
    if (section.kind === "related")
      for (const c of section.cards) {
        c.eyebrow = c.title;
        c.title = load(c.parts.shift() || "").text();
        c.parts = c.parts.filter((v) => load(v).text() !== "Learn more");
      }
    if (section.kind === "cases")
      for (const c of section.cards) {
        if (/^(RH client result|Market pattern)$/i.test(c.title)) {
          c.eyebrow = c.title;
          c.title = load(c.parts.shift() || "").text();
        }
        const before = c.parts.findIndex((v) =>
          /^(Before|What happened)$/.test(load(v).text()),
        );
        const after = c.parts.findIndex((v) =>
          /^(After|Mechanic)$/.test(load(v).text()),
        );
        if (before >= 0 && after > before) {
          c.subtitle = c.parts.slice(0, before).join(" ");
          c.before = c.parts.slice(before, after);
          c.after = c.parts.slice(after, -1);
          c.source = c.parts.at(-1);
          c.parts = [];
        }
      }
    if (
      section.kind === "cards" &&
      section.cards?.length === 4 &&
      section.cards[0].title === "Last to Know"
    )
      section.columns = 4;
    if (
      section.kind === "cards" &&
      section.cards?.[0]?.title === "Full-field Snapshot"
    ) {
      section.columns = 5;
      section.tone = "green";
    }
    if (slug === "digital-risk-protection" && section.kind === "cards") {
      if (section.cards[0]?.title.includes("Chief Risk"))
        section.kind = "roles";
      if (section.cards[0]?.title === "01Diagnostics") section.kind = "process";
    }
    if (section.kind === "process")
      for (const c of section.cards) {
        const m = c.title.match(/^(\d{2})(.+)/);
        if (m) {
          c.number = m[1];
          c.title = m[2];
        }
      }
  }
  output[slug] = {
    slug,
    metaTitle: $("title").text(),
    description: $('meta[name="description"]').attr("content") || "",
    hero,
    sections,
  };
  console.log(
    slug,
    hero.title,
    sections
      .map(
        (s) =>
          `${s.kind}:${s.cards?.length || s.slides?.length || s.rows?.length || s.questions?.length || 0}`,
      )
      .join(" "),
  );
}
fs.writeFileSync(
  "app/data/servicePages.json",
  JSON.stringify(output, null, 2) + "\n",
);
fs.writeFileSync(
  "scripts/reference/service-assets.json",
  JSON.stringify(assets, null, 2) + "\n",
);
