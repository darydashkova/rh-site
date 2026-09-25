<script setup lang="ts">
import CalculatorCrisisResponseTime from "~/components/calculators/CalculatorCrisisResponseTime.vue";
const consultation = useConsultation();
useSeoMeta({
  title: "Crisis Response Time Calculator: How Fast Do You Need to Act?",
  description:
    "Calculate your critical response window before reputation damage becomes irreversible. Free crisis communication calculator — 6 crisis types, instant results.",
});
</script>
<template>
  <main id="main-content" class="calculator-page">
    <nav class="calculator-breadcrumb">
      <SiteLink href="/">Reputation.house</SiteLink> /
      <SiteLink href="/risk-calculator">Calculator</SiteLink> / Crisis Response
      Time Calculator: How Fast Do You Need to Act?
    </nav>
    <section class="rh-cp-header">
      <div class="rh-cp-header-wrap">
        <div class="rh-cp-toprow">
          <span class="rh-cp-tag">Free Tool</span>
          <span class="rh-cp-badge">Crisis Response Time</span>
        </div>
        <h1 class="rh-cp-h1">
          Crisis Response Time Calculator:<br /><em
            >How Fast Do You Actually Need to Act?</em
          >
        </h1>
        <span class="rh-cp-lead"
          >Six crisis types, three spread speeds, four platforms — select your
          situation and get your critical response window, the point of no
          return, and the first three steps to take right now.</span
        >
        <div class="rh-cp-meta">
          <span class="rh-cp-meta-text">Free · No registration</span>
          <span class="rh-cp-meta-dot">·</span>
          <span class="rh-cp-meta-text">Under 1 min</span>
          <span class="rh-cp-meta-dot">·</span>
          <span class="rh-cp-meta-badge">6 crisis types · instant result</span>
        </div>
        <div class="rh-cp-divider"><span></span><span></span><span></span></div>
      </div>
    </section>
    <CalculatorCrisisResponseTime />
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
    <section class="rh-cp-how-crt">
      <div class="rh-cp-how-crt-wrap">
        <h2 class="rh-cp-h2">What This Calculator Does, and Why It Matters</h2>
        <span class="rh-cp-p"
          >Crisis communication advice almost always says the same thing:
          respond fast. What it rarely says is how fast, for what kind of
          crisis, on what platform, at what scale. "Respond quickly" is not a
          crisis communication plan — it is a platitude. This tool tries to give
          you the actual number, built from what research on corporate crisis
          response has shown about the relationship between timing and
          outcome.</span
        >
        <span class="rh-cp-p"
          >The output is a response window specific to your situation — not a
          generic "golden hour" benchmark that treats a data breach the same as
          a spike in negative reviews. A coordinated disinformation campaign
          spreading virally on social media has a fundamentally different time
          dynamic than a local news story about a management dispute. The
          calculator surfaces that difference directly, so you know whether you
          have 30 minutes or 30 hours, and what to do with that time.</span
        >
        <div class="rh-cp-how-crt-grid">
          <div class="rh-cp-how-crt-card">
            <span class="rh-cp-how-crt-card-num">01</span>
            <span class="rh-cp-how-crt-card-title"
              >Critical window, not a vague deadline</span
            >
            <span class="rh-cp-how-crt-card-text"
              >The result gives you two specific numbers: when your first
              response needs to be out, and when the damage starts to harden
              regardless of what you do. The gap between them is your actual
              working time.</span
            >
          </div>
          <div class="rh-cp-how-crt-card">
            <span class="rh-cp-how-crt-card-num">02</span>
            <span class="rh-cp-how-crt-card-title"
              >Platform and spread speed change everything</span
            >
            <span class="rh-cp-how-crt-card-text"
              >The same crisis on social media vs a review platform has a
              completely different urgency profile. A viral situation moves
              faster than an active one. These multipliers are built into the
              calculation, not ignored.</span
            >
          </div>
          <div class="rh-cp-how-crt-card">
            <span class="rh-cp-how-crt-card-num">03</span>
            <span class="rh-cp-how-crt-card-title"
              >Checklist is crisis-type specific, not generic</span
            >
            <span class="rh-cp-how-crt-card-text"
              >The three steps that matter most in a data breach are different
              from the three that matter in an executive scandal. The result
              adapts to what you selected — not a one-size list that applies to
              everything and therefore to nothing.</span
            >
          </div>
          <div class="rh-cp-how-crt-card">
            <span class="rh-cp-how-crt-card-num">04</span>
            <span class="rh-cp-how-crt-card-title"
              >Speed matters, but quality matters more</span
            >
            <span class="rh-cp-how-crt-card-text"
              >Research on 80 companies shows an effective response with no
              speed produced a better outcome than a fast, ineffective one. The
              window here is when you need to have something meaningful out —
              not when you need to say anything at all.</span
            >
          </div>
        </div>
      </div>
    </section>
    <section class="rh-cp-src">
      <div class="rh-cp-src-wrap">
        <h2 class="rh-cp-h2-light">What the Time Windows Are Based On</h2>
        <span class="rh-cp-p-light"
          >The time windows in this calculator are built from three named
          sources. The differentiation by crisis type and platform is an
          analytical estimate on top of that research — no single study gives
          separate numbers for all six crisis types, and we say so in the tool
          rather than pretending otherwise.</span
        >
        <div class="rh-cp-src-rows">
          <div class="rh-cp-src-row">
            <div>
              <span class="rh-cp-src-figure">4% vs 14%</span>
              <span class="rh-cp-src-figure-sub"
                >stock decline, hours vs weeks</span
              >
            </div>
            <div>
              <span class="rh-cp-src-title"
                >Hours vs days vs weeks — the only study that actually measured
                this</span
              >
              <span class="rh-cp-src-text"
                >Hot Paper Lantern analyzed 80 companies across 105 crises,
                covering 450,000+ media articles and 85,000 social media
                mentions. Companies responding within hours saw an average 4%
                stock decline. Those responding within days: 10%. Within weeks:
                14%. But effectiveness mattered more than speed — an effective
                response saw no stock decline at all, regardless of timing. 59%
                of companies handled their crisis ineffectively.</span
              >
              <span class="rh-cp-src-link"
                >Source:
                <a
                  href="https://www.provokemedia.com/latest/article/study-being-effective-is-more-important-than-being-fast-in-times-of-crisis"
                  target="_blank"
                  rel="nofollow noopener"
                  >Hot Paper Lantern, Crisis Response Index (80 companies, 105
                  crises)</a
                ></span
              >
            </div>
          </div>
          <div class="rh-cp-src-row">
            <div>
              <span class="rh-cp-src-figure">21h</span>
              <span class="rh-cp-src-figure-sub"
                >average first response time</span
              >
            </div>
            <div>
              <span class="rh-cp-src-title"
                >Most companies take 21 hours to respond — by which point much
                of the damage is done</span
              >
              <span class="rh-cp-src-text"
                >Industry data on crisis response timing shows the average
                company takes 21 hours to issue its first public statement.
                During that window, more than a quarter of crises are already
                picked up by international media within the first hour, and two
                thirds reach global outlets within 24 hours. The gap between
                what HPL found effective and what companies actually do is the
                core problem this calculator addresses.</span
              >
              <span class="rh-cp-src-link"
                >Source:
                <a
                  href="https://themach1group.com/the-clock-is-ticking-how-to-make-your-crisis-response-timely/"
                  target="_blank"
                  rel="nofollow noopener"
                  >Mach1Group, crisis response timing industry data</a
                ></span
              >
            </div>
          </div>
          <div class="rh-cp-src-row">
            <div>
              <span class="rh-cp-src-figure">2×</span>
              <span class="rh-cp-src-figure-sub"
                >more neutral framing with apology</span
              >
            </div>
            <div>
              <span class="rh-cp-src-title"
                >What you say matters as much as when you say it</span
              >
              <span class="rh-cp-src-text"
                >An analysis of 31,877 HuffPost headlines from 2012 to 2022
                found that apology and corrective-action statements were more
                than twice as likely to receive neutral or positive media
                framing compared to denial or blame-shifting. CEO-fronted
                apologies increased neutral framing by 29 percentage points.
                CEO-issued denials intensified negative framing by 15
                points.</span
              >
              <span class="rh-cp-src-link"
                >Source:
                <a
                  href="https://www.researchgate.net/publication/275354739_Corporate_Crisis_Communication_Examining_the_Interplay_of_Reputation_and_Crisis_Response_Strategies"
                  target="_blank"
                  rel="nofollow noopener"
                  >Corporate Crisis Communication, ResearchGate (31,877
                  headlines, 2012–2022)</a
                ></span
              >
            </div>
          </div>
          <div class="rh-cp-src-row">
            <div>
              <span class="rh-cp-src-figure">91%</span>
              <span class="rh-cp-src-figure-sub"
                >experienced at least one crisis</span
              >
            </div>
            <div>
              <span class="rh-cp-src-title"
                >Crisis is not a rare event — it is a recurring one</span
              >
              <span class="rh-cp-src-text"
                >PwC's 2023 Global Crisis and Resilience Survey of 1,812
                business leaders across 42 countries found that 91% of
                organisations had experienced at least one significant
                disruption other than the pandemic, averaging 3.5 disruptions
                over two years. Only 33% said they were confident in their
                resilience capabilities. 29% of companies had no dedicated
                crisis preparedness staff at all.</span
              >
              <span class="rh-cp-src-link"
                >Source:
                <a
                  href="https://www.pwc.com/gx/en/issues/crisis-solutions/global-crisis-survey.html"
                  target="_blank"
                  rel="nofollow noopener"
                  >PwC Global Crisis and Resilience Survey 2023 (1,812
                  respondents, 42 countries)</a
                ></span
              >
            </div>
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
              Is the "golden hour" still relevant in 2026?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >The concept holds but the framing has aged. Traditional crisis
              communications defined the golden hour as 60 minutes to establish
              facts and position. Social media has compressed that for some
              crisis types — a viral situation on social platforms can peak in
              minutes, not hours. But this doesn't mean you always need to say
              something in 60 minutes. Hot Paper Lantern's research is explicit:
              an effective response outperforms a fast but weak one every time.
              The window in this calculator is when you need something
              meaningful out, not when you need to say anything at all.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              Why are the time windows different for different crisis types?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >Because they spread differently. A data breach generates
              immediate technical documentation, regulatory obligations, and
              often press contact within hours. A wave of negative reviews
              typically builds more slowly over days. A viral disinformation
              campaign on social media can peak and begin to solidify into a
              permanent narrative within hours. The base times in this
              calculator reflect those structural differences, not a single
              universal benchmark.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              What does "point of no return" actually mean?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >It means the point at which the dominant narrative around the
              crisis has largely set — when enough people have formed an
              opinion, enough coverage has been published, and enough social
              sharing has occurred that reversing the frame becomes
              significantly harder. Recovery is still possible after this point,
              but it requires more resources, more time, and a fundamentally
              different strategy than prevention or early containment.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              Should I rush out a statement even if I don't have all the facts?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >No — and research backs this up. HPL found that companies
              responding effectively but slowly outperformed those responding
              quickly but poorly. What you can do within the critical window is
              issue a holding statement: acknowledge the situation, commit to
              transparency, and state that an investigation is underway. This
              stops the silence being read as cover-up without requiring you to
              have information you don't yet have. Speed applies to
              acknowledging — not to speculating.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              Why does the "all channels" platform option give the tightest
              window?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >Because when a crisis is spreading across social media, press,
              and review platforms simultaneously, there is no single channel to
              address — you're managing multiple narratives at once, each with
              its own audience and velocity. That multiplies the urgency
              significantly compared to a crisis contained to one platform where
              a single response can do most of the work.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              How accurate are these time windows?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >Directionally accurate for planning, not exact for your specific
              situation. The base data comes from Hot Paper Lantern's analysis
              of 80 companies across 105 real crises. The differentiation by
              crisis type and platform is an analytical estimate on top of that
              research. Your actual window also depends on your existing
              reputation strength, the credibility of your brand, and how
              quickly your team can move internally — factors the calculator
              can't know. Use the numbers as planning guidance, not a
              guarantee.</span
            >
          </details>
        </div>
      </div>
    </section>
    <section class="rh-cp-cross">
      <div class="rh-cp-cross-wrap">
        <h2 class="rh-cp-h2">Know Your Window. Now Know the Cost.</h2>
        <div class="rh-cp-cross-grid">
          <div class="rh-cp-cross-card a">
            <span class="rh-cp-cross-eyebrow"
              >Free tool · Reputation Damage Cost Estimator</span
            >
            <span class="rh-cp-cross-bignum">$</span>
            <span class="rh-cp-cross-title"
              >What missing that window actually costs</span
            >
            <span class="rh-cp-cross-text"
              >This calculator tells you how long you have. The Damage Cost
              Estimator puts a dollar range on what happens when that window
              closes without a response — built on IBM, Harvard, and SenateSHJ
              data across five incident types.</span
            >
            <div class="rh-cp-cross-btn-row">
              <SiteLink
                href="/calculator/reputation-damage-cost"
                target="_blank"
                rel="noopener"
                class="rh-cp-cross-btn"
                >Estimate the damage →</SiteLink>
            </div>
          </div>
          <div class="rh-cp-cross-card b">
            <span class="rh-cp-cross-eyebrow"
              >Free tool · Reputation Recovery Timeline</span
            >
            <span class="rh-cp-cross-bignum">3 phases</span>
            <span class="rh-cp-cross-title"
              >How long to get back to where you were</span
            >
            <span class="rh-cp-cross-text"
              >Once the window closes and the narrative sets, recovery is a
              different problem entirely. This calculator gives you a realistic
              phase-by-phase timeline based on incident type, reach, and whether
              a plan was in place.</span
            >
            <div class="rh-cp-cross-btn-row">
              <SiteLink
                href="/calculator/reputation-recovery-timeline"
                target="_blank"
                rel="noopener"
                class="rh-cp-cross-btn"
                >See the recovery timeline →</SiteLink>
            </div>
          </div>
          <div class="rh-cp-cross-card c">
            <span class="rh-cp-cross-eyebrow"
              >Free tool · Reputation Risk Score</span
            >
            <span class="rh-cp-cross-bignum">6/20</span>
            <span class="rh-cp-cross-title"
              >Where a crisis is most likely to come from</span
            >
            <span class="rh-cp-cross-text"
              >The best crisis response is the one you prepared for before it
              happened. The Risk Score scans six surfaces — search, AI, media,
              reviews, compliance, crisis readiness — to show where your current
              exposure actually is.</span
            >
            <div class="rh-cp-cross-btn-row">
              <SiteLink
                href="/calculator/reputation-risk-score"
                target="_blank"
                rel="noopener"
                class="rh-cp-cross-btn"
                >Run the risk score →</SiteLink>
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

