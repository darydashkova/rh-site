<script setup lang="ts">
import CalculatorSerpReputationScore from "~/components/calculators/CalculatorSerpReputationScore.vue";
const consultation = useConsultation();
useSeoMeta({
  title: "SERP Control Score: Do You Own Your Brand Search Results?",
  description:
    "Check your brand SERP control score free. See how many top-10 results you own, what negative listings are costing you, and where your search reputation is exposed.",
});
</script>
<template>
  <main id="main-content" class="calculator-page">
    <nav class="calculator-breadcrumb">
      <SiteLink href="/">Reputation.house</SiteLink> /
      <SiteLink href="/risk-calculator">Calculator</SiteLink> / SERP Control
      Score: Do You Own Your Brand Search Results?
    </nav>
    <section class="rh-cp-header">
      <div class="rh-cp-header-wrap">
        <div class="rh-cp-toprow">
          <span class="rh-cp-tag">Free Tool</span>
          <span class="rh-cp-badge">SERP Control Score</span>
        </div>
        <h1 class="rh-cp-h1">
          SERP Control Score:<br /><em
            >Do You Own Your Brand Search Results?</em
          >
        </h1>
        <span class="rh-cp-lead"
          >Five inputs, one score out of 100 — see how much of your branded
          top-10 you actually control, what the gaps are exposing you to, and
          exactly what to fix first.</span
        >
        <div class="rh-cp-meta">
          <span class="rh-cp-meta-text">Free · No registration</span>
          <span class="rh-cp-meta-dot">·</span>
          <span class="rh-cp-meta-text">Under 1 min</span>
          <span class="rh-cp-meta-dot">·</span>
          <span class="rh-cp-meta-badge">4 named sources · instant score</span>
        </div>
        <div class="rh-cp-divider"><span></span><span></span><span></span></div>
      </div>
    </section>
    <CalculatorSerpReputationScore />
    <div class="rh-action-block">
      <div class="rh-action-block__col rh-action-block__col--text">
        <span class="rh-action-block__badge">CONFIDENTIAL</span>
        <h3 class="rh-action-block__title">Tell us about your situation</h3>
        <p class="rh-action-block__text">
          Share what's going on — we'll review it and come back with a clear
          action plan built around your specific risk. Everything is under an
          NDA from the moment you reach out, before any conversation begins.
        </p>
      </div>
      <div class="rh-action-block__col rh-action-block__col--visual">
        <div class="rh-action-block__shield">
          <svg
            width="56"
            height="64"
            viewBox="0 0 56 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 2L52 12V28C52 44 42 56 28 62C14 56 4 44 4 28V12L28 2Z"
              stroke="#A8C19A"
              stroke-width="2.5"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18 31L25 38L39 23"
              stroke="#A8C19A"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <p class="rh-action-block__visual-label">
          NDA from the<br />first contact
        </p>
        <button
          class="rh-action-block__cta"
          type="button"
          @click="consultation.open()"
        >
          Get an Action Plan <span class="rh-action-block__arrow"></span>
        </button>
      </div>
    </div>
    <section class="rh-cp-how-serp">
      <div class="rh-cp-how-serp-wrap">
        <h2 class="rh-cp-h2">What This Calculator Does, and Why It Matters</h2>
        <span class="rh-cp-p"
          >When someone searches your brand name, they don't just find you. They
          find everything Google has indexed about you — your site, your social
          profiles, third-party review aggregators, press coverage, and anything
          negative that ranks. What shows up in those ten positions is your
          brand reputation analysis in practice, whether you've thought about it
          or not. Most businesses have no idea how much of that page they
          actually control until something goes wrong.</span
        >
        <span class="rh-cp-p"
          >Brand SERP control isn't the same as general SEO. It's specifically
          about what happens when someone already knows your name and types it
          into Google — the moment of highest intent, when the decision to
          engage or walk away is being made. This tool scores that specific
          picture: how many of the top-10 are yours, whether you hold the
          critical first position, whether Google recognises you as a trusted
          entity, and whether anything negative is actively turning away
          searchers before they reach you.</span
        >
        <div class="rh-cp-how-serp-grid">
          <div class="rh-cp-how-serp-card">
            <span class="rh-cp-how-serp-num">01</span>
            <span class="rh-cp-how-serp-title"
              >Position #1 is not optional</span
            >
            <span class="rh-cp-how-serp-text"
              >Research on 4 million search results found that the top organic
              result gets more clicks than positions #3 through #10 combined.
              Moving from #2 to #1 increases CTR by 74.5%. If you don't hold
              position #1 for your own brand name, someone else is controlling
              the first thing people see.</span
            >
          </div>
          <div class="rh-cp-how-serp-card">
            <span class="rh-cp-how-serp-num">02</span>
            <span class="rh-cp-how-serp-title"
              >Negative results cost before anyone visits your site</span
            >
            <span class="rh-cp-how-serp-text"
              >Moz research shows a single negative result on your brand page
              drives away approximately 22% of potential customers. Three
              negative results push that to 59%. The loss is invisible in
              analytics because it happens at the search result — before a
              session even begins.</span
            >
          </div>
          <div class="rh-cp-how-serp-card">
            <span class="rh-cp-how-serp-num">03</span>
            <span class="rh-cp-how-serp-title"
              >Wikipedia and Knowledge Panels change how Google treats you</span
            >
            <span class="rh-cp-how-serp-text"
              >A Knowledge Panel signals that Google recognises your brand as a
              verified entity in its knowledge graph. This makes it harder for
              uncontrolled third-party content to dominate your SERP — and adds
              a ~1.4% CTR premium on top of your organic results.</span
            >
          </div>
          <div class="rh-cp-how-serp-card">
            <span class="rh-cp-how-serp-num">04</span>
            <span class="rh-cp-how-serp-title"
              >A score gives you something to act on</span
            >
            <span class="rh-cp-how-serp-text"
              >Knowing "our SERP isn't great" doesn't tell you what to do next.
              The score breaks down into four weighted factors — so you can see
              exactly which one is dragging the number down and what closing
              that specific gap would add.</span
            >
          </div>
        </div>
      </div>
    </section>
    <section class="rh-cp-src-serp">
      <div class="rh-cp-src-serp-wrap">
        <h2 class="rh-cp-h2-light">What the Score Is Based On</h2>
        <span class="rh-cp-p-light"
          >Four named sources drive the four factors in this score. Each one is
          traceable to a specific study or dataset — not an industry average
          invented to make the number look confident.</span
        >
        <div class="rh-cp-src-serp-rows">
          <div class="rh-cp-src-serp-row">
            <div>
              <span class="rh-cp-src-serp-figure">54.4%</span>
              <span class="rh-cp-src-serp-figure-sub"
                >of clicks → top-3 results</span
              >
            </div>
            <div>
              <span class="rh-cp-src-serp-title"
                >Owned positions score (up to 50 pts)</span
              >
              <span class="rh-cp-src-serp-text"
                >Analysis of 4 million Google search results found the top three
                organic results capture 54.4% of all clicks. Moving from
                position #2 to #1 increases CTR by 74.5%. The score gives 5
                points per owned position in the top-10, reflecting that each
                controlled slot reduces the share of your branded traffic
                reaching content you didn't create.</span
              >
              <span class="rh-cp-src-serp-link"
                >Source:
                <a
                  href="https://backlinko.com/google-ctr-stats"
                  target="_blank"
                  rel="nofollow noopener"
                  >Backlinko, Google CTR Study (4 million search results)</a
                ></span
              >
            </div>
          </div>
          <div class="rh-cp-src-serp-row">
            <div>
              <span class="rh-cp-src-serp-figure">19×</span>
              <span class="rh-cp-src-serp-figure-sub"
                >more clicks than top paid result</span
              >
            </div>
            <div>
              <span class="rh-cp-src-serp-title"
                >Position #1 bonus (+15 pts)</span
              >
              <span class="rh-cp-src-serp-text"
                >The #1 organic result receives 19 times more clicks than the
                top paid search result, and more clicks alone than results #3
                through #10 combined. For branded queries — where the user
                already knows who they're looking for — not holding the first
                position means someone else controls the first thing they
                see.</span
              >
              <span class="rh-cp-src-serp-link"
                >Source:
                <a
                  href="https://firstpagesage.com/reports/google-click-through-rates-ctrs-by-ranking-position/"
                  target="_blank"
                  rel="nofollow noopener"
                  >First Page Sage, Google CTR meta-analysis</a
                ></span
              >
            </div>
          </div>
          <div class="rh-cp-src-serp-row">
            <div>
              <span class="rh-cp-src-serp-figure">22–59%</span>
              <span class="rh-cp-src-serp-figure-sub"
                >customers lost per negative result</span
              >
            </div>
            <div>
              <span class="rh-cp-src-serp-title"
                >Negative results penalty (0–20 pts)</span
              >
              <span class="rh-cp-src-serp-text"
                >Moz research, widely cited across ORM industry studies, found
                that one negative result on the branded search page drives away
                approximately 22% of potential customers — before any visit,
                before any sales conversation. Two negative results: 44%. Three
                or more: 59%. The loss is pre-funnel and invisible in standard
                analytics.</span
              >
              <span class="rh-cp-src-serp-link"
                >Source:
                <a
                  href="https://moz.com/blog/how-online-reviews-impact-local-seo-rankings"
                  target="_blank"
                  rel="nofollow noopener"
                  >Moz, cited across ORM research (22% / 44% / 59% customer loss
                  figures)</a
                ></span
              >
            </div>
          </div>
          <div class="rh-cp-src-serp-row">
            <div>
              <span class="rh-cp-src-serp-figure">+1.4%</span>
              <span class="rh-cp-src-serp-figure-sub"
                >CTR from Knowledge Panel</span
              >
            </div>
            <div>
              <span class="rh-cp-src-serp-title"
                >Wikipedia / Knowledge Panel bonus (+15 pts)</span
              >
              <span class="rh-cp-src-serp-text"
                >A Knowledge Panel signals Google entity recognition — meaning
                Google has verified enough about your brand to display a
                structured summary alongside results. This adds approximately
                1.4% CTR on top of organic results and, more importantly, makes
                the branded SERP more resistant to third-party content
                dominating positions you don't actively manage.</span
              >
              <span class="rh-cp-src-serp-link"
                >Source:
                <a
                  href="https://keyword.com/blog/knowledge-panels-impact-in-serps/"
                  target="_blank"
                  rel="nofollow noopener"
                  >Keyword.com, Knowledge Panel SERP impact (2026)</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="rh-cp-faq-serp">
      <div class="rh-cp-faq-serp-wrap">
        <h2 class="rh-cp-h2" id="faq">Frequently Asked Questions</h2>
        <div class="rh-cp-faq-serp-list">
          <details class="rh-cp-faq-serp-item">
            <summary class="rh-cp-faq-serp-q">
              What is a brand SERP and why does it matter?
            </summary>
            <span class="rh-cp-faq-serp-a" style="display: block"
              >A brand SERP is what appears when someone searches your company
              or brand name specifically — not a product category or generic
              keyword, but your actual name. It matters because this is the
              highest-intent search someone can run about you. They already know
              who you are and are deciding whether to engage. Everything on that
              page shapes that decision: your own site, third-party review
              sites, press coverage, LinkedIn, Wikipedia — and anything negative
              that has managed to rank there.</span
            >
          </details>
          <details class="rh-cp-faq-serp-item">
            <summary class="rh-cp-faq-serp-q">
              How is brand SERP control different from standard SEO?
            </summary>
            <span class="rh-cp-faq-serp-a" style="display: block"
              >Standard SEO tries to rank for competitive keywords your audience
              uses to discover you. Brand SERP control is specifically about
              what happens after discovery — when someone who already knows your
              name runs a branded search. The objective is different: not
              visibility to new audiences, but controlling the narrative for
              people who are already evaluating you. The tools overlap, but the
              priority is different, and so is the competitive set — you're not
              fighting industry competitors, you're managing what third-party
              content Google decides to show about you.</span
            >
          </details>
          <details class="rh-cp-faq-serp-item">
            <summary class="rh-cp-faq-serp-q">
              What counts as an "owned" result in the top-10?
            </summary>
            <span class="rh-cp-faq-serp-a" style="display: block"
              >Any result you control directly: your main website, subdomains,
              social profiles (LinkedIn, Twitter/X, Facebook), your YouTube
              channel, your Google Business Profile, a Wikipedia article you've
              contributed to, or any other property where you have editorial
              control over what's published. Third-party review sites
              (Trustpilot, G2, Glassdoor), news articles, and competitor
              comparison pages don't count — even if the content is positive —
              because you can't control what appears or what changes.</span
            >
          </details>
          <details class="rh-cp-faq-serp-item">
            <summary class="rh-cp-faq-serp-q">
              How do negative results push away customers before they visit my
              site?
            </summary>
            <span class="rh-cp-faq-serp-a" style="display: block"
              >The loss happens at the search result page, before any click.
              When someone sees a negative article, a one-star review
              aggregator, or a complaint thread ranking for your brand name, a
              significant share of them decides not to continue — without ever
              visiting your site, without any interaction with your team. Moz
              research puts this at 22% for one negative result, rising to 59%
              with three. Because no session is started, this damage is entirely
              invisible in standard analytics. You can't see the customers you
              never got.</span
            >
          </details>
          <details class="rh-cp-faq-serp-item">
            <summary class="rh-cp-faq-serp-q">
              What's the fastest way to improve a low SERP Control Score?
            </summary>
            <span class="rh-cp-faq-serp-a" style="display: block"
              >The fastest single move is usually claiming and fully completing
              every major social profile for your brand — LinkedIn, Twitter/X,
              YouTube, Facebook — and ensuring they're optimised for your brand
              name. Each one that ranks is a slot you control. After that, the
              priority is suppressing negative results by outranking them with
              positive authoritative content, and then working toward a
              Knowledge Panel through structured data and consistent presence
              across authoritative directories.</span
            >
          </details>
          <details class="rh-cp-faq-serp-item">
            <summary class="rh-cp-faq-serp-q">
              Does AI Overview affect brand SERP control?
            </summary>
            <span class="rh-cp-faq-serp-a" style="display: block"
              >Yes, and it's an emerging risk. AI Overviews now appear on
              roughly 31% of Google searches and can push organic results below
              the fold — reducing CTR for even well-ranked branded results.
              Ahrefs' 2026 analysis found AI Overviews correlate with a 58%
              reduction in CTR for top-ranking pages. This calculator scores the
              traditional SERP, but AI representation of your brand is an
              additional, separate surface to monitor — one this calculator does
              not currently measure.</span
            >
          </details>
        </div>
      </div>
    </section>
    <section class="rh-cp-cross-serp">
      <div class="rh-cp-cross-serp-wrap">
        <h2 class="rh-cp-h2">Your SERP Score Is One Piece of the Picture</h2>
        <div class="rh-cp-cross-serp-grid">
          <div class="rh-cp-cross-serp-card a">
            <span class="rh-cp-cross-serp-eyebrow"
              >Free tool · Reputation Recovery Timeline</span
            >
            <span class="rh-cp-cross-serp-bignum">3 phases</span>
            <span class="rh-cp-cross-serp-title"
              >If something negative already ranks — how long to fix it</span
            >
            <span class="rh-cp-cross-serp-text"
              >Suppressing a negative result takes time. The Recovery Timeline
              calculator shows how long that process realistically takes by
              incident type, how far it spread, and what you have working in
              your favour right now.</span
            >
            <div class="rh-cp-cross-serp-btn-row">
              <a
                href="/calculator/reputation-recovery-timeline"
                target="_blank"
                rel="noopener"
                class="rh-cp-cross-serp-btn"
                >See the timeline →</a
              >
            </div>
          </div>
          <div class="rh-cp-cross-serp-card b">
            <span class="rh-cp-cross-serp-eyebrow"
              >Free tool · Brand Monitoring ROI</span
            >
            <span class="rh-cp-cross-serp-bignum">EMV</span>
            <span class="rh-cp-cross-serp-title"
              >What your brand mentions are worth in real money</span
            >
            <span class="rh-cp-cross-serp-text"
              >Controlling your SERP is one side of the picture. The Brand
              Monitoring ROI calculator shows what your earned media mentions
              are worth in paid-media terms — and how much slow response times
              are quietly eroding that value.</span
            >
            <div class="rh-cp-cross-serp-btn-row">
              <a
                href="/calculator/brand-monitoring-roi"
                target="_blank"
                rel="noopener"
                class="rh-cp-cross-serp-btn"
                >Calculate monitoring ROI →</a
              >
            </div>
          </div>
          <div class="rh-cp-cross-serp-card c">
            <span class="rh-cp-cross-serp-eyebrow"
              >Free tool · Crisis Response Time</span
            >
            <span class="rh-cp-cross-serp-bignum">⏱</span>
            <span class="rh-cp-cross-serp-title"
              >How fast you need to act before a crisis hardens into your
              SERP</span
            >
            <span class="rh-cp-cross-serp-text"
              >A negative SERP result often starts as a crisis that wasn't
              contained quickly enough. The Crisis Response Time calculator
              gives you the exact window — by crisis type, spread speed, and
              platform — before damage becomes difficult to reverse.</span
            >
            <div class="rh-cp-cross-serp-btn-row">
              <a
                href="/calculator/crisis-response-time"
                target="_blank"
                rel="noopener"
                class="rh-cp-cross-serp-btn"
                >Calculate response time →</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.rh-cp-header {
  width: 100%;
  background: #ffffff;
}
.rh-cp-header-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 52px 80px 44px;
}
.rh-cp-toprow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 22px 0;
  flex-wrap: wrap;
}
.rh-cp-tag {
  display: inline-block;
  background: #262626;
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 6px 18px;
  border-radius: 100px;
}
.rh-cp-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #dfecd9;
  color: #606c59;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 100px;
}
.rh-cp-badge::before {
  content: "";
  width: 6px;
  height: 6px;
  background: #99ad8f;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}
.rh-cp-h1 {
  font-size: clamp(26px, 3.2vw, 48px);
  font-weight: 600;
  color: #262626;
  line-height: 1.12;
  letter-spacing: -0.015em;
  margin: 0 0 14px 0;
  padding: 0;
}
.rh-cp-h1 em {
  font-style: normal;
  color: #99ad8f;
}
.rh-cp-lead {
  font-size: clamp(14px, 1.4vw, 18px);
  font-weight: 600;
  color: #808080;
  line-height: 1.65;
  margin: 0 0 20px 0;
  max-width: 800px;
  display: block;
}
.rh-cp-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px 10px;
}
.rh-cp-meta-text {
  font-size: 13px;
  font-weight: 600;
  color: #a3a3a3;
}
.rh-cp-meta-dot {
  color: #cccccc;
}
.rh-cp-meta-badge {
  font-size: 12px;
  font-weight: 600;
  color: #606c59;
  background: #dfecd9;
  border-radius: 100px;
  padding: 4px 14px;
}
.rh-cp-divider {
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 24px 0 0;
}
.rh-cp-divider span {
  height: 3px;
  border-radius: 100px;
  display: block;
}
.rh-cp-divider span:nth-child(1) {
  width: 36px;
  background: #262626;
}
.rh-cp-divider span:nth-child(2) {
  width: 22px;
  background: #bfd8b3;
}
.rh-cp-divider span:nth-child(3) {
  width: 12px;
  background: #dfecd9;
}
@media (max-width: 600px) {
  .rh-cp-header-wrap {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .rh-cp-h1 {
    font-size: clamp(22px, 6vw, 28px);
  }
}

.rh-sc {
  width: 100%;
  background: #f7f7f7;
}
.rh-sc-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px;
}
.rh-sc-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: start;
}

