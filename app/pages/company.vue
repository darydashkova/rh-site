<script setup lang="ts">
import awards from "~/data/awards.json";
import "./company.css";

const timeline = [
  {
    year: "2019",
    title: "ORM Agency",
    text: "Started when reputation management meant reacting to damage. Built deep expertise in how public perception forms and what actually moves it.",
  },
  {
    year: "2020 – 2022",
    title: "RepTech Company",
    text: "Expertise crystallized into proprietary technology. Business model shifted from services to products — first tools launched, Reputation Check released.",
  },
  {
    year: "2023 – 2024",
    title: "Platform Era",
    text: "Risk Control Center launch with AI layer: ChatGPT, Gemini and Perplexity. 25+ international awards.",
  },
  {
    year: "2025 – NOW",
    title: "Digital Risk Protection",
    text: "We don't react to reputation incidents — we control the digital environment as infrastructure that precedes them.",
  },
];
const metrics = [
  {
    value: "$82.4B",
    text: "The most expensive reputation crisis in history. Volkswagen Dieselgate.",
  },
  {
    value: "25%",
    text: "of a company's market cap is directly tied to reputation",
  },
  { value: "87%", text: "of CEOs consider reputation a key driver of ROI" },
  {
    value: "41%",
    text: "of companies see revenue drop in year one post-crisis",
  },
  { value: "+20%", text: "customer acquisition cost after reputation damage" },
];
const products = [
  {
    number: "01 · FREE MONITORING TOOL",
    name: "Risk Check",
    text: "Free, standalone diagnostic tool. Analyzes Search, AI, Media and Reviews and returns a visual risk map.",
    features: [
      "Risk Constellation: active threats",
      "Scored by Search / AI / Media / Reviews",
      "Free diagnostic for brands and persons",
    ],
    action: "RUN RISK CHECK",
    href: "https://checkmyrisks.com/",
  },
  {
    number: "02 · CORE PRODUCT",
    name: "Risk Control Center",
    text: "A two-layer system for ongoing management of digital reputation risks. A complete control infrastructure.",
    features: [
      "Proprietary platform · 10 modules",
      "Search + AI + Media + Reviews",
      "Expert team and end-to-end execution",
    ],
    action: "EXPLORE PACKAGES",
    href: "/risk-control-center",
  },
  {
    number: "03 · RESEARCH DIVISION",
    name: "Research Center",
    text: "A dedicated research division studying how reputation forms, narratives spread and algorithms shape perception.",
    features: [
      "Scientific foundation for methodologies",
      "Data-validated approaches",
      "Research and insights",
    ],
    action: "RESEARCH & INSIGHTS",
    href: "https://rc.reputation.house/",
  },
];
const modes = [
  {
    number: "01",
    name: "RH Detection.",
    label: "I see and understand",
    text: "Full visibility of online presence and timely risk identification.",
    price: "$5K–$20K",
    features: [
      "Search, media, social monitoring",
      "AI platform analysis",
      "RPN Score and critical alerts",
      "Expert interpretation included",
    ],
    href: "https://reputation.house/rh-detection",
  },
  {
    number: "02",
    name: "RH Control.",
    label: "I can influence",
    text: "Strategic management of online presence and narratives — driven by data analytics and your business goals.",
    price: "$12K–$40K",
    features: [
      "Everything in Detection",
      "SERP and digital background control",
      "Narrative strategy and positioning",
      "Dedicated expert team",
    ],
    href: "https://reputation.house/rh-control",
  },
  {
    number: "03",
    name: "RH Defence.",
    label: "I control",
    text: "Emergency crisis response and rapid stabilization of the information landscape.",
    price: "$50K–$300K",
    features: [
      "Everything in Control",
      "Attack identification",
      "24/7 monitoring",
      "Crisis command and suppression",
    ],
    href: "https://reputation.house/rh-defence",
  },
  {
    number: "04",
    name: "RH Personal.",
    label: "I shape my digital identity",
    text: "Personal reputation management for executives, founders and public figures.",
    price: "$5K–$15K",
    features: [
      "Personalized monitoring",
      "Deep retrospective analysis",
      "Content, publications & PR",
      "Compliance control on request",
    ],
    href: "https://reputation.house/rh-personal",
  },
];
const comparison = [
  [
    "Role of reputation",
    "Emotional category — outcome of public communications",
    "One type of digital risk, directly affecting business sustainability",
  ],
  [
    "Operating logic",
    "React to what has already happened",
    "Preventive management of digital risks and scenario modeling",
  ],
  [
    "Key client's question",
    "What happened and how do we fix it?",
    "Where is the risk forming — and when does it become a systemic threat?",
  ],
  [
    "Role of AI",
    "Content generation and response assistance",
    "Pattern analysis, anomaly detection, forecasting",
  ],
  [
    "Business value",
    "Image support",
    "Protection of revenue, trust and investor confidence",
  ],
];
const questions = [
  {
    title:
      "What is Digital Risk Protection (DRP) and how is it different from ORM?",
    answer:
      "Digital Risk Protection identifies and controls emerging threats across search, AI, media and reviews before they become public incidents. Traditional ORM often begins after damage is visible.",
  },
  {
    title: "Can a reputation crisis affect company valuation?",
    answer:
      "Yes. A crisis can affect customer trust, revenue, acquisition cost and investor confidence.",
  },
  {
    title: "What is Risk Control Center and how does it work?",
    answer:
      "It is a technology platform and expert service that monitors digital channels, interprets signals and coordinates a response.",
  },
  {
    title:
      "How does Reputation House monitor what AI platforms like ChatGPT and Gemini say about a brand?",
    answer:
      "The platform analyses brand representation in AI answers and tracks changes over time.",
  },
  {
    title: "How much does enterprise reputation management cost?",
    answer:
      "Pricing depends on the risk level and expert involvement. Detection starts at $5K–$20K per month; Control at $12K–$40K per month.",
  },
  {
    title: "What is the difference between RH Detection and RH Control?",
    answer:
      "Detection gives visibility and alerts. Control adds continuous strategic work to shape search results and brand narratives.",
  },
  {
    title: "Which industries need Digital Risk Protection the most?",
    answer:
      "It is especially important where reputation directly affects revenue, regulation, investor confidence or market access.",
  },
];