.rh-crt {
  width: 100%;
  background: #f7f7f7;
}
.rh-crt-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px;
}
.rh-crt-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: start;
}

/* LEFT: FORM */
.rh-crt-form {
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
}
.rh-crt-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 6px 0;
}
.rh-crt-title {
  font-size: 19px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin-bottom: 8px;
}
.rh-crt-sub {
  font-size: 12.5px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-bottom: 28px;
  line-height: 1.55;
}

.rh-crt-q {
  margin: 0 0 22px 0;
}
.rh-crt-q-text {
  font-size: 13px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin: 0 0 4px 0;
}
.rh-crt-q-hint {
  font-size: 11px;
  font-weight: 600;
  color: #b3b3b3;
  display: block;
  margin: 0 0 10px 0;
}

.rh-crt-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.rh-crt-opt {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 14px 16px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
}
.rh-crt-opt:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-crt-opt.selected {
  background: #dfecd9;
  border-color: #99ad8f;
}
.rh-crt-opt-text {
  font-size: 13px;
  font-weight: 700;
  color: #262626;
  display: block;
}
.rh-crt-opt-sub {
  font-size: 10.5px;
  font-weight: 600;
  color: #939393;
  display: block;
  margin-top: 2px;
}

.rh-crt-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.rh-crt-pill {
  background: #f5f5f5;
  border-radius: 100px;
  padding: 10px 18px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
  font-size: 13px;
  font-weight: 600;
  color: #262626;
}
.rh-crt-pill:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-crt-pill.selected {
  background: #262626;
  border-color: #262626;
  color: #fff;
}