/* LEFT: FORM */
.rh-sc-form {
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
}
.rh-sc-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 6px 0;
}
.rh-sc-title {
  font-size: 19px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin-bottom: 8px;
}
.rh-sc-sub {
  font-size: 12.5px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-bottom: 28px;
  line-height: 1.55;
}

.rh-sc-q {
  margin: 0 0 24px 0;
}
.rh-sc-q-text {
  font-size: 13px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin: 0 0 4px 0;
}
.rh-sc-q-hint {
  font-size: 11px;
  font-weight: 600;
  color: #b3b3b3;
  display: block;
  margin: 0 0 10px 0;
}

/* Slider */
.rh-sc-slider-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 8px;
}
.rh-sc-slider-val {
  font-size: 24px;
  font-weight: 700;
  color: #262626;
}
.rh-sc-slider-hint {
  font-size: 11px;
  font-weight: 600;
  color: #a3a3a3;
}
input[type="range"] {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #f0f0f0;
  outline: none;
  -webkit-appearance: none;
  accent-color: #99ad8f;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #99ad8f;
  cursor: pointer;
  border: 3px solid #fff;
  box-shadow: 0 0 0 1px #99ad8f;
}
input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #99ad8f;
  cursor: pointer;
  border: 3px solid #fff;
}
.rh-sc-slider-marks {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
}
.rh-sc-slider-marks span {
  font-size: 10px;
  font-weight: 600;
  color: #c2c2c2;
}

