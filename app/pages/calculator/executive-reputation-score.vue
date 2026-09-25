<script setup lang="ts">
import CalculatorExecutiveReputationScore from "~/components/calculators/CalculatorExecutiveReputationScore.vue";
const consultation = useConsultation();
useSeoMeta({
  title: "Executive Reputation Score | CEO Online Reputation Check",
  description:
    "Free executive reputation score calculator. Run a CEO online reputation check, assess personal brand risk, and measure your executive digital presence in minutes.",
});
</script>
<template>
  <main id="main-content" class="calculator-page">
    <nav class="calculator-breadcrumb">
      <SiteLink href="/">Reputation.house</SiteLink> /
      <SiteLink href="/risk-calculator">Calculator</SiteLink> / Executive
      Reputation Score | CEO Online Reputation Check
    </nav>
    <section class="rh-cp-header">
      <div class="rh-cp-header-wrap">
        <div class="rh-cp-toprow">
          <span class="rh-cp-tag">Free Tool</span>
          <span class="rh-cp-badge">Executive Reputation</span>
        </div>
        <h1 class="rh-cp-h1">
          Executive Reputation Score:<br /><em
            >What Does Google Say About You?</em
          >
        </h1>
        <span class="rh-cp-lead"
          >Five questions about your digital presence — personal site, LinkedIn,
          media coverage, negative results, and your role — and you get a score
          out of 100 with a risk map and what others actually find when they
          search your name.</span
        >
        <div class="rh-cp-meta">
          <span class="rh-cp-meta-text">Free · No registration</span>
          <span class="rh-cp-meta-dot">·</span>
          <span class="rh-cp-meta-text">Under 1 min</span>
          <span class="rh-cp-meta-dot">·</span>
          <span class="rh-cp-meta-badge">5 inputs · 4 named sources</span>
        </div>
        <div class="rh-cp-divider"><span></span><span></span><span></span></div>
      </div>
    </section>
    <CalculatorExecutiveReputationScore />
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
    <section class="rh-cp-how-ex">
      <div class="rh-cp-how-ex-wrap">
        <h2>What This Calculator Measures, and Why It Matters</h2>
        <p>
          Executive reputation is one of those things that sounds soft until you
          look at the numbers. Weber Shandwick's survey of 1,700 senior
          executives found that 44% of a company's market value is directly
          attributed to CEO reputation — not product quality, not financials,
          not brand spend. The person at the top. That's a meaningful number to
          have sitting on a digital presence that nobody has actively managed.
        </p>
        <p>
          This tool scores your personal online reputation across five factors
          that determine what a journalist, investor, due diligence analyst, or
          potential partner actually finds when they search your name. The CEO
          online reputation check isn't about vanity metrics — it's about
          whether the picture that appears for your name works for or against
          you before any meeting, call, or deal conversation begins.
        </p>
        <div class="rh-cp-how-ex-grid">
          <div class="rh-cp-how-ex-card">
            <span class="rh-cp-how-ex-num">01</span>
            <h3>The search happens before the meeting</h3>
            <p>
              Decision-makers search executive names before investing,
              partnering, hiring, or commissioning work. What they find — or
              don't find — shapes expectations before the first word is spoken.
              A thin or unprotected personal SERP is a risk that starts
              operating before you know a conversation is happening.
            </p>
          </div>
          <div class="rh-cp-how-ex-card">
            <span class="rh-cp-how-ex-num">02</span>
            <h3>Absence is its own signal</h3>
            <p>
              61% of Fortune 500 CEOs had no social presence at all, per Weber
              Shandwick's 2010 baseline study. That number has shifted, but an
              executive with no personal website, a skeletal LinkedIn, and no
              media mentions still reads as a blank slate — and blank slates
              make stakeholders fill in the gaps with their own assumptions.
            </p>
          </div>
          <div class="rh-cp-how-ex-card">
            <span class="rh-cp-how-ex-num">03</span>
            <h3>Negative results cost before any interaction</h3>
            <p>
              A single negative result on your personal search page drives away
              a meaningful share of people before they contact you. This loss is
              pre-meeting and invisible — no email, no call, no meeting booked.
              The damage shows up only as things that don't happen, not in any
              analytics dashboard.
            </p>
          </div>
          <div class="rh-cp-how-ex-card">
            <span class="rh-cp-how-ex-num">04</span>
            <h3>The score tells you what to fix first</h3>
            <p>
              A personal brand risk assessment that returns "your reputation
              could be better" without saying what to do about it isn't useful.
              Each factor in this score has a specific impact and a specific fix
              — so the result tells you which move would add the most points,
              not just that the number is low.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="rh-cp-src-ex">
      <div class="rh-cp-src-ex-wrap">
        <h2>What the Score Is Based On</h2>
        <span class="rh-cp-src-ex-intro"
          >Four named sources drive the five factors in this score. Each is
          traceable to a specific study with a published methodology — not an
          industry statistic recycled without a first source.</span
        >
        <div class="rh-cp-src-ex-rows">
          <div class="rh-cp-src-ex-row">
            <div>
              <span class="rh-cp-src-ex-figure">44%</span>
              <span class="rh-cp-src-ex-figure-sub"
                >of company market value</span
              >
            </div>
            <div>
              <h3>CEO reputation drives nearly half of company value</h3>
              <p>
                Weber Shandwick and KRC Research surveyed 1,700+ senior
                executives across 19 countries. Respondents attributed an
                average of 44% of their company's market value directly to CEO
                reputation — and 45% of overall company reputation. 81% said
                external CEO engagement is now a mandate, not optional. This is
                the study's core finding and the reason CEO / Founder carries
                the highest position weight in the score.
              </p>
              <span class="rh-cp-src-ex-link"
                >Source:
                <a
                  href="https://webershandwick.com/news/the-ceo-reputation-premium-a-new-era-of-engagement"
                  target="_blank"
                  rel="nofollow noopener"
                  >Weber Shandwick &amp; KRC Research, The CEO Reputation
                  Premium (1,700+ executives, 19 countries, 2015)</a
                ></span
              >
            </div>
          </div>
          <div class="rh-cp-src-ex-row">
            <div>
              <span class="rh-cp-src-ex-figure">48%</span>
              <span class="rh-cp-src-ex-figure-sub">of company reputation</span>
            </div>
            <div>
              <h3>
                Almost half of company reputation is directly attributable to
                the CEO
              </h3>
              <p>
                A separate study by Burson-Marsteller, based on 1,155 US chief
                executives, senior managers, financial analysts, institutional
                investors, business media, and government officials, found that
                48% of company reputation can be attributed to the CEO — a rise
                of 20 percentage points from 40% in 1997. Business influencials
                were more likely to recommend a company as a good place to work
                (88%) if the CEO was favorably regarded.
              </p>
              <span class="rh-cp-src-ex-link"
                >Source:
                <a
                  href="https://www.write2market.com/paper-ceo-reputation-package-influence-measure-2/"
                  target="_blank"
                  rel="nofollow noopener"
                  >Burson-Marsteller, CEO Reputation study (1,155 respondents,
                  US)</a
                ></span
              >
            </div>
          </div>
          <div class="rh-cp-src-ex-row">
            <div>
              <span class="rh-cp-src-ex-figure">87%</span>
              <span class="rh-cp-src-ex-figure-sub"
                >of recruiters use LinkedIn</span
              >
            </div>
            <div>
              <h3>
                LinkedIn is the primary due diligence channel for executives
              </h3>
              <p>
                87% of recruiters actively use LinkedIn for candidate sourcing.
                43% of employers examine social media profiles during
                recruitment processes, and 36% have eliminated candidates based
                on what they found there. For executives specifically, LinkedIn
                is typically the first search result that appears for their name
                — making it the single most important controlled channel in
                personal digital presence.
              </p>
              <span class="rh-cp-src-ex-link"
                >Source:
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12603955/"
                  target="_blank"
                  rel="nofollow noopener"
                  >SHRM (2016), cited in PMC peer-reviewed study on digital
                  footprint and recruitment decisions</a
                ></span
              >
            </div>
          </div>
          <div class="rh-cp-src-ex-row">
            <div>
              <span class="rh-cp-src-ex-figure">71%</span>
              <span class="rh-cp-src-ex-figure-sub"
                >won't apply to companies with negative publicity</span
              >
            </div>
            <div>
              <h3>
                Negative executive reputation filters talent before the pipeline
                starts
              </h3>
              <p>
                A CareerBuilder survey found that 71% of US workers won't apply
                to a company with negative public information about its
                leadership. This filtering happens before any contact is made —
                at the search result stage. The same mechanism applies to
                investors and partners who search executive names: a negative
                result narrows the funnel before any conversation begins.
              </p>
              <span class="rh-cp-src-ex-link"
                >Source:
                <a
                  href="https://nadernejadmedia.com/top-20-reputation-management-statistics-for-ceos-and-executives/"
                  target="_blank"
                  rel="nofollow noopener"
                  >CareerBuilder survey, cited in Nadernejad Media executive
                  reputation research roundup</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="rh-cp-faq-ex">
      <div class="rh-cp-faq-ex-wrap">
        <h2 id="faq">Frequently Asked Questions</h2>
        <div class="rh-cp-faq-ex-list">
          <details class="rh-cp-faq-ex-item">
            <summary class="rh-cp-faq-ex-q">
              Why does executive reputation affect company value?
            </summary>
            <span class="rh-cp-faq-ex-a" style="display: block"
              >Because stakeholders — investors, analysts, journalists,
              potential employees, partners — evaluate leadership before they
              evaluate the business. A CEO or senior executive with a strong,
              coherent online presence signals competence, stability, and
              credibility. The reverse is also true: a thin or damaged personal
              digital presence creates doubt about the organisation itself.
              Weber Shandwick's research across 1,700 executives in 19 countries
              found 44% of company market value attributed directly to CEO
              reputation — not as a soft proxy, but as a measurable driver of
              investor and stakeholder behaviour.</span
            >
          </details>
          <details class="rh-cp-faq-ex-item">
            <summary class="rh-cp-faq-ex-q">
              Does this apply to executives below CEO level?
            </summary>
            <span class="rh-cp-faq-ex-a" style="display: block"
              >Yes, with a different weight. The same Weber Shandwick study
              noted that the expectation of external engagement and visibility
              applies across the C-suite, not just the CEO. For board members
              and other senior executives, the stakes are lower in absolute
              market-value terms, but the same due diligence behaviour applies:
              people search your name before meetings, partnerships, speaking
              invitations, and media appearances. The score adjusts for role —
              CEO carries the highest position weight, but top management and
              board members are also scored meaningfully.</span
            >
          </details>
          <details class="rh-cp-faq-ex-item">
            <summary class="rh-cp-faq-ex-q">
              What counts as a "negative publication" in Google's top-10?
            </summary>
            <span class="rh-cp-faq-ex-a" style="display: block"
              >Any result that presents you or your work in a materially
              damaging light: investigative journalism, complaint articles,
              legal proceedings coverage, critical op-eds that rank for your
              name, Glassdoor reviews tied to your leadership, or sustained
              negative social media threads that Google has indexed and ranked.
              A neutral result — a directory listing you didn't create, a
              third-party bio — doesn't count as negative. The question is
              specifically about content that would change a stakeholder's
              perception negatively before any interaction with you.</span
            >
          </details>
          <details class="rh-cp-faq-ex-item">
            <summary class="rh-cp-faq-ex-q">
              Why does a personal website matter if I have LinkedIn?
            </summary>
            <span class="rh-cp-faq-ex-a" style="display: block"
              >LinkedIn gives you a profile on a third-party platform with
              limited formatting, no custom domain, and terms of service that
              can change. A personal website gives you a fully controlled asset
              at a domain that belongs to you — where you set the narrative, the
              structure, and what appears first. In Google's ranking of personal
              search results, a personal domain typically ranks alongside
              LinkedIn rather than replacing it. Having both means two
              high-quality controlled results on your name, rather than
              one.</span
            >
          </details>
          <details class="rh-cp-faq-ex-item">
            <summary class="rh-cp-faq-ex-q">
              How accurate is this score?
            </summary>
            <span class="rh-cp-faq-ex-a" style="display: block"
              >The score is directionally accurate — it reliably identifies
              which factors are helping or hurting your personal digital
              reputation and what closing each gap would mean. Its precision
              depends on honest inputs: if you have a LinkedIn profile that's
              been untouched for three years, the answer is still "yes"
              technically, but the real impact is lower than the score suggests.
              For a more precise, data-driven result based on what's actually
              ranking for your name right now, a structured audit that checks
              your actual SERP is more reliable than self-reporting alone.</span
            >
          </details>
          <details class="rh-cp-faq-ex-item">
            <summary class="rh-cp-faq-ex-q">
              How quickly can executive reputation be improved?
            </summary>
            <span class="rh-cp-faq-ex-a" style="display: block"
              >Some elements move fast — a complete LinkedIn profile and a
              published personal website can both appear in Google's top-10
              results within days of being live. Media mentions take longer to
              accumulate but begin contributing within weeks of being published.
              Suppressing a negative result is the most time-intensive task: it
              typically takes several months of sustained positive content
              production to push a negative result off the first page, and
              longer to make it disappear entirely. The fastest gains come from
              closing the absence gaps — things that don't exist yet — rather
              than correcting things that are already there.</span
            >
          </details>
        </div>
      </div>
    </section>
    <section class="rh-cp-cross-ex">
      <div class="rh-cp-cross-ex-wrap">
        <h2>Your Name Is One Piece of the Picture</h2>
        <div class="rh-cp-cross-ex-grid">
          <div class="rh-cp-cross-ex-card a">
            <span class="rh-cp-cross-ex-eyebrow"
              >Free tool · Brand Monitoring ROI</span
            >
            <span class="rh-cp-cross-ex-bignum">EMV</span>
            <h3 style="color: #ffffff !important">
              What your company's brand mentions are worth
            </h3>
            <span class="rh-cp-cross-ex-text"
              >Your personal reputation shapes how people see the company. The
              Brand Monitoring ROI calculator shows what your company's earned
              media mentions are worth in paid-media terms — and how much slow
              response is eroding that value.</span
            >
            <div class="rh-cp-cross-ex-btn-row">
              <a
                href="/calculator/brand-monitoring-roi"
                target="_blank"
                rel="noopener"
                class="rh-cp-cross-ex-btn"
                >Calculate monitoring ROI →</a
              >
            </div>
          </div>
          <div class="rh-cp-cross-ex-card b">
            <span class="rh-cp-cross-ex-eyebrow"
              >Free tool · Crisis Response Time</span
            >
            <span class="rh-cp-cross-ex-bignum">⏱</span>
            <h3 style="color: #262626 !important">
              How fast you need to act if something goes wrong
            </h3>
            <span class="rh-cp-cross-ex-text"
              >Executive scandals and leadership controversies have some of the
              tightest response windows. This calculator gives you the exact
              critical window — by crisis type, spread speed, and platform —
              before damage hardens into a permanent SERP result.</span
            >
            <div class="rh-cp-cross-ex-btn-row">
              <a
                href="/calculator/crisis-response-time"
                target="_blank"
                rel="noopener"
                class="rh-cp-cross-ex-btn"
                >Calculate response time →</a
              >
            </div>
          </div>
          <div class="rh-cp-cross-ex-card c">
            <span class="rh-cp-cross-ex-eyebrow"
              >Free tool · SERP Control Score</span
            >
            <span class="rh-cp-cross-ex-bignum">0–100</span>
            <h3 style="color: #262626 !important">
              How much of your company's search page you actually own
            </h3>
            <span class="rh-cp-cross-ex-text"
              >This tool scores your personal reputation online. The SERP
              Control Score does the same for your company brand — how many of
              the top-10 results you control, what negative listings are costing
              you, and where the gaps are.</span
            >
            <div class="rh-cp-cross-ex-btn-row">
              <a
                href="/calculator/serp-reputation-score"
                target="_blank"
                rel="noopener"
                class="rh-cp-cross-ex-btn"
                >Check brand SERP score →</a
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

