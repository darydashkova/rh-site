<script setup lang="ts">
import "./risk-control-center.css";

const layer = ref<"technology" | "expert">("technology");
const faqTab = ref(0);
const problems = [
  {
    title: "Infofield is a business risk",
    text: "Every brand mention across search engines, AI systems, review sites, and digital channels directly impacts revenue, market access, and customer trust.",
  },
  {
    title: "Info attacks ×2 per year",
    text: "Coordinated reputational attacks are doubling annually — most companies detect them far too late to mitigate the damage.",
  },
  {
    title: "Data exists — control doesn't",
    text: "Companies collect monitoring data but lack the infrastructure to act before signals escalate into crises.",
  },
  {
    title: "Crises outpace management",
    text: "By the time internal teams notice a threat, the narrative has already spread across multiple channels.",
  },
];
const technology = [
  {
    icon: "◉",
    title: "SCAN Monitoring",
    text: "Real-time monitoring of brand mentions across social media, blogs, news outlets, video channels and forums.",
  },
  {
    icon: "⌕",
    title: "SERP Analysis",
    text: "Tracking search results, knowledge panels and search suggestions across Google, Bing, Yahoo and YouTube.",
  },
  {
    icon: "✺",
    title: "AI Representation Analysis",
    text: "Analysis of how the brand appears across ChatGPT, Gemini, Perplexity and other large language models.",
  },
  {
    icon: "☆",
    title: "Reviews Monitoring",
    text: "Aggregation of ratings and reviews across G2, Trustpilot, app stores and online marketplaces.",
  },
  {
    icon: "◌",
    title: "Narrative & Sentiment Analytics",
    text: "Detection of dominant narratives, sentiment shifts and messaging trends across digital assets.",
  },
  {
    icon: "⚑",
    title: "Risk Signals & Alerts",
    text: "Customizable alerts for emerging threats, unusual patterns and activity spikes before they escalate.",
  },
  {
    icon: "⬡",
    title: "Attack Source Detection",
    text: "Detection of coordinated attacks, bot networks, impersonation and malicious actors targeting the brand.",
  },
];
const expert = [
  {
    icon: "▤",
    title: "Analyst Reports & Interpretation",
    text: "Experts turn monitoring data into clear findings and priorities for decision-makers.",
  },
  {
    icon: "◷",
    title: "Dedicated Manager Support",
    text: "A dedicated team coordinates and interprets the platform’s signals.",
  },
  {
    icon: "◎",
    title: "Targeted Mention Handling",
    text: "Specific mentions are assessed and addressed with the appropriate response.",
  },
  {
    icon: "↗",
    title: "Strategic Development",
    text: "A long-term plan for managing search visibility, reputation and narrative.",
  },
  {
    icon: "✦",
    title: "Content Creation",
    text: "Rankings, listings, profile pages, media publications and PR pieces strengthen brand authority.",
  },
  {
    icon: "−",
    title: "Content Removal & Suppression",
    text: "Reduce the visibility of harmful content and remove it where possible.",
  },
  {
    icon: "♧",
    title: "Community Influence",
    text: "Engage relevant communities and shape the discussion around your brand.",
  },
];
const steps = [
  {
    title: "Collect",
    text: "The platform ingests signals from search, AI, media and review platforms 24/7 — with no gaps or delays.",
  },
  {
    title: "Analyze",
    text: "AI-powered tools classify sentiment, identify narratives and score risk severity in real time.",
  },
  {
    title: "Alert",
    text: "Critical signals trigger instant alerts; the expert team interprets context and prepares a response.",
  },
  {
    title: "Control",
    text: "Coordinated response protects the narrative, suppresses negatives and prevents escalation.",
  },
];
const modes = [
  {
    number: "01",
    statement: "I SEE AND UNDERSTAND",
    name: "RH DETECTION",
    subtitle: "Platform + Expert Support",
    text: "Full visibility of online presence and timely risk identification.",
    price: "$5k–$20k / month",
    features: [
      "Media, social & search monitoring",
      "AI platform presence analysis",
      "Crisis & significant change alerts",
      "Analytics & interpretation",
    ],
    href: "https://reputation.house/rh-detection",
  },
  {
    number: "02",
    statement: "I CAN INFLUENCE",
    name: "RH CONTROL",
    subtitle: "Platform + Narrative Expert Services",
    text: "Strategic management of brand online presence and narratives.",
    price: "$12k–$40k / month",
    features: [
      "Online visibility strategy",
      "SERP improvement & digital background",
      "Content management & narrative formation",
      "Expert support & analyst team",
    ],
    href: "https://reputation.house/rh-control",
  },
  {
    number: "03",
    statement: "I CONTROL",
    name: "RH DEFENCE",
    subtitle: "Platform + Anti-Crisis Expert Services",
    text: "Emergency crisis response and rapid stabilization of the information landscape.",
    price: "$50k–$300k / project",
    features: [
      "Immediate team deployment",
      "Crisis source identification",
      "Anti-crisis strategy",
      "24/7 high-frequency monitoring",
    ],
    href: "https://reputation.house/rh-defence",
  },
  {
    number: "04",
    statement: "I SHAPE MY DIGITAL IDENTITY",
    name: "RH PERSONAL",
    subtitle: "Platform + Personal Brand Services",
    text: "Building a sustainable online presence for individuals, not brands.",
    price: "$5k–$15k / month",
    features: [
      "Personalized monitoring",
      "Deep retrospective analysis",
      "Content, publications & PR",
      "Compliance control on request",
    ],
    href: "https://reputation.house/rh-personal",
  },
];
const faqGroups = [
  {
    name: "Product",
    questions: [
      {
        title: "What is Risk Control Center and how does it work?",
        answer:
          "A platform that monitors how your company appears across search engines, AI systems, media and review platforms. It collects signals, identifies risks and gives you the tools to act before they become problems.",
      },
      {
        title:
          "What makes Risk Control Center different from traditional brand reputation management tools?",
        answer:
          "It combines continuous technology monitoring with analysts who interpret signals and coordinate a response.",
      },
      {
        title: "Is Risk Control Center software or a managed solution?",
        answer:
          "It is both: a proprietary platform supported by a team of analysts and reputation specialists.",
      },
    ],
  },
  {
    name: "AI & Search Impact",
    questions: [
      {
        title: "Does the platform monitor AI answers?",
        answer:
          "Yes. It analyses how your brand appears in AI systems including ChatGPT, Gemini and Perplexity.",
      },
      {
        title: "Can Risk Control Center track search results?",
        answer:
          "Yes. It tracks branded and non-branded results, knowledge panels and search suggestions.",
      },
    ],
  },
  {
    name: "Business Impact",
    questions: [
      {
        title: "How does Risk Control Center help prevent a crisis?",
        answer:
          "It identifies emerging threats and alerts your team early enough to plan a coordinated response.",
      },
    ],
  },
  {
    name: "Revenue & Sales Impact",
    questions: [
      {
        title: "How can reputation monitoring protect revenue?",
        answer:
          "Early detection reduces the time harmful narratives remain visible to customers, partners and investors.",
      },
    ],
  },
];