/* Negative pills */
.rh-sc-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.rh-sc-pill {
  background: #f5f5f5;
  border-radius: 100px;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
  font-size: 13px;
  font-weight: 600;
  color: #262626;
}
.rh-sc-pill:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-sc-pill.selected {
  background: #262626;
  border-color: #262626;
  color: #fff;
}

/* Toggle yes/no */
.rh-sc-toggle-row {
  display: flex;
  gap: 8px;
}
.rh-sc-toggle {
  flex: 1;
  text-align: center;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 14px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
  font-size: 13px;
  font-weight: 600;
  color: #262626;
}
.rh-sc-toggle:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-sc-toggle.selected {
  background: #262626;
  border-color: #262626;
  color: #fff;
}

.rh-sc-btn {
  width: 100%;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: #262626;
  color: #ffffff;
  border: none;
  padding: 15px 28px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.15s;
  margin-top: 6px;
}
.rh-sc-btn:hover {
  background: #464646;
}

/* RIGHT: RESULT */
.rh-sc-result {
  background: #262626;
  border-radius: 20px;
  padding: 40px;
  position: sticky;
  top: 24px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
}

.rh-sc-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.rh-sc-empty-text {
  font-size: 12px;
  font-weight: 600;
  color: #585858;
  max-width: 230px;
  line-height: 1.6;
}

