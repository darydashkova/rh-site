<script setup lang="ts">
import CalculatorReputationDamageCost from "~/components/calculators/CalculatorReputationDamageCost.vue";
const consultation = useConsultation();
useSeoMeta({
  title: "How Much Does a Reputation Crisis Cost? Free Estimator",
  description:
    "Estimate the financial impact of a data breach, negative reviews, or PR crisis on your revenue. Free calculator backed by Weber Shandwick and Deloitte research.",
});
</script>
<template>
  <main id="main-content" class="calculator-page">
    <nav class="calculator-breadcrumb">
      <SiteLink href="/">Reputation.house</SiteLink> /
      <SiteLink href="/risk-calculator">Calculator</SiteLink> / How Much Does a
      Reputation Crisis Cost? Free Estimator
    </nav>
    <section class="rh-cp-header">
      <div class="rh-cp-header-wrap">
        <div class="rh-cp-toprow">
          <span class="rh-cp-tag">Free Tool</span>
          <span class="rh-cp-badge">Cost Estimator</span>
        </div>
        <h1 class="rh-cp-h1">
          Reputation Damage Cost Estimator:<br /><em
            >See What an Incident Would Actually Cost You</em
          >
        </h1>
        <span class="rh-cp-lead"
          >Put a number on the thing you're already worried about. Revenue,
          incident type, how far it spreads, whether you have a plan — four
          inputs, one range, no email wall.</span
        >
        <div class="rh-cp-meta">
          <span class="rh-cp-meta-text">Free · No registration</span>
          <span class="rh-cp-meta-dot">·</span>
          <span class="rh-cp-meta-text">2 min</span>
          <span class="rh-cp-meta-dot">·</span>
          <span class="rh-cp-meta-badge">5 incident types · 6 sources</span>
        </div>
        <div class="rh-cp-divider"><span></span><span></span><span></span></div>
      </div>
    </section>
    <CalculatorReputationDamageCost />
    <div class="rh-action-block">
      <div class="rh-action-block__col rh-action-block__col--text">
        <span class="rh-action-block__badge">CONFIDENTIAL</span>
        <h3 class="rh-action-block__title">Something already happened?</h3>
        <p class="rh-action-block__text">
          Tell us what's going on — we'll review it and put together an action
          plan built around your specific risk. Everything is covered by an NDA
          from the moment you submit your request, before any conversation even
          starts.
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
          Get an Action Plan <span class="rh-action-block__arrow">→</span>
        </button>
      </div>
    </div>
    <section class="rh-cp-stat">
      <div class="rh-cp-stat-wrap">
        <h2 class="rh-cp-h2">What the Five Incident Types Measure</h2>
        <span class="rh-cp-p"
          >Reputation damage shows up differently depending on what triggered
          it. Here's the research behind each of the five categories the
          calculator runs.</span
        >
        <div class="rh-cp-stat-grid">
          <div class="rh-cp-stat-card rh-tone-a">
            <div class="rh-cp-stat-head">
              <span class="rh-cp-stat-num">$4.44M</span>
              <span class="rh-cp-stat-title">Data breach</span>
            </div>
            <div class="rh-cp-stat-body">
              <span class="rh-cp-stat-text"
                >Global average cost of a confirmed breach across 600
                organizations and 17 industries, tracked annually. US breaches
                now average $10.22M, driven by regulatory fines and longer
                detection times.</span
              >
              <span class="rh-cp-stat-source"
                >Source: IBM, Cost of a Data Breach Report 2025</span
              >
            </div>
          </div>
          <div class="rh-cp-stat-card rh-tone-b">
            <div class="rh-cp-stat-head">
              <span class="rh-cp-stat-num">5–9%</span>
              <span class="rh-cp-stat-title">Negative reviews</span>
            </div>
            <div class="rh-cp-stat-body">
              <span class="rh-cp-stat-text"
                >A one-star swing on Yelp moves an independent restaurant's
                revenue by 5 to 9%, isolated using a regression-discontinuity
                design on nine years of Seattle restaurant data. Chains showed
                no measurable effect.</span
              >
              <span class="rh-cp-stat-source"
                >Source: M. Luca, Harvard Business School, Reviews, Reputation,
                and Revenue</span
              >
            </div>
          </div>
          <div class="rh-cp-stat-card rh-tone-c">
            <div class="rh-cp-stat-head">
              <span class="rh-cp-stat-num">35.2%</span>
              <span class="rh-cp-stat-title">Media scandal</span>
            </div>
            <div class="rh-cp-stat-body">
              <span class="rh-cp-stat-text"
                >Average share price drop following a reputational crisis, drawn
                from 300 listed-company crises across 27 stock exchanges.
                Average recovery time runs 425 days, and a third of affected
                companies never fully recover.</span
              >
              <span class="rh-cp-stat-source"
                >Source: SenateSHJ, Crisis Index 300</span
              >
            </div>
          </div>
          <div class="rh-cp-stat-card rh-tone-b">
            <div class="rh-cp-stat-head">
              <span class="rh-cp-stat-num">$78B</span>
              <span class="rh-cp-stat-title"
                >Fake news &amp; disinformation</span
              >
            </div>
            <div class="rh-cp-stat-body">
              <span class="rh-cp-stat-text"
                >Annual global economic cost of fake news, including $39B in
                stock market losses and $9.54B that targeted companies spend
                each year just defending their reputation against false
                claims.</span
              >
              <span class="rh-cp-stat-source"
                >Source: CHEQ &amp; University of Baltimore, Economic Cost of
                Bad Actors on the Internet</span
              >
            </div>
          </div>
          <div class="rh-cp-stat-card rh-tone-a">
            <div class="rh-cp-stat-head">
              <span class="rh-cp-stat-num">63%</span>
              <span class="rh-cp-stat-title"
                >Reputation &amp; company value</span
              >
            </div>
            <div class="rh-cp-stat-body">
              <span class="rh-cp-stat-text"
                >Share of company market value that global executives attribute
                to overall reputation, based on a survey of 2,227 executives
                across 22 markets — the broader context this calculator sits
                inside.</span
              >
              <span class="rh-cp-stat-source"
                >Source: Weber Shandwick &amp; KRC Research, State of Corporate
                Reputation</span
              >
            </div>
          </div>
          <div class="rh-cp-stat-card rh-tone-c">
            <div class="rh-cp-stat-head">
              <span class="rh-cp-stat-num">15%</span>
              <span class="rh-cp-stat-title">Crisis response speed</span>
            </div>
            <div class="rh-cp-stat-body">
              <span class="rh-cp-stat-text"
                >Average one-year stock decline for publicly listed companies
                after a significant crisis, with the gap between fast and slow
                communication running from 4% to 14% depending on response
                time.</span
              >
              <span class="rh-cp-stat-source"
                >Source: Hot Paper Lantern, Crisis Response Index</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="rh-cp-how">
      <div class="rh-cp-how-wrap">
        <h2 class="rh-cp-h2">How the Estimate Is Built</h2>
        <span class="rh-cp-p"
          >Most reputation calculators just multiply revenue by a made-up
          percentage. This one doesn't — every range traces back to a named,
          public study, and each incident type pulls from the study that
          actually measured that kind of damage, rather than hiding the math
          behind one scary headline figure.</span
        >
        <span class="rh-cp-p"
          >The output is always a low-to-high range, never a single confident
          number. Reach and crisis readiness move that range up or down, and
          where a category doesn't have a dedicated study behind it, we say so
          directly instead of dressing up an estimate as sourced research.</span
        >
        <div class="rh-cp-how-grid">
          <div class="rh-cp-how-card">
            <span class="rh-cp-how-card-num">01</span>
            <span class="rh-cp-how-card-title"
              >Five incident types, five different mechanisms</span
            >
            <span class="rh-cp-how-card-text"
              >A data breach, a wave of bad reviews, and a media scandal don't
              damage revenue the same way, so we don't pretend they do. Each
              incident type pulls its range from a separate named study, listed
              in full further down this page.</span
            >
            <span class="rh-cp-how-card-source"
              >Source: full breakdown in "What the Five Incident Types Measure"
              below</span
            >
          </div>
          <div class="rh-cp-how-card">
            <span class="rh-cp-how-card-num">02</span>
            <span class="rh-cp-how-card-title"
              >Reach and crisis readiness move the range</span
            >
            <span class="rh-cp-how-card-text"
              >A local incident and a national one aren't the same exposure, so
              reach applies a multiplier — 0.5x local, 1.0x regional, 1.8x
              national. A documented crisis plan cuts the modeled impact by
              roughly 30%, based on response-speed research.</span
            >
            <span class="rh-cp-how-card-source"
              >Source: Hot Paper Lantern, Crisis Response Index (80 companies,
              105 crises)</span
            >
          </div>
          <div class="rh-cp-how-card">
            <span class="rh-cp-how-card-num">03</span>
            <span class="rh-cp-how-card-title"
              >A range, not a fake-precise number</span
            >
            <span class="rh-cp-how-card-text"
              >Reviews and media scandals come from elasticity and stock-price
              studies that genuinely measure cause and effect. Data breach and
              disinformation figures are global dollar averages rescaled to your
              revenue — directionally useful, not a guarantee.</span
            >
            <span class="rh-cp-how-card-source"
              >Source: IBM, Cost of a Data Breach Report (600
              organizations)</span
            >
          </div>
          <div class="rh-cp-how-card">
            <span class="rh-cp-how-card-num">04</span>
            <span class="rh-cp-how-card-title"
              >One honest gap, stated upfront</span
            >
            <span class="rh-cp-how-card-text"
              >Competitor attacks don't have a single dedicated study behind
              them the way the other four categories do, so that range is
              treated conservatively and labeled as an analyst estimate rather
              than dressed up as sourced research.</span
            >
            <span class="rh-cp-how-card-source"
              >Source: analyst estimate, not a named study</span
            >
          </div>
        </div>
      </div>
    </section>
    <section class="rh-cp-faq">
      <div class="rh-cp-faq-wrap">
        <h2 class="rh-cp-h2" id="faq">Frequently Asked Questions</h2>
        <div class="rh-cp-faq-list">
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">Is this number exact?</summary>
            <span class="rh-cp-faq-a" style="display: block"
              >No, and we don't pretend it is. The calculator gives you a
              low-to-high range built from published research, not a single
              confident figure. Your actual exposure depends on your industry,
              how fast you respond, and what your digital footprint looks like
              before anything happens. For a precise, data-driven figure based
              on your actual monitoring data, a structured
              <a
                href="https://checkmyrisks.com/"
                target="_blank"
                rel="noopener"
                style="
                  color: #99ad8f;
                  font-weight: 600;
                  text-decoration: underline;
                "
                >Exposure Audit</a
              >
              goes further than self-reported inputs.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              Where do the percentages actually come from?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >Each incident type pulls from a different named study — Harvard
              for reviews, IBM for data breaches, SenateSHJ for media scandals,
              CHEQ and the University of Baltimore for disinformation. The full
              list with sources sits in the "What the Five Incident Types
              Measure" section above, and again under "Sources &amp;
              methodology" in the calculator's result panel once you run a
              number.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              Why is the competitor-attacks category labeled differently?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >Because we couldn't find a single dedicated study measuring
              competitor-driven reputation attacks the way Harvard measured
              reviews or IBM measures breaches. Rather than borrow a number from
              an unrelated study and call it sourced, we built a conservative
              estimate and said so directly.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              Does having a crisis plan really change the outcome that much?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >Based on Hot Paper Lantern's analysis of 80 companies across 105
              crises, companies that responded within hours lost an average of
              4% in stock value, compared to 14% for those that waited weeks.
              The calculator applies a 30% discount when a documented plan is in
              place, which sits well inside that observed range.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              Can I use this for a small business, or is it built for
              enterprise?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >The revenue slider runs from $100K to $1B+, so it works at either
              end. Worth noting: the Harvard review-revenue study was done on
              independent restaurants specifically, so that category is most
              directly applicable to smaller, locally-known businesses rather
              than large multinational brands.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              What's the difference between "direct impact" and "recovery cost"
              in the result?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >Direct impact is the modeled revenue hit from the incident
              itself. Recovery cost is added on top at roughly 25% of that
              figure, reflecting typical spend on PR, legal response, and
              reputation remediation work after the fact — based on
              industry-standard estimates for SERM and crisis-communications
              campaigns. For a tailored remediation plan, the
              <a
                href="/risk-control-center"
                target="_blank"
                rel="noopener"
                style="
                  color: #99ad8f;
                  font-weight: 600;
                  text-decoration: underline;
                "
                >Reputation House Risk Control Center</a
              >
              covers this end to end.</span
            >
          </details>
        </div>
      </div>
    </section>
    <section class="rh-cp-cross">
      <div class="rh-cp-cross-wrap">
        <h2 class="rh-cp-h2">Want the Fuller Picture?</h2>
        <div class="rh-cp-cross-grid">
          <div class="rh-cp-cross-panel a">
            <span class="rh-cp-cross-eyebrow">You're here</span>
            <span class="rh-cp-cross-bignum">$</span>
            <span class="rh-cp-cross-title">Damage Cost Estimator</span>
            <span class="rh-cp-cross-text"
              >Tells you what an incident would cost — after it happens. One
              number, built from five named studies.</span
            >
          </div>
          <div class="rh-cp-cross-divider">
            <span class="rh-cp-cross-divider-inner">VS</span>
          </div>
          <div class="rh-cp-cross-panel b">
            <span class="rh-cp-cross-eyebrow">Free tool · Try next</span>
            <span class="rh-cp-cross-bignum">6/20</span>
            <span class="rh-cp-cross-title">Reputation Risk Score</span>
            <span class="rh-cp-cross-text"
              >Scans where you're exposed right now — search, AI, media,
              reviews, compliance, crisis readiness — six surfaces, twenty
              signals, before anything happens.</span
            >
            <div class="rh-cp-cross-btn-row">
              <a
                href="/calculator/reputation-risk-score"
                target="_blank"
                rel="noopener"
                class="rh-cp-cross-btn"
                >Run the risk score →</a
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

