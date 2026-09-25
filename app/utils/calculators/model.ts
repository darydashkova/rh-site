import { rhScCalc } from "./serp-reputation-score.js";
import { rhExCalc } from "./executive-reputation-score.js";
import { rhRiCalcEMV } from "./brand-monitoring-roi.js";
import {
  rhRiConversionMultiplier,
  rhRiReviewCountMultiplier,
} from "./review-impact-revenue.js";
import {
  baseTime,
  spreadMult,
  platformMult,
  checklist,
} from "./crisis-response-time.js";
import {
  rhRevenueFromSlider,
  rhComputeTotal,
  rhIncidentRanges,
} from "./reputation-damage-cost.js";
import {
  rhRtIncidentRanges,
  rhRtReachMult,
  rhRtActiveMult,
  rhRtPositiveMult,
  rhRtSizeMult,
} from "./reputation-recovery-timeline.js";
export type CalculationResult = {
  title: string;
  value: string;
  subtitle?: string;
  score?: number;
  metrics: { label: string; value: string }[];
  advice?: string[];
};
export const revenue = rhRevenueFromSlider;
export function money(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(n);
}
const clamp = (n: number, min = 0, max = 100) =>
  Math.max(min, Math.min(max, n));
export function calculate(
  kind: string,
  s: Record<string, string | number>,
): CalculationResult {
  const n = (k: string) => Math.max(0, Number(s[k]) || 0),
    yes = (k: string) => s[k] === "yes";
  const r: CalculationResult = {
    title: "Your result",
    value: "",
    metrics: [],
    advice: [],
  };
  if (kind === "serp-reputation-score") {
    const owned = clamp(n("rh-sc-owned"), 0, 10),
      neg = clamp(n("negatives"), 0, 3),
      v = rhScCalc(owned, neg, yes("posone"), yes("wiki"));
    r.title = "SERP Control Score";
    r.value = v.total + " / 100";
    r.score = v.total;
    r.subtitle =
      v.total >= 75
        ? "Strong control — maintain and monitor"
        : v.total >= 50
          ? "Moderate control — visible gaps to close"
          : v.total >= 25
            ? "Weak control — significant exposure"
            : "Critical — your SERP is largely uncontrolled";
    r.metrics = [
      { label: "Controlled search results", value: owned * 10 + "%" },
      { label: "Estimated searcher loss", value: [0, 22, 44, 59][neg] + "%" },
      { label: "Growth potential", value: 100 - v.total + " pts" },
    ];
    if (!yes("posone")) r.advice!.push("Secure position #1 (+15 points).");
    if (owned < 10)
      r.advice!.push(
        `Claim ${10 - owned} more top-10 positions (+${(10 - owned) * 5} points).`,
      );
    if (neg)
      r.advice!.push(
        "Address negative search results (+ " + (20 - v.negScore) + " points).",
      );
    if (!yes("wiki"))
      r.advice!.push(
        "Build authoritative sources for a Knowledge Panel or Wikipedia article (+15 points).",
      );
  } else if (kind === "executive-reputation-score") {
    const v = rhExCalc(
      yes("site"),
      yes("linkedin"),
      n("media"),
      yes("negative"),
      s.position,
    );
    r.title = "Executive Reputation Score";
    r.value = v.total + " / 100";
    r.score = v.total;
    r.subtitle =
      v.total >= 75
        ? "Strong digital presence"
        : v.total >= 50
          ? "Moderate presence — visible gaps"
          : v.total >= 25
            ? "Weak presence — significant exposure"
            : "Critical — largely invisible or unprotected online";
    r.metrics = [
      { label: "Personal website", value: v.siteScore + " pts" },
      { label: "LinkedIn", value: v.linkedInScore + " pts" },
      { label: "Media presence", value: v.mediaScore + " pts" },
      { label: "Negative content", value: v.negScore + " pts" },
      { label: "Leadership position", value: v.posScore + " pts" },
    ];
    if (!yes("site"))
      r.advice!.push("Create a controlled personal website or biography.");
    if (!yes("linkedin"))
      r.advice!.push("Build a complete, current LinkedIn profile.");
    if (!n("media"))
      r.advice!.push("Establish independent media coverage of your expertise.");
    if (yes("negative"))
      r.advice!.push("Address negative content visible in search results.");
  } else if (kind === "brand-monitoring-roi") {
    const v = rhRiCalcEMV(
      n("rh-mentions"),
      n("rh-impressions"),
      n("rh-cpm"),
      clamp(n("rh-negative")),
      clamp(n("rh-response"), 0, 168),
    );
    r.title = "Monthly earned media value";
    r.value = money(v.adjustedEMV);
    r.subtitle = "Sentiment-adjusted estimate, not direct revenue.";
    r.metrics = [
      { label: "Paid-media equivalent", value: money(v.baseEMV) },
      { label: "Value captured", value: money(v.capturedEMV) + "/mo" },
      { label: "Lost to slow response", value: money(v.lostEMV) + "/mo" },
      { label: "Annual lost value", value: money(v.lostEMV * 12) + "/yr" },
    ];
  } else if (kind === "review-impact-revenue") {
    const rating = clamp(n("rh-ri-rating"), 10, 50) / 10,
      base = n("rh-ri-aov") * n("rh-ri-customers"),
      count = Math.min(rhRiReviewCountMultiplier(n("rh-ri-count")) / 2.2, 1.15),
      current = base * rhRiConversionMultiplier(rating) * count;
    const gap = Math.max(0, 4 - rating),
      lift = Math.min(
        gap,
        (clamp(n("rh-ri-negative")) / 100) * 0.75 * gap * 2 + 0.15,
      ),
      loss =
        clamp(n("rh-ri-negative")) === 0
          ? 0
          : Math.max(
              0,
              base *
                rhRiConversionMultiplier(Math.min(5, rating + lift)) *
                count -
                current,
            );
    r.title = "Estimated monthly revenue";
    r.value = money(current);
    r.subtitle = `Based on a ${rating.toFixed(1)}-star rating and ${n("rh-ri-count")} reviews.`;
    r.metrics = [
      {
        label: "Change at 4.5 stars",
        value: money(base * count - current) + "/mo",
      },
      {
        label: "Change at 5.0 stars",
        value:
          money(base * rhRiConversionMultiplier(5) * count - current) + "/mo",
      },
      { label: "Annual negative-review drag", value: money(loss * 12) },
    ];
  } else if (kind === "crisis-response-time") {
    const type = String(s.type) as keyof typeof baseTime,
      spread = String(s.spread) as keyof typeof spreadMult,
      platform = String(s.platform) as keyof typeof platformMult;
    const critical = clamp(
        Math.round(
          baseTime[type] * spreadMult[spread] * platformMult[platform] * 10,
        ) / 10,
        0.5,
        48,
      ),
      irreversible = Math.min(120, Math.round(critical * 4.5 * 10) / 10),
      time = (v: number) => (v < 1 ? Math.round(v * 60) + " min" : v + "h");
    r.title =
      critical <= 2
        ? "RED ZONE — Act immediately"
        : critical <= 8
          ? "ORANGE ZONE — Urgent response needed"
          : "YELLOW ZONE — Response window open";
    r.value = time(critical);
    r.subtitle = "Critical window · first response";
    r.metrics = [
      {
        label: "Point of no return — damage hardens",
        value: time(irreversible),
      },
    ];
    r.advice = (checklist[type] || []).map((a: string[]) => a.join(" — "));
  } else if (kind === "reputation-damage-cost") {
    const incident = String(s.incident) as keyof typeof rhIncidentRanges,
      v = rhComputeTotal(revenue(n("rh-revenue")), incident, s.reach, s.plan);
    r.title = rhIncidentRanges[incident].label + " · " + s.reach + " reach";
    r.value = money(v.totalMin) + " – " + money(v.totalMax);
    r.subtitle = "Estimated total exposure";
    r.metrics = [
      {
        label: "Direct impact",
        value: money(v.directMin) + " – " + money(v.directMax),
      },
      {
        label: "Recovery cost",
        value: money(v.recoveryMin) + " – " + money(v.recoveryMax),
      },
      {
        label: "Crisis response plan",
        value: yes("plan") ? "−30% applied" : "No plan in place",
      },
    ];
    r.advice = [
      "Planning estimate based on published research. Actual costs depend on industry, response speed, and your digital footprint.",
    ];
  } else if (kind === "reputation-recovery-timeline") {
    const inc =
      rhRtIncidentRanges[String(s.incident) as keyof typeof rhRtIncidentRanges];
    if (!inc) return r;
    const mult =
      rhRtReachMult[String(s.reach) as keyof typeof rhRtReachMult] *
      rhRtActiveMult[String(s.active) as keyof typeof rhRtActiveMult] *
      rhRtPositiveMult[String(s.positive) as keyof typeof rhRtPositiveMult] *
      rhRtSizeMult[String(s.size) as keyof typeof rhRtSizeMult];
    const min = Math.max(1, Math.round(inc.min * mult * 10) / 10),
      max = Math.round(inc.max * mult * 10) / 10,
      stab = Math.max(1, Math.round(min * 4.33 * 0.12)),
      neut = Math.max(2, Math.round(min * 4.33 * 0.28)),
      rec = Math.max(1, Math.round((max - (stab + neut) / 4.33) * 10) / 10);
    r.title = "Your estimated recovery timeline";
    r.value = min + "–" + max + " months";
    r.subtitle = "For " + inc.label + " with " + s.reach + " reach";
    r.metrics = [
      { label: "Stabilization — contain the spread", value: stab + " weeks" },
      {
        label: "Neutralization — correct the narrative",
        value: neut + " weeks",
      },
      { label: "Recovery — rebuild trust", value: rec + " months" },
    ];
    if (yes("active")) r.advice!.push("Stop the active spread first.");
    if (!yes("positive")) r.advice!.push("Build a positive content base.");
    if (s.size === "large")
      r.advice!.push("Align messaging across stakeholders.");
    r.advice!.push("Monitor through the full recovery window.");
  }
  return r;
}
export const surfaceNames = [
  "Search",
  "AI Platforms",
  "Media & Social",
  "Reviews",
  "Compliance",
  "Crisis Readiness",
];
export const surfaceMax = [20, 20, 20, 15, 15, 10];
export function exposure(answers: Record<string, string | number>) {
  const groups = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
      [13, 14, 15],
      [16, 17, 18, 19, 20],
    ],
    rawMax = [12, 12, 12, 11, 13, 20];
  const values = groups.map((qs, i) =>
    Math.round(
      (qs.reduce((sum, q) => sum + (Number(answers["q" + q]) || 0), 0) /
        rawMax[i]!) *
        surfaceMax[i]!,
    ),
  );
  const total = values.reduce((a, b) => a + b, 0);
  return {
    values,
    total,
    status:
      total < 20
        ? "Minimal"
        : total < 40
          ? "Moderate"
          : total < 60
            ? "Elevated"
            : total < 80
              ? "High"
              : "Critical",
  };
}