.rh-sc-filled {
  display: none;
  flex-direction: column;
}

/* Score gauge */
.rh-sc-score-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 4px 0;
}

.rh-sc-gauge-wrap {
  display: flex;
  align-items: flex-end;
  gap: 14px;
  margin-bottom: 8px;
}
.rh-sc-score-big {
  font-size: 52px;
  font-weight: 700;
  line-height: 1;
}
.rh-sc-score-max {
  font-size: 18px;
  font-weight: 600;
  color: #585858;
  padding-bottom: 8px;
}

.rh-sc-bar-wrap {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  height: 10px;
  overflow: hidden;
  margin-bottom: 8px;
}
.rh-sc-bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.7s ease;
}

.rh-sc-zone-label {
  font-size: 12px;
  font-weight: 700;
  display: block;
  margin-bottom: 20px;
}

/* Control % strip */
.rh-sc-ctrl-strip {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 16px 18px;
  margin-bottom: 14px;
}
.rh-sc-ctrl-text {
  font-size: 13px;
  font-weight: 600;
  color: #f7f7f7;
  line-height: 1.5;
}
.rh-sc-ctrl-text b {
  color: #bfd8b3;
}

/* Risk map */
.rh-sc-risk-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f7f7f7;
  display: block;
  margin-bottom: 10px;
}
.rh-sc-risks {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
}
.rh-sc-risk-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.rh-sc-risk-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 4px;
  flex-shrink: 0;
}
.rh-sc-risk-text {
  font-size: 12.5px;
  font-weight: 600;
  color: #a3a3a3;
  line-height: 1.5;
}
.rh-sc-risk-text b {
  color: #ffffff;
}

/* Growth potential */
.rh-sc-growth {
  background: rgba(191, 216, 179, 0.08);
  border: 1px solid rgba(191, 216, 179, 0.16);
  border-radius: 12px;
  padding: 16px 18px;
  margin-bottom: 16px;
}
.rh-sc-growth-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin-bottom: 8px;
}
.rh-sc-growth-text {
  font-size: 13px;
  font-weight: 600;
  color: #bfd8b3;
  line-height: 1.55;
}
.rh-sc-growth-text b {
  color: #ffffff;
}

/* Sources */
.rh-sc-sources {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.rh-sc-src-toggle {
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  cursor: pointer;
  user-select: none;
}
.rh-sc-src-toggle:hover {
  color: #808080;
}
.rh-sc-src-list {
  display: none;
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  line-height: 1.85;
  margin-top: 8px;
}
.rh-sc-src-list.open {
  display: block;
}

@media (max-width: 860px) {
  .rh-sc-wrap {
    padding: 32px 20px;
  }
  .rh-sc-inner {
    grid-template-columns: 1fr;
  }
  .rh-sc-result {
    position: static;
    min-height: auto;
  }
  .rh-sc-form {
    padding: 28px 22px;
  }
}
@media (max-width: 960px) {
  .rh-sc-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}

/* 🔥 ЕДИНЫЙ ШРИФТ ДЛЯ ВСЕГО БЛОКА — с fallback на Montserrat, если у Mont нет нужного начертания */
.rh-action-block {
  font-family: "Mont", "Montserrat", sans-serif;
}

.rh-action-block {
  display: flex;
  align-items: stretch;
  width: 100%;
  margin: 32px 0;
  border-radius: 20px;
  background-color: #ffffff;
  border: 1px solid #ececec;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.rh-action-block__col--text {
  flex: 1 1 65%;
  padding: 40px 44px;
  text-align: left;
}

.rh-action-block__col--visual {
  flex: 0 0 240px;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px 20px;
}

.rh-action-block__shield {
  display: flex;
  align-items: center;
  justify-content: center;
}

.rh-action-block__visual-label {
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-align: center;
  line-height: 1.4;
  margin: 0;
  opacity: 0.85;
}

.rh-action-block__badge {
  display: inline-block;
  background-color: #f1f5ec;
  color: #7c9667;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 7px 16px;
  border-radius: 50px;
  margin-bottom: 20px;
}

.rh-action-block__title {
  color: #1a1a1a;
  font-size: 27px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 14px 0;
}

.rh-action-block__text {
  color: #5c5c5c;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6;
  margin: 0;
  max-width: 600px;
}

.rh-action-block__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #a8c19a;
  color: #1a1a1a !important;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  padding: 11px 18px;
  border-radius: 50px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.15s ease;
}