.rh-crt-btn {
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
.rh-crt-btn:hover {
  background: #464646;
}

/* RIGHT: RESULT */
.rh-crt-result {
  background: #262626;
  border-radius: 20px;
  padding: 40px;
  position: sticky;
  top: 24px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
}

.rh-crt-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.rh-crt-empty-text {
  font-size: 12px;
  font-weight: 600;
  color: #585858;
  max-width: 230px;
  line-height: 1.6;
}

.rh-crt-filled {
  display: none;
  flex-direction: column;
  height: 100%;
}

/* Zone indicator */
.rh-crt-zone {
  border-radius: 14px;
  padding: 18px 22px;
  margin-bottom: 18px;
}
.rh-crt-zone.red {
  background: rgba(203, 129, 125, 0.15);
  border: 1px solid rgba(203, 129, 125, 0.35);
}
.rh-crt-zone.orange {
  background: rgba(212, 168, 87, 0.15);
  border: 1px solid rgba(212, 168, 87, 0.35);
}
.rh-crt-zone.yellow {
  background: rgba(191, 216, 179, 0.12);
  border: 1px solid rgba(191, 216, 179, 0.25);
}
.rh-crt-zone-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
}
.red .rh-crt-zone-label {
  color: #cb817d;
}
.orange .rh-crt-zone-label {
  color: #d4a857;
}
.yellow .rh-crt-zone-label {
  color: #99ad8f;
}
.rh-crt-zone-title {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  display: block;
  line-height: 1.4;
}