useSeoMeta({
  title: "Reputation House: Online Reputation Management Company",
  description:
    "Reputation House is an international technology company specializing in Digital Risk Protection for global brands.",
});
</script>

<template>
  <main id="main-content" class="company-page">
    <section class="company-hero">
      <div class="container">
        <p>Complex protection of your digital profile</p>
        <h1>Reputation House: Digital Risk Protection for Global Brands</h1>
        <strong
          >Reputation House is an international technology company specializing
          in Digital Risk Protection</strong
        >
        <p class="company-hero__description">
          We help enterprise companies monitor and neutralize digital reputation
          risks across search, AI systems, media and reviews, before they
          escalate into financial, regulatory or reputational damage.
        </p>
        <ActionButton variant="outline">Get in touch with us</ActionButton>
      </div>
      <span class="company-hero__pattern" aria-hidden="true"
        >RH RH<br />RH RH<br />RH RH</span
      >
    </section>
    <div class="company-stat-strip">
      <div class="container">
        <div>
          <strong>25</strong><span>International<br />Awards</span>
        </div>
        <div>
          <strong>7 years</strong
          ><span>In ORM and<br />digital risk protection</span>
        </div>
        <div>
          <strong>AI & ML</strong
          ><span>Best use<br />Gold Stevie® Award 2026</span>
        </div>
      </div>
    </div>
    <section class="company-section company-history">
      <div class="container">
        <nav class="company-breadcrumb" aria-label="Breadcrumb">
          <SiteLink href="/">Reputation.house</SiteLink> / Company
        </nav>
        <h2>From ORM Agency to Digital Risk Protection Platform</h2>
        <p class="company-intro">
          We didn't change what we do. We became more precise about what to call
          it and built the infrastructure to do it at scale
        </p>
        <div class="company-timeline">
          <article v-for="entry in timeline" :key="entry.year">
            <span>{{ entry.year }}</span>
            <h3>{{ entry.title }}</h3>
            <p>{{ entry.text }}</p>
          </article>
        </div>
        <blockquote>
          “The approach that worked in 2019: react, correct, manage consequences
          — no longer fits today's information landscape. We see signals before
          they become incidents, and make decisions before a crisis forms.
          That's not ORM. That's Digital Risk Protection.”<cite
            >— Kristina Shinkareva, CEO of RH</cite
          >
        </blockquote>
      </div>
    </section>
    <section class="company-section company-risk">
      <div class="container">
        <div class="company-risk__intro">
          <h2>
            The digital environment is no longer passive.<br />It amplifies
            everything.
          </h2>
          <div>
            <p>
              Search algorithms, AI platforms, and media ecosystems no longer
              just carry information — they interpret it, prioritize it, and
              amplify certain signals over others.
            </p>
            <p>
              Reputation risks form before the public incident. By the time they
              become visible, the damage is already in motion.
            </p>
            <ol>
              <li>Too late: the reaction comes after the problem is public.</li>
              <li>
                Too much information: no capacity to interpret the signal
                volume.
              </li>
            </ol>
          </div>
        </div>
        <div class="company-metrics">
          <article v-for="metric in metrics" :key="metric.value">
            <strong>{{ metric.value }}</strong>
            <p>{{ metric.text }}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="company-section company-products">
      <div class="container">
        <h2>How Reputation House is built</h2>
        <p class="company-intro">
          Three distinct components — each with its own role, each strengthening
          the others.
        </p>
        <div class="company-product-grid">
          <article v-for="product in products" :key="product.name">
            <span>{{ product.number }}</span>
            <h3>{{ product.name }}</h3>
            <p>{{ product.text }}</p>
            <ul>
              <li v-for="feature in product.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
            <ActionButton :href="product.href">{{
              product.action
            }}</ActionButton>
          </article>
        </div>
      </div>
    </section>
    <section class="company-section company-modes">
      <div class="container">
        <h2>From visibility to full control</h2>
        <p class="company-intro">
          Risk Control Center operates in different modes. Each corresponds to a
          different level of exposure, maturity and control — from early warning
          to strategic command.
        </p>
        <div class="company-mode-grid">
          <article v-for="mode in modes" :key="mode.number">
            <span>MODE {{ mode.number }}</span>
            <h3>
              {{ mode.name }}<small>{{ mode.label }}</small>
            </h3>
            <p>{{ mode.text }}</p>
            <ul>
              <li v-for="feature in mode.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
            <div>
              <span>STARTING AT</span
              ><strong>{{ mode.price }} <small>/mo</small></strong>
            </div>
            <ActionButton :href="mode.href">LEARN MORE</ActionButton>
          </article>
        </div>
      </div>
    </section>
    <section class="company-clients">
      <div class="container">
        <h2>
          We work with companies where reputation directly affects revenue
        </h2>
        <div class="company-client-names">
          <span>KIA</span><span>Mercedes-Benz</span><span>Acronis</span
          ><span>Danone</span>
        </div>
      </div>
    </section>
    <section class="company-awards">
      <div class="container">
        <h2>
          Recognized internationally across technology, data and leadership
        </h2>
        <ContentCarousel
          label="International awards"
          :columns="3"
          bleed
          :card-width="390"
          ><article
            v-for="(award, index) in awards"
            :key="`${award.title}-${index}`"
            class="company-award-card"
          >
            <img :src="award.image" :alt="award.title" loading="lazy" />
            <div>
              <h3>{{ award.title }}</h3>
              <p>{{ award.description }}</p>
              <ActionButton :href="award.action.href">Learn More</ActionButton>
            </div>
          </article></ContentCarousel
        >
      </div>
    </section>
    <section class="company-section company-comparison">
      <div class="container">
        <h2>
          The market saw reputation one way.<br />We see it differently and
          always have.
        </h2>
        <p class="company-intro">
          This is a precise description of the work we've been doing for years
          and why the old language no longer fits.
        </p>
        <div class="company-comparison__table">
          <div class="company-comparison__header">
            <span>DIMENSION</span><span>HOW THE MARKET SAW IT</span
            ><span>HOW REPUTATION HOUSE SEES IT IN 2026</span>
          </div>
          <div
            v-for="row in comparison"
            :key="row[0]"
            class="company-comparison__row"
          >
            <strong>{{ row[0] }}</strong>
            <p>{{ row[1] }}</p>
            <p>{{ row[2] }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="company-riskcheck">
      <div class="container">
        <h2>Assess Your Digital Risk Exposure in Minutes — Free</h2>
        <p>
          RiskCheck analyzes your brand's presence across search engines, AI
          systems, media and review platforms — and delivers a structured risk
          report.
        </p>
        <div>
          <h3>The cost of crisis is higher than the cost of preventing it</h3>
          <p>
            Start with a free diagnostic. Understand where your risks are
            forming, before they become visible to everyone else.
          </p>
          <ActionButton href="https://checkmyrisks.com/" variant="light"
            >RUN RISK CHECK</ActionButton
          ><ActionButton variant="dark-outline">TALK TO AN EXPERT</ActionButton>
        </div>
      </div>
    </section>
    <section class="company-section company-faq">
      <div class="container">
        <h2>Frequently Asked Question</h2>
        <QuestionList :questions="questions" />
      </div>
    </section>
    <section class="company-social">
      <div class="container">
        <h2>Our Social Media</h2>
        <div>
          <SiteLink href="https://instagram.com/reputation_house"
            >Instagram ↗</SiteLink
          ><SiteLink href="https://linkedin.com/company/20417837"
            >LinkedIn ↗</SiteLink
          ><SiteLink href="https://youtube.com/@ReputationHouse-pr2tq"
            >YouTube ↗</SiteLink
          ><SiteLink href="https://www.g2.com/products/reputation-house/reviews"
            >G2 ↗</SiteLink
          >
        </div>
      </div>
    </section>
  </main>
</template>