.rh-action-block__cta:hover {
  background-color: #97b086;
  transform: translateY(-1px);
}

.rh-action-block__arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}

.rh-action-block__cta:hover .rh-action-block__arrow {
  transform: translateX(4px);
}

@media (max-width: 900px) {
  .rh-action-block {
    flex-direction: column;
    margin: 24px 0;
    border-radius: 16px;
  }

  .rh-action-block__col--text {
    padding: 32px 28px;
    order: 1;
  }

  .rh-action-block__col--visual {
    flex: none;
    flex-direction: row;
    padding: 20px 24px;
    order: 0;
  }

  .rh-action-block__shield svg {
    width: 36px;
    height: 40px;
  }

  .rh-action-block__visual-label {
    text-align: left;
    font-size: 13px;
  }

  .rh-action-block__title {
    font-size: 24px;
  }

  .rh-action-block__text {
    font-size: 15px;
  }

  .rh-action-block__cta {
    padding: 12px 20px;
  }
}

div.rh-action-block,
div.rh-action-block *,
div.rh-action-block .t-text,
div.rh-action-block .t-title,
div.rh-action-block .t-descr,
div.rh-action-block p,
div.rh-action-block span,
div.rh-action-block h1,
div.rh-action-block h2,
div.rh-action-block h3,
div.rh-action-block a {
  font-family: "Mont", "Montserrat", sans-serif !important;
}

.rh-cp-how-serp {
  width: 100%;
  background: #ffffff;
  padding-top: 1px;
}
.rh-cp-how-serp-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px 64px;
}
.rh-cp-h2 {
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: 600;
  color: #262626;
  line-height: 1.2;
  border-top: 3px solid #bfd8b3;
  padding: 20px 0 0 0;
  margin: 0 0 24px 0;
}
.rh-cp-p {
  font-size: 16px;
  font-weight: 600;
  color: #464646;
  line-height: 1.75;
  margin: 0 0 20px 0;
  display: block;
}
.rh-cp-how-serp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 28px 0 0;
}
.rh-cp-how-serp-card {
  background: #f7f7f7;
  border-radius: 16px;
  padding: 24px 22px;
  border-left: 3px solid #bfd8b3;
}
.rh-cp-how-serp-num {
  font-size: 28px;
  font-weight: 600;
  color: #dfecd9;
  line-height: 1;
  display: block;
  margin: 0 0 10px 0;
}
.rh-cp-how-serp-title {
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  display: block;
  margin: 0 0 8px 0;
}
.rh-cp-how-serp-text {
  font-size: 13px;
  font-weight: 600;
  color: #585858;
  line-height: 1.6;
  display: block;
}
@media (max-width: 960px) {
  .rh-cp-how-serp-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
  .rh-cp-how-serp-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .rh-cp-how-serp-wrap {
    padding: 40px 20px 48px;
  }
}