/* Time bars */
.rh-crt-times {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 18px;
}
.rh-crt-time-row {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 16px 18px;
}
.rh-crt-time-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a3a3a3;
  display: block;
  margin-bottom: 6px;
}
.rh-crt-time-val {
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
}
.rh-crt-time-val.red {
  color: #cb817d;
}
.rh-crt-time-val.orange {
  color: #d4a857;
}
.rh-crt-time-val.green {
  color: #99ad8f;
}
.rh-crt-time-sub {
  font-size: 11px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-top: 4px;
  line-height: 1.45;
}

/* Timeline bar */
.rh-crt-bar-wrap {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  height: 8px;
  overflow: hidden;
  margin: 10px 0 4px 0;
}
.rh-crt-bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.6s ease;
}

/* Checklist */
.rh-crt-checklist {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 16px;
  margin-top: auto;
}
.rh-crt-checklist-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f7f7f7;
  display: block;
  margin-bottom: 12px;
}
.rh-crt-check-item {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.rh-crt-check-num {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #99ad8f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: #1a2417;
  flex-shrink: 0;
  margin-top: 1px;
}
.rh-crt-check-text {
  font-size: 12.5px;
  font-weight: 600;
  color: #a3a3a3;
  line-height: 1.5;
}
.rh-crt-check-text b {
  color: #ffffff;
}

.rh-crt-sources {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.rh-crt-src-toggle {
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  cursor: pointer;
  user-select: none;
}
.rh-crt-src-toggle:hover {
  color: #808080;
}
.rh-crt-src-list {
  display: none;
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  line-height: 1.85;
  margin-top: 8px;
}
.rh-crt-src-list.open {
  display: block;
}

@media (max-width: 860px) {
  .rh-crt-wrap {
    padding: 32px 20px;
  }
  .rh-crt-inner {
    grid-template-columns: 1fr;
  }
  .rh-crt-result {
    position: static;
    min-height: auto;
  }
  .rh-crt-form {
    padding: 28px 22px;
  }
  .rh-crt-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 960px) {
  .rh-crt-wrap {
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

.rh-cp-how-crt {
  width: 100%;
  background: #ffffff;
  padding-top: 1px;
}
.rh-cp-how-crt-wrap {
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
.rh-cp-how-crt-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 28px 0 0;
}
.rh-cp-how-crt-card {
  background: #f7f7f7;
  border-radius: 16px;
  padding: 24px 22px;
  border-left: 3px solid #bfd8b3;
}
.rh-cp-how-crt-card-num {
  font-size: 28px;
  font-weight: 600;
  color: #dfecd9;
  line-height: 1;
  display: block;
  margin: 0 0 10px 0;
}
.rh-cp-how-crt-card-title {
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  display: block;
  margin: 0 0 8px 0;
}
.rh-cp-how-crt-card-text {
  font-size: 13px;
  font-weight: 600;
  color: #585858;
  line-height: 1.6;
  display: block;
}
@media (max-width: 960px) {
  .rh-cp-how-crt-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
  .rh-cp-how-crt-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .rh-cp-how-crt-wrap {
    padding: 40px 20px;
  }
}

.rh-cp-src {
  width: 100%;
  background: #262626;
}
.rh-cp-src-wrap {
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
.rh-cp-src-rows {
  display: flex;
  flex-direction: column;
}
.rh-cp-src-row {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  align-items: center;
  padding: 28px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.rh-cp-src-row:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.rh-cp-src-figure {
  font-size: 38px;
  font-weight: 700;
  color: #bfd8b3;
  line-height: 1;
}
.rh-cp-src-figure-sub {
  font-size: 11px;
  font-weight: 600;
  color: #6f8a63;
  display: block;
  margin-top: 6px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.rh-cp-src-title {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  display: block;
  margin: 0 0 8px 0;
}
.rh-cp-src-text {
  font-size: 13.5px;
  font-weight: 600;
  color: #a3a3a3;
  line-height: 1.65;
  display: block;
}
.rh-cp-src-link {
  font-size: 11px;
  font-weight: 600;
  margin: 10px 0 0 0;
  display: block;
  color: #585858;
}
.rh-cp-src-link a {
  color: #99ad8f !important;
  text-decoration: underline !important;
}
.rh-cp-src-link a:visited {
  color: #99ad8f !important;
}
.rh-cp-src-link a:hover {
  color: #bfd8b3 !important;
}
@media (max-width: 860px) {
  .rh-cp-src-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .rh-cp-src-figure {
    font-size: 32px;
  }
}
@media (max-width: 960px) {
  .rh-cp-src-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (max-width: 600px) {
  .rh-cp-src-wrap {
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
.rh-cp-cross-card {
  border-radius: 20px;
  padding: 32px 30px;
  display: flex;
  flex-direction: column;
}
.rh-cp-cross-card.a {
  background: #262626;
}
.rh-cp-cross-card.b {
  background: #ffffff;
  border: 1px solid #ececec;
}
.rh-cp-cross-card.c {
  background: #dfecd9;
}
.rh-cp-cross-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: block;
  margin: 0 0 14px 0;
}
.a .rh-cp-cross-eyebrow {
  color: #bfd8b3;
}
.b .rh-cp-cross-eyebrow {
  color: #99ad8f;
}
.c .rh-cp-cross-eyebrow {
  color: #606c59;
}
.rh-cp-cross-bignum {
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
  display: block;
  margin: 0 0 10px 0;
}
.a .rh-cp-cross-bignum {
  color: #ffffff;
}
.b .rh-cp-cross-bignum {
  color: #262626;
}
.c .rh-cp-cross-bignum {
  color: #3a4d34;
}
.rh-cp-cross-title {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.35;
  display: block;
  margin: 0 0 10px 0;
}
.a .rh-cp-cross-title {
  color: #ffffff;
}
.b .rh-cp-cross-title {
  color: #262626;
}
.c .rh-cp-cross-title {
  color: #262626;
}
.rh-cp-cross-text {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.65;
  flex-grow: 1;
}
.a .rh-cp-cross-text {
  color: #a3a3a3;
}
.b .rh-cp-cross-text {
  color: #808080;
}
.c .rh-cp-cross-text {
  color: #4a5a43;
}
.rh-cp-cross-btn-row {
  margin-top: 20px;
}
.rh-cp-cross-btn {
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
.a .rh-cp-cross-btn {
  background: #bfd8b3 !important;
  color: #1a2417 !important;
}
.a .rh-cp-cross-btn:hover,
.a .rh-cp-cross-btn:visited,
.a .rh-cp-cross-btn:active {
  background: #99ad8f !important;
  color: #1a2417 !important;
  text-decoration: none !important;
}
.b .rh-cp-cross-btn {
  background: #262626 !important;
  color: #ffffff !important;
}
.b .rh-cp-cross-btn:hover,
.b .rh-cp-cross-btn:visited,
.b .rh-cp-cross-btn:active {
  background: #464646 !important;
  color: #ffffff !important;
  text-decoration: none !important;
}
.c .rh-cp-cross-btn {
  background: #262626 !important;
  color: #ffffff !important;
}
.c .rh-cp-cross-btn:hover,
.c .rh-cp-cross-btn:visited,
.c .rh-cp-cross-btn:active {
  background: #464646 !important;
  color: #ffffff !important;
  text-decoration: none !important;
}
@media (max-width: 1060px) {
  .rh-cp-cross-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 860px) {
  .rh-cp-cross-grid {
    grid-template-columns: 1fr;
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
  .rh-cp-cross-card {
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
