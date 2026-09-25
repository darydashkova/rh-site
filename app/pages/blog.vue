<script setup lang="ts">
const articles = [
  {
    title:
      "Enterprise Reputation Crisis Recovery: What Happens to Search and How Long It Takes",
    description:
      "Enterprise reputation crisis recovery is the work of restoring what search engines and AI assistants show about a company after a negative event.",
    href: "https://reputation.house/blog/enterprise-reputation-crisis-recovery",
    image: "/images/resource-ed1a06d4cc3d.png",
    alt: "Glass of water and a closed book on a dark table touched by light suggesting a moment of recovery",
    date: "2026-08-25",
    dateLabel: "25.08.2026",
  },
  {
    title:
      "Why a Great Product Doesn't Protect Your Reputation: The Narrative Gap Explained",
    description:
      "There's a failure mode that almost no one talks about in brand strategy: the company with a genuinely strong product whose market position collapses anyway.",
    href: "https://reputation.house/blog/narrative-gap-brand-reputation",
    image: "/images/resource-dbb8d2d89ce2.png",
    alt: "Executive leaning over a table of printed strategy and Q1 performance documents a companys own account of itself",
    date: "2026-08-18",
    dateLabel: "18.08.2026",
  },
  {
    title:
      "The Fifth Risk: Why Reputational Risk Is Missing from the CRO's Top Four — and What That Costs You",
    description:
      "Reputational risk is rarely among them. Not because it's considered unimportant, but because it doesn't fit neatly into the frameworks most risk functions inherited. It has no standard unit of measurement.",
    href: "https://reputation.house/blog/reputational-risk-cro-framework",
    image: "/images/resource-b40f9ffc4ac6.png",
    alt: "Muted red dashes fanning across a fog-covered landscape a pattern fading into low visibility",
    date: "2026-08-17",
    dateLabel: "17.08.2026",
  },
  {
    title:
      "When Good Numbers Aren't Enough: The Narrative Vacuum That Kills Stock Price",
    description:
      "In July 2026, Citigroup reported quarterly results that beat Wall Street estimates across the board — earnings per share of $3.15 against a roughly $2.74 consensus, revenue of $24.8 billion, its best quarter in a decade.",
    href: "https://reputation.house/blog/narrative-vacuum-stock-price",
    image: "/images/resource-fcaa62ce547d.png",
    alt: "Executive in a grey suit holding a drink and pressing a lit button on a numbered elevator panel",
    date: "2026-08-11",
    dateLabel: "11.08.2026",
  },
  {
    title:
      "Data Centers and $130B in Blocked Investments: What a Reputation Failure Really Costs Infrastructure Projects",
    description:
      "Across the United States, that dynamic has stalled a staggering amount of infrastructure capital in a single quarter. The projects aren't failing because of engineering flaws or financing gaps. They're failing on reputation.",
    href: "https://reputation.house/blog/reputation-risk-infrastructure-projects",
    image: "/images/resource-3e601301d9d8.png",
    alt: "Businessperson leaning on one hand at a desk the other resting on the keyboard work at a standstill",
    date: "2026-08-10",
    dateLabel: "10.08.2026",
  },
  {
    title:
      "Reputational Due Diligence in M&A: How Pre-LOI Standards Are Reshaping the Deal Market",
    description:
      "Reputational due diligence now starts before the LOI. Learn what investors screen for, which signals kill deals, and how to build reputational readiness.",
    href: "https://reputation.house/blog/reputational-due-diligence-ma",
    image: "/images/resource-d568a69b85f2.png",
    alt: "Front of an olive-green classic car seen from overhead on bare concrete with a fan of grey dashes",
    date: "2026-08-06",
    dateLabel: "06.08.2026",
  },
  {
    title:
      "AI Reputation Incidents in Financial Sector: Why H1 2026 Data Should Reshape Your Budget",
    description:
      "The first half of 2026 delivered a number that risk officers in banking, insurance, and asset management are still processing: AI-related reputation incidents in financial services surpassed the total count recorded across all of 2025.",
    href: "https://reputation.house/blog/ai-reputation-incidents-financial-sector",
    image: "/images/resource-c3ee55045a72.png",
    alt: "Wave-shaped glass facade of a corporate tower seen from below against a clear blue sky",
    date: "2026-08-04",
    dateLabel: "04.08.2026",
  },
  {
    title: "How to Use the Reputation Strategy Finder: A Step-by-Step Guide",
    description:
      "Four questions. About three minutes. A reputation protection strategy built for your exact situation — no sales call, no sign-up, no waiting. This guide walks you through every screen click by click.",
    href: "https://reputation.house/blog/reputation-strategy-finder-how-to-use",
    image: "/images/resource-e8e102f55cc1.png",
    alt: "Black car in a marked parking bay driver door standing open viewed from above past a concrete ledge",
    date: "2026-07-31",
    dateLabel: "31.07.2026",
  },
  {
    title: "Personal Online Reputation Management",
    description:
      "Manage your online reputation on your own terms, before it gets shaped by whoever — or whatever — looks you up first.",
    href: "https://reputation.house/blog/personal-online-reputation-management-guide-for-executives",
    image: "/images/resource-cd50698bd889.png",
    alt: "Woman in a black blazer wearing an oversized wide-brimmed hat that shades most of her face",
    date: "2026-07-24",
    dateLabel: "24.07.2026",
  },
  {
    title: "The 26% Trust Gap Is a Revenue Variable, Not a PR Metric",
    description:
      "Edelman Trust & Brands 2026 shows a 26% gap between companies that manage trust and those that don't. Here's what that number costs you in pipeline and pricing power.",
    href: "https://reputation.house/blog/edelman-26-trust-gap",
    image: "/images/resource-fc8a45d84711.png",
    alt: "Aerial view of a fissure splitting an ice sheet dark teal water visible in the gap",
    date: "2026-07-22",
    dateLabel: "22.07.2026",
  },
  {
    title: "Summer Is Quiet. Reputation Risk Didn't Get the Memo",
    description:
      "The logic feels sound: competitors slow down, news cycles thin out, audiences scatter. Why keep the machine running at full speed?",
    href: "https://reputation.house/blog/summer-reputation-risk",
    image: "/images/resource-55bd9363f722.png",
    alt: "ed underground train blurred by motion as it passes an empty station platform",
    date: "2026-07-20",
    dateLabel: "20.07.2026",
  },
  {
    title:
      "Lululemon and the Systemic Trust Crisis: How Repeated Signals Become Irreversible",
    description:
      "Lululemon built one of the most enviable brand identities in activewear. Then it spent years quietly dismantling it — not through a single catastrophic event.",
    href: "https://reputation.house/blog/lululemon-systemic-trust-crisis",
    image: "/images/resource-aa787206b0d3.png",
    alt: "Scattered bright shards on a near-black surface most of them blurred out of focus",
    date: "2026-07-15",
    dateLabel: "15.07.2026",
  },
  {
    title:
      "Reputation as an Engineering System: Why the 2026 CEO Builds Instead of Reacts",
    description:
      "The pattern repeats across industries with uncomfortable regularity. A crisis surfaces. Leadership scrambles. A communications firm gets retained.",
    href: "https://reputation.house/blog/reputation-engineering-system",
    image: "/images/resource-ef204dd29297.png",
    alt: "Snow-covered mountain peak under a clear blue sky ringed by a burst of pale dashes",
    date: "2026-07-10",
    dateLabel: "10.07.2026",
  },
  {
    title:
      "Brand Reputation Monitoring in Generative AI: Track What LLMs Say About Your Brand",
    description:
      "Most brands have no systematic answer to a basic question: what does ChatGPT say about us when a prospect asks? Not what we'd like it to say, not what our website says.",
    href: "https://reputation.house/blog/brand-monitoring-generative-ai-llm",
    image: "/images/resource-92baee19de3e.png",
    alt: "Backlit leaves against a blue sky their vein networks showing through the translucent surface",
    date: "2026-07-09",
    dateLabel: "09.07.2026",
  },
  {
    title:
      "Digital Reputation Risk Disclosure: What the New Category Means for Companies That Ignore It",
    description:
      'Two things happened recently that most legal and compliance teams quietly filed under "monitor later." Academic frameworks began formally defining Digital Reputation Risk Disclosure as a standalone category in corporate risk architecture.',
    href: "https://reputation.house/blog/digital-reputation-risk-disclosure",
    image: "/images/resource-99c8d1c3ff70.png",
    alt: "Woman facing the camera while a ring of blurred hands holds smartphones up toward her",
    date: "2026-07-08",
    dateLabel: "08.07.2026",
  },
  {
    title:
      "Brand Reputation Monitoring for Misinformation: How to Detect Disinformation Before It Damages Your Brand",
    description:
      "A fabricated quote attributed to your CEO. A deepfake video showing your product failing in a way it never did. A coordinated wave of fake reviews claiming a safety issue that doesn't exist.",
    href: "https://reputation.house/blog/brand-monitoring-misinformation",
    image: "/images/resource-e892d55900dc.png",
    alt: "Angular building with a ribbed facade against a clear blue sky pale dashes radiating above it",
    date: "2026-07-03",
    dateLabel: "03.07.2026",
  },
  {
    title:
      "Reputation Monitoring vs. Reputation Management: Why the Difference Matters Before an IPO",
    description:
      "Every quarter, companies heading toward public markets invest heavily in financial audits, legal due diligence, and investor relations infrastructure.",
    href: "https://reputation.house/blog/reputation-monitoring-vs-management-ipo",
    image: "/images/resource-d34d711b9f35.png",
    alt: "Person in a pinstripe suit typing on a laptop balanced on their lap seen from above",
    date: "2026-07-01",
    dateLabel: "01.07.2026",
  },
  {
    title:
      "AI Brand Visibility: How to Measure Your Brand's Presence in AI Search",
    description:
      "When someone asks ChatGPT whether your company is trustworthy, or asks Perplexity to compare you with a competitor before signing a contract, your brand visibility in AI search determines what answer they get.",
    href: "https://reputation.house/blog/ai-brand-visibility-ai-search",
    image: "/images/resource-346773ac6693.png",
    alt: "Cantilevered upper floor of a modernist building against a dark blue sky a tree in silhouette below",
    date: "2026-06-30",
    dateLabel: "30.06.2026",
  },
  {
    title: "How to Detect a Reputation Crisis Before It Goes Public",
    description:
      "Brand reputation crisis monitoring is the practice of detecting shifts in sentiment velocity, cross-channel signal convergence, and narrative formation before they surface in mainstream press.",
    href: "https://reputation.house/blog/how-to-detect-a-reputation-crisis",
    image: "/images/resource-b95e79d70a41.png",
    alt: "Close-up of dark rippled water the stony bed showing through beneath the reflections",
    date: "2026-06-30",
    dateLabel: "30.06.2026",
  },
  {
    title:
      "What Gartner's Market Guide for Reputation Monitoring Means for Your Brand",
    description:
      "When Gartner formally recognizes a product category, procurement teams across enterprise organizations don't just take notice — they reorganize their evaluation processes around it.",
    href: "https://reputation.house/blog/gartner-reputation-monitoring-market-guide",
    image: "/images/resource-53376063383a.png",
    alt: "Black knight at the centre of a chessboard surrounded by black pieces with one white piece behind",
    date: "2026-06-29",
    dateLabel: "29.06.2026",
  },
  {
    title:
      "What Is Brand Reputation? Meaning, Importance, and How It's Measured in 2026",
    description:
      "Ask ten executives what brand reputation means and most will describe brand image: the logo, the tagline, the positioning deck.",
    href: "https://reputation.house/blog/what-is-brand-reputation",
    image: "/images/resource-e8f5497986a7.png",
    alt: "White and blue train crossing an elevated viaduct under a blue sky with clouds",
    date: "2026-06-26",
    dateLabel: "26.06.2026",
  },
  {
    title:
      "Real-Time Brand Reputation Monitoring: Tools, Methods, and What 24/7 Coverage Actually Requires",
    description:
      "A negative Trustpilot thread, a Reddit post, an AI Overview pulling outdated allegations into a summary — none of these announce themselves. This guide covers what continuous monitoring actually requires to catch them before they compound.",
    href: "https://reputation.house/blog/real-time-brand-reputation-monitoring",
    image: "/images/resource-c4fa25c112a3.png",
    alt: "Green succulent in a concrete pot against a pale grey background with a burst of grey",
    date: "2026-06-25",
    dateLabel: "25.06.2026",
  },
  {
    title: "Best Brand Reputation Monitoring Tools: How to Choose (2026)",
    description:
      "Search for the best brand reputation monitoring tools and you get a ranked list. The order tells you which tool paid for placement or ranked for the keyword. It rarely tells you which one is right for your company.",
    href: "https://reputation.house/blog/best-brand-reputation-monitoring-tools",
    image: "/images/resource-a02e820e368b.png",
    alt: "",
    date: "2026-06-17",
    dateLabel: "17.06.2026",
  },
  {
    title: "KPMG Australia: From Whistleblower to Regulator in Two Weeks",
    description:
      "In corporate reputation management, two weeks is an eternity. A single internal signal can travel through media amplification cycles, land in parliamentary committee rooms, and put government contract renewals under active review.",
    href: "https://reputation.house/blog/kpmg-australia-14-day-case-study",
    image: "/images/resource-6deb554db2f3.png",
    alt: "",
    date: "2026-06-17",
    dateLabel: "17.06.2026",
  },
  {
    title:
      "Social Listening vs. Brand Monitoring: What's the Difference? (2026)",
    description:
      "Social listening, social monitoring, brand monitoring — the terms get used as if they were the same thing. They aren't. They describe three different jobs, at three different scopes.",
    href: "https://reputation.house/blog/social-listening-vs-brand-monitoring",
    image: "/images/resource-4ee04dbb2cac.png",
    alt: "",
    date: "2026-06-17",
    dateLabel: "17.06.2026",
  },
  {
    title: "A Reputation Crisis Doesn't Start the Day It Goes Public",
    description:
      "Most companies learn about a reputational crisis the wrong way — through a journalist's call, a viral post, or a sudden drop in search rankings. By then, the damage is already in motion.",
    href: "https://reputation.house/blog/reputation-crisis-starts-before-it-goes-public",
    image: "/images/resource-be52a287012c.png",
    alt: "",
    date: "2026-06-17",
    dateLabel: "17.06.2026",
  },
  {
    title:
      "Real-Time Brand Reputation Monitoring: Online Reputation Management Tool & Guide (2026)",
    description:
      "Most tools promise instant alerts. Fewer can actually answer what matters: when a signal appears, how quickly can someone act on it?",
    href: "https://reputation.house/blog/real-time-brand-reputation-monitoring-tool/",
    image: "/images/resource-b5517c5173d2.png",
    alt: "",
    date: "2026-06-17",
    dateLabel: "17.06.2026",
  },
  {
    title:
      "Insurance for Reputation: Why Companies Pay for Protection After the Crisis, Not Before",
    description:
      "Most executives understand car insurance logic intuitively — yet reputation protection works in reverse. A structural guide for CMOs and CEOs.",
    href: "https://reputation.house/blog/reputation-insurance-guide/",
    image: "/images/resource-a3d6a5393685.png",
    alt: "",
    date: "2026-06-17",
    dateLabel: "17.06.2026",
  },
  {
    title: "A Reputation Crisis Doesn't Start the Day It Goes Public",
    description:
      "The assumption that a crisis begins when it becomes visible is one of the most expensive misunderstandings in brand risk management. In reality, every reputation event has a pre-history.",
    href: "https://reputation.house/blog/reputation-crisis-starts-before-it-goes-public/",
    image: "/images/resource-c4f6690d1275.png",
    alt: "",
    date: "2026-06-09",
    dateLabel: "09.06.2026",
  },
  {
    title:
      "Why 50% of Pre-IPO Deals Collapse at Due Diligence — and What Reputation Has to Do With It",
    description:
      "This scenario plays out more often than most founders want to admit. And the cause is rarely financial fraud or operational collapse.",
    href: "https://reputation.house/blog/pre-ipo-due-diligence-reputation-why-deals-collapse/",
    image: "/images/resource-f49d74d53916.png",
    alt: "",
    date: "2026-06-08",
    dateLabel: "08.06.2026",
  },
  {
    title:
      "When AI Monitoring Sends a Signal — Who Is Responsible for the Decision?",
    description:
      "The market for brand monitoring tools has never been more crowded. Sentiment dashboards, AI-powered alert systems, social listening platforms — companies are spending serious budget to watch their reputation in real time.",
    href: "https://reputation.house/blog/who-acts-when-ai-flags-a-reputation-risk/",
    image: "/images/resource-6729bad760c9.png",
    alt: "",
    date: "2026-06-08",
    dateLabel: "08.06.2026",
  },
  {
    title: "AI Hype and Securities Fraud: Nine Weeks, Nine Cases, One Pattern",
    description:
      "Nine AI-related securities fraud cases in nine weeks. One pattern: public investor narratives that outpaced internal reality. How disclosure gaps create legal exposure — and why reputation damage comes first.",
    href: "https://reputation.house/blog/tpost/ai-hype-and-securities-fraud",
    image: "/images/resource-d078b1439a22.png",
    alt: "",
    date: "2026-06-02",
    dateLabel: "02.06.2026",
  },
  {
    title:
      "CMO in Crisis: Why Having a Big Agency on Retainer Isn't the Same as Being Ready",
    description:
      "80% of CEOs don't trust their CMOs. In a crisis, agency presence isn't readiness. Here's the governance gap that leaves CMOs exposed and how to close it.",
    href: "https://reputation.house/blog/tpost/cmo-in-crisis",
    image: "/images/resource-b86efe5d3a86.png",
    alt: "",
    date: "2026-05-30",
    dateLabel: "30.05.2026",
  },
  {
    title: "What Investors See When They Search Your Name in ChatGPT",
    description:
      "When investors type your name into ChatGPT or Perplexity, they get a pre-formed narrative. Learn how LLMs build brand stories and how to manage them.",
    href: "https://reputation.house/blog/tpost/what-investors-see-when-they-search-your-name-in-chatgpt",
    image: "/images/resource-f21330dee735.jpg",
    alt: "",
    date: "2026-05-27",
    dateLabel: "27.05.2026",
  },
  {
    title:
      "Reputation Due Diligence Before the Letter of Intent: Why Timing Is Everything",
    description:
      "Reputation due diligence belongs before the letter of intent — not after. Once exclusivity is signed, findings get rationalized. Pre-LOI screening is the only stage where what you find can actually change the decision.",
    href: "https://reputation.house/blog/tpost/reputation-due-diligence-before-loi",
    image: "/images/resource-d8192743af6c.jpg",
    alt: "",
    date: "2026-05-25",
    dateLabel: "25.05.2026",
  },
  {
    title:
      "When Sorry Isn't Enough: How Instructure Canvas Lost the Narrative During a Crisis",
    description:
      "A cyberattack hit Canvas mid-semester. The CEO apologized. Reputational damage still compounded. The anatomy of a technical crisis that became a communications failure and what a narrative plan changes.",
    href: "https://reputation.house/blog/tpost/when-sorry-is-not-enough-canvas-case",
    image: "/images/resource-9042d74c439d.jpg",
    alt: "",
    date: "2026-05-22",
    dateLabel: "22.05.2026",
  },
  {
    title:
      "Narrative Intelligence Turnkey: Why Early Movers Win the Reputation Race",
    description:
      "Narrative Intelligence is not monitoring — it's knowing what story the world tells about your brand and why it gains traction. Companies that build this capability early define the category.",
    href: "https://reputation.house/blog/tpost/narrative-intelligence-turnkey",
    image: "/images/resource-080b9be2c3f4.jpg",
    alt: "",
    date: "2026-05-21",
    dateLabel: "21.05.2026",
  },
  {
    title: "Online Presence Audit: A Step-by-Step Guide",
    description:
      "A step-by-step procedure for running an online presence audit across four risk zones search, AI systems, media and social, and review platforms.",
    href: "https://reputation.house/blog/tpost/online-presence-audit-step-by-step-guide",
    image: "/images/resource-cd24cca6a864.png",
    alt: "",
    date: "2026-05-14",
    dateLabel: "14.05.2026",
  },
  {
    title:
      "The Digital Residue Problem: Why Reputational Damage Outlasts the Crisis That Created It",
    description:
      "Reputational damage doesn't end when coverage stops. Learn why digital residue in AI search and media archives keeps activating and how CFOs can manage it.",
    href: "https://reputation.house/blog/tpost/the-digital-residue-problem",
    image: "/images/resource-58f8f95439c1.jpg",
    alt: "",
    date: "2026-05-13",
    dateLabel: "13.05.2026",
  },
  {
    title:
      "Narrative Intelligence: What It Is and Why Gartner Named It a CCO Priority",
    description:
      "Gartner: 45% of CCOs will implement Narrative Intelligence by 2029. Monitoring tells you what's being said — it doesn't change it. The gap between awareness and action is where reputational damage accumulates.",
    href: "https://reputation.house/blog/tpost/narrative-intelligence-gartner-report",
    image: "/images/resource-f44ed75bb8b6.jpg",
    alt: "Narrative Intelligence platform circuit board — AI-powered signal processing for CCO communications strategy",
    date: "2026-05-11",
    dateLabel: "11.05.2026",
  },
  {
    title: "10 Best Digital Risk Protection Companies in 2026",
    description:
      "Independent ranking of the 10 best DRP platforms in 2026. Compare Reputation House, ZeroFox, Recorded Future, Cyble and more. Feature matrix, pricing notes, and a selection guide included.",
    href: "https://reputation.house/blog/tpost/best-digital-risk-protection-companies",
    image: "/images/resource-f05106e5e805.png",
    alt: "best digital risk protection companies 2026",
    date: "2026-05-08",
    dateLabel: "08.05.2026",
  },
  {
    title:
      "AI Without Governance: How Hallucinated Legal Citations Become Reputation Crises",
    description:
      "When Sullivan & Cromwell submitted AI-generated citations that didn't exist, the procedural problem was resolved quickly. The reputational damage wasn't. AI governance failures don't stay internal — they become public record.",
    href: "https://reputation.house/blog/tpost/ai-without-governance-hallucinated-legal-citations",
    image: "/images/resource-3c0c5ad0e01b.jpg",
    alt: "",
    date: "2026-05-07",
    dateLabel: "07.05.2026",
  },
  {
    title:
      "What Is Narrative Intelligence: A Framework for Reputation Risk in the AI Era",
    description:
      "Narrative intelligence interprets how storylines shape perception across search, AI, media, and reviews. A framework for C-suite reputation risk in 2026.",
    href: "https://reputation.house/blog/tpost/what-is-narrative-intelligence",
    image: "/images/resource-fd3429d9e7af.jpg",
    alt: "",
    date: "2026-05-07",
    dateLabel: "07.05.2026",
  },
  {
    title:
      "When Guidance Becomes a Lawsuit: How a Narrative Gap Converts Into Financial Damage",
    description:
      "Lululemon, SES AI, Sullivan & Cromwell — different industries, one pattern. When public narrative outpaces operational reality, the market corrects it in hours. The lawsuits follow within weeks.",
    href: "https://reputation.house/blog/tpost/when-guidance-becomes-a-lawsuit",
    image: "/images/resource-6cffce6a77f5.jpg",
    alt: "",
    date: "2026-05-06",
    dateLabel: "06.05.2026",
  },
  {
    title: "The Online Presence Audit Most Companies Don't Run",
    description:
      "Most online presence audits answer the wrong question. They measure how well your marketing is working. They should measure how exposed you are. A four-zone diagnostic, and the audit boards actually need.",
    href: "https://reputation.house/blog/tpost/what-is-an-online-presence-audit",
    image: "/images/resource-ef5e62876644.png",
    alt: "",
    date: "2026-05-06",
    dateLabel: "06.05.2026",
  },
  {
    title:
      "Crisis Communication Plan: A Modern Framework for the Digital-Era Response",
    description:
      "A crisis communication plan defines how your organization responds when an incident hits. Seven components, eight building steps, and a first-hour checklist for the digital era — where crises play out across five surfaces, not just in the press.",
    href: "https://reputation.house/blog/tpost/crisis-communication-plan",
    image: "/images/resource-9152a1097e17.jpg",
    alt: "",
    date: "2026-05-04",
    dateLabel: "04.05.2026",
  },
  {
    title:
      "The Double Hit: Why Each New Scandal Costs More When Your Stock Is Already Falling",
    description:
      "Nike's 2024 campaign decisions illustrate exactly how this mechanism works when a brand acts without auditing where it actually stands.",
    href: "https://reputation.house/blog/tpost/why-each-new-scandal-costs-more",
    image: "/images/resource-9564615363c9.png",
    alt: "",
    date: "2026-04-30",
    dateLabel: "30.04.2026",
  },
  {
    title:
      "Brand Presence in LLMs: What It Is and Why Your Monitoring Tool Can't See It",
    description:
      "AI Presence is how LLMs represent your brand and it's invisible to classic monitoring tools. Learn what it is, how it forms, and why it matters now.",
    href: "https://reputation.house/blog/tpost/ai-presence-what-it-is",
    image: "/images/resource-018ce60860e5.png",
    alt: "",
    date: "2026-04-28",
    dateLabel: "28.04.2026",
  },
  {
    title:
      "Keyword Tracking Is Dead. Here's What's Actually Monitoring Your Brand Now",
    description:
      "Keyword tracking can't see what AI says about your brand. Learn how LLM monitoring works, where traditional tools fail and why the gap is a board-level risk.",
    href: "https://reputation.house/blog/tpost/keyword-tracking-is-dead",
    image: "/images/resource-0e3855f2bb27.png",
    alt: "",
    date: "2026-04-23",
    dateLabel: "23.04.2026",
  },
  {
    title: "The Importance of Digital Risk Protection in Healthcare",
    description:
      "Whether you're running a hospital, a clinic, or a private practice, brand management in healthcare plays an instrumental role in attracting and retaining patients.",
    href: "https://reputation.house/blog/tpost/the-importance-of-digital-risk-protection-in-healthcare",
    image: "/images/resource-611f0a7934a9.jpg",
    alt: "",
    date: "2026-04-23",
    dateLabel: "23.04.2026",
  },
  {
    title:
      "Corporate Digital Risk Protection: Best Strategies for Managing Corporate Reputation; Online Presence",
    description:
      "Corporate reputation management is an essential activity for any enterprise. Reputation is the lifeline of an organization, and a positive image is vital for its success and long-term survival.",
    href: "https://reputation.house/blog/tpost/corporate-digital-risk-protection-best-strategies",
    image: "/images/resource-4290a788197d.png",
    alt: "",
    date: "2026-04-23",
    dateLabel: "23.04.2026",
  },
  {
    title:
      "Digital Reputation Management: Definition, Importance, and Strategies",
    description:
      "Managing your online reputation is crucial for building a positive brand image and maintaining customer trust.",
    href: "https://reputation.house/blog/tpost/digital-reputation-management-definition-importance-and-strategies",
    image: "/images/resource-e8f396245dc9.png",
    alt: "",
    date: "2026-04-23",
    dateLabel: "23.04.2026",
  },
  {
    title: "Crisis Communication and Digital Risk Protection:  Best Practices",
    description:
      "Effective crisis communication and reputation management are crucial for maintaining your brand's image and protecting it from potential damage.",
    href: "https://reputation.house/blog/tpost/crisis-communication-and-digital-risk-protection-best-practices",
    image: "/images/resource-05e4ccba6252.png",
    alt: "",
    date: "2026-04-23",
    dateLabel: "23.04.2026",
  },
  {
    title:
      "CEO Reputation Is Worth 44% of Your Company's Market Value. Here's How It Gets Destroyed",
    description:
      "Based on Weber Shandwick data, 44% of a public company's market value is directly attributed to the CEO's reputation. We explore three mechanisms through which CEO reputation is converted into company value.",
    href: "https://reputation.house/blog/tpost/ceo-reputation-management",
    image: "/images/resource-74039c8490b8.png",
    alt: "",
    date: "2026-04-21",
    dateLabel: "21.04.2026",
  },
  {
    title:
      "Reputation Before IPO: What Investors Check in a Founder’s Digital Profile During Reputational Due Diligence",
    description:
      "Before the roadshow, investors search your name. Learn what due diligence finds in a founder's digital profile and when to act.",
    href: "https://reputation.house/blog/tpost/reputation-before-ipo-what-check-in-founders",
    image: "/images/resource-32c0d95cd454.png",
    alt: "",
    date: "2026-04-16",
    dateLabel: "16.04.2026",
  },
  {
    title:
      "The New CEO's Narrative Is Already Written Before They Say a Word. Josh D'Amaro's from Disney case",
    description:
      "When a new CEO is named, AI search and media fill the narrative gap within hours. Learn why the reputation audit must happen before the appointment goes public.",
    href: "https://reputation.house/blog/tpost/ceo-narrative-is-written-before-they-say-a-word",
    image: "/images/resource-3f1d8387e615.png",
    alt: "",
    date: "2026-04-15",
    dateLabel: "15.04.2026",
  },
  {
    title:
      "Step-by-Step Guide to Digital Risk Protection with Risk Control Center",
    description:
      "One platform. All signals — mentions, search, AI, reviews — connected and actionable. Risk Control Center replaces scattered tools with a single structured environment for managing your digital presence.",
    href: "https://reputation.house/blog/tpost/oe2pp336p1-step-by-step-guide-to-digital-risk-prote",
    image: "/images/resource-a4a36a3737ab.png",
    alt: "",
    date: "2026-04-07",
    dateLabel: "07.04.2026",
  },
  {
    title:
      "Top 10 Reputation Management Companies 2026: Reviews, Cost & Criteria",
    description:
      "In 2026, standard SERM isn't enough. Discover the top 10 agencies providing comprehensive digital risk protection and search suppression for global brands and executives in the USA and MENA.",
    href: "https://reputation.house/blog/tpost/top-10-reputation-companies-for-brands-and-executives",
    image: "/images/resource-47ca9cb52a9a.jpg",
    alt: "evaluating ORM company criteria and pricing with data",
    date: "2026-03-26",
    dateLabel: "26.03.2026",
  },
  {
    title: "How to Use Risk Check: A Guide to Your First Digital Risk Audit",
    description:
      "Launched by Reputation House, Risk Check is a free diagnostic platform that gives business leaders a structured view of their digital risk exposure in minutes.",
    href: "https://reputation.house/blog/tpost/riskcheck-step-by-step-guide",
    image: "/images/resource-17131553d8ff.jpg",
    alt: "",
    date: "2026-03-17",
    dateLabel: "17.03.2026",
  },
  {
    title: "Best Online Reputation Management Companies in 2026 (July)",
    description:
      "Negative search results cost businesses up to 70% of potential customers. We compared 10 ORM firms to help you pick the right one before that happens.",
    href: "https://reputation.house/blog/tpost/best-orm-companies-2026",
    image: "/images/resource-47969af2b6ce.jpg",
    alt: "",
    date: "2026-03-10",
    dateLabel: "10.03.2026",
  },
  {
    title:
      "Brand Protection for Trading: Building Trust Before the First Touchpoint",
    description:
      "High-risk trading isn't just about spreads; it's about survival in a hyper-active info-field. Here is how to build trust before a user even hits your landing page.",
    href: "https://reputation.house/blog/tpost/brand-protection-for-trading",
    image: "/images/resource-b2e3022e98f0.jpg",
    alt: "",
    date: "2026-03-03",
    dateLabel: "03.03.2026",
  },
  {
    title:
      "How to Choose an Online Reputation Protection Company: The 2026 Strategic Guide",
    description:
      "In 2026, reputation is a financial asset. Choosing the right protection company defines your business resilience. We break down 5 critical criteria: from AI-driven tech to legal transparency.",
    href: "https://reputation.house/blog/tpost/choosing-reputation-protection-company",
    image: "/images/resource-5ca8674ce574.jpg",
    alt: "",
    date: "2026-02-24",
    dateLabel: "24.02.2026",
  },
  {
    title: "Top Digital Crisis Management Firms in 2026",
    description:
      "We analyzed 50+ firms to rank the top digital crisis management companies of 2026 — by AI defense, dark-web visibility, and response speed. See the full breakdown.",
    href: "https://reputation.house/blog/tpost/digital-crisis-management-firms-2026",
    image: "/images/resource-de58cd9d73d7.jpg",
    alt: "",
    date: "2026-02-18",
    dateLabel: "18.02.2026",
  },
  {
    title: "Executive Digital Presence: The 2026 Leadership Strategy Guide",
    description:
      "A complete guide to building a professional online footprint. Learn how to turn scattered search results into a strategic asset that attracts talent and builds investor trust. Includes a self-audit checklist.",
    href: "https://reputation.house/blog/tpost/executive-digital-presence-guide-2025",
    image: "/images/resource-252675a630ac.jpg",
    alt: "",
    date: "2026-01-23",
    dateLabel: "23.01.2026",
  },
  {
    title:
      "What Is a PR Crisis? Identification, Types, and Management Strategies",
    description:
      "Learn what a PR crisis is, how to identify seven major crisis types (HR, legal, cyber, product, executive, ethics, misinformation), spot early warning signs, and respond effectively within 24 hours.",
    href: "https://reputation.house/blog/tpost/everything-about-pr-crisis",
    image: "/images/resource-4e181bcd31ee.png",
    alt: "",
    date: "2026-01-19",
    dateLabel: "19.01.2026",
  },
  {
    title: "How to Create a Wikipedia Page for Yourself or Your Company",
    description:
      "Struggling to get published on Wikipedia? Read our expert guide on creating an Wikipedia article that sticks. Compliance, formatting, and approval tips.",
    href: "https://reputation.house/blog/tpost/how-to-do-your-wiki-page",
    image: "",
    alt: "",
    date: "2026-01-08",
    dateLabel: "08.01.2026",
  },
  {
    title: "What is Online Reputation Management (ORM)? 2026 Expert Guide",
    description:
      "Everything you wanted to know about reputation management but were afraid to ask",
    href: "https://reputation.house/blog/tpost/what-is-reputation-management",
    image: "/images/resource-caf69130c4a7.jpg",
    alt: "",
    date: "2025-12-11",
    dateLabel: "11.12.2025",
  },
  {
    title: "How to Create a Crisis Management Plan: 2026 Guide & Free Template",
    description:
      "A comprehensive guide to building a crisis management plan that protects your business reputation and ensures rapid response during emergencies.",
    href: "https://reputation.house/blog/tpost/how-to-create-a-crisis-management-plan",
    image: "/images/resource-ddd9f914fbec.jpg",
    alt: "",
    date: "2025-12-04",
    dateLabel: "04.12.2025",
  },
  {
    title: "How Much Does Online Reputation Management (ORM) Cost in 2026?",
    description: "Everything you want to know about ORM pricing",
    href: "https://reputation.house/blog/tpost/reputation-management-cost-pricing-guide",
    image: "/images/resource-69609c19724a.jpg",
    alt: "",
    date: "2025-11-23",
    dateLabel: "23.11.2025",
  },
  {
    title: "Will Reputation Matter More Than Your Passport?",
    description:
      "Our reliance on technology is making reputation influence our lives at new levels compared to before.",
    href: "https://reputation.house/blog/tpost/yubpno8xo1-will-reputation-matter-more-than-your-pa",
    image: "/images/resource-e468eed26d28.webp",
    alt: "",
    date: "2025-06-05",
    dateLabel: "05.06.2025",
  },
  {
    title: "Reputation Score: A New KPI for Business Success",
    description:
      "It affects customer decisions, investor trust, business deals, and even employee loyalty.",
    href: "https://reputation.house/blog/tpost/about-reputation-score",
    image: "/images/resource-6bc340493018.jpg",
    alt: "",
    date: "2025-05-22",
    dateLabel: "22.05.2025",
  },
  {
    title: "Rich People Have a Reputation Problem Too",
    description:
      "Successful business people know they need to control their digital image just as they handle other important aspects of their professional activities.",
    href: "https://reputation.house/blog/tpost/2n09bo9ot1-rich-people-have-a-reputation-problem-to",
    image: "/images/resource-ffaf72e165db.jpg",
    alt: "",
    date: "2025-05-07",
    dateLabel: "07.05.2025",
  },
  {
    title:
      "What Do Cop Shows and Shoppers Have in Common? More Than You’d Think!",
    description:
      "Profiling is used for more than criminal investigations—businesses employ similar methods to predict consumer behavior.",
    href: "https://reputation.house/blog/tpost/6do64kagf1-what-do-cop-shows-and-shoppers-have-in-c",
    image: "/images/resource-ff14be793bbd.jpg",
    alt: "",
    date: "2025-04-24",
    dateLabel: "24.04.2025",
  },
  {
    title: "Robots Are More Than Machines—They’re a Brand",
    description:
      "Businesses depend on technology, yet robots require both excellent functionality and a positive reputation for people to trust them.",
    href: "https://reputation.house/blog/tpost/frmgbppzj1-robots-are-more-than-machinestheyre-a-br",
    image: "/images/resource-b85d024878cf.jpg",
    alt: "",
    date: "2025-04-09",
    dateLabel: "09.04.2025",
  },
  {
    title: "Numbers Beyond Mathematics",
    description:
      "Numbers are often perceived as universal tools—neutral, objective, and free from interpretation.",
    href: "https://reputation.house/blog/tpost/3xzb6257b1-numbers-beyond-mathematics",
    image: "/images/resource-0171c9e2bf9f.jpg",
    alt: "",
    date: "2025-03-27",
    dateLabel: "27.03.2025",
  },
  {
    title: "The Art of Reputation: Does the Artist Make the Art?",
    description:
      "The value of art is rarely just about aesthetics. Instead, it is deeply tied to reputation—the perception of an artist, their legacy, and how the world sees their work.",
    href: "https://reputation.house/blog/tpost/art-of-reputation",
    image: "/images/resource-c091d2aa6907.jpg",
    alt: "",
    date: "2025-03-14",
    dateLabel: "14.03.2025",
  },
  {
    title:
      "The Fight Against Fake Reviews: How Businesses Protect Their Reputations",
    description:
      "The power of online reviews is enormous in deciding what consumers buy. Perceptions are shaped, decisions are influenced, and business success is directly impacted",
    href: "https://reputation.house/blog/tpost/y3igme5gb1-the-fight-against-fake-reviews-how-busin",
    image: "/images/resource-112d94220c61.png",
    alt: "",
    date: "2025-02-28",
    dateLabel: "28.02.2025",
  },
  {
    title: "The Red Planet’s Reputation Journey: Myths, Science, and Dreams",
    description:
      "Reputation is something we usually associate with individuals or organizations, but could an entire planet have its own reputation? An outstanding example of this is Mars, the “Red Planet.”",
    href: "https://reputation.house/blog/tpost/k7laeccey1-the-red-planets-reputation-journey-myths",
    image: "/images/resource-2375518191f2.png",
    alt: "",
    date: "2025-02-10",
    dateLabel: "10.02.2025",
  },
  {
    title: "How Big Brands Stumble: 9 Lessons from Marketing Missteps",
    description:
      "Business means money, and reputation is the ultimate currency. A single miscalculation can overturn years of trust and success.",
    href: "https://reputation.house/blog/tpost/locuietpt1-how-big-brands-stumble-9-lessons-from-ma",
    image: "/images/resource-f8d9d1c6a3da.png",
    alt: "",
    date: "2025-01-20",
    dateLabel: "20.01.2025",
  },
  {
    title: "How To Bring Trust to E-Commerce",
    description:
      "With people and organisations having unprecedented access to information and resources in today's hyperconnected world, online reputation is critical",
    href: "https://reputation.house/blog/tpost/tmxkxl51a1-how-to-bring-trust-to-e-commerce",
    image: "/images/resource-f9dd20a188f5.jpg",
    alt: "",
    date: "2024-09-22",
    dateLabel: "22.09.2024",
  },
  {
    title: "Reputation House: Analyzing Social Media Effectively",
    description:
      "With the increasing usage of social media in sectors like retail, hospitality, education, and beauty, Social Media Listening (SML) has become a crucial strategy for organizations",
    href: "https://reputation.house/blog/tpost/dm0chilr41-reputation-house-analyzing-social-media",
    image: "/images/resource-f788067c3ee7.png",
    alt: "",
    date: "2024-09-15",
    dateLabel: "15.09.2024",
  },
  {
    title: "How a Business Can Properly Position Themselves Online",
    description:
      "Authenticity has become more than a buzzword; it's now a crucial aspect of managing a brand. Companies that authentically uphold their core values and show transparency are more likely to gain and retain consumer trust.",
    href: "https://reputation.house/blog/tpost/x1ou1fmb41-how-a-business-can-properly-position-the",
    image: "/images/resource-8283bb161e44.jpg",
    alt: "",
    date: "2024-09-09",
    dateLabel: "09.09.2024",
  },
  {
    title: "Understanding the Full Impact of Your Online Reputation",
    description:
      "People and businesses have finally realized the huge importance of Online Reputation Management (ORM), an indispensable practice",
    href: "https://reputation.house/blog/tpost/mh2us32j51-understanding-the-full-impact-of-your-on",
    image: "/images/resource-de6cd860b8d7.png",
    alt: "",
    date: "2024-09-04",
    dateLabel: "04.09.2024",
  },
  {
    title:
      "Transforming Challenges into Opportunities: Effective Management of Information Crises",
    description:
      "In today’s business landscape, information crises have become a frequent challenge, arising from various sources",
    href: "https://reputation.house/blog/tpost/i54mrdc571-transforming-challenges-into-opportuniti",
    image: "/images/resource-31710bb918f8.jpg",
    alt: "",
    date: "2024-08-05",
    dateLabel: "05.08.2024",
  },
  {
    title: "The Growing Threat of False Information to Businesses",
    description:
      "As you’ve probably become aware, businesses face an ever-increasing threat from false information that can jeopardize their finances, reputation, and brand credibility",
    href: "https://reputation.house/blog/tpost/ijxu37cui1-the-growing-threat-of-false-information",
    image: "/images/resource-c4c93eb2f8eb.jpg",
    alt: "",
    date: "2024-08-02",
    dateLabel: "02.08.2024",
  },
  {
    title:
      "Reputation Management: Addressing Negative Feedback with Humility and Empathy",
    description:
      "Ever been in a situation where you mess up, and someone points it out to you? It's not the most pleasant feeling, is it?",
    href: "https://reputation.house/blog/tpost/kjr2m1jho1-reputation-management-addressing-negativ",
    image: "/images/resource-5cdb6c13e9aa.jpg",
    alt: "",
    date: "2024-05-01",
    dateLabel: "01.05.2024",
  },
  {
    title:
      "Reputation Management: The Ultimate Guide for Reputation Building Online",
    description:
      "Оur online presence has become an extension of ourselves. Our reputation, both personal and professional, is shaped by the way we interact with others online",
    href: "https://reputation.house/blog/tpost/zrgnvv5db1-reputation-management-the-ultimate-guide",
    image: "/images/resource-6cb26da32446.png",
    alt: "",
    date: "2024-04-25",
    dateLabel: "25.04.2024",
  },
  {
    title:
      "Taking Control of Your Online Narrative: A Guide to Personal Reputation Management",
    description:
      "Our online presence has become an extension of ourselves. Our reputation, both personal and professional, is shaped by the way we interact with others online",
    href: "https://reputation.house/blog/tpost/y8f6va6zy1-taking-control-of-your-online-narrative",
    image: "/images/resource-d92be20aa5ce.jpg",
    alt: "",
    date: "2024-04-23",
    dateLabel: "23.04.2024",
  },
  {
    title:
      "The Future of Reputation Management: Trends and Predictions for the Next Decade",
    description:
      "In a world where information travels at the speed of light, reputation management has never been more crucial",
    href: "https://reputation.house/blog/tpost/19yu3z7751-the-future-of-reputation-management-tren",
    image: "/images/resource-07a091d8fbcd.png",
    alt: "",
    date: "2024-04-09",
    dateLabel: "09.04.2024",
  },
  {
    title:
      "The 5 Most Common Reputation Management Mistakes and How to Avoid Them",
    description:
      "n the age of digital transparency, a company's reputation is its most valuable asset. One misstep can spiral into a public relations crisis, tarnishing years of brand-building efforts",
    href: "https://reputation.house/blog/tpost/5-reputation-management-mistakes",
    image: "/images/resource-7a3940eff553.jpg",
    alt: "",
    date: "2024-04-05",
    dateLabel: "05.04.2024",
  },
  {
    title:
      "Safeguarding Your Brand's Essence: A Deep Dive into Reputation Management Tools and Strategies",
    description:
      "Discover how to safeguard your brand's essence in the digital age. This in-depth article by Reputation House explores key strategies for protecting your core identity and managing your online reputation.",
    href: "https://reputation.house/blog/tpost/h56tjuo6z1-safeguarding-your-brands-essence-a-deep",
    image: "/images/resource-50933bc3e169.jpg",
    alt: "",
    date: "2024-03-24",
    dateLabel: "24.03.2024",
  },
  {
    title:
      "Navigating the Reputation Seas: Practical Insights for Small Business Reputation Management",
    description:
      "For small businesses, reputation isn't just a feather in the cap—it's the sail that propels the ship forward. In a digitally-driven world where a few clicks can make or break a brand",
    href: "https://reputation.house/blog/tpost/05rdzkisc1-navigating-the-reputation-seas-practical",
    image: "/images/resource-ad71d7a17953.jpg",
    alt: "",
    date: "2024-03-17",
    dateLabel: "17.03.2024",
  },
  {
    title:
      "Unveiling the Secrets: Supercharge Your Brand's Image with Strategic Competitor Analysis",
    description:
      "In the dynamic digital landscape, your brand's reputation is the cornerstone of success. Picture it as the heartbeat of your business, influencing consumer decisions, trust, and loyalty. But here's the twist – it doesn't exist in isolation.",
    href: "https://reputation.house/blog/tpost/117s17s011-unveiling-the-secrets-supercharge-your-b",
    image: "/images/resource-a97edbe9172a.jpg",
    alt: "",
    date: "2024-03-10",
    dateLabel: "10.03.2024",
  },
  {
    title:
      "Online Reputation vs. Brand Image: Understanding the Crucial Distinctions",
    description:
      "In the expansive realm of digital presence, two pivotal concepts often intermingle but hold distinctive value: Online Reputation and Brand Image. These elements are the threads that weave the fabric of a company's identity in the digital landscape.",
    href: "https://reputation.house/blog/tpost/online-reputation-and-image-brand",
    image: "/images/resource-93d4a4ae4c0c.jpg",
    alt: "",
    date: "2024-02-26",
    dateLabel: "26.02.2024",
  },
  {
    title:
      "Online Reputation Management: Unveiling Effective Strategies and Pitfalls to Avoid",
    description:
      "Online reputation management (ORM) is akin to tending a garden in the digital landscape. Just like a garden needs care, attention, and nurturing, your online reputation requires meticulous handling.",
    href: "https://reputation.house/blog/tpost/sn5e0b8551-online-reputation-management-unveiling-e",
    image: "/images/resource-f6f8f7757170.jpg",
    alt: "",
    date: "2024-02-17",
    dateLabel: "17.02.2024",
  },
  {
    title:
      "Mastering Your Online Destiny: Crafting a Stellar Reputation for Your Brand",
    description:
      "In the digital landscape, your brand's reputation reigns supreme. This article is your compass in navigating the realm of online reputation management, illuminating the path to build and uphold an exceptional digital image.",
    href: "https://reputation.house/blog/tpost/5hmvy09pk1-mastering-your-online-destiny-crafting-a",
    image: "/images/resource-1795e2d3030a.jpg",
    alt: "",
    date: "2024-02-09",
    dateLabel: "09.02.2024",
  },
  {
    title:
      "Unleash the Power of Reputation: 10 Marketing Tactics to Elevate Your Business",
    description:
      "In the fast-paced digital age, a company's reputation can make or break its success. In this article, we explore the essential marketing tactics that can help you manage and enhance your business reputation effectively.",
    href: "https://reputation.house/blog/tpost/zc23h8h1z1-unleash-the-power-of-reputation-10-marke",
    image: "/images/resource-f8d81b5049a3.jpg",
    alt: "",
    date: "2024-02-02",
    dateLabel: "02.02.2024",
  },
  {
    title: "Protecting Your Business: Shielding Against Reputation Damage",
    description:
      "In the digital age, safeguarding your business's reputation is more crucial than ever. In a world where information spreads at the speed of light, one negative incident can tarnish your brand's image and have long-lasting consequences.",
    href: "https://reputation.house/blog/tpost/hcjnemsb11-protecting-your-business-shielding-again",
    image: "/images/resource-350becf16930.png",
    alt: "",
    date: "2023-11-19",
    dateLabel: "19.11.2023",
  },
  {
    title:
      "How to Use Content Marketing to Enhance Your Business Online Reputation",
    description:
      "In today's digital age, where the online presence of your business can make or break its reputation, harnessing the power of content marketing is a pivotal key to success.",
    href: "https://reputation.house/blog/tpost/chokzltp21-how-to-use-content-marketing-to-enhance",
    image: "/images/resource-3138bc11c54a.jpg",
    alt: "",
    date: "2023-11-12",
    dateLabel: "12.11.2023",
  },
  {
    title:
      "How to Improve Your Business Reputation with Social Media Marketing",
    description:
      "Social media has evolved into a powerful tool for businesses, providing a platform to engage with customers, showcase expertise, and foster brand loyalty",
    href: "https://reputation.house/blog/tpost/08gg5hka91-how-to-improve-your-business-reputation",
    image: "/images/resource-dd2134f5647f.jpg",
    alt: "",
    date: "2023-11-05",
    dateLabel: "05.11.2023",
  },
  {
    title: "How to Handle Negative Customer Feedback and Reviews",
    description:
      "Negative feedback and reviews are an inevitable part of running a business. While it's never enjoyable to receive criticism, learning to effectively handle negative feedback can lead to valuable insights and opportunities for improvement.",
    href: "https://reputation.house/blog/tpost/sdtejh61i1-how-to-handle-negative-customer-feedback",
    image: "/images/resource-12cfaacdfd2f.jpg",
    alt: "",
    date: "2023-10-17",
    dateLabel: "17.10.2023",
  },
  {
    title: "How to Get Positive Google Reviews and Build Strong Reputation",
    description:
      "Positive Google reviews play a significant role in shaping a business's online reputation, while also influencing consumer decision-making. Garnering positive feedback on Google can lead to increased trust and more business",
    href: "https://reputation.house/blog/tpost/seex3l24m1-how-to-get-positive-google-reviews-and-b",
    image: "/images/resource-8cf7636b8029.png",
    alt: "",
    date: "2023-10-12",
    dateLabel: "12.10.2023",
  },
  {
    title:
      "How to Build and Maintain a Strong Online Reputation for Your Small Business",
    description:
      "Building and maintaining a strong online reputation is crucial for the success of your small business. A positive online presence can lead to increased trust, customer loyalty, and growth opportunities.",
    href: "https://reputation.house/blog/tpost/ijdp2yhad1-how-to-build-and-maintain-a-strong-onlin",
    image: "/images/resource-60f8a8acb486.jpg",
    alt: "",
    date: "2023-10-09",
    dateLabel: "09.10.2023",
  },
  {
    title: "How to Bounce Back from a Reputation Crisis",
    description:
      "A reputation crisis can hit any business – and when it does, it can be highly damaging. However, implementing the right strategies can help your organization bounce back stronger than before.",
    href: "https://reputation.house/crisis-management-agency",
    image: "/images/resource-4036ffcba218.jpg",
    alt: "",
    date: "2023-10-06",
    dateLabel: "06.10.2023",
  },
  {
    title:
      "Give Your Business a Boost with Positive Online Reputation Management",
    description:
      "The importance of online reputation management (ORM) cannot be overstated. A positive online reputation can lead to increased trust, credibility, and overall business growth.",
    href: "https://reputation.house/blog/tpost/ah3pvf6hm1-give-your-business-a-boost-with-positive",
    image: "/images/resource-b289302f6f9f.jpg",
    alt: "",
    date: "2023-10-03",
    dateLabel: "03.10.2023",
  },
  {
    title:
      "Event Reputation Management: How to Protect Your Brand from Negative Publicity",
    description:
      "Events have the potential to elevate a brand to new heights, creating a buzz around your product, service, or cause. However, they can also attract negative publicity, which can damage your brand image.",
    href: "https://reputation.house/blog/tpost/6rc5kzpsk1-event-reputation-management-how-to-prote",
    image: "/images/resource-65701662f0a8.jpg",
    alt: "",
    date: "2023-09-29",
    dateLabel: "29.09.2023",
  },
  {
    title: "Essential Habits for Effective Online Reputation Management",
    description:
      "In the modern digital world, online reputation management (ORM) plays a critical role in shaping the perception of a business or an individual",
    href: "https://reputation.house/blog/tpost/lol1okv281-essential-habits-for-effective-online-re",
    image: "/images/resource-0bd482d68dd4.jpg",
    alt: "",
    date: "2023-09-26",
    dateLabel: "26.09.2023",
  },
  {
    title:
      "Online Reputation Management Strategies for Corporate Brand Reputation",
    description:
      "Today, online reputation management is critical for corporate brands seeking to maintain a positive image",
    href: "https://reputation.house/blog/tpost/0zg4iuf671-online-reputation-management-strategies",
    image: "/images/resource-1b01a303ab2d.jpg",
    alt: "",
    date: "2023-09-08",
    dateLabel: "08.09.2023",
  },
  {
    title: "Hotel Reputation Management: Maximizing Your Online Presence",
    description:
      "Hotel reputation management is the practice of monitoring and managing how guests perceive your hotel or property online.",
    href: "https://reputation.house/blog/tpost/h669ixd7a1-hotel-reputation-management-maximizing-y",
    image: "/images/resource-8f0e0c266def.jpg",
    alt: "",
    date: "2023-09-06",
    dateLabel: "06.09.2023",
  },
  {
    title:
      "Reputational Risk Management: Best Practices for Managing Reputation Risks",
    description:
      "Reputational risk management identifies and assesses factors that could potentially harm an organization's reputation.",
    href: "https://reputation.house/blog/tpost/pgomvvtih1-reputational-risk-management-best-practi",
    image: "/images/resource-dd2e7252d4f8.jpg",
    alt: "",
    date: "2023-09-04",
    dateLabel: "04.09.2023",
  },
  {
    title: "Building Trust with Customers Through Reputation Management",
    description:
      "Wondering where to gather all the information you need? Without a doubt, the internet takes the spotlight. In today's world, it's the vastest and most accessible source of information for nearly everyone",
    href: "https://reputation.house/blog/tpost/h356mtesy1-building-trust-with-customers-through-re",
    image: "/images/resource-3ea5d867867a.jpg",
    alt: "",
    date: "2023-08-28",
    dateLabel: "28.08.2023",
  },
  {
    title: "How Businesses Improve Their Reputation Management Strategies?",
    description:
      "What defines success? Success is when your excellence and professionalism are acknowledged by other companies and brands that look up to you.",
    href: "https://reputation.house/blog/tpost/8i0alysav1-how-businesses-improve-their-reputation",
    image: "/images/resource-4c970cc61af0.jpg",
    alt: "",
    date: "2023-08-27",
    dateLabel: "27.08.2023",
  },
  {
    title:
      "Assessing Your Reputation Management Plan: Evaluating Results and Metrics",
    description:
      "Today, protecting online reputation is vital for your business triumph. As consumers heavily lean on online reviews and social media when making purchases, a robust reputation management plan is a must",
    href: "https://reputation.house/blog/tpost/yyegtfstm1-assessing-your-reputation-management-pla",
    image: "/images/resource-ccdc69876474.jpg",
    alt: "",
    date: "2023-08-26",
    dateLabel: "26.08.2023",
  },
  {
    title:
      "Avoid These Mistakes When Manage Online Reputation Of Your Business",
    description:
      "If you're handling your business reputation on your own, this is essential information. Think about the rapid spread of negative comments or reviews across the internet, severely damaging your brand's image. The results?",
    href: "https://reputation.house/blog/tpost/687cs3ovz1-avoid-these-mistakes-when-manage-online",
    image: "/images/resource-2e98085834e0.jpg",
    alt: "",
    date: "2023-08-25",
    dateLabel: "25.08.2023",
  },
  {
    title: "5 Fundamental Reputation Management Best Practices",
    description:
      "If you are not already taking control of your reputation, today we will explain why it is crucial to do so consistently, quickly, and effectively.",
    href: "https://reputation.house/blog/tpost/657i9vmyz1-5-fundamental-reputation-management-best",
    image: "/images/resource-23b3359a04e4.jpg",
    alt: "",
    date: "2023-08-25",
    dateLabel: "25.08.2023",
  },
  {
    title:
      "Crisis Communication and Reputation Management Presentation: A Comprehensive Guide",
    description:
      "Today's corporate environment is more complex than ever, with businesses facing unexpected crises that can quickly escalate if not managed properly",
    href: "https://reputation.house/crisis-management-agency",
    image: "/images/resource-1942b0f0a45b.jpg",
    alt: "",
    date: "2023-07-11",
    dateLabel: "11.07.2023",
  },
  {
    title: "Local Reputation Management: A Bright Beacon for Success",
    description:
      "Navigating the world of business is no easy task. If you're a local entrepreneur, your reputation plays an integral role in shaping the success of your enterprise",
    href: "https://reputation.house/blog/tpost/i75f8t4np1-local-reputation-management-a-bright-bea",
    image: "/images/resource-d032bc03a9d1.jpg",
    alt: "",
    date: "2023-07-11",
    dateLabel: "11.07.2023",
  },
  {
    title: "Understanding Social Media Reputation Management",
    description:
      "As our world becomes more digitally connected, the importance of managing your brand's reputation on social media has grown immensely.",
    href: "https://reputation.house/blog/tpost/social-media-reputation",
    image: "/images/resource-b7fb718e3a14.jpg",
    alt: "",
    date: "2023-07-10",
    dateLabel: "10.07.2023",
  },
  {
    title: "Reputation Management: Why It's More Important Now Than Ever",
    description:
      "In the modern era of digital connectivity, where knowledge races at a dazzling pace and perspectives crystallize in a heartbeat, the significance of managing a brand's online presence is paramount",
    href: "https://reputation.house/blog/tpost/importance-reputation-management",
    image: "/images/resource-e89605a5544c.jpg",
    alt: "",
    date: "2023-07-09",
    dateLabel: "09.07.2023",
  },
  {
    title: "A Comprehensive Guide to Managing Your Corporate Reputation",
    description:
      'Gain expert guidance and practical strategies in "A Comprehensive Guide \nto Managing Your Corporate Reputation," empowering you to navigate the \ncomplexities of reputation management and build a positive brand image \nthat resonates with stakeholders.',
    href: "https://reputation.house/blog/tpost/e16slv03z1-a-comprehensive-guide-to-managing-your-c",
    image: "/images/resource-2bd60ef35eca.jpg",
    alt: "",
    date: "2023-05-19",
    dateLabel: "19.05.2023",
  },
  {
    title: "Digital Reputation Management",
    description:
      'In the article "Digital Reputation Management," explore the essential \nstrategies and techniques for effectively managing and protecting your \nonline reputation.',
    href: "https://reputation.house/digital-pr",
    image: "/images/resource-61bf5f3f0d16.jpg",
    alt: "",
    date: "2023-05-19",
    dateLabel: "19.05.2023",
  },
  {
    title: "Reputation Management Strategies: Building a Potent Business Asset",
    description:
      "Explore effective Reputation Management Strategies in our latest \narticle.",
    href: "https://reputation.house/blog/tpost/comprehensive-reputation-management-strategies",
    image: "/images/resource-4526a7e7b8b0.jpg",
    alt: "",
    date: "2023-05-19",
    dateLabel: "19.05.2023",
  },
  {
    title: "Expert Insights: Reputational Risk Management Unveiled",
    description:
      'In the article "Expert Insights: Reputational Risk Management Unveiled,"\n gain valuable knowledge and insights from industry experts as they \ndelve into the intricacies of managing reputational risks',
    href: "https://reputation.house/blog/tpost/zrszrnk9d1-expert-insights-reputational-risk-manage",
    image: "/images/resource-87bd8ed42dc6.jpg",
    alt: "",
    date: "2023-05-19",
    dateLabel: "19.05.2023",
  },
  {
    title: "Managing corporate reputation",
    description:
      "In today's business landscape, the management of corporate reputation plays a pivotal role in shaping the success and sustainability of organizations.",
    href: "https://reputation.house/blog/tpost/managing-corporate-reputation",
    image: "/images/resource-1dc8a9e779e5.jpg",
    alt: "",
    date: "2023-05-19",
    dateLabel: "19.05.2023",
  },
  {
    title: "I got a bad review: what to do",
    description:
      "olk wisdom says that it is impossible to please everyone, and it is not worth striving for this.",
    href: "https://reputation.house/blog/tpost/2y0be2ar11-i-got-a-bad-review-what-to-do",
    image: "/images/resource-66be98979d6a.jpg",
    alt: "",
    date: "2021-11-15",
    dateLabel: "15.11.2021",
  },
  {
    title: "What is SERM?",
    description: "SERM: how to establish a reputation in the Network",
    href: "https://reputation.house/blog/tpost/what-is-serm",
    image: "/images/resource-df09b53341a6.jpg",
    alt: "",
    date: "2021-11-12",
    dateLabel: "12.11.2021",
  },
];
const shown = ref(15);
const newsItems = [
  {
    title: "Reputation House Named a LEADING EMPLOYER 2027",
    description:
      "Reputation House has been certified by Institute of Research & Data Aggregation as a LEADING EMPLOYER 2027, placing the company among the top employers worldwide.",
    href: "https://reputation.house/news/reputation-house-named-a-leading-employer-2027",
    image: "/images/resource-34634393a271.png",
    alt: "",
    date: "2026-09-21",
    dateLabel: "21.09.2026",
  },
  {
    title:
      "We Analyzed Digital Reputation of 52 FinTech companies in the MENA Region – Here’s What We Found",
    description:
      "Reputation House analyzed 52 fintech companies in the UAE, Saudi Arabia, and Egypt. See what search negativity, app ratings, and HR presence reveal about leaders.",
    href: "https://reputation.house/news/fintech-mena-reputation-study",
    image: "/images/resource-13e49e911efa.png",
    alt: "",
    date: "2026-08-18",
    dateLabel: "18.08.2026",
  },
  {
    title:
      "Meet Reputation Strategy Finder – An Interactive Tool to Build Tailored Risk Protection Strategies for Your Particular Case",
    description:
      "A free interactive tool that maps your situation to the right reputation strategy across search, AI answers, media and forums. Get your plan in minutes.",
    href: "https://reputation.house/news/reputation-strategy-tool",
    image: "/images/resource-cfe5e80069d0.png",
    alt: "",
    date: "2026-07-31",
    dateLabel: "31.07.2026",
  },
  {
    title:
      "We Analyzed the Digital Reputation of 17 Leading U.S. Pharma Companies – Here’s What We Found",
    description:
      "Our new sector-wide Digital Risk Report shows that pharma's biggest reputational exposure is not today's headlines. It's the widening gap between how companies present themselves and how AI systems describe them",
    href: "https://reputation.house/news/pharma-ai-reputation-gap-report",
    image: "/images/resource-e2b6c18c4012.png",
    alt: "",
    date: "2026-07-22",
    dateLabel: "22.07.2026",
  },
  {
    title:
      "Reputation House is a Gold Winner of The 11th Annual Stevie® Awards for Great Employers",
    description:
      "The 11th Annual Stevie® Awards for Great Employers have just announced that Reputation House became a gold trophy winner in the Achievement in Managing a Remote Workforce category.",
    href: "https://reputation.house/news/stevie-award-remote-workforce-2026",
    image: "/images/resource-dfbdb216a3d5.png",
    alt: "",
    date: "2026-07-16",
    dateLabel: "16.07.2026",
  },
  {
    title:
      "Reputation House Releases Major Updates for Risk Check: New Modules Translate Digital Risk Into Business Consequences",
    description:
      "Two months after launch, the free digital risk diagnostic platform introduces Top Business Risks and Priority Matrix – helping companies not just identify risk signals, but understand what to fix, watch and monitor.",
    href: "https://reputation.house/news/risk-check-major-update",
    image: "/images/resource-67f140eb3015.png",
    alt: "",
    date: "2026-05-25",
    dateLabel: "25.05.2026",
  },
  {
    title:
      "Kristina Shinkareva Appointed CEO of Reputation House by the Board of Directors",
    description:
      "The Board of Directors has appointed Kristina Shinkareva as Chief Executive Officer of the company. The decision was made in February 2026, with Ms. Shinkareva officially taking office on April 22, 2026.",
    href: "https://reputation.house/news/kristina-shinkareva-appointed-ceo-of-reputation-house",
    image: "/images/resource-99ba471e26e8.png",
    alt: "",
    date: "2026-04-23",
    dateLabel: "23.04.2026",
  },
  {
    title:
      "Reputation House Is a Multiple Winner at the American Business Awards 2026",
    description:
      "We are proud to share that Reputation House has been recognized as a multiple winner at the American Business Awards 2026, securing awards in all three categories we entered.",
    href: "https://reputation.house/news/stevie-awards-2026",
    image: "/images/resource-117cff8e5c4b.jpg",
    alt: "",
    date: "2026-04-23",
    dateLabel: "23.04.2026",
  },
  {
    title:
      "Meet Risk Control Center.  A New Standard for Managing Digital Risk",
    description:
      "We've built a platform that puts you in control of your digital reputation — across search, AI, media, and reviews — before risks become losses. Meet Risk Control Center.",
    href: "https://reputation.house/news/meet-risk-control-center",
    image: "/images/resource-8d716f6d1970.png",
    alt: "",
    date: "2026-04-07",
    dateLabel: "07.04.2026",
  },
  {
    title: "We Launch a Free Product for Digital Risks Diagnostic – RiskCheck",
    description:
      "Reputation House launches RiskCheck — a free diagnostic platform that assesses digital risks for businesses in minutes.",
    href: "https://reputation.house/news/risk-check-is-live",
    image: "/images/resource-2730e4a03353.jpg",
    alt: "",
    date: "2026-03-17",
    dateLabel: "17.03.2026",
  },
];
useSeoMeta({
  title:
    "Digital Reputation Management Blog | Expert Insights | Reputation House",
});
</script>
<template>
  <main id="main-content" class="resource-page">
    <div class="resource-container">
      <nav class="resource-breadcrumb" aria-label="Breadcrumb">
        <NuxtLink to="/">Reputation.house</NuxtLink><span>/</span
        ><span>Blog</span>
      </nav>
      <h1>Digital Reputation Management Blog | Expert Insights</h1>
      <ArticleList :items="articles.slice(0, shown)" variant="blog" /><button
        v-if="shown < articles.length"
        class="resource-more"
        type="button"
        @click="shown += 15"
      >
        Read more
      </button>
    </div>
    <section class="resource-company-news">
      <h2>Company news</h2>
      <p>We publish our latest news and upcoming events</p>
      <div class="resource-company-news__list">
        <ArticleList :items="newsItems" variant="compact" />
      </div>
    </section>
  </main>