.rh-cp-src-serp {
  width: 100%;
  background: #262626;
}
.rh-cp-src-serp-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px;
}
.rh-cp-h2-light {
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: 600;
  color: #ffffff;
  line-height: 1.2;
  border-top: 3px solid #bfd8b3;
  padding: 20px 0 0 0;
  margin: 0 0 16px 0;
}
.rh-cp-p-light {
  font-size: 15px;
  font-weight: 600;
  color: #a3a3a3;
  line-height: 1.7;
  margin: 0 0 36px 0;
  display: block;
  max-width: 760px;
}
.rh-cp-src-serp-rows {
  display: flex;
  flex-direction: column;
}
.rh-cp-src-serp-row {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  align-items: center;
  padding: 28px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.rh-cp-src-serp-row:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.rh-cp-src-serp-figure {
  font-size: 38px;
  font-weight: 700;
  color: #bfd8b3;
  line-height: 1;
}
.rh-cp-src-serp-figure-sub {
  font-size: 11px;
  font-weight: 600;
  color: #6f8a63;
  display: block;
  margin-top: 6px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.rh-cp-src-serp-title {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  display: block;
  margin: 0 0 8px 0;
}
.rh-cp-src-serp-text {
  font-size: 13.5px;
  font-weight: 600;
  color: #a3a3a3;
  line-height: 1.65;
  display: block;
}
.rh-cp-src-serp-link {
  font-size: 11px;
  font-weight: 600;
  margin: 10px 0 0 0;
  display: block;
  color: #585858;
}
.rh-cp-src-serp-link a {
  color: #99ad8f !important;
  text-decoration: underline !important;
}
.rh-cp-src-serp-link a:visited {
  color: #99ad8f !important;
}
.rh-cp-src-serp-link a:hover {
  color: #bfd8b3 !important;
}
@media (max-width: 860px) {
  .rh-cp-src-serp-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .rh-cp-src-serp-figure {
    font-size: 32px;
  }
}
@media (max-width: 960px) {
  .rh-cp-src-serp-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (max-width: 600px) {
  .rh-cp-src-serp-wrap {
    padding: 40px 20px;
  }
}

.rh-cp-faq-serp {
  width: 100%;
  background: #ffffff;
}
.rh-cp-faq-serp-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px 72px;
}
.rh-cp-h2 {
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: 600;
  color: #262626;
  line-height: 1.2;
  border-top: 3px solid #bfd8b3;
  padding: 20px 0 0 0;
  margin: 0 0 24px 0;
}
.rh-cp-faq-serp-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 28px 0 0;
}
.rh-cp-faq-serp-item {
  background: #f7f7f7;
  border-radius: 14px;
  overflow: hidden;
}
.rh-cp-faq-serp-q {
  font-size: 15px;
  font-weight: 600;
  color: #262626;
  padding: 18px 22px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
  cursor: pointer;
  user-select: none;
}
.rh-cp-faq-serp-q::after {
  content: "+";
  font-size: 20px;
  color: #99ad8f;
  flex-shrink: 0;
  line-height: 1;
  transition: transform 0.2s;
}
.rh-cp-faq-serp-item.open .rh-cp-faq-serp-q::after {
  transform: rotate(45deg);
}
.rh-cp-faq-serp-a {
  font-size: 14px;
  font-weight: 600;
  color: #585858;
  line-height: 1.7;
  padding: 0 22px;
  border-top: 1px solid #eeeeee;
  max-height: 0;
  overflow: hidden;
  display: block;
  transition:
    max-height 0.35s ease,
    padding 0.2s ease;
}
.rh-cp-faq-serp-item.open .rh-cp-faq-serp-a {
  max-height: 600px;
  padding: 16px 22px 18px;
  border-top: 1px solid #eeeeee;
}
.rh-cp-faq-serp-item:not(.open) .rh-cp-faq-serp-a {
  border-top: none;
}
@media (max-width: 960px) {
  .rh-cp-faq-serp-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (max-width: 600px) {
  .rh-cp-faq-serp-wrap {
    padding: 40px 20px 56px;
  }
  .rh-cp-faq-serp-q {
    font-size: 14px;
  }
}

.rh-cp-cross-serp {
  width: 100%;
  background: #f7f7f7;
}
.rh-cp-cross-serp-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px 72px;
}
.rh-cp-h2 {
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: 600;
  color: #262626;
  line-height: 1.2;
  border-top: 3px solid #bfd8b3;
  padding: 20px 0 0 0;
  margin: 0 0 28px 0;
}
.rh-cp-cross-serp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
.rh-cp-cross-serp-card {
  border-radius: 20px;
  padding: 32px 30px;
  display: flex;
  flex-direction: column;
}
.rh-cp-cross-serp-card.a {
  background: #262626;
}
.rh-cp-cross-serp-card.b {
  background: #ffffff;
  border: 1px solid #ececec;
}
.rh-cp-cross-serp-card.c {
  background: #dfecd9;
}
.rh-cp-cross-serp-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: block;
  margin: 0 0 14px 0;
}
.a .rh-cp-cross-serp-eyebrow {
  color: #bfd8b3;
}
.b .rh-cp-cross-serp-eyebrow {
  color: #99ad8f;
}
.c .rh-cp-cross-serp-eyebrow {
  color: #606c59;
}
.rh-cp-cross-serp-bignum {
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
  display: block;
  margin: 0 0 10px 0;
}
.a .rh-cp-cross-serp-bignum {
  color: #ffffff;
}
.b .rh-cp-cross-serp-bignum {
  color: #262626;
}
.c .rh-cp-cross-serp-bignum {
  color: #3a4d34;
}
.rh-cp-cross-serp-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.35;
  display: block;
  margin: 0 0 10px 0;
}
.a .rh-cp-cross-serp-title {
  color: #ffffff;
}
.b .rh-cp-cross-serp-title {
  color: #262626;
}
.c .rh-cp-cross-serp-title {
  color: #262626;
}
.rh-cp-cross-serp-text {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.65;
  flex-grow: 1;
}
.a .rh-cp-cross-serp-text {
  color: #a3a3a3;
}
.b .rh-cp-cross-serp-text {
  color: #808080;
}
.c .rh-cp-cross-serp-text {
  color: #4a5a43;
}
.rh-cp-cross-serp-btn-row {
  margin-top: 20px;
}
.rh-cp-cross-serp-btn {
  display: inline-flex !important;
  align-items: center;
  gap: 8px;
  font-size: 12px !important;
  font-weight: 700 !important;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 22px;
  border-radius: 100px;
  text-decoration: none !important;
  border: none;
  transition: background 0.15s;
  white-space: nowrap;
}
.a .rh-cp-cross-serp-btn {
  background: #bfd8b3 !important;
  color: #1a2417 !important;
}
.a .rh-cp-cross-serp-btn:hover,
.a .rh-cp-cross-serp-btn:visited,
.a .rh-cp-cross-serp-btn:active {
  background: #99ad8f !important;
  color: #1a2417 !important;
  text-decoration: none !important;
}
.b .rh-cp-cross-serp-btn {
  background: #262626 !important;
  color: #ffffff !important;
}
.b .rh-cp-cross-serp-btn:hover,
.b .rh-cp-cross-serp-btn:visited,
.b .rh-cp-cross-serp-btn:active {
  background: #464646 !important;
  color: #ffffff !important;
  text-decoration: none !important;
}
.c .rh-cp-cross-serp-btn {
  background: #262626 !important;
  color: #ffffff !important;
}
.c .rh-cp-cross-serp-btn:hover,
.c .rh-cp-cross-serp-btn:visited,
.c .rh-cp-cross-serp-btn:active {
  background: #464646 !important;
  color: #ffffff !important;
  text-decoration: none !important;
}
@media (max-width: 1060px) {
  .rh-cp-cross-serp-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 860px) {
  .rh-cp-cross-serp-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 960px) {
  .rh-cp-cross-serp-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (max-width: 600px) {
  .rh-cp-cross-serp-wrap {
    padding: 40px 20px 56px;
  }
  .rh-cp-cross-serp-card {
    padding: 26px 22px;
  }
}

:root {
  --rh-dark: #262626;
  --rh-green: #bfd8b3;
  --rh-green-hover: #cfe2c6;
  --rh-transition: 180ms ease;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  padding-top: 73px;
  background: #f7f7f7;
  color: var(--rh-dark);
  font-family: Montserrat, Arial, sans-serif;
}

button,
input,
textarea,
select {
  font: inherit;
}

button:focus,
button:focus-visible,
a:focus,
a:focus-visible {
  box-shadow: none;
  outline: none;
}

a {
  color: inherit;
}

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 990;
  width: 100%;
  color: #ffffff;
  background: var(--rh-dark);
  border-bottom: 1px solid rgb(229 229 229 / 10%);
}

.app-header__inner {
  display: grid;
  width: 100%;
  min-height: 73px;
  align-items: center;
  gap: 24px;
  grid-template-columns: 100px minmax(0, 1fr) auto;
  padding: 0 24px;
}

.app-header__logo {
  display: inline-flex;
  align-items: center;
  justify-self: start;
  text-decoration: none;
}

