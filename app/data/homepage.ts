const site = "https://reputation.house";

export const identityElements = [
  {
    key: "search",
    label: "SERM",
    title: "Search Results",
    description: "Google, Bing, Yandex – results, knowledge panels, tooltips",
    icon: "hexagon.svg",
    href: `${site}/serm-services`,
  },
  {
    key: "scan",
    label: "SCAN",
    title: "Brand mentions",
    description: "Social, blogs, news, video platforms and forums",
    icon: "scan.svg",
    href: `${site}/online-reputation-monitoring`,
  },
  {
    key: "ai",
    label: "AI",
    title: "AI Representation",
    description: "What ChatGPT, Gemini, Perplexity say about your brand",
    icon: "star-01.svg",
    href: `${site}/ai-influence-services`,
  },
  {
    key: "tone",
    label: "TONE",
    title: "Narratives & Sentiments",
    description: "Dominant narratives, tone shifts and trends",
    icon: "wind-02.svg",
    href: `${site}/brand-positioning-services`,
  },
  {
    key: "reviews",
    label: "REVIEWS",
    title: "Ratings & Reviews",
    description: "Ratings on review platforms and app stores",
    icon: "star-02.svg",
    href: `${site}/online-review-management`,
  },
];

export const credentials = [
  { title: "7+ years", description: "In ORM and Digital Risk Protection" },
  { title: "25 awards", description: "Recognized by Global Experts" },
  { title: "AI & ML", description: "Best use in 2026, Gold Stevie Award" },
  {
    title: "13 countries united",
    description: "In One Multilingual Expert Team",
  },
];

export const protectionElements = [
  {
    title: "AI Representation",
    icon: "ai.svg",
    description:
      "AI tools already describe your brand. Shape their answers before others do.",
    href: `${site}/ai-influence-services`,
  },
  {
    title: "Search Results",
    icon: "search.svg",
    description:
      "First-page results shape trust before the first conversation.",
    href: `${site}/serm-services`,
  },
  {
    title: "Brand Mentions",
    icon: "glasses.svg",
    description:
      "Old posts and forgotten mentions can still influence buying decisions.",
    href: `${site}/online-reputation-monitoring`,
  },
  {
    title: "Ratings & Reviews",
    icon: "review.svg",
    description:
      "A 3-star rating and a negative review lose you deals before your team even gets a call.",
    href: `${site}/online-review-management`,
  },
  {
    title: "Narratives & Sentiments",
    icon: "sentiments-and-narra.svg",
    description:
      "Your brand already has a narrative. Make sure it's you, who shapes it.",
    href: `${site}/reputation-narrative-management`,
  },
];

export const footprintStates = [
  {
    label: "State A",
    title: "Clearly negative",
    description:
      "You know you have a problem and you're looking for help. The risk is visible and at least actionable.",
    image: "scale-3.svg",
  },
  {
    label: "State B",
    title: "Mixed signal",
    description:
      "You fixed one part of your digital profile. Investors and partners find contradictions and quietly walk away.",
    image: "scale-2.svg",
    dangerous: true,
  },
  {
    label: "State C",
    title: "Managed narrative",
    description:
      "Your digital profile tells one consistent story. Every deal, partnership, and due diligence reinforces trust.",
    image: "scale-1.svg",
  },
];

export const statistics = [
  {
    value: "41%",
    label: "of companies",
    description: "lose revenue after a reputation incident",
    source: "Deloitte",
    href: "https://www2.deloitte.com/content/dam/Deloitte/global/Documents/Governance-Risk-Compliance/gx_grc_Reputation@Risk%20survey%20report_FINAL.pdf",
  },
  {
    value: "44%",
    label: "of a company’s market cap",
    description: "is tied to CEO reputation",
    source: "Weber Shandwick",
  },
  {
    value: "5–9%",
    label: "revenue growth",
    description: "for every +1 star in online rating platforms",
    source: "Harvard Business School",
    positive: true,
    href: "https://www.hbs.edu/ris/Publication%20Files/12-016_a7e4a5a2-03f9-490d-b093-8f951238dba2.pdf",
  },
  {
    value: "87%",
    label: "of companies",
    description: "rank reputation risk above every other strategic risk",
    source: "Deloitte",
    href: "https://www2.deloitte.com/content/dam/Deloitte/global/Documents/Governance-Risk-Compliance/gx_grc_Reputation@Risk%20survey%20report_FINAL.pdf",
  },
];

export const comparisonRows = [
  {
    capability: "Early risk detection",
    traditional: "Reactive",
    software: "—",
    platforms: "Partial",
    reputation: "Days-early signals",
  },
  {
    capability: "AI model monitoring",
    traditional: "—",
    software: "—",
    platforms: "—",
    reputation: "ChatGPT · Gemini · Perplexity",
  },
  {
    capability: "Financial impact language",
    traditional: "—",
    software: "—",
    platforms: "Partial",
    reputation: "Revenue · valuation · CAC",
  },
  {
    capability: "Proprietary platform",
    traditional: "—",
    software: "Tool only",
    platforms: "Platform only",
    reputation: "Platform + expert team",
  },
  {
    capability: "Research-backed methodology",
    traditional: "—",
    software: "—",
    platforms: "—",
    reputation: "7+ years primary data",
  },
];