.rh-ex {
  width: 100%;
  background: #f7f7f7;
}
.rh-ex-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px;
}
.rh-ex-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: start;
}

/* FORM */
.rh-ex-form {
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
}
.rh-ex-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 6px 0;
}
.rh-ex-title {
  font-size: 19px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin-bottom: 8px;
}
.rh-ex-sub {
  font-size: 12.5px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-bottom: 28px;
  line-height: 1.55;
}

.rh-ex-q {
  margin: 0 0 22px 0;
}
.rh-ex-q-text {
  font-size: 13px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin: 0 0 4px 0;
}
.rh-ex-q-hint {
  font-size: 11px;
  font-weight: 600;
  color: #b3b3b3;
  display: block;
  margin: 0 0 10px 0;
}

.rh-ex-toggle-row {
  display: flex;
  gap: 8px;
}
.rh-ex-toggle {
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
.rh-ex-toggle:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-ex-toggle.selected {
  background: #262626;
  border-color: #262626;
  color: #fff;
}

.rh-ex-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.rh-ex-pill {
  background: #f5f5f5;
  border-radius: 100px;
  padding: 10px 18px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
  font-size: 12.5px;
  font-weight: 600;
  color: #262626;
}
.rh-ex-pill:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-ex-pill.selected {
  background: #262626;
  border-color: #262626;
  color: #fff;
}

.rh-ex-btn {
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
.rh-ex-btn:hover {
  background: #464646;
}

/* RESULT */
.rh-ex-result {
  background: #262626;
  border-radius: 20px;
  padding: 40px;
  position: sticky;
  top: 24px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
}

.rh-ex-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.rh-ex-empty-text {
  font-size: 12px;
  font-weight: 600;
  color: #585858;
  max-width: 230px;
  line-height: 1.6;
}

.rh-ex-filled {
  display: none;
  flex-direction: column;
  height: 100%;
}

.rh-ex-score-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 12px 0;
}

.rh-ex-gauge-wrap {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 8px;
}
.rh-ex-score-big {
  font-size: 52px;
  font-weight: 700;
  line-height: 1;
}
.rh-ex-score-max {
  font-size: 18px;
  font-weight: 600;
  color: #585858;
  padding-bottom: 8px;
}

.rh-ex-bar-wrap {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  height: 10px;
  overflow: hidden;
  margin-bottom: 8px;
}
.rh-ex-bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.7s ease;
}