.app-header__logo img {
  display: block;
  width: 100px;
  max-width: 100px;
  height: auto;
}

.app-header__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(18px, 1.7vw, 30px);
  justify-self: stretch;
  min-width: 0;
}

.app-header__group {
  position: relative;
  display: flex;
  min-height: 73px;
  align-items: center;
}

.app-header__group::after {
  position: absolute;
  top: 100%;
  right: -12px;
  left: -12px;
  height: 15px;
  content: "";
}

.app-header__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: color var(--rh-transition);
  white-space: nowrap;
}

.app-header__link:hover,
.app-header__link:focus-visible {
  color: var(--rh-green);
}

.app-header__arrow {
  width: 8px;
  height: 8px;
  margin-top: -4px;
  border-right: 1.5px solid currentcolor;
  border-bottom: 1.5px solid currentcolor;
  transform: rotate(45deg);
}

.app-header__menu,
.app-header__mega {
  position: fixed;
  top: 73px;
  right: 0;
  left: 0;
  z-index: 991;
  max-height: calc(100vh - 73px);
  padding: 0 40px;
  overflow-y: auto;
  color: #ffffff;
  background: var(--rh-dark);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition:
    opacity 0.2s ease-in-out,
    transform 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  visibility: hidden;
}

.app-header__group:focus-within .app-header__menu,
.app-header__group:hover .app-header__menu,
.app-header__group:focus-within .app-header__mega,
.app-header__group:hover .app-header__mega {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
  visibility: visible;
}

.app-header__panel-inner {
  display: grid;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 32px 0 38px;
  border-top: 1px solid rgb(255 255 255 / 18%);
}

.app-header__dropdown-grid {
  display: grid;
  align-items: start;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px 82px;
}

.app-header__dropdown-card {
  display: grid;
  align-content: start;
  align-self: start;
  max-width: 330px;
  gap: 10px;
  color: #ffffff;
  text-decoration: none;
}

.app-header__dropdown-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.55;
}

.app-header__dropdown-description {
  color: #919191;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.55;
}

.app-header__dropdown-card:hover .app-header__dropdown-title,
.app-header__dropdown-card:focus-visible .app-header__dropdown-title {
  color: var(--rh-green);
}

.app-header__mega-grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 40px;
}

.app-header__mega-column {
  display: grid;
  gap: 24px;
}

.app-header__mega-column + .app-header__mega-column {
  padding-left: 40px;
  border-left: 1px solid rgb(255 255 255 / 18%);
}

.app-header__mega-title {
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.55;
  text-decoration: none;
  text-transform: uppercase;
}

.app-header__mega-title:hover,
.app-header__mega-title:focus-visible {
  color: var(--rh-green);
}

.app-header__mega-sections {
  display: grid;
  align-items: start;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 35px 58px;
}

.app-header__mega-column + .app-header__mega-column .app-header__mega-sections {
  grid-template-columns: 1fr;
}

.app-header__submenu-section {
  display: grid;
  gap: 0;
}

.app-header__submenu-section h3,
.app-header__submenu-section p {
  margin: 0;
}

.app-header__submenu-section h3 {
  color: var(--rh-green);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.65;
  text-transform: uppercase;
}

.app-header__submenu-section p {
  color: #979797;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.65;
  text-transform: uppercase;
}

.app-header__submenu-section a {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  gap: 8px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  text-decoration: none;
  transition: color var(--rh-transition);
}

.app-header__submenu-section h3 + a,
.app-header__submenu-section p + a {
  margin-top: 20px;
}

.app-header__submenu-section a + a {
  margin-top: 6px;
}

.app-header__submenu-section a.app-header__mega-link--muted,
.app-header__mega-link--muted .app-header__badge {
  color: #979797;
  border-color: #979797;
}

.app-header__submenu-section a:hover,
.app-header__submenu-section a:focus-visible {
  color: var(--rh-green);
}

.app-header__badge {
  border: 1px solid rgb(255 255 255 / 45%);
  border-radius: 999px;
  color: #ffffff;
  flex: 0 0 auto;
  font-size: 7px;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1;
  padding: 2px 5px;
}

.app-header__menu-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin-top: 38px;
  padding-top: 24px;
  border-top: 1px solid rgb(255 255 255 / 18%);
}

.app-header__menu-footer p {
  max-width: 650px;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
}

.app-header__menu-actions {
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 16px;
}

.app-header__menu-action {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 18px;
  color: var(--rh-dark);
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  background: var(--rh-green);
  border: 1px solid var(--rh-green);
  border-radius: 999px;
  transition:
    color var(--rh-transition),
    background-color var(--rh-transition),
    border-color var(--rh-transition);
}

.app-header__menu-action--outline {
  color: var(--rh-green);
  background: transparent;
}

.app-header__menu-action:hover,
.app-header__menu-action:focus-visible {
  color: #5d6c57;
  background: var(--rh-green-hover);
  border-color: var(--rh-green-hover);
}

.app-header__menu-action-arrow {
  font-size: 18px;
  line-height: 1;
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-self: end;
}

.app-header__cta {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
  color: var(--rh-dark);
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  background: var(--rh-green);
  border: 1px solid var(--rh-green);
  border-radius: 999px;
  cursor: pointer;
  transition:
    color var(--rh-transition),
    border-color var(--rh-transition),
    background-color var(--rh-transition);
}

.app-header__cta:hover,
.app-header__cta:focus-visible {
  background: #dfecd9;
  border-color: #dfecd9;
  color: var(--rh-dark);
}

.app-header__cta--outline {
  background: transparent;
  border-color: rgba(191, 216, 179, 0.85);
  color: var(--rh-green);
}

.app-header__cta--outline:hover,
.app-header__cta--outline:focus-visible {
  background: var(--rh-green);
  border-color: var(--rh-green);
  color: var(--rh-dark);
}

.app-header__burger {
  display: none;
  width: 28px;
  height: 28px;
  padding: 0;
  position: relative;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.app-header__burger span {
  left: 0;
  position: absolute;
  width: 28px;
  height: 2px;
  background: #ffffff;
  transition:
    opacity var(--rh-transition),
    transform var(--rh-transition),
    top var(--rh-transition);
}

.app-header__burger span:nth-child(1) {
  top: 5px;
}

.app-header__burger span:nth-child(2),
.app-header__burger span:nth-child(3) {
  top: 13px;
}

.app-header__burger span:nth-child(4) {
  top: 21px;
}

.app-header__burger--open span:nth-child(1),
.app-header__burger--open span:nth-child(4) {
  opacity: 0;
}

.app-header__burger--open span:nth-child(2) {
  transform: rotate(45deg);
}

.app-header__burger--open span:nth-child(3) {
  transform: rotate(-45deg);
}

.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: none;
}