.rh-cp-stat {
  width: 100%;
  background: #ffffff;
}
.rh-cp-stat-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px;
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
  max-width: 880px;
}

.rh-cp-stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 28px 0 0;
}
.rh-cp-stat-card {
  border-radius: 18px;
  padding: 0;
  overflow: hidden;
  border: 1px solid #ececec;
}
.rh-cp-stat-head {
  padding: 26px 24px 22px;
}
.rh-cp-stat-num {
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
  display: block;
}
.rh-cp-stat-title {
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin: 8px 0 0 0;
  opacity: 0.85;
}
.rh-cp-stat-body {
  background: #ffffff;
  padding: 22px 24px 24px;
}
.rh-cp-stat-text {
  font-size: 13px;
  font-weight: 600;
  color: #585858;
  line-height: 1.6;
  display: block;
}
.rh-cp-stat-source {
  font-size: 11px;
  font-weight: 600;
  display: block;
  margin: 14px 0 0 0;
  line-height: 1.5;
}

.rh-tone-a .rh-cp-stat-head {
  background: #262626;
}
.rh-tone-a .rh-cp-stat-num,
.rh-tone-a .rh-cp-stat-title {
  color: #ffffff;
}
.rh-tone-a .rh-cp-stat-source {
  color: #8aa17e;
}

