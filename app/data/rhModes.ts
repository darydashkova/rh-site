export type RhModeKey = "detection" | "control" | "defence" | "personal";
type Item = { title: string; text: string; subtitle?: string };
export interface RhMode {
  key: RhModeKey;
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  videoTitle: string;
  painEyebrow: string;
  painTitle: string;
  pains: Item[];
  calloutEyebrow: string;
  calloutTitle: string;
  calloutText: string;
  rolesEyebrow: string;
  rolesTitle: string;
  rolesDescription: string;
  roles: { title: string; audience: string; text: string; quote: string }[];
  priceLabel: string;
  insideTitle: string;
  insideDescription: string;
  platformDescription: string;
  technology: Item[];
  services: Item[];
  statement: string;
  processTitle: string;
  processDescription: string;
  process: Item[];
  scopeTitle: string;
  scope: Item[];
  questions: { title: string; answer: string }[];
}

const commonTechnology: Item[] = [
  {
    title: "SCAN Monitoring",
    text: "Real-time monitoring of brand mentions across social media, news, video platforms, blogs and forums.",
  },
  {
    title: "SERP Analysis",
    text: "Track search results, knowledge panels and suggestions across Google, Bing, Yahoo and YouTube.",
  },
  {
    title: "AI Representation Analysis",
    text: "Analyze how ChatGPT, Gemini, Perplexity and other AI systems describe you.",
  },
  {
    title: "Reviews Monitoring",
    text: "Track reviews and ratings across major platforms and detect unusual patterns.",
  },
  {
    title: "Narrative & Sentiment Analytics",
    text: "Identify dominant narratives, sentiment changes and the sources behind them.",
  },
  {
    title: "Risk Signals & Alerts",
    text: "Prioritized alerts for emerging threats and abnormal activity before they escalate.",
  },
];
const commonServices: Item[] = [
  {
    title: "Analyst Reports & Interpretation",
    text: "Structured reports, expert interpretation and risk management recommendations.",
  },
  {
    title: "Dedicated Manager Support",
    text: "An expert stays with your account and coordinates the response to signals.",
  },
  {
    title: "Strategic Development",
    text: "A tailored strategy based on your digital presence and business goals.",
  },
  {
    title: "Content Creation",
    text: "Content and publications that strengthen the accurate story about you.",
  },
  {
    title: "Content Removal & Suppression",
    text: "Address inaccurate or harmful material and reduce its visibility where possible.",
  },
  {
    title: "Community Influence",
    text: "Coordinated work across the channels where opinions take shape.",
  },
];
const commonProcess: Item[] = [
  {
    title: "Diagnostics",
    text: "We analyze your current situation across search, AI, reviews and media.",
  },
  {
    title: "Offer",
    text: "We build a solution tailored to your tasks and risk profile.",
  },
  {
    title: "Launch",
    text: "We connect monitoring and analytics across all relevant channels.",
  },
  {
    title: "Operation",
    text: "You receive signals and insights in real time, with a team ready to act.",
  },
];
const commonRoles = [
  {
    title: "CEO & Founder",
    audience: "Public company, private business with public presence",
    text: "Understand what investors, partners and customers find before they contact your company.",
    quote: "I want to know what they find before the first meeting.",
  },
  {
    title: "Reputation Manager",
    audience: "In-house ORM specialist",
    text: "Bring search, AI, reviews and media into one view with clear priorities and expert support.",
    quote: "I need the infrastructure to see what matters and act.",
  },
  {
    title: "Head of Communications & PR Director",
    audience: "Enterprise and large brands",
    text: "Track the narrative across channels and coordinate a response before it spreads.",
    quote: "I want to lead the narrative, not react every morning.",
  },
  {
    title: "HR Director",
    audience: "Companies hiring across all levels",
    text: "See how the employer brand appears in reviews, AI answers, forums and search.",
    quote: "Candidates research us before they apply.",
  },
  {
    title: "CISO",
    audience: "Enterprise and regulated industries",
    text: "Identify coordinated activity, impersonation and attacks outside your security perimeter.",
    quote: "I need signals early enough for the team to respond.",
  },
  {
    title: "Legal Department",
    audience: "M&A and regulated industries",
    text: "Maintain a clear record of harmful content and its spread during sensitive periods.",
    quote: "I need evidence and a response team, not a dashboard alone.",
  },
];