.rh-ex-zone-label {
  font-size: 12px;
  font-weight: 700;
  display: block;
  margin-bottom: 18px;
}

/* Visibility level */
.rh-ex-visibility {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 16px 18px;
  margin-bottom: 14px;
}
.rh-ex-vis-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #a3a3a3;
  display: block;
  margin-bottom: 6px;
}
.rh-ex-vis-value {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
}
.rh-ex-vis-sub {
  font-size: 12px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-top: 4px;
  line-height: 1.5;
}

/* Risks */
.rh-ex-risk-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f7f7f7;
  display: block;
  margin-bottom: 10px;
}
.rh-ex-risks {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
}
.rh-ex-risk-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.rh-ex-risk-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 4px;
  flex-shrink: 0;
}
.rh-ex-risk-text {
  font-size: 12.5px;
  font-weight: 600;
  color: #a3a3a3;
  line-height: 1.5;
}
.rh-ex-risk-text b {
  color: #ffffff;
}

/* What others see */
.rh-ex-serp {
  background: rgba(191, 216, 179, 0.08);
  border: 1px solid rgba(191, 216, 179, 0.14);
  border-radius: 12px;
  padding: 16px 18px;
  margin-bottom: 16px;
}
.rh-ex-serp-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin-bottom: 8px;
}
.rh-ex-serp-text {
  font-size: 12.5px;
  font-weight: 600;
  color: #bfd8b3;
  line-height: 1.55;
}
.rh-ex-serp-text b {
  color: #ffffff;
}