.rh-tone-b .rh-cp-stat-head {
  background: #dfecd9;
}
.rh-tone-b .rh-cp-stat-num {
  color: #3f4f38;
}
.rh-tone-b .rh-cp-stat-title {
  color: #4a5a43;
}
.rh-tone-b .rh-cp-stat-source {
  color: #6f8a63;
}

.rh-tone-c .rh-cp-stat-head {
  background: #bfd8b3;
}
.rh-tone-c .rh-cp-stat-num {
  color: #2c3a26;
}
.rh-tone-c .rh-cp-stat-title {
  color: #36452f;
}
.rh-tone-c .rh-cp-stat-source {
  color: #5a7350;
}

@media (max-width: 1180px) {
  .rh-cp-stat-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 960px) {
  .rh-cp-stat-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (max-width: 600px) {
  .rh-cp-stat-wrap {
    padding: 40px 20px;
  }
  .rh-cp-stat-grid {
    grid-template-columns: 1fr;
  }
}

.rh-cp-how {
  width: 100%;
  background: #ffffff;
}
.rh-cp-how-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px;
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

.rh-cp-how-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 28px 0 0;
}
.rh-cp-how-card {
  background: #f7f7f7;
  border-radius: 16px;
  padding: 24px 22px;
  border-left: 3px solid #bfd8b3;
}
.rh-cp-how-card-num {
  font-size: 28px;
  font-weight: 600;
  color: #dfecd9;
  line-height: 1;
  display: block;
  margin: 0 0 10px 0;
}
.rh-cp-how-card-title {
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  display: block;
  margin: 0 0 8px 0;
}
.rh-cp-how-card-text {
  font-size: 13px;
  font-weight: 600;
  color: #585858;
  line-height: 1.6;
  display: block;
}
.rh-cp-how-card-source {
  font-size: 11px;
  font-weight: 600;
  color: #8aa17e;
  display: block;
  margin: 12px 0 0 0;
  line-height: 1.5;
}

