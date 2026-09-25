import fs from "node:fs";
import { load } from "cheerio";

// Extract content only. Rendering and responsive layout remain native Vue components.
const definitions = {
  detection: {
    technology: ["2143218113", "2143218133"],
    services: ["2143218143"],
    scenarios: [
      "2184295313",
      "2184688383",
      "2185526473",
      "2185535263",
      "2185548683",
      "2185554693",
    ],
    statement: "2188227383",
    risk: "2166808073",
    final: "2143218333",
  },
  control: {
    technology: ["2207051493", "2207051513"],
    services: ["2207051523", "2207229653"],
    scenarios: [
      "2207051643",
      "2207051653",
      "2207051663",
      "2207051673",
      "2207051683",
      "2207051693",
    ],
    statement: "2207051553",
    scope: "2373960323",
    risk: "2374721673",
    final: "2443446573",
  },
  defence: {
    technology: ["2290404803", "2290404823"],
    services: ["2290404833", "2290404853"],
    scenarios: [
      "2290404973",
      "2290404983",
      "2290404993",
      "2290405003",
      "2290405013",
      "2290405023",
    ],
    statement: "2290404883",
    scope: "2381287703",
    pricing: "2381310023",
    risk: "2443455133",
    final: "2443455283",
  },
  personal: {
    technology: ["2296396543", "2296396563"],
    services: ["2296396573", "2296396593"],
    scenarios: ["2296396713", "2296396723", "2296396733", "2296396743"],
    statement: "2296396623",
    risk: "2442641033",
    final: "2442641233",
  },
};
const result = {};
for (const [key, def] of Object.entries(definitions)) {
  const $ = load(fs.readFileSync(`scripts/reference/rh-${key}.html`, "utf8"));
  const records = JSON.parse(
    fs.readFileSync(`scripts/reference/rh-${key}.json`, "utf8"),
  );
  const clean = (el) => $(el).text().replace(/\s+/g, " ").trim();
  const atoms = (id) =>
    $(`#rec${id} .tn-elem[data-elem-type="text"] > .tn-atom`)
      .toArray()
      .filter((e) => clean(e));
  const texts = (id) =>
    records
      .find((r) => r.id === `rec${id}`)
      .atoms.map((a) => a.text)
      .filter(Boolean);
  const rich = (el) => {
    const blocks = [];
    let runs = [];
    const flush = () => {
      const combined = runs.map((r) => r.text).join("");
      while (runs.length && !runs[0].text.trim()) runs.shift();
      while (runs.length && !runs.at(-1).text.trim()) runs.pop();
      if (runs.length) {
        runs[0].text = runs[0].text.trimStart();
        runs.at(-1).text = runs.at(-1).text.trimEnd();
      }
      if (combined.trim())
        blocks.push({
          runs,
          items: [],
          spaceAfter: /\n\s*\n\s*$/.test(combined),
        });
      else if (/\n\s*\n/.test(combined) && blocks.length)
        blocks.at(-1).spaceAfter = true;
      runs = [];
    };
    const walk = (node, strong = false, emphasis = false) => {
      if (node.type === "text") {
        runs.push({ text: node.data.replace(/\s+/g, " "), strong, emphasis });
        return;
      }
      if (node.name === "br") {
        runs.push({ text: "\n", strong: false, emphasis: false });
        return;
      }
      if (node.name === "ul" || node.name === "ol") {
        flush();
        const items = [];
        for (const li of $(node).children("li").toArray()) {
          for (const child of li.children || []) walk(child);
          items.push(runs);
          runs = [];
        }
        blocks.push({ runs: [], items, spaceAfter: false });
        return;
      }
      for (const child of node.children || [])
        walk(
          child,
          strong || ["strong", "b"].includes(node.name),
          emphasis || ["em", "i"].includes(node.name),
        );
    };
    for (const node of $(el).contents().toArray()) walk(node);
    flush();
    const copy = $(el).clone();
    const bullets = copy.find("li").toArray().map(clean);
    copy.find("ul,ol").remove();
    const lead = clean(copy.find("strong,b").first());
    if (lead) copy.find("strong,b").first().remove();
    copy.find("br").replaceWith("\n");
    const paragraphs = copy
      .text()
      .split(/\n+/)
      .map((t) => t.replace(/\s+/g, " ").trim())
      .filter(Boolean);
    return { lead, paragraphs, bullets, blocks };
  };
  const carousels = $(".t1196").toArray();
  const pains = $(carousels[0])
    .find(".t1196__item")
    .toArray()
    .map((el) => {
      const content = rich($(el).find(".t-card__descr"));
      return {
        title: clean($(el).find(".t-card__title")),
        subtitle: content.lead,
        text: content.paragraphs.join("\n\n"),
      };
    });
  const roles = $(carousels[1])
    .find(".t1196__item")
    .toArray()
    .map((el) => {
      const body = $(el).find(".t-card__descr").clone();
      const quote = body
        .find("strong")
        .filter((_, e) => /^["“]/.test(clean(e)))
        .last();
      const quotation = clean(quote);
      quote.remove();
      return {
        title: clean($(el).find(".t-card__uptitle")),
        audience: clean($(el).find(".t-card__title")),
        content: rich(body),
        quote: quotation,
      };
    });
  const features = (ids) => {
    const lines = ids.flatMap(texts),
      features = [];
    for (let i = 0; i < lines.length; i++)
      if (/^Included in/i.test(lines[i]))
        features.push({
          title: lines[i - 2],
          text: lines[i - 1],
          badge: lines[i],
        });
    return features;
  };
  const statementRecord = $(`#rec${def.statement}`);
  const statementCarousel = statementRecord
    .nextAll(".r")
    .filter((_, el) => $(el).find(".t1196__item").length)
    .first();
  const statements = statementCarousel
    .find(".t1196__item")
    .toArray()
    .map((el) => clean($(el).find(".t-card__uptitle")))
    .filter(Boolean);
  const scope = def.scope ? texts(def.scope) : [];
  const risk = texts(def.risk),
    final = texts(def.final);
  const formData = $(`#rec${def.final} .tn-atom__inputs-data`).attr(
    "data-value",
  );
  result[key] = {
    pains,
    roles,
    platformTitle: texts(def.technology[0])[0],
    platformDescription: texts(def.technology[0])[1],
    serviceTitle: texts(def.services[0])[0],
    technology: features(def.technology),
    services: features(def.services),
    statementTitle: texts(def.statement)[0],
    statements,
    process: $(".t1108__col")
      .toArray()
      .map((el) => ({
        title: clean($(el).find(".t1108__title")),
        text: clean($(el).find(".t1108__text")),
      })),
    processIntro: records
      .find((r) =>
        r.atoms.some(
          (a) => a.text === "What Happens After You Submit a Request",
        ),
      )
      .atoms.map((a) => a.text)
      .filter(Boolean),
    scenarios: def.scenarios.map((id, i) => {
      const els = atoms(id),
        title = clean(els[0]),
        audience = clean(els[1]);
      const cells = els
        .slice(2)
        .filter(
          (el) =>
            ![
              "Situation",
              "Results",
              "Result",
              "What you get",
              "How it helps",
            ].includes(clean(el)) && !/^How RH /i.test(clean(el)),
        );
      if (cells.length % 3)
        throw new Error(
          `${key} ${id}: unexpected cells ${cells.map((e) => clean(e).slice(0, 100)).join(" | ")}`,
        );
      const rows = [];
      for (let j = 0; j < cells.length; j += 3)
        rows.push({
          situation: rich(cells[j]),
          help: rich(cells[j + 1]),
          result: rich(cells[j + 2]),
        });
      return { title, audience, tab: i === 0 ? "CEO & Owner" : title, rows };
    }),
    scope: scope.slice(0, 8).reduce((list, line, index) => {
      if (index % 2 === 0) list.push({ title: line, text: scope[index + 1] });
      return list;
    }, []),
    scopeStatistic:
      scope.length > 8
        ? { value: scope[8], label: scope[9], text: scope[10] }
        : null,
    pricing: def.pricing ? texts(def.pricing) : [],
    risk: {
      eyebrow: risk[0],
      title: risk[1],
      text: rich(atoms(def.risk)[2]).paragraphs.join("\n\n"),
      action: risk[3],
    },
    questions: records.flatMap((r) => r.faq),
    final: {
      title: final[0],
      text: final[1],
      action: final[2],
      email: final[3],
      eyebrow: final[4],
      note: final[5],
      fields: formData
        ? JSON.parse(formData).map((f) => ({
            name: f.li_name,
            title: f.li_title,
            placeholder: f.li_ph,
            type: f.li_type,
            required: f.li_req === "y",
          }))
        : [],
    },
  };
  console.log(
    key,
    JSON.stringify({
      features: result[key].technology.length,
      services: result[key].services.length,
      scenarios: result[key].scenarios.map((s) => s.rows.length),
      statements: statements.length,
      faq: result[key].questions.length,
      form: result[key].final.fields,
    }),
  );
}
fs.writeFileSync(
  "app/data/rhDetails.json",
  JSON.stringify(result, null, 2) + "\n",
);