/* Sources */
.rh-ex-sources {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.rh-ex-src-toggle {
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  cursor: pointer;
  user-select: none;
}
.rh-ex-src-toggle:hover {
  color: #808080;
}
.rh-ex-src-list {
  display: none;
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  line-height: 1.85;
  margin-top: 8px;
}
.rh-ex-src-list.open {
  display: block;
}

@media (max-width: 860px) {
  .rh-ex-wrap {
    padding: 32px 20px;
  }
  .rh-ex-inner {
    grid-template-columns: 1fr;
  }
  .rh-ex-result {
    position: static;
    min-height: auto;
  }
  .rh-ex-form {
    padding: 28px 22px;
  }
}
@media (max-width: 960px) {
  .rh-ex-wrap {
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

.rh-cp-how-ex {
  width: 100%;
  background: #ffffff;
  padding-top: 1px;
}
.rh-cp-how-ex-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px 64px;
}
.rh-cp-how-ex-wrap h2 {
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: 600;
  color: #262626;
  line-height: 1.2;
  border-top: 3px solid #bfd8b3;
  padding: 20px 0 0 0;
  margin: 0 0 24px 0;
}
.rh-cp-how-ex-wrap p {
  font-size: 16px;
  font-weight: 600;
  color: #464646;
  line-height: 1.75;
  margin: 0 0 20px 0;
  display: block;
}
.rh-cp-how-ex-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 28px 0 0;
}
.rh-cp-how-ex-card {
  background: #f7f7f7;
  border-radius: 16px;
  padding: 24px 22px;
  border-left: 3px solid #bfd8b3;
}
.rh-cp-how-ex-card h3 {
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  margin: 0 0 8px 0;
}
.rh-cp-how-ex-num {
  font-size: 28px;
  font-weight: 600;
  color: #dfecd9;
  line-height: 1;
  display: block;
  margin: 0 0 10px 0;
}
.rh-cp-how-ex-card p {
  font-size: 13px;
  font-weight: 600;
  color: #585858;
  line-height: 1.6;
  margin: 0;
}
@media (max-width: 960px) {
  .rh-cp-how-ex-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
  .rh-cp-how-ex-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .rh-cp-how-ex-wrap {
    padding: 40px 20px 48px;
  }
}

.rh-cp-src-ex {
  width: 100%;
  background: #262626;
}
.rh-cp-src-ex-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px;
}
.rh-cp-src-ex-wrap h2 {
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: 600;
  color: #ffffff;
  line-height: 1.2;
  border-top: 3px solid #bfd8b3;
  padding: 20px 0 0 0;
  margin: 0 0 16px 0;
}
.rh-cp-src-ex-intro {
  font-size: 15px;
  font-weight: 600;
  color: #a3a3a3;
  line-height: 1.7;
  margin: 0 0 36px 0;
  display: block;
  max-width: 760px;
}
.rh-cp-src-ex-rows {
  display: flex;
  flex-direction: column;
}
.rh-cp-src-ex-row {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  align-items: center;
  padding: 28px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.rh-cp-src-ex-row:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.rh-cp-src-ex-figure {
  font-size: 38px;
  font-weight: 700;
  color: #bfd8b3;
  line-height: 1;
}
.rh-cp-src-ex-figure-sub {
  font-size: 11px;
  font-weight: 600;
  color: #6f8a63;
  display: block;
  margin-top: 6px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.rh-cp-src-ex-row h3 {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 8px 0;
}
.rh-cp-src-ex-row p {
  font-size: 13.5px;
  font-weight: 600;
  color: #a3a3a3;
  line-height: 1.65;
  margin: 0;
}
.rh-cp-src-ex-link {
  font-size: 11px;
  font-weight: 600;
  margin: 10px 0 0 0;
  display: block;
  color: #585858;
}
.rh-cp-src-ex-link a {
  color: #99ad8f !important;
  text-decoration: underline !important;
}
.rh-cp-src-ex-link a:visited {
  color: #99ad8f !important;
}
.rh-cp-src-ex-link a:hover {
  color: #bfd8b3 !important;
}
@media (max-width: 860px) {
  .rh-cp-src-ex-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .rh-cp-src-ex-figure {
    font-size: 32px;
  }
}
@media (max-width: 960px) {
  .rh-cp-src-ex-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (max-width: 600px) {
  .rh-cp-src-ex-wrap {
    padding: 40px 20px;
  }
}

.rh-cp-faq-ex {
  width: 100%;
  background: #ffffff;
}
.rh-cp-faq-ex-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px 72px;
}
.rh-cp-faq-ex-wrap h2 {
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: 600;
  color: #262626;
  line-height: 1.2;
  border-top: 3px solid #bfd8b3;
  padding: 20px 0 0 0;
  margin: 0 0 24px 0;
}
.rh-cp-faq-ex-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 28px 0 0;
}
.rh-cp-faq-ex-item {
  background: #f7f7f7;
  border-radius: 14px;
  overflow: hidden;
}
.rh-cp-faq-ex-q {
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
.rh-cp-faq-ex-q::after {
  content: "+";
  font-size: 20px;
  color: #99ad8f;
  flex-shrink: 0;
  line-height: 1;
  transition: transform 0.2s;
}
.rh-cp-faq-ex-item.open .rh-cp-faq-ex-q::after {
  transform: rotate(45deg);
}
.rh-cp-faq-ex-a {
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
.rh-cp-faq-ex-item.open .rh-cp-faq-ex-a {
  max-height: 600px;
  padding: 16px 22px 18px;
  border-top: 1px solid #eeeeee;
}
.rh-cp-faq-ex-item:not(.open) .rh-cp-faq-ex-a {
  border-top: none;
}
@media (max-width: 960px) {
  .rh-cp-faq-ex-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (max-width: 600px) {
  .rh-cp-faq-ex-wrap {
    padding: 40px 20px 56px;
  }
  .rh-cp-faq-ex-q {
    font-size: 14px;
  }
}

.rh-cp-cross-ex {
  width: 100%;
  background: #f7f7f7;
}
.rh-cp-cross-ex-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px 72px;
}
.rh-cp-cross-ex-wrap h2 {
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: 600;
  color: #262626;
  line-height: 1.2;
  border-top: 3px solid #bfd8b3;
  padding: 20px 0 0 0;
  margin: 0 0 28px 0;
}
.rh-cp-cross-ex-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}
.rh-cp-cross-ex-card {
  border-radius: 20px;
  padding: 32px 30px;
  display: flex;
  flex-direction: column;
}
.rh-cp-cross-ex-card.a {
  background: #262626;
}
.rh-cp-cross-ex-card.b {
  background: #ffffff;
  border: 1px solid #ececec;
}
.rh-cp-cross-ex-card.c {
  background: #dfecd9;
}
.rh-cp-cross-ex-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: block;
  margin: 0 0 14px 0;
}
.a .rh-cp-cross-ex-eyebrow {
  color: #bfd8b3;
}
.b .rh-cp-cross-ex-eyebrow {
  color: #99ad8f;
}
.c .rh-cp-cross-ex-eyebrow {
  color: #606c59;
}
.rh-cp-cross-ex-bignum {
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
  display: block;
  margin: 0 0 10px 0;
}
.a .rh-cp-cross-ex-bignum {
  color: #ffffff;
}
.b .rh-cp-cross-ex-bignum {
  color: #262626;
}
.c .rh-cp-cross-ex-bignum {
  color: #3a4d34;
}
.rh-cp-cross-ex-card h3 {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.35;
  margin: 0 0 10px 0;
}
.a .rh-cp-cross-ex-card h3 {
  color: #ffffff !important;
}
.b .rh-cp-cross-ex-card h3 {
  color: #262626;
}
.c .rh-cp-cross-ex-card h3 {
  color: #262626;
}
.rh-cp-cross-ex-text {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.65;
  flex-grow: 1;
}
.a .rh-cp-cross-ex-text {
  color: #a3a3a3;
}
.b .rh-cp-cross-ex-text {
  color: #808080;
}
.c .rh-cp-cross-ex-text {
  color: #4a5a43;
}
.rh-cp-cross-ex-btn-row {
  margin-top: 20px;
}
.rh-cp-cross-ex-btn {
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
.a .rh-cp-cross-ex-btn {
  background: #bfd8b3 !important;
  color: #1a2417 !important;
}
.a .rh-cp-cross-ex-btn:hover,
.a .rh-cp-cross-ex-btn:visited,
.a .rh-cp-cross-ex-btn:active {
  background: #99ad8f !important;
  color: #1a2417 !important;
  text-decoration: none !important;
}
.b .rh-cp-cross-ex-btn {
  background: #262626 !important;
  color: #ffffff !important;
}
.b .rh-cp-cross-ex-btn:hover,
.b .rh-cp-cross-ex-btn:visited,
.b .rh-cp-cross-ex-btn:active {
  background: #464646 !important;
  color: #ffffff !important;
  text-decoration: none !important;
}
.c .rh-cp-cross-ex-btn {
  background: #262626 !important;
  color: #ffffff !important;
}
.c .rh-cp-cross-ex-btn:hover,
.c .rh-cp-cross-ex-btn:visited,
.c .rh-cp-cross-ex-btn:active {
  background: #464646 !important;
  color: #ffffff !important;
  text-decoration: none !important;
}
@media (max-width: 1060px) {
  .rh-cp-cross-ex-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 860px) {
  .rh-cp-cross-ex-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 960px) {
  .rh-cp-cross-ex-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media (max-width: 600px) {
  .rh-cp-cross-ex-wrap {
    padding: 40px 20px 56px;
  }
  .rh-cp-cross-ex-card {
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