@media (max-width: 960px) {
  .rh-cp-how-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
  .rh-cp-how-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .rh-cp-how-wrap {
    padding: 40px 20px;
  }
}

.rh-cp-faq {
  width: 100%;
  background: #ffffff;
}
.rh-cp-faq-wrap {
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

.rh-cp-faq-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 28px 0 0;
}
.rh-cp-faq-item {
  background: #f7f7f7;
  border-radius: 14px;
  overflow: hidden;
}
.rh-cp-faq-q {
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
.rh-cp-faq-q::after {
  content: "+";
  font-size: 20px;
  color: #99ad8f;
  flex-shrink: 0;
  line-height: 1;
  transition: transform 0.2s;
}
.rh-cp-faq-item.open .rh-cp-faq-q::after {
  transform: rotate(45deg);
}
.rh-cp-faq-a {
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
.rh-cp-faq-item.open .rh-cp-faq-a {
  max-height: 600px;
  padding: 16px 22px 18px;
  border-top: 1px solid #eeeeee;
}
.rh-cp-faq-item:not(.open) .rh-cp-faq-a {
  border-top: none;
}

@media (max-width: 960px) {
  .rh-cp-faq-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (max-width: 600px) {
  .rh-cp-faq-wrap {
    padding: 40px 20px 56px;
  }
  .rh-cp-faq-q {
    font-size: 14px;
  }
}

.rh-cp-cross {
  width: 100%;
  background: #f7f7f7;
}
.rh-cp-cross-wrap {
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

.rh-cp-cross-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  align-items: stretch;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #ececec;
  overflow: hidden;
}

.rh-cp-cross-panel {
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
}
.rh-cp-cross-panel.a {
  background: #ffffff;
}
.rh-cp-cross-panel.b {
  background: #262626;
}

.rh-cp-cross-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: block;
  margin: 0 0 16px 0;
}
.a .rh-cp-cross-eyebrow {
  color: #99ad8f;
}
.b .rh-cp-cross-eyebrow {
  color: #bfd8b3;
}

.rh-cp-cross-bignum {
  font-size: 44px;
  font-weight: 700;
  line-height: 1;
  display: block;
  margin: 0 0 10px 0;
}
.a .rh-cp-cross-bignum {
  color: #262626;
}
.b .rh-cp-cross-bignum {
  color: #ffffff;
}

.rh-cp-cross-title {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.35;
  display: block;
  margin: 0 0 12px 0;
}
.a .rh-cp-cross-title {
  color: #262626;
}
.b .rh-cp-cross-title {
  color: #ffffff;
}

.rh-cp-cross-text {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.65;
  flex-grow: 1;
}
.a .rh-cp-cross-text {
  color: #808080;
}
.b .rh-cp-cross-text {
  color: #a3a3a3;
}

.rh-cp-cross-btn-row {
  margin-top: 22px;
}
.rh-cp-cross-btn {
  display: inline-flex !important;
  align-items: center;
  gap: 8px;
  background: #bfd8b3 !important;
  color: #1a2417 !important;
  font-size: 12px !important;
  font-weight: 700 !important;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 13px 26px;
  border-radius: 100px;
  text-decoration: none !important;
  border: none;
  transition: background 0.15s;
}
.rh-cp-cross-btn:hover,
.rh-cp-cross-btn:visited,
.rh-cp-cross-btn:active {
  background: #99ad8f !important;
  color: #1a2417 !important;
  text-decoration: none !important;
}

.rh-cp-cross-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  padding: 0 18px;
}
.rh-cp-cross-divider-inner {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #bfd8b3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: #99ad8f;
}

@media (max-width: 860px) {
  .rh-cp-cross-grid {
    grid-template-columns: 1fr;
  }
  .rh-cp-cross-divider {
    padding: 18px 0;
  }
}
@media (max-width: 960px) {
  .rh-cp-cross-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (max-width: 600px) {
  .rh-cp-cross-wrap {
    padding: 40px 20px 56px;
  }
  .rh-cp-cross-panel {
    padding: 28px 24px;
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

.rh-calc {
  width: 100%;
  background: #f7f7f7;
}
.rh-calc-wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 48px 40px;
}
.rh-calc-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: start;
}

/* LEFT: FORM */
.rh-form {
  background: #ffffff;
  border-radius: 20px;
  padding: 32px;
  color: #262626;
}
.rh-eyebrow {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 6px 0;
}
.rh-title {
  font-size: 18px;
  font-weight: 700;
  color: #262626;
  display: block;
  line-height: 1.3;
  margin-bottom: 6px;
}
.rh-sub {
  font-size: 12px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-bottom: 24px;
  line-height: 1.55;
}

.rh-q {
  margin: 0 0 22px 0;
}
.rh-q:last-of-type {
  margin-bottom: 8px;
}
.rh-q-text {
  font-size: 13px;
  font-weight: 600;
  color: #262626;
  display: block;
  margin: 0 0 10px 0;
}
.rh-q-hint {
  font-size: 10.5px;
  font-weight: 600;
  color: #b3b3b3;
  display: block;
  margin: -4px 0 10px 0;
}

/* slider */
.rh-slider-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 6px;
}
.rh-slider-val {
  font-size: 20px;
  font-weight: 700;
  color: #262626;
}
.rh-slider-hint {
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
  box-shadow: 0 0 0 1px #99ad8f;
}
.rh-slider-marks {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
}
.rh-slider-marks span {
  font-size: 10px;
  font-weight: 600;
  color: #c2c2c2;
}

/* incident cards (richer than radio list) */
.rh-incident-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.rh-incident-card {
  background: #f2f2f2;
  border-radius: 12px;
  padding: 12px 14px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
  position: relative;
}
.rh-incident-card:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-incident-card.selected {
  background: #dfecd9;
  border-color: #99ad8f;
}
.rh-incident-name {
  font-size: 12.5px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin-bottom: 3px;
}
.rh-incident-mech {
  font-size: 10px;
  font-weight: 600;
  color: #939393;
  display: block;
  line-height: 1.4;
}
.rh-incident-card input {
  display: none;
}

/* options (reach) */
.rh-options {
  display: flex;
  gap: 6px;
}
.rh-option-pill {
  flex: 1;
  text-align: center;
  background: #f2f2f2;
  border-radius: 10px;
  padding: 10px 6px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
  font-size: 12px;
  font-weight: 600;
  color: #333333;
}
.rh-option-pill:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-option-pill.selected {
  background: #262626;
  border-color: #262626;
  color: #fff;
}

/* toggle (yes/no) */
.rh-toggle-row {
  display: flex;
  gap: 8px;
}
.rh-toggle {
  flex: 1;
  text-align: center;
  background: #f2f2f2;
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
  font-size: 13px;
  font-weight: 600;
  color: #333333;
}
.rh-toggle:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-toggle.selected {
  background: #262626;
  border-color: #262626;
  color: #fff;
}

.rh-btn-calc {
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: #262626;
  color: #ffffff;
  border: none;
  padding: 14px 28px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.15s;
  margin-top: 8px;
}
.rh-btn-calc:hover {
  background: #464646;
}

/* RIGHT: RESULT PANEL */
.rh-result {
  background: #262626;
  border-radius: 20px;
  padding: 32px;
  position: sticky;
  top: 24px;
  min-height: 480px;
  display: flex;
  flex-direction: column;
}

.rh-result-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
}
.rh-result-empty-icon {
  font-size: 28px;
  opacity: 0.4;
}
.rh-result-empty-text {
  font-size: 12px;
  font-weight: 600;
  color: #808080;
  max-width: 230px;
  line-height: 1.6;
}