.mobile-menu[aria-hidden="false"] {
  display: block;
}

.mobile-menu__panel {
  display: flex;
  position: absolute;
  inset: 0;
  min-height: 100dvh;
  flex-direction: column;
  padding: 0 14px 15px;
  overflow-y: auto;
  color: #ffffff;
  background: var(--rh-dark);
  animation: mobile-menu-in var(--rh-transition);
}

.mobile-menu__header {
  display: flex;
  min-height: 64px;
  align-items: center;
  justify-content: space-between;
  margin: 0 -14px;
  padding: 0 20px;
  border-bottom: 1px solid rgb(217 217 217 / 18%);
}

.mobile-menu__logo {
  display: inline-flex;
}

.mobile-menu__logo img {
  display: block;
  width: 110px;
  height: auto;
}

.mobile-menu__close {
  position: relative;
  width: 22px;
  height: 14px;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.mobile-menu__close::before,
.mobile-menu__close::after {
  position: absolute;
  top: 6px;
  left: 0;
  width: 22px;
  height: 2px;
  content: "";
  background: var(--rh-green);
}

.mobile-menu__close::before {
  transform: rotate(45deg);
}

.mobile-menu__close::after {
  transform: rotate(-45deg);
}

.mobile-menu__nav {
  display: grid;
  margin: auto 0;
  gap: 0;
}

.mobile-menu__details > summary,
.mobile-menu__direct {
  display: flex;
  width: 100%;
  min-height: 42px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  text-decoration: none;
  list-style: none;
  text-transform: uppercase;
  cursor: pointer;
}

.mobile-menu__details summary::-webkit-details-marker,
.mobile-menu__subdetails summary::-webkit-details-marker,
.mobile-menu__section summary::-webkit-details-marker {
  display: none;
}

.mobile-menu__details > summary > span,
.mobile-menu__subdetails > summary > span,
.mobile-menu__section > summary > i {
  width: 9px;
  height: 9px;
  margin-top: -4px;
  border-right: 1.5px solid currentcolor;
  border-bottom: 1.5px solid currentcolor;
  transform: rotate(-45deg);
  transition: transform var(--rh-transition);
}

.mobile-menu__details[open] > summary > span,
.mobile-menu__subdetails[open] > summary > span,
.mobile-menu__section[open] > summary > i {
  transform: rotate(45deg);
}

.mobile-menu__mega {
  display: grid;
  gap: 0;
  padding: 2px 0 8px 14px;
}

.mobile-menu__subdetails > summary {
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  gap: 12px;
  justify-content: space-between;
  line-height: 1.3;
  min-height: 42px;
  padding-left: 0;
}

.mobile-menu__section {
  padding-left: 14px;
}

.mobile-menu__section > summary {
  align-items: flex-start;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  min-height: 42px;
  padding: 7px 0;
}

.mobile-menu__section > summary > span {
  display: grid;
  gap: 3px;
}

.mobile-menu__section strong {
  color: var(--rh-green);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.35;
  text-transform: uppercase;
}

.mobile-menu__section em {
  color: rgb(255 255 255 / 58%);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.45;
  text-transform: uppercase;
}

.mobile-menu__details ul {
  display: grid;
  gap: 0;
  padding: 2px 0 7px 14px;
  list-style: none;
}

.mobile-menu__details a {
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 7px 14px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.45;
  text-decoration: none;
}

.mobile-menu__details a:hover,
.mobile-menu__details a:focus-visible,
.mobile-menu__direct:hover,
.mobile-menu__direct:focus-visible {
  color: var(--rh-green);
}

.mobile-menu__badge {
  border: 1px solid rgb(255 255 255 / 28%);
  border-radius: 999px;
  color: var(--rh-green);
  flex: 0 0 auto;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1;
  padding: 4px 7px;
}

.mobile-menu__actions {
  display: grid;
  justify-items: start;
  gap: 12px;
}

.mobile-menu__cta {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  color: #28292d;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  background: var(--rh-green);
  border: 1px solid var(--rh-green);
  border-radius: 999px;
  cursor: pointer;
}

.mobile-menu__cta--outline {
  color: var(--rh-green);
  background: transparent;
}

@keyframes mobile-menu-in {
  from {
    opacity: 0;
    transform: translateY(-16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1350px) {
  .app-header__nav {
    gap: 18px;
  }

  .app-header__link {
    font-size: 12px;
  }

  .app-header__inner {
    grid-template-columns: 100px minmax(0, 1fr) auto;
    padding: 0 16px;
  }

  .app-header__cta {
    padding: 0 16px;
    font-size: 12px;
  }
}

@media (max-width: 1200px) {
  body {
    padding-top: 64px;
  }

  .app-header {
    background: #28292d;
  }

  .app-header__inner {
    display: flex;
    min-height: 64px;
    padding: 0 20px;
  }

  .app-header__logo img {
    width: 110px;
    max-width: 110px;
  }

  .app-header__nav,
  .app-header__cta {
    display: none;
  }

  .app-header__actions {
    margin-left: auto;
  }

  .app-header__burger {
    display: block;
    width: 22px;
    height: 14px;
  }

  .app-header__burger span {
    width: 22px;
    height: 2px;
    background: var(--rh-green);
  }

  .app-header__burger span:nth-child(1) {
    top: 0;
  }

  .app-header__burger span:nth-child(2),
  .app-header__burger span:nth-child(3) {
    top: 6px;
  }

  .app-header__burger span:nth-child(4) {
    top: 12px;
    left: unset;
    right: 0;
    width: 70%;
  }
}

.rh-action-block {
  max-width: 960px;
  width: calc(100% - 40px);
  margin: 48px auto;
}
.calculator-page {
  color: #262626;
  font-family: var(--font-body, Montserrat, sans-serif);
}
.calculator-breadcrumb {
  max-width: 1160px;
  margin: auto;
  padding: 100px 0 50px;
  font-size: 14px;
  color: #888;
}
.calculator-breadcrumb a {
  color: inherit;
}
summary {
  list-style: none;
  cursor: pointer;
}
summary::-webkit-details-marker {
  display: none;
}
details[open] summary {
  margin-bottom: 12px;
}
button {
  cursor: pointer;
  font-family: inherit;
}
@media (max-width: 760px) {
  .calculator-breadcrumb {
    padding: 40px 20px 24px;
  }
}
</style>