export const rhModes: Record<RhModeKey, RhMode> = {
  detection: {
    key: "detection",
    eyebrow: "Platform access & expert support",
    title: "Brand Monitoring Tools That Detect Risks Before They Spread",
    description:
      "RH Detection is a risk intelligence platform for online brand monitoring, digital risk management and brand protection — with full visibility across media, search, AI and ratings.",
    action: "Book a Demo",
    videoTitle: "How It Works",
    painEyebrow: "Companies' reality without real-time monitoring",
    painTitle:
      "Information blindness in action — the intelligence gap that lets risks compound:",
    pains: [
      {
        title: "“The term sheet didn’t come. Their analyst had asked ChatGPT.”",
        text: "An AI answer shaped by old sources can reach investors before your company does.",
      },
      {
        title:
          "“The acquisition fell through. Their DD team had found three articles.”",
        text: "Unseen search results quietly influence decisions long before a due-diligence call.",
      },
      {
        title: "“There’s almost nothing about me online.”",
        text: "An empty or outdated digital profile leaves others to define your reputation.",
      },
      {
        title: "“The alert came too late to change the story.”",
        text: "Without timely monitoring, small signals become visible incidents.",
      },
    ],
    calloutEyebrow:
      "Don’t wait for a crisis to see what your brand is perceived online",
    calloutTitle: "A reputation crisis costs much more than preventing one",
    calloutText:
      "RH Detection delivers risk intelligence and full visibility across media, search, AI and ratings — so you detect and assess risk before it becomes a financial loss.",
    rolesEyebrow:
      "Built for brand compliance monitoring tools use cases across Legal and CISO teams — plus PR, Communications, HR, and executive leadership",
    rolesTitle: "Who uses RH Detection",
    rolesDescription:
      "Risk intelligence for organizations that need systematic visibility and early warning.",
    roles: commonRoles,
    priceLabel: "pricing: from $5,000 / month",
    insideTitle: "What's Inside RH Detection",
    insideDescription:
      "RH Detection is reputation monitoring tools, brand reputation monitoring tools, and media monitoring software combined into a complete risk management platform focused on visibility, fraud prevention, and early warning.\n\nIt combines real-time reputation issue identification, risk assessment, and reputation intelligence signals across press, social channels, search results, and AI-generated responses — with analyst reporting and risk management as a service. Built for organisations that need systematic intelligence on online reputation risk and early signals before a situation escalates.",
    platformDescription:
      "Risk Control Center is a configurable media monitoring platform with automated tracking, AI analytics, real-time risk intelligence feeds and signal analysis.",
    technology: [
      {
        title: "SCAN: Digital Risk Monitoring",
        text: "Real-time scan tracking tools that identify mentions across channels and detect risk patterns.",
      },
      {
        title: "SERP Analysis",
        text: "Track search results, knowledge panels and branded suggestions.",
      },
      {
        title: "AI-Powered Representation Analysis",
        text: "Analyze brand presentation across AI platforms and generative search.",
      },
      {
        title: "Reviews Monitoring & Fraud Prevention",
        text: "Detect rating changes, suspicious reviews and fraud patterns.",
      },
      {
        title: "Media Monitoring Analytics",
        text: "Tag narratives, sentiment and developing stories in media.",
      },
      {
        title: "Risk Signals, Alerts & Workflow Triggers",
        text: "Priority alerts with context for the teams who must respond.",
      },
    ],
    services: commonServices.slice(0, 3),
    statement:
      "Most media monitoring dashboards and risk alerts stop at a signal. RH Detection adds interpretation.",
    processTitle: "From first contact to a working system",
    processDescription:
      "Reputation risks — including fraud risk, third-party risk, and operational exposure — can be controlled before becoming financial losses with the right infrastructure.",
    process: commonProcess,
    scopeTitle: "Explore key scenarios by roles",
    scope: [
      {
        title: "CEO & Founder",
        text: "Public company, private business with public presence.",
      },
      {
        title: "Head of Reputation Management",
        text: "In-house ORM, brand and digital presence teams.",
      },
      {
        title: "CISO",
        text: "Enterprise and regulated industries facing digital threats.",
      },
    ],
    questions: [
      {
        title: "What is RH Detection?",
        answer:
          "RH Detection combines continuous brand monitoring and expert interpretation to identify risks before they become public incidents.",
      },
      {
        title: "Which channels does RH Detection monitor?",
        answer:
          "Search engines, media, social platforms, reviews and AI-generated answers.",
      },
      {
        title: "How is it different from a simple monitoring dashboard?",
        answer:
          "Analysts interpret the data and help prioritize action instead of only sending alerts.",
      },
    ],
  },
  control: {
    key: "control",
    eyebrow: "Platform access & narrative operations",
    title: "Enterprise Reputation Management Platform — RH Control",
    description:
      "RH Control combines real-time intelligence with expert narrative operations. Your brand stays aligned with business reality across search, media, reviews and AI.",
    action: "Book a Demo",
    videoTitle: "How Online Reputation Management Works",
    painEyebrow: "What Companies Miss Without Real-Time Monitoring",
    painTitle: "Information blindness in action:",
    pains: [
      {
        title: "“The term sheet didn't come. Their analyst had asked ChatGPT.”",
        subtitle: "AI narrative blind spot",
        text: "Investors, partners, and acquirers search before they call — and increasingly, they ask AI. The answer is assembled from sources you've never reviewed: forum posts, outdated coverage, a competitor's comparison piece. Your narrative is being written and delivered to decision-makers. You're just not the one writing it.",
      },
      {
        title:
          "“The acquisition fell through. Their DD team had found three articles.”",
        subtitle: "Silent reputational damage",
        text: "You didn't know the articles existed. They'd been ranking quietly for two years. Due diligence doesn't share its notes — deals slow, calls get rescheduled, offers are withdrawn without explanation. Decisions about your company are being made using content you've never reviewed, in searches you've never run.",
      },
      {
        title: "“Our SERP is a graveyard of old bad news.”",
        subtitle: "Unmanaged search landscape",
        text: "The article from three years ago still ranks. The negative forum thread is on page one. The competitor comparison piece misrepresents you. No one owns your search presence, so it manages itself — and it's not saying what you'd want. Negative reviews accumulate. Your online image drifts. Your digital footprint becomes a liability. Damage to your reputation compounds quietly — until it's in a due diligence report.",
      },
      {
        title: "“We have monitoring. We have no one to act on it.”",
        subtitle: "Data without operations",
        text: "The dashboard shows the spike. The alert fired at 2am. By morning the team has reviewed it, debated it, escalated it and taken no action. Turning a signal into a coordinated response requires expertise and a process that doesn't exist. That's not managing your reputation — that's watching it erode.",
      },
      {
        title: "“PR handled the press. No one handled the forums.”",
        subtitle: "Fragmented narrative ownership",
        text: "Media coverage got a response. The Reddit thread, the Glassdoor review, the industry forum post — those spread without comment. The narrative fractures across channels because no single team owns it end-to-end. Mentions of your brand keep multiplying in places no one's watching. You can't build and maintain a positive online reputation if you only control one channel.",
      },
      {
        title: "“The board asked what our reputation KPIs are. We had none.”",
        subtitle: "No measurement framework",
        text: "Reputation is tracked by absence of crisis. No baseline, no benchmark, no way to show progress or justify investment. Without a reputation management strategy, there's no mandate — and no visibility into whether things are improving or quietly getting worse.",
      },
    ],
    calloutEyebrow:
      "Don’t wait for a crisis to see how your narrative is being shaped online",
    calloutTitle: "If you're not managing your narrative, someone else is",
    calloutText:
      "RH Control gives you real-time intelligence and expert online reputation management across media, search, AI platforms and reviews — before someone else shapes the story. Every day without proper ORM, someone else is writing the narrative about your company. Your digital reputation is an asset that requires active management — not passive monitoring.",
    rolesEyebrow:
      "Six roles. One system. Each sees what they require to act on",
    rolesTitle: "Online Reputation Management Platform: Who It's Built For",
    rolesDescription:
      "RH Control is right for organizations that need to protect your reputation proactively — not just respond after the damage is done. Whether you're working with reputation management consultants or building internal capability, the platform gives you both infrastructure and execution.",
    roles: commonRoles,
    priceLabel: "pricing: from $12,000 / month",
    insideTitle: "What's Inside the Online Reputation Management Platform",
    insideDescription:
      "RH Control is a full-stack online reputation management service: a platform that monitors search, media, reviews, and AI channels in real time — paired with a dedicated operations team that acts on every signal. Where most tools stop at reporting, RH Control goes further. Think of it as expert online reputation management combined with the technology infrastructure to execute at scale. Built for organisations that can't afford to treat reputation as a reactive function.",
    platformDescription:
      "A unified system of automated monitoring, AI analytics and risk detection in real time.",
    technology: commonTechnology,
    services: commonServices,
    statement:
      "Most platforms give you data and leave the rest to you. RH Control delivers the platform and the team that runs it.",
    processTitle:
      "How RH Control Helps Brands Take Control of Online Reputation",
    processDescription:
      "From first contact to a working system: monitoring, strategy and operations aligned with your goals.",
    process: commonProcess,
    scopeTitle: "What Does a Reputation Management Platform Include?",
    scope: [
      {
        title: "01 • What the platform covers",
        text: "Search results, content removal, reviews, AI representation and ongoing intelligence.",
      },
      {
        title: "02 • Tools + team",
        text: "Technology and human expertise to execute across every channel.",
      },
      {
        title: "03 • What managing reputation means",
        text: "Understanding the digital presence your audience sees and having the capacity to respond.",
      },
      {
        title: "04 • Not just software",
        text: "A dedicated operations function that shapes your information environment every day.",
      },
    ],
    questions: [
      {
        title: "What is online reputation management?",
        answer:
          "It is the practice of monitoring, shaping and protecting how a company appears across search, reviews, social media and AI.",
      },
      {
        title: "How is RH Control different from reputation monitoring tools?",
        answer:
          "RH Control combines monitoring with an expert operations team that interprets signals and executes a response.",
      },
      {
        title: "How long does it take to see results?",
        answer:
          "Monitoring is available shortly after launch. Changes to search and narrative depend on the channels and starting position.",
      },
      {
        title: "Which channels does RH Control monitor and manage?",
        answer: "Search, media, reviews, social channels and AI platforms.",
      },
    ],
  },
  defence: {
    key: "defence",
    eyebrow: "Platform access & anti-crisis operations",
    title:
      "RH Defence: Crisis Management Software Backed by a Rapid-Response Team",
    description:
      "RH Defence is a crisis management platform paired with a dedicated operations team, deployed when a reputation threat has already become public damage.",
    action: "Get Emergency Consultation",
    videoTitle: "How Crisis Reputation Management Works",
    painEyebrow: "Why reputation crises become permanent",
    painTitle: "Six ways companies lose control of their own story",
    pains: [
      {
        title:
          "“PR drafted a statement. Legal revised it four times. It still hasn’t gone out.”",
        text: "While internal teams debate, the story keeps spreading across search, social and AI.",
      },
      {
        title:
          "“The story ran on Monday. By Wednesday it was in 14 languages.”",
        text: "Digital amplification crosses markets faster than a traditional response process.",
      },
      {
        title:
          "“We resolved the issue six months ago. Google still shows the crisis week.”",
        text: "The information footprint remains after the operational issue is closed.",
      },
      {
        title: "“We had monitoring, but no coordinated response.”",
        text: "Fragmented teams lose precious time while the narrative takes hold.",
      },
    ],
    calloutEyebrow:
      "Don’t let a reputation crisis define your company’s digital identity",
    calloutTitle: "A reputation crisis costs much more, when you wait",
    calloutText:
      "RH Defence deploys platform and crisis operations team to contain damage, stabilize the narrative and restore control — before the situation becomes permanent.",
    rolesEyebrow:
      "Six roles. One system. Each sees what they require to act on",
    rolesTitle: "RH Defence is right for you, if you are:",
    rolesDescription:
      "An operational response for leaders managing an active crisis across markets and digital channels.",
    roles: commonRoles,
    priceLabel: "pricing: from $12,000 / project",
    insideTitle: "What's Inside the RH Defence Crisis Management Platform",
    insideDescription:
      "Project-based engagement, not a monthly subscription. Scope is defined by crisis complexity, geography, and duration. Includes full platform activation and dedicated crisis operations team from day one.",
    platformDescription:
      "A unified crisis monitoring platform — automated monitoring, AI analytics and risk detection in real time.",
    technology: [
      commonTechnology[0]!,
      commonTechnology[1]!,
      commonTechnology[2]!,
      {
        title: "Review Management Service",
        text: "Monitor and respond to reviews across major platforms during a crisis.",
      },
      commonTechnology[4]!,
      {
        title: "Attack Source Detection",
        text: "Identify coordinated attacks, bot networks and malicious actors.",
      },
    ],
    services: commonServices,
    statement:
      "Most crisis communications responses are fragmented by design. RH Defence turns monitoring into coordinated action.",
    processTitle: "From first call to deployed crisis management",
    processDescription:
      "The earlier a coordinated response is in place, the smaller the permanent digital footprint.",
    process: [
      {
        title: "Diagnostics",
        text: "We analyze the current situation, affected channels and crisis sources.",
      },
      {
        title: "Crisis Strategy",
        text: "We define the response: what to address, what to monitor and who will do it.",
      },
      {
        title: "Full Deployment",
        text: "Platform activation and a dedicated team begin at once.",
      },
      {
        title: "Stabilization",
        text: "We track the changing narrative and coordinate content, response and recovery.",
      },
    ],
    scopeTitle: "Crisis Management Case Studies",
    scope: [
      {
        title: "01 • The pattern beneath every crisis",
        text: "Information spreads faster than response planning. Speed and coordination determine how much of it becomes permanent.",
      },
      {
        title: "02 • What clients have seen",
        text: "A clear view of channels and sources helps teams contain damage and stabilize the narrative.",
      },
      {
        title: "03 • Pricing & retainer",
        text: "Scope is defined by crisis complexity, geography and duration.",
      },
    ],
    questions: [
      {
        title: "What is RH Defence?",
        answer:
          "RH Defence combines crisis monitoring software with a dedicated team for rapid reputation response.",
      },
      {
        title: "How quickly can the team respond?",
        answer:
          "The team assesses the active situation and begins deployment as quickly as the scope and access allow.",
      },
      {
        title: "Is RH Defence a project or a subscription?",
        answer:
          "Engagement is scoped to the crisis. Duration and pricing depend on complexity and geography.",
      },
      {
        title: "Which channels are covered?",
        answer: "Search, AI, media, social platforms and reviews.",
      },
    ],
  },
  personal: {
    key: "personal",
    eyebrow: "Platform & personal brand services",
    title:
      "Personal Reputation Management Software for Executives and Founders",
    description:
      "RH Personal is an online reputation management service for individuals — executives, founders and professionals who need to manage what the world finds about them online.",
    action: "Discuss Your Case With Expert",
    videoTitle: "How Online Reputation Management Works",
    painEyebrow: "Companies' reality without real-time monitoring",
    painTitle:
      "Information Blindness in Action: What Your Name Returns Without Online Reputation Management",
    pains: [
      {
        title:
          "“The article is three years old. It still ranks first when anyone searches my name.”",
        text: "Your search results may reflect a past you no longer recognize.",
      },
      {
        title:
          "“The acquisition fell through. Their DD team had found three articles.”",
        text: "A single outdated association can influence a decision before you hear about it.",
      },
      {
        title:
          "“There’s almost nothing about me online. I thought that was safe.”",
        text: "An empty digital footprint leaves gaps that others and AI systems fill.",
      },
      {
        title: "“My career changed. My online profile didn’t.”",
        text: "Personal reputation requires maintenance as roles and goals evolve.",
      },
    ],
    calloutEyebrow: "Your name is a business variable — is it managed?",
    calloutTitle:
      "Most executives discover their personal reputation problem in the middle of a deal",
    calloutText:
      "RH Personal combines continuous monitoring of your digital footprint with dedicated operations — managing what appears in search, correcting how AI describes you and building executive visibility.",
    rolesEyebrow:
      "Four roles. One system. Each sees what they require to act on",
    rolesTitle: "Who RH Personal Is Right For",
    rolesDescription:
      "Personal reputation management designed for people whose name is part of their business.",
    roles: [
      {
        title: "CEO & Founder",
        audience: "Public company, private business with public presence",
        text: "Align your own digital profile with the company you lead.",
        quote: "I manage the company narrative. I need my name to support it.",
      },
      {
        title: "C-Suite Executive",
        audience: "COO, CFO, CMO, counsel",
        text: "Build an accurate executive profile before a transition or new public role.",
        quote: "My profile should reflect what I do now.",
      },
      {
        title: "Business Owner or Beneficiary",
        audience: "Companies, enterprise, large brand",
        text: "Protect an accurate online footprint across the markets where you operate.",
        quote:
          "I prefer not to be invisible, but to be represented accurately.",
      },
      {
        title: "Executive in Transition",
        audience: "Top managers changing roles",
        text: "Update search results and biography as your career moves.",
        quote: "My previous role should not define my next one.",
      },
    ],
    priceLabel: "pricing: from $5,000 / month",
    insideTitle: "What's Inside the Online Reputation Management Platform",
    insideDescription:
      "Every engagement starts with a Personal Risk Check — a structured audit of your complete digital presence before operations begin. Scope scales with the complexity of your profile, geography, and active operations required. For emergency personal reputation crisis response — RH Defence.",
    platformDescription:
      "A unified system of automated monitoring, AI analytics and risk detection in real time.",
    technology: [
      commonTechnology[0]!,
      commonTechnology[1]!,
      commonTechnology[2]!,
      {
        title: "Narrative & Sentiment Analytics",
        text: "Understand the story forming around your name, its tone and the sources driving it.",
      },
      {
        title: "Risk Signals & Alerts",
        text: "Know when a new mention or an unusual pattern affects your name.",
      },
    ],
    services: commonServices,
    statement:
      "Built for individuals, not brands. The monitoring is calibrated to your name, context, career and risk requirements.",
    processTitle:
      "How It Works: From Diagnostics to Ongoing Reputation Management",
    processDescription:
      "Your personal reputation is being formed right now. The earlier it is managed, the less remediation is required.",
    process: commonProcess,
    scopeTitle: "A Personal Reputation Strategy",
    scope: [
      {
        title: "01 • Personal Risk Check",
        text: "A structured audit of what search, AI, media and review sources return about your name.",
      },
      {
        title: "02 • Visibility plan",
        text: "Decide which parts of your profile to strengthen, correct or suppress.",
      },
      {
        title: "03 • Ongoing operations",
        text: "Monitor changes and keep your digital presence aligned with your current goals.",
      },
    ],
    questions: [
      {
        title: "Who is RH Personal for?",
        answer:
          "Executives, founders, business owners and public figures whose online profile affects professional opportunities.",
      },
      {
        title: "What does personal reputation management include?",
        answer:
          "Monitoring, analysis and active work across search, AI answers, media and other digital sources.",
      },
      {
        title: "How does a Personal Risk Check work?",
        answer:
          "It maps the information visible about your name across the most relevant channels and markets.",
      },
      {
        title: "Can you help with outdated search results?",
        answer:
          "The team assesses each result and develops a plan to correct, update, remove or reduce its visibility where possible.",
      },
    ],
  },
};
