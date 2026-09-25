export interface ServiceAction {
  label: string;
  href: string;
}
export interface ServiceCard {
  backgroundImage?: string;
  titleSize?: number;
  titleWeight?: number;
  titleLineHeight?: number;
  borderColor?: string;
  background?: string;
  color?: string;
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
  patternImage?: string;
  formButtonLabel?: string;
  formButtonWidth?: number;
  coverHeight?: string;
  standardCards?: boolean;
  editorialBody?: boolean;
  splitTitleFull?: boolean;
  referenceId?: string;
  disclaimer?: string;
  asideImage?: string;
  moduleIcons?: string[];
  stackedHeadings?: boolean;
  copyWidth?: number;
  asideHeight?: number;
  bleed?: boolean;
  cardWidth?: number;
  layout?: string;
  kind: string;
  title?: string;
  icon?: string;
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
  callout?: { title: string; body: string[]; icon?: string };
  headings?: string[];
  rows?: string[][];
  items?: string[];
  note?: string[];
  actions?: ServiceAction[];
  questions?: { title: string; answer: string }[];
}
export interface ServicePageData {
  theme?: string;
  newService?: boolean;
  variant?: string;
  slug: string;
  metaTitle: string;
  description: string;
  hero: {
    titleWidth?: number;
    bodyWidth?: number;
    compact?: boolean;
    form?: boolean;
    reviewScale?: string;
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