</template>
<style scoped>
#main-content { padding-top: 72px; }
.resource-container {
  width: calc(100% - 40px);
  max-width: 1160px;
  margin: auto;
  padding-bottom: 100px;
}
.resource-breadcrumb {
  display: flex;
  gap: 14px;
  padding-top: 115px;
  color: #8d8d8d;
  font-size: 16px;
}
.resource-page h1 {
  font-size: 40px;
  line-height: 1.2;
  font-weight: 600;
  margin: 120px 0 100px;
  white-space: normal;
}
.resource-page h1.resource-title--center {
  text-align: center;
  font-size: 42px;
  margin: 130px auto 110px;
}
.resource-more {
  display: block;
  margin: 70px auto 0;
  background: #303030;
  color: white;
  border: 0;
  padding: 18px 35px;
  cursor: pointer;
  font-weight: 600;
}
.resource-company-news {
  background: #efefef;
  padding: 130px 20px 100px;
}
.resource-company-news h2 {
  text-align: center;
  font-size: 40px;
  font-weight: 600;
}
.resource-company-news > p {
  text-align: center;
  font-size: 20px;
  color: #777;
  margin: 40px 0 110px;
}
.resource-company-news__list {
  max-width: 760px;
  margin: auto;
}
@media (max-width: 640px) {
  .resource-breadcrumb {
    padding-top: 40px;
    font-size: 13px;
  }
  .resource-page h1,
  .resource-page h1.resource-title--center {
    font-size: 28px;
    margin: 55px 0;
  }
  .resource-container {
    padding-bottom: 60px;
  }
  .resource-company-news {
    padding: 65px 20px;
  }
  .resource-company-news h2 {
    font-size: 28px;
  }
  .resource-company-news > p {
    font-size: 16px;
    margin: 20px 0 50px;
  }
}
</style>