.rh-result-filled {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.rh-result-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 4px 0;
}
.rh-result-headline {
  font-size: 14px;
  font-weight: 600;
  color: #f7f7f7;
  display: block;
  margin-bottom: 18px;
  line-height: 1.4;
}

.rh-range-box {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 14px;
}
.rh-range-title {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f7f7f7;
  display: block;
  margin-bottom: 10px;
}
.rh-range-nums {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}
.rh-range-num {
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
}
.rh-range-dash {
  font-size: 16px;
  color: #585858;
}
.rh-range-note {
  font-size: 10.5px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-top: 10px;
  line-height: 1.5;
}

/* comparison bars across incident types */
.rh-compare-box {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 14px;
  padding: 16px 18px;
  margin-bottom: 14px;
}
.rh-compare-title {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f7f7f7;
  display: block;
  margin-bottom: 12px;
}
.rh-cmp-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.rh-cmp-row:last-child {
  margin-bottom: 0;
}
.rh-cmp-label {
  font-size: 10.5px;
  font-weight: 600;
  color: #a3a3a3;
  width: 92px;
  flex-shrink: 0;
}
.rh-cmp-label.active {
  color: #bfd8b3;
}
.rh-cmp-track {
  flex: 1;
  height: 14px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.rh-cmp-fill {
  height: 100%;
  border-radius: 4px;
  background: #585858;
  transition: width 0.5s ease;
}
.rh-cmp-fill.active {
  background: #99ad8f;
}
.rh-cmp-val {
  font-size: 10.5px;
  font-weight: 700;
  color: #808080;
  width: 70px;
  text-align: right;
  flex-shrink: 0;
}
.rh-cmp-val.active {
  color: #fff;
}

.rh-breakdown {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 14px;
}
.rh-breakdown-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.rh-breakdown-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.rh-breakdown-label {
  font-size: 12px;
  font-weight: 600;
  color: #a3a3a3;
}
.rh-breakdown-val {
  font-size: 12px;
  font-weight: 700;
  color: #f7f7f7;
  text-align: right;
}

.rh-compare-cta-text {
  background: rgba(191, 216, 179, 0.08);
  border: 1px solid rgba(191, 216, 179, 0.16);
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 600;
  color: #bfd8b3;
  line-height: 1.5;
}
.rh-compare-cta-text b {
  color: #ffffff;
}

.rh-cta {
  margin-top: auto;
}
.rh-cta-btn {
  display: block;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none !important;
  color: #262626 !important;
  background: #bfd8b3;
  padding: 13px 20px;
  border-radius: 100px;
  transition: background 0.15s;
}
.rh-cta-btn:hover {
  background: #99ad8f;
}

.rh-sources {
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.rh-sources-toggle {
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  user-select: none;
}
.rh-sources-toggle:hover {
  color: #808080;
}
.rh-sources-list {
  display: none;
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  line-height: 1.85;
  margin-top: 8px;
}
.rh-sources-list.open {
  display: block;
}
.rh-sources-list .src-note {
  color: #4a4a4a;
  font-weight: 600;
  font-style: italic;
  display: block;
  margin-top: 6px;
}

@media (max-width: 860px) {
  .rh-calc-wrap {
    padding: 32px 20px;
  }
  .rh-calc-inner {
    grid-template-columns: 1fr;
  }
  .rh-result {
    position: static;
    min-height: auto;
  }
  .rh-incident-grid {
    grid-template-columns: 1fr;
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
