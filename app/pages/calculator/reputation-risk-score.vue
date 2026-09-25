<script setup lang="ts">
import CalculatorReputationRiskScore from "~/components/calculators/CalculatorReputationRiskScore.vue";
const consultation = useConsultation();
useSeoMeta({
  title: "Reputation Exposure Scan Calculator | Assess Brand Reputation Risk",
  description:
    "Scan your brand for hidden reputation vulnerabilities across search, AI platforms, media, reviews, compliance databases, and crisis preparedness. Evaluate 20 risk signals using frameworks inspired by WTW, Aon, and EY to generate a Reputation Risk Score an",
});
</script>
<template>
  <main id="main-content" class="calculator-page">
    <nav class="calculator-breadcrumb">
      <SiteLink href="/">Reputation.house</SiteLink> /
      <SiteLink href="/risk-calculator">Calculator</SiteLink> / Reputation
      Exposure Scan Calculator | Assess Brand Reputation Risk
    </nav>
    <section class="rh-cp-header">
      <div class="rh-cp-header-wrap">
        <div class="rh-cp-toprow">
          <span class="rh-cp-tag">Free Tool</span>
          <span class="rh-cp-badge">Exposure Scan</span>
        </div>
        <h1 class="rh-cp-h1">
          Reputation Exposure Scan:<br /><em
            >Detect Hidden Vulnerabilities Before They Go Public</em
          >
        </h1>
        <span class="rh-cp-lead"
          >Identify where your brand is exposed — across search, AI platforms,
          media, reviews, compliance databases, and crisis readiness. Built on
          WTW, Aon, and EY frameworks. Six surfaces. Twenty signals. One
          score.</span
        >
        <div class="rh-cp-meta">
          <span class="rh-cp-meta-text">Free · No registration</span>
          <span class="rh-cp-meta-dot">·</span>
          <span class="rh-cp-meta-text">3 min</span>
          <span class="rh-cp-meta-dot">·</span>
          <span class="rh-cp-meta-badge">20 signals · 6 surfaces</span>
        </div>
        <div class="rh-cp-divider"><span></span><span></span><span></span></div>
      </div>
    </section>
    <CalculatorReputationRiskScore />
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
    <section class="rh-cp-how">
      <div class="rh-cp-how-wrap">
        <h2 class="rh-cp-h2">How the Reputation Exposure Scan Works</h2>
        <span class="rh-cp-p"
          >The scan uses a weighted composite model across six exposure
          surfaces. Each surface contains 3–5 signals mapped to real
          vulnerability indicators from WTW's Global Reputation Risk Readiness
          Survey 2024/25 (500 senior executives), Aon's Global Risk Report 2025,
          and EY's Integrity Agenda framework.</span
        >
        <span class="rh-cp-p"
          >Your responses are scored per surface, then combined into a single
          0–100 Exposure Index — where 0 means minimal detected risk and 100
          means critical exposure across all surfaces. The live map on the right
          updates after every signal you input. A brand with no active
          monitoring, no crisis protocol, and uncontrolled search results
          typically scores 55–75. A brand with active management across all
          surfaces typically scores below 25.</span
        >
        <div class="rh-cp-how-grid">
          <div class="rh-cp-how-card">
            <span class="rh-cp-how-card-num">01</span>
            <span class="rh-cp-how-card-title"
              >Six surfaces, individually scored</span
            >
            <span class="rh-cp-how-card-text"
              >Search presence, AI platform visibility, media and social
              sentiment, reviews, compliance exposure, and crisis readiness are
              each scored independently — so you see exactly which surface is
              driving your exposure index.</span
            >
          </div>
          <div class="rh-cp-how-card">
            <span class="rh-cp-how-card-num">02</span>
            <span class="rh-cp-how-card-title"
              >Weighted by real-world impact</span
            >
            <span class="rh-cp-how-card-text"
              >Search, AI, and media carry higher weights (20 pts each) because
              they are the surfaces that most directly shape decisions made
              about your brand. Reviews and compliance carry 15 pts; crisis
              readiness carries 10 pts as a multiplier across all other
              surfaces.</span
            >
          </div>
          <div class="rh-cp-how-card">
            <span class="rh-cp-how-card-num">03</span>
            <span class="rh-cp-how-card-title"
              >Live map, not a final score</span
            >
            <span class="rh-cp-how-card-text"
              >The exposure map updates in real time as you answer — you see
              each surface light up as signals are processed. The scan is
              directionally accurate based on your inputs. For a data-driven
              result from actual monitoring, run a
              <a
                href="https://checkmyrisks.com/"
                target="_blank"
                rel="noopener"
                style="
                  color: #99ad8f;
                  font-weight: 600;
                  text-decoration: underline;
                "
                >full Exposure Audit</a
              >
              — it scans what the internet actually says about you.</span
            >
          </div>
          <div class="rh-cp-how-card">
            <span class="rh-cp-how-card-num">04</span>
            <span class="rh-cp-how-card-title">Result tied to action</span>
            <span class="rh-cp-how-card-text"
              >Each score range maps to a specific recommended action — from
              maintaining current monitoring cadence (below 20) to initiating
              immediate coordinated crisis response (above 80). The What-If
              simulator shows exactly how much each improvement would move your
              score.</span
            >
          </div>
        </div>
      </div>
    </section>
    <section class="rh-cp-dims">
      <div class="rh-cp-dims-wrap">
        <h2 class="rh-cp-h2">What the Exposure Scan Measures</h2>
        <span class="rh-cp-p"
          >The scan covers six digital surfaces where brand perception forms —
          search, AI, media and social, reviews, compliance databases, and
          crisis infrastructure. These are the same surfaces covered by
          Reputation House's
          <a
            href="/risk-control-center"
            target="_blank"
            rel="noopener"
            style="color: #99ad8f; font-weight: 600; text-decoration: underline"
            >Risk Control Center</a
          >
          in its real-time monitoring platform.</span
        >
        <div class="rh-cp-dims-grid">
          <div class="rh-cp-dims-card">
            <span class="rh-cp-dims-card-tag">Surface 1 · 20 pts</span>
            <span class="rh-cp-dims-card-title"
              >Search &amp; Digital Presence</span
            >
            <span class="rh-cp-dims-card-text"
              >What appears on page 1 of Google when someone searches your
              brand. Negative articles, court records, forum complaints, and
              uncontrolled results create the highest-visibility risk — the
              first thing any investor, partner, or journalist sees.</span
            >
            <span class="rh-cp-dims-card-weight"
              >Source: RepuScore Search Visibility + Content Control model</span
            >
          </div>
          <div class="rh-cp-dims-card">
            <span class="rh-cp-dims-card-tag">Surface 2 · 20 pts</span>
            <span class="rh-cp-dims-card-title">AI Platform Visibility</span>
            <span class="rh-cp-dims-card-text"
              >How ChatGPT, Gemini, Perplexity, and Claude describe your brand
              when asked. With Gartner projecting a 25% drop in traditional
              search volume by 2026 as AI answers take share, outdated or absent
              AI descriptions are a structural blind spot no brand can
              afford.</span
            >
            <span class="rh-cp-dims-card-weight"
              >Source: Gartner 2024 · Reputation House AI Influence Audit
              methodology</span
            >
          </div>
          <div class="rh-cp-dims-card">
            <span class="rh-cp-dims-card-tag">Surface 3 · 20 pts</span>
            <span class="rh-cp-dims-card-title"
              >Media &amp; Social Sentiment</span
            >
            <span class="rh-cp-dims-card-text"
              >Tonal analysis of media coverage and social conversations over
              the last 90 days. Includes velocity signals — whether negative
              mentions are growing, stable, or declining. A crisis resolved 12
              months ago leaves a different risk profile than ongoing negative
              coverage.</span
            >
            <span class="rh-cp-dims-card-weight"
              >Source: Reputation Index Score methodology · WTW survey
              data</span
            >
          </div>
          <div class="rh-cp-dims-card">
            <span class="rh-cp-dims-card-tag">Surface 4 · 15 pts</span>
            <span class="rh-cp-dims-card-title"
              >Reviews &amp; Customer Trust</span
            >
            <span class="rh-cp-dims-card-text"
              >Aggregate review rating across Google, Trustpilot, and industry
              platforms, plus trend direction and response rate to negative
              reviews. 87% of customers reconsider purchases after encountering
              negative content — review patterns are a leading indicator of
              purchase intent erosion.</span
            >
            <span class="rh-cp-dims-card-weight"
              >Source: ReputationX research · Reputation.com Reputation Score
              model</span
            >
          </div>
          <div class="rh-cp-dims-card">
            <span class="rh-cp-dims-card-tag">Surface 5 · 15 pts</span>
            <span class="rh-cp-dims-card-title"
              >Compliance &amp; Regulatory Exposure</span
            >
            <span class="rh-cp-dims-card-text"
              >Presence in World-Check, LexisNexis, Dow Jones Risk &amp;
              Compliance. Regulatory actions, sanctions mentions, court records,
              and adverse media in compliance databases. Named the #1
              reputational risk by 64–77% of global executives in the WTW
              2024/25 survey.</span
            >
            <span class="rh-cp-dims-card-weight"
              >Source: WTW Global Reputation Risk Readiness Survey 2024/25</span
            >
          </div>
          <div class="rh-cp-dims-card">
            <span class="rh-cp-dims-card-tag">Surface 6 · 10 pts</span>
            <span class="rh-cp-dims-card-title">Crisis Readiness</span>
            <span class="rh-cp-dims-card-text"
              >Whether a documented response protocol exists, monitoring is
              active 24/7, and whether the organization has experienced a crisis
              in the last 24 months. Brands without a formal crisis plan amplify
              risk across all other surfaces — readiness is a multiplier, not a
              standalone factor.</span
            >
            <span class="rh-cp-dims-card-weight"
              >Source: WTW: 86% of firms now have formal reputation risk
              processes linked to board KPIs</span
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
            <summary class="rh-cp-faq-q">
              What is a reputation risk score?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >A reputation risk score is a quantified measure of how exposed a
              brand, company, or individual is to reputational damage across the
              digital surfaces where perception forms — search results, AI
              platforms, media, reviews, and compliance databases. Unlike
              sentiment tracking, a risk score identifies structural
              vulnerability: where damage could form, how fast it could
              escalate, and whether defenses are in place. Enterprise frameworks
              from WTW, Aon, and EY now recommend quantified reputation risk
              measurement at the board level.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              How accurate is this exposure scan?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >The scan is directionally accurate — it reliably identifies which
              surfaces carry risk and what the relative exposure level is. Its
              precision depends on the honesty and completeness of your inputs.
              For higher-stakes decisions such as M&amp;A due diligence, pre-IPO
              review, or regulatory clearance, a structured audit by a
              reputation risk firm — which cross-references actual data from
              monitoring systems across all surfaces — will produce a more
              precise result than self-reporting alone.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              What is a good exposure score?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >On this 0–100 scale where higher means higher exposure, a score
              below 20 indicates controlled, low-exposure status. Scores between
              20–39 indicate moderate risk with addressable gaps. Above 40
              indicates elevated exposure where active management is required.
              The average brand with no active monitoring sits between 40–60,
              with most risk concentrated in AI surface coverage and crisis
              readiness.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              How do I check my online reputation risk without a scan tool?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >The fastest way to check your online reputation risk is to assess
              four surfaces: search (what appears when someone googles your
              brand), AI (how ChatGPT, Gemini, and Perplexity describe you),
              media and social (sentiment and velocity of recent coverage), and
              reviews (aggregate rating and trend). Reputation House's
              <a
                href="https://checkmyrisks.com/"
                target="_blank"
                rel="noopener"
                style="
                  color: #99ad8f;
                  font-weight: 600;
                  text-decoration: underline;
                "
                >full Exposure Audit</a
              >
              scans all surfaces simultaneously and returns a structured report
              based on actual monitoring data — not self-assessment.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              What is a reputation risk management tool?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >A reputation risk management tool is software or a service that
              detects, monitors, and responds to reputation risks before they
              cause measurable business damage. Tools range from free alert
              services with shallow coverage to enterprise integrated detection
              platforms that cover all digital surfaces with analyst
              interpretation. The
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
              covers all six surfaces in real time with interpreted risk
              signals.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              Why does the AI surface matter for reputation risk?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >AI assistants like ChatGPT, Gemini, and Perplexity are
              increasingly how people form first impressions about brands,
              companies, and executives. Gartner projects traditional search
              volume will drop 25% by 2026 as AI answers take share. A brand
              that appears inaccurately or not at all in AI responses has a
              structural blind spot that grows with AI adoption. The
              <a
                href="/ai-influence-services"
                target="_blank"
                rel="noopener"
                style="
                  color: #99ad8f;
                  font-weight: 600;
                  text-decoration: underline;
                "
                >AI influence audit</a
              >
              tracks and corrects how assistants describe a brand as their
              sources change.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              How is reputation risk measured at the enterprise level?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >Enterprise reputation risk measurement follows frameworks
              including ISO 31000, COSO ERM, and the WTW Reputation Risk
              Readiness methodology. The standard approach scores risk across
              probability, impact, velocity, and contagion dimensions — then
              applies weighting by business exposure profile. 86% of global
              enterprises now have formal reputation risk processes, with 22%
              linking them directly to board KPIs, according to the WTW 2024/25
              survey of 500 global senior executives.</span
            >
          </details>
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

