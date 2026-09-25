export interface ServiceAction {
  label: string;
  href: string;
}
export interface ServiceCard {
  title: string;
  parts: string[];
  eyebrow?: string;
  icon?: string;
  image?: string;
  number?: string;
  link?: ServiceAction;
  subtitle?: string;
  before?: string[];
  after?: string[];
  source?: string;
}
export interface ServiceSection {
  kind: string;
  title?: string;
  eyebrow?: string;
  body?: string[];
  aside?: string[];
  cards?: ServiceCard[];
  slides?: ServiceCard[];
  columns?: number;
  tone?: string;
  background: string;
  paddingTop: number;
  paddingBottom: number;
  callout?: { title: string; body: string[] };
  headings?: string[];
  rows?: string[][];
  items?: string[];
  note?: string[];
  actions?: ServiceAction[];
  questions?: { title: string; answer: string }[];
}
export interface ServicePageData {
  slug: string;
  metaTitle: string;
  description: string;
  hero: {
    title: string;
    eyebrow: string;
    body: string[];
    action: string;
    note: string;
    coverageTitle?: string;
    coverage: string[];
    coverageIcons: string[];
    pattern?: string;
    background: string;
    logos: { src: string; alt: string }[];
  };
  sections: ServiceSection[];
}
