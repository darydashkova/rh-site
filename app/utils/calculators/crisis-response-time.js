var baseTime = {
  data_breach: 2,
  media_scandal: 4,
  reviews: 12,
  fake_news: 3,
  safety_crisis: 1,
  exec_scandal: 4,
};
var spreadMult = { slow: 2.5, active: 1.0, viral: 0.4 };
var platformMult = { social: 0.6, media: 0.8, reviews: 1.8, all: 0.5 };
var crisisLabels = {
  data_breach: "data breach",
  media_scandal: "media scandal",
  reviews: "review wave",
  fake_news: "disinformation campaign",
  safety_crisis: "safety incident",
  exec_scandal: "executive scandal",
};
var checklist = {
  data_breach: [
    [
      "Confirm scope immediately",
      "Before any public statement, know what was exposed, how many affected, and whether the breach is contained. Do not speculate publicly until you have facts.",
    ],
    [
      "Issue an initial holding statement",
      "Acknowledge the incident, commit to transparency, and state that an investigation is underway. Silence signals cover-up. Speed matters more than polish here.",
    ],
    [
      "Notify affected parties and regulators",
      "Legal obligations vary by jurisdiction. In most cases, GDPR and similar frameworks require notification within 72 hours. Start that clock now.",
    ],
  ],
  media_scandal: [
    [
      "Get ahead of the narrative with your own statement",
      "If a journalist is asking questions, you have a narrow window to shape how the story is framed. A brief, factual, non-defensive response now is worth more than a polished one tomorrow.",
    ],
    [
      "Align internal messaging first",
      "Employees hearing about this from a news alert rather than leadership is a secondary crisis. A short internal note before coverage drops — even a brief one — reduces speculation and leaks.",
    ],
    [
      "Decide on executive visibility early",
      "Research shows CEO-fronted apologies increase neutral media framing by 29 percentage points. Decide now whether leadership will speak directly, and brief them before they improvise.",
    ],
  ],
  reviews: [
    [
      "Identify whether the wave is organic or coordinated",
      "A sudden spike in negative reviews may be a coordinated attack, a real service failure, or a competitor play. The response strategy differs significantly across each.",
    ],
    [
      "Respond publicly and specifically",
      'Generic "we take all feedback seriously" responses make things worse. Acknowledge each concern by name. Even if you cannot resolve it immediately, visibility of response reduces the reputational damage.',
    ],
    [
      "Flag for platform removal where applicable",
      "If reviews are clearly fake, defamatory, or violate platform terms, file removal requests in parallel — not instead of — your public response.",
    ],
  ],
  fake_news: [
    [
      "Document the original false claim and its spread",
      "Screenshot, timestamp, and record where the claim originated and how far it has already spread. This evidence matters both for legal response and platform takedown requests.",
    ],
    [
      "Issue a clear, factual correction — not a debate",
      "Engaging with the framing of the false claim amplifies it. State the correct facts directly and briefly. Third-party validation from an expert or journalist strengthens this immediately.",
    ],
    [
      "Contact platforms where it is spreading",
      "Major platforms have dedicated misinformation reporting channels. Use them. Simultaneously, get your own verified channels posting the correction to provide an authoritative counter-source.",
    ],
  ],
  safety_crisis: [
    [
      "Safety first — communication second",
      "If people are at risk, remediation comes before statements. But do not let remediation become an excuse to delay communication. Parallel tracks, not sequential ones.",
    ],
    [
      "Acknowledge immediately, even with incomplete information",
      'A holding statement — "We are aware of an incident and are taking immediate action to protect those affected" — stops speculation. Silence will be read as indifference or concealment.',
    ],
    [
      "Prepare for regulatory contact",
      "Depending on the nature of the incident, regulatory bodies, emergency services, or legal counsel may need to be briefed before any public statement is finalized. Start those conversations now.",
    ],
  ],
  exec_scandal: [
    [
      "Separate the individual from the organisation",
      "The organisation's response must distinguish between the executive's personal conduct and the company's values. This framing needs to be clear from the first statement.",
    ],
    [
      "Make a leadership decision — and communicate it",
      "Ambiguity about whether the executive will remain in role extends the crisis. An interim position, a leave of absence, or a clear timeline for review all reduce uncertainty and signal control.",
    ],
    [
      "Engage directly with affected stakeholders",
      "Employees, investors, and key clients are likely already aware. Proactive outreach — not just a press release — maintains trust during transition. Silence reads as disarray.",
    ],
  ],
};
export { baseTime, spreadMult, platformMult, checklist, crisisLabels };