.rh-cp-dims {
  width: 100%;
  background: #f7f7f7;
}
.rh-cp-dims-wrap {
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

.rh-cp-dims-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 28px 0 0;
}
.rh-cp-dims-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 22px 20px;
}
.rh-cp-dims-card-tag {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 8px 0;
}
.rh-cp-dims-card-title {
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  display: block;
  margin: 0 0 8px 0;
}
.rh-cp-dims-card-text {
  font-size: 12px;
  font-weight: 600;
  color: #808080;
  line-height: 1.55;
  display: block;
}
.rh-cp-dims-card-weight {
  font-size: 11px;
  font-weight: 600;
  color: #bfd8b3;
  display: block;
  margin-top: 10px;
}

@media (max-width: 960px) {
  .rh-cp-dims-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
  .rh-cp-dims-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 600px) {
  .rh-cp-dims-wrap {
    padding: 40px 20px;
  }
  .rh-cp-dims-grid {
    grid-template-columns: 1fr;
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

/* ── CALC WRAPPER ── */
.rh-cp-calc {
  width: 100%;
  background: #f7f7f7;
}
.rh-cp-calc-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px;
}
.rh-cp-calc-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
}

/* ── LEFT: FORM ── */
.rh-cp-form {
  background: #ffffff;
  border-radius: 20px;
  padding: 36px;
  color: #262626;
}