useSeoMeta({
  title: "Reputation Management Software | Risk Control Center",
  description:
    "Enterprise reputation management software for monitoring search, media, reviews and AI answers in real time.",
});
</script>

<template>
  <main id="main-content" class="rcc-page">
    <section class="rcc-hero">
      <div class="container">
        <p class="rcc-eyebrow">Risk Control Center by Reputation House</p>
        <h1>Risk Control Center:<br />Reputation Management Software</h1>
        <p class="rcc-hero__lead">
          Risk Control Center is reputation management software for enterprises:
          it monitors search, media, reviews and AI answers in real time, scores
          risk, and alerts your team before a signal turns into a loss. It comes
          with a team of analysts, not as a self-serve tool.
        </p>
        <ActionButton variant="light">Book a Demo</ActionButton>
        <img
          class="rcc-dashboard"
          src="/images/rcc-dashboard.webp"
          alt="Risk Control Center monitoring dashboard"
        />
      </div>
    </section>
    <div class="rcc-ticker" aria-hidden="true">
      <span v-for="n in 3" :key="n"
        >RPN Score &nbsp; Social Listening &nbsp; Mention Dynamics &nbsp;
        Real-time threat monitoring &nbsp; AI-powered narrative analysis &nbsp;
      </span>
    </div>
    <section class="rcc-section rcc-problem">
      <div class="container">
        <p class="rcc-kicker">The Problem</p>
        <div class="rcc-heading-row">
          <h2>The market<br />has changed</h2>
          <p>
            Digital reputation is no longer a PR concern. A company's digital
            presence is an asset, exposed to coordinated information attacks,
            misleading AI answers and toxic search results. Enterprises need
            continuous monitoring that surfaces a threat before it compounds.
          </p>
        </div>
        <div class="rcc-problem-grid">
          <article v-for="(item, index) in problems" :key="item.title">
            <span>0{{ index + 1 }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>
    <section id="platform" class="rcc-section rcc-ecosystem">
      <div class="container">
        <p class="rcc-kicker">Risk Control Center Ecosystem</p>
        <div class="rcc-heading-row">
          <h2>One infrastructure.<br />One platform for reputational risk.</h2>
          <p>
            Risk Control Center unifies technology and an expert team in a
            single platform — from signal detection through coordinated
            response.
          </p>
        </div>
        <div class="rcc-tabs" role="tablist" aria-label="Platform layer">
          <button
            role="tab"
            :aria-selected="layer === 'technology'"
            @click="layer = 'technology'"
          >
            Technology Layer</button
          ><button
            role="tab"
            :aria-selected="layer === 'expert'"
            @click="layer = 'expert'"
          >
            Expert Solutions
          </button>
        </div>
        <div class="rcc-layer" role="tabpanel">
          <h3>
            {{
              layer === "technology"
                ? "What the brand reputation management software tracks across your digital presence"
                : "Strategic Operations"
            }}
          </h3>
          <p>
            {{
              layer === "technology"
                ? "Proprietary technology collects signals across search, AI, media and reviews in real time — unified into a single risk intelligence dashboard."
                : "An expert team interprets data and turns signals into coordinated action, protecting your brand narrative and customer trust."
            }}
          </p>
          <div class="rcc-feature-grid">
            <article
              v-for="feature in layer === 'technology' ? technology : expert"
              :key="feature.title"
            >
              <span aria-hidden="true">{{ feature.icon }}</span>
              <h4>{{ feature.title }}</h4>
              <p>{{ feature.text }}</p>
            </article>
            <article class="rcc-feature-cta">
              <h4>Need More Details?</h4>
              <p>Drop us a message so we can contact you.</p>
              <ActionButton>Book a Demo</ActionButton>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section class="rcc-risk-check">
      <div class="container">
        <p class="rcc-kicker">Risk Check: Free diagnostic tool</p>
        <h2>How exposed is your brand right now?</h2>
        <p>
          Risk management starts with knowing where your company is exposed.
          Risk Check shows how search, AI answers and reviews present your
          company today.
        </p>
        <div>
          <ActionButton href="https://checkmyrisks.com/" variant="light"
            >Run Risk Check</ActionButton
          ><ActionButton variant="dark-outline">Book a Demo</ActionButton>
        </div>
      </div>
    </section>
    <section class="rcc-section rcc-process">
      <div class="container">
        <p class="rcc-kicker">Process</p>
        <div class="rcc-heading-row">
          <h2>From signal to action in four steps</h2>
          <p>
            Reputation risks can be controlled before they become financial
            losses. The right infrastructure turns reactive damage control into
            proactive management.
          </p>
        </div>
        <div class="rcc-steps">
          <article v-for="(step, index) in steps" :key="step.title">
            <span>STEP 0{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="rcc-section rcc-pricing">
      <div class="container">
        <p class="rcc-kicker">Pricing</p>
        <div class="rcc-heading-row">
          <h2>Solutions</h2>
          <p>
            One unified technology system.<br />Different levels of expert
            engagement and depth.
          </p>
        </div>
        <div class="rcc-mode-grid">
          <article v-for="mode in modes" :key="mode.number">
            <p>MODE {{ mode.number }} / “{{ mode.statement }}”</p>
            <h3>{{ mode.name }}</h3>
            <strong>{{ mode.subtitle }}</strong>
            <p>{{ mode.text }}</p>
            <b>{{ mode.price }}</b>
            <ul>
              <li v-for="feature in mode.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
            <ActionButton :href="mode.href">Learn More</ActionButton>
          </article>
        </div>
        <div class="rcc-center">
          <ActionButton>Choose Your Mode</ActionButton>
        </div>
      </div>
    </section>
    <section class="rcc-section rcc-faq">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="rcc-faq-tabs" role="tablist" aria-label="FAQ category">
          <button
            v-for="(group, index) in faqGroups"
            :key="group.name"
            role="tab"
            :aria-selected="faqTab === index"
            @click="faqTab = index"
          >
            {{ group.name }}
          </button>
        </div>
        <QuestionList :questions="faqGroups[faqTab]!.questions" />
      </div>
    </section>
    <section class="rcc-final">
      <div class="container">
        <p class="rcc-kicker">Brand Reputation Management Platform</p>
        <h2>
          Managing reputation before a crisis is far more profitable than
          cleaning up after
        </h2>
        <p>
          Reputational risk management, done proactively, is a measurable
          business advantage. Act on the signal before a crisis hits.
        </p>
        <ActionButton variant="light">Book a Demo</ActionButton>
      </div>
    </section>
  </main>
</template>