/* Surface nav dots */
.rh-surface-nav {
  display: flex;
  gap: 8px;
  margin: 0 0 24px 0;
  align-items: center;
}
.rh-surface-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e6e6e6;
  transition: all 0.3s;
  cursor: default;
  flex-shrink: 0;
}
.rh-surface-dot.done {
  background: #99ad8f;
}
.rh-surface-dot.active {
  background: #262626;
  width: 24px;
  border-radius: 4px;
}

/* Signal counter */
.rh-signal-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 6px 0;
}
.rh-signal-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #99ad8f;
}
.rh-signal-count {
  font-size: 11px;
  font-weight: 600;
  color: #a3a3a3;
}

/* Progress bar */
.rh-cp-progress-bar {
  height: 3px;
  background: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
  margin: 0 0 24px 0;
}
.rh-cp-progress-fill {
  height: 100%;
  background: linear-gradient(to right, #bfd8b3, #99ad8f);
  border-radius: 2px;
  transition: width 0.5s ease;
}

/* Surface header */
.rh-surface-header {
  margin: 0 0 20px 0;
}
.rh-surface-eyebrow {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #999999;
  display: block;
  margin: 0 0 4px 0;
}
.rh-surface-title {
  font-size: 17px;
  font-weight: 600;
  color: #262626;
  display: block;
  line-height: 1.3;
}
.rh-surface-sub {
  font-size: 12px;
  font-weight: 600;
  color: #585858;
  display: block;
  margin-top: 4px;
}

/* Section */
.rh-cp-section {
  display: none;
}
.rh-cp-section.active {
  display: block;
  animation: fadeSlide 0.25s ease;
}
@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Question */
.rh-cp-q {
  margin: 0 0 18px 0;
}
.rh-cp-q:last-child {
  margin: 0;
}
.rh-cp-q-text {
  font-size: 13px;
  font-weight: 600;
  color: #262626;
  display: block;
  margin: 0 0 8px 0;
  line-height: 1.5;
}

/* Options */
.rh-cp-options {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.rh-cp-option {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f2f2f2;
  border-radius: 10px;
  padding: 10px 14px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
}
.rh-cp-option:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-cp-option.selected {
  background: #dfecd9;
  border-color: #99ad8f;
}
.rh-cp-option input {
  display: none;
}
.rh-cp-option-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #cccccc;
  flex-shrink: 0;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rh-cp-option.selected .rh-cp-option-dot {
  border-color: #99ad8f;
  background: #99ad8f;
}
.rh-cp-option.selected .rh-cp-option-dot::after {
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fff;
  display: block;
}
.rh-cp-option-text {
  font-size: 13px;
  font-weight: 600;
  color: #333333;
}
.rh-cp-option.selected .rh-cp-option-text {
  color: #262626;
}

/* Nav */
.rh-cp-nav {
  display: flex;
  gap: 10px;
  margin-top: 24px;
}
.rh-cp-btn-back {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: #f0f0f0;
  color: #808080;
  border: none;
  padding: 12px 20px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.15s;
}
.rh-cp-btn-back:hover {
  background: #e0e0e0;
}
.rh-cp-btn-next {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: #262626;
  color: #ffffff;
  border: none;
  padding: 12px 28px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.15s;
  flex: 1;
}
.rh-cp-btn-next:hover {
  background: #464646;
}
.rh-cp-btn-calc {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: #bfd8b3;
  color: #262626;
  border: none;
  padding: 12px 28px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.15s;
  flex: 1;
}
.rh-cp-btn-calc:hover {
  background: #99ad8f;
}

/* ── RIGHT: LIVE PANEL ── */
.rh-cp-result {
  background: #262626;
  border-radius: 20px;
  padding: 32px;
  position: sticky;
  top: 24px;
}

/* Live scan header */
.rh-live-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;
}
.rh-live-title {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #f7f7f7;
}
.rh-live-status {
  display: flex;
  align-items: center;
  gap: 6px;
}
.rh-live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #99ad8f;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
.rh-live-status-text {
  font-size: 11px;
  font-weight: 600;
  color: #f7f7f7;
}

/* Overall exposure meter */
.rh-exposure-meter {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  padding: 18px 20px;
  margin: 0 0 16px 0;
}
.rh-exposure-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f7f7f7;
  display: block;
  margin: 0 0 10px 0;
}
.rh-exposure-score-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.rh-exposure-num {
  font-size: 44px;
  font-weight: 600;
  line-height: 1;
  color: #ffffff;
  transition: color 0.5s;
}
.rh-exposure-max {
  font-size: 14px;
  font-weight: 600;
  color: #808080;
}
.rh-exposure-status {
  font-size: 12px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-top: 6px;
}
.rh-exposure-bar-wrap {
  margin-top: 12px;
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 3px;
  overflow: hidden;
}
.rh-exposure-bar-fill {
  height: 100%;
  border-radius: 3px;
  background: #464646;
  transition:
    width 0.6s ease,
    background 0.5s;
}

/* Surface bars */
.rh-surfaces-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 0 16px 0;
}
.rh-surface-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.rh-surface-row-name {
  font-size: 11px;
  font-weight: 600;
  color: #a3a3a3;
  width: 108px;
  flex-shrink: 0;
  transition: color 0.3s;
}
.rh-surface-row-name.scanning {
  color: #99ad8f;
}
.rh-surface-row-name.done-row {
  color: #808080;
}
.rh-surface-bar-track {
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 2px;
  overflow: hidden;
}
.rh-surface-bar-fill {
  height: 100%;
  border-radius: 2px;
  background: #464646;
  transition:
    width 0.6s ease,
    background 0.5s;
}
.rh-surface-row-val {
  font-size: 11px;
  font-weight: 600;
  width: 28px;
  text-align: right;
  flex-shrink: 0;
  color: #808080;
  transition: color 0.3s;
}
.rh-surface-row-icon {
  font-size: 10px;
  width: 16px;
  flex-shrink: 0;
  text-align: center;
}

/* Scan log */
.rh-scan-log {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 14px;
}
.rh-scan-log-title {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f7f7f7;
  display: block;
  margin: 0 0 10px 0;
}
.rh-scan-log-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 6px 0;
  font-size: 11px;
  font-weight: 600;
}
.rh-scan-log-item .icon {
  width: 14px;
  flex-shrink: 0;
  text-align: center;
}
.rh-scan-log-item.pending {
  color: #808080;
}
.rh-scan-log-item.scanning {
  color: #99ad8f;
}
.rh-scan-log-item.done-log {
  color: #a3a3a3;
}
.rh-scan-log-item.vuln {
  color: #cb817d;
}

/* ── RESULT STATE ── */
.rh-result-final {
  display: none;
}

.rh-result-report-header {
  margin: 0 0 16px 0;
}
.rh-result-report-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #606c59;
  display: block;
  margin: 0 0 4px 0;
}
.rh-result-report-title {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  display: block;
}

.rh-gauge-wrap {
  text-align: center;
  margin: 0 0 16px 0;
}
.rh-gauge-svg {
  display: block;
  margin: 0 auto;
}

.rh-final-dims {
  margin: 0 0 16px 0;
}
.rh-final-dim-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 8px 0;
}
.rh-final-dim-name {
  font-size: 11px;
  font-weight: 600;
  color: #808080;
  width: 108px;
  flex-shrink: 0;
}
.rh-final-dim-bar {
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 2px;
  overflow: hidden;
}
.rh-final-dim-fill {
  height: 100%;
  border-radius: 2px;
}
.rh-final-dim-val {
  font-size: 11px;
  font-weight: 600;
  width: 28px;
  text-align: right;
  flex-shrink: 0;
}

/* What if simulator */
.rh-whatif {
  background: rgba(191, 216, 179, 0.06);
  border: 1px solid rgba(191, 216, 179, 0.12);
  border-radius: 12px;
  padding: 14px 16px;
  margin: 0 0 14px 0;
}
.rh-whatif-title {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #606c59;
  display: block;
  margin: 0 0 10px 0;
}
.rh-whatif-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 7px 0;
  padding: 0 0 7px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.rh-whatif-row:last-child {
  margin: 0;
  padding: 0;
  border: none;
}
.rh-whatif-action {
  font-size: 11px;
  font-weight: 600;
  color: #585858;
  flex: 1;
  line-height: 1.4;
}
.rh-whatif-impact {
  font-size: 12px;
  font-weight: 600;
  color: #99ad8f;
  flex-shrink: 0;
  margin-left: 8px;
}

/* CTA */
.rh-result-cta-btn {
  display: block;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none !important;
  color: #262626 !important;
  background: #bfd8b3;
  padding: 12px 20px;
  border-radius: 100px;
  transition: background 0.15s;
}
.rh-result-cta-btn:hover {
  background: #99ad8f;
}
.rh-result-cta-sub {
  font-size: 11px;
  font-weight: 600;
  color: #464646;
  display: block;
  margin-top: 8px;
  text-align: center;
}

/* RESPONSIVE */
@media (max-width: 960px) {
  .rh-cp-calc-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
  .rh-cp-calc-inner {
    grid-template-columns: 1fr;
  }
  .rh-cp-result {
    position: static;
  }
}
@media (max-width: 600px) {
  .rh-cp-calc-wrap {
    padding: 40px 20px;
  }
  .rh-cp-form,
  .rh-cp-result {
    padding: 24px 20px;
    border-radius: 14px;
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
