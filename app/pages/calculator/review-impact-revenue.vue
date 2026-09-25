<script setup lang="ts">
import CalculatorReviewImpactRevenue from "~/components/calculators/CalculatorReviewImpactRevenue.vue";
const consultation = useConsultation();
useSeoMeta({
  title:
    "Review Impact Calculator: How Online Reviews Affect Revenue & Sales Growth",
  description:
    "Calculate how online reviews impact your revenue. Estimate how rating changes affect conversions, customer acquisition, and monthly sales based on real reputation data and industry benchmarks.",
});
</script>
<template>
  <main id="main-content" class="calculator-page">
    <nav class="calculator-breadcrumb">
      <SiteLink href="/">Reputation.house</SiteLink> /
      <SiteLink href="/risk-calculator">Calculator</SiteLink> / Review Impact
      Calculator: How Online Reviews Affect Revenue &amp; Sales Growth
    </nav>
    <section class="rh-cp-header">
      <div class="rh-cp-header-wrap">
        <div class="rh-cp-toprow">
          <span class="rh-cp-tag">Free Tool</span>
          <span class="rh-cp-badge">Review Impact Calculator</span>
        </div>
        <h1 class="rh-cp-h1">
          Review Impact Calculator:<br /><em
            >See What Your Star Rating Is Actually Worth</em
          >
        </h1>
        <span class="rh-cp-lead"
          >Average order value, monthly customers, your current rating, and
          review volume — four numbers in, one revenue breakdown out, built on
          research that's actually been peer-reviewed.</span
        >
        <div class="rh-cp-meta">
          <span class="rh-cp-meta-text">Free · No registration</span>
          <span class="rh-cp-meta-dot">·</span>
          <span class="rh-cp-meta-text">1 min</span>
          <span class="rh-cp-meta-dot">·</span>
          <span class="rh-cp-meta-badge"
            >3 named studies · live recalculation</span
          >
        </div>
        <div class="rh-cp-divider"><span></span><span></span><span></span></div>
      </div>
    </section>
    <CalculatorReviewImpactRevenue />
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
        <h2 class="rh-cp-h2">What This Calculator Does, and Why It Exists</h2>
        <span class="rh-cp-p"
          >Most people asking "how reviews affect revenue" get either a vague
          shrug or a confident-sounding number nobody can actually back up. This
          tool skips both. Plug in your average order value, how many new
          customers you bring in a month, your current rating, and your review
          count, and it shows you a real online review impact on sales — not a
          guess, but a calculation built on a handful of studies that actually
          measured the thing instead of just asserting it.</span
        >
        <span class="rh-cp-p"
          >Here's the part most people get wrong: a perfect 5.0 isn't always the
          goal. Research keeps finding that ratings somewhere in the 4.0 to 4.7
          range convert just as well, sometimes better, than a flawless score —
          buyers get suspicious of too-perfect numbers. So this negative reviews
          business impact calculator doesn't just tell you to chase five stars;
          it shows you where you actually sit on that curve, and what closing
          the real gap would be worth in your own numbers, not an industry
          average that has nothing to do with your business.</span
        >
        <div class="rh-cp-how-grid">
          <div class="rh-cp-how-card">
            <span class="rh-cp-how-card-num">01</span>
            <span class="rh-cp-how-card-title"
              >Built on your real numbers, not an average</span
            >
            <span class="rh-cp-how-card-text"
              >Average order value and monthly customer count come from you, so
              the dollar figures that come out are sized to your actual
              business, not some generic industry benchmark.</span
            >
          </div>
          <div class="rh-cp-how-card">
            <span class="rh-cp-how-card-num">02</span>
            <span class="rh-cp-how-card-title"
              >The 4.0–4.7 sweet spot, not blind perfectionism</span
            >
            <span class="rh-cp-how-card-text"
              >Chasing a perfect 5.0 can actually backfire — research on
              purchase behavior shows conversion plateaus and can even dip
              slightly above 4.7, since flawless scores read as less
              authentic.</span
            >
          </div>
          <div class="rh-cp-how-card">
            <span class="rh-cp-how-card-num">03</span>
            <span class="rh-cp-how-card-title"
              >Review count matters as much as the score itself</span
            >
            <span class="rh-cp-how-card-text"
              >Going from zero reviews to even a handful moves purchase
              likelihood more than almost anything else you could do — this
              calculator weighs that volume effect alongside the rating
              itself.</span
            >
          </div>
          <div class="rh-cp-how-card">
            <span class="rh-cp-how-card-num">04</span>
            <span class="rh-cp-how-card-title"
              >A clear number for what negatives are costing you</span
            >
            <span class="rh-cp-how-card-text"
              >Rather than treating negative reviews as just an annoyance, the
              result puts a yearly figure on what they're likely pulling out of
              your revenue right now.</span
            >
          </div>
        </div>
      </div>
    </section>
    <section class="rh-cp-src">
      <div class="rh-cp-src-wrap">
        <h2 class="rh-cp-h2-light">What This Calculator Is Based On</h2>
        <span class="rh-cp-p-light"
          >Three named studies drive every number here. None of them are about
          your specific business, so treat the output as a real, research-backed
          estimate — not an exact forecast.</span
        >
        <div class="rh-cp-src-rows">
          <div class="rh-cp-src-row">
            <div>
              <span class="rh-cp-src-figure">5–9%</span>
              <span class="rh-cp-src-figure-sub">revenue per star</span>
            </div>
            <div>
              <span class="rh-cp-src-title"
                >A one-star increase moves revenue 5 to 9%</span
              >
              <span class="rh-cp-src-text"
                >Using a regression-discontinuity design on nine years of
                Seattle restaurant data, this isolated the causal effect of
                crossing Yelp's rounding thresholds — the effect held for
                independent restaurants only, with no measurable impact on
                chains.</span
              >
              <span class="rh-cp-src-link"
                >Source:
                <a
                  href="https://www.hbs.edu/faculty/Pages/item.aspx?num=41233"
                  target="_blank"
                  rel="nofollow noopener"
                  >M. Luca, Harvard Business School, Reviews, Reputation, and
                  Revenue</a
                ></span
              >
            </div>
          </div>
          <div class="rh-cp-src-row">
            <div>
              <span class="rh-cp-src-figure">4.0–4.7</span>
              <span class="rh-cp-src-figure-sub">peak conversion range</span>
            </div>
            <div>
              <span class="rh-cp-src-title"
                >Purchase likelihood peaks before a perfect 5.0</span
              >
              <span class="rh-cp-src-text"
                >Tracking page views and sales as 13,500+ products accumulated
                reviews over a year, this found conversion plateaus in the
                4.0–4.7 range and softens slightly as ratings approach 5.0 — a
                flawless score reads as less authentic to buyers.</span
              >
              <span class="rh-cp-src-link"
                >Source:
                <a
                  href="https://spiegel.medill.northwestern.edu/how-online-reviews-influence-sales/"
                  target="_blank"
                  rel="nofollow noopener"
                  >Northwestern University, Spiegel Research Center</a
                ></span
              >
            </div>
          </div>
          <div class="rh-cp-src-row">
            <div>
              <span class="rh-cp-src-figure">270%</span>
              <span class="rh-cp-src-figure-sub">at 5 reviews vs. zero</span>
            </div>
            <div>
              <span class="rh-cp-src-title"
                >Going from zero reviews to a handful moves the needle
                most</span
              >
              <span class="rh-cp-src-text"
                >The same Spiegel dataset found purchase likelihood with five
                reviews running 270% higher than with none at all, with the
                biggest jump happening right at the very first review and
                tapering off after that.</span
              >
              <span class="rh-cp-src-link"
                >Source:
                <a
                  href="https://spiegel.medill.northwestern.edu/how-online-reviews-influence-sales/"
                  target="_blank"
                  rel="nofollow noopener"
                  >Northwestern University, Spiegel Research Center</a
                ></span
              >
            </div>
          </div>
          <div class="rh-cp-src-row">
            <div>
              <span class="rh-cp-src-figure">+25%</span>
              <span class="rh-cp-src-figure-sub">per 0.1-star gain</span>
            </div>
            <div>
              <span class="rh-cp-src-title"
                >Even tiny rating gains move conversion sharply</span
              >
              <span class="rh-cp-src-text"
                >Analyzing Google Business Profiles for 64,000 locations across
                four countries, this found a 0.1-star rating increase could lift
                conversion by up to 25%, with the 3.5-to-3.7 jump producing the
                single largest gain of any range tested.</span
              >
              <span class="rh-cp-src-link"
                >Source:
                <a
                  href="https://uberall.com/en-us/company/press-releases/study-brick-and-mortar-businesses-small-increase-in-online-ratings-boosts-conversion-by-25-percent"
                  target="_blank"
                  rel="nofollow noopener"
                  >Uberall, Reputation Management Revolution Report</a
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
              Why isn't a 5.0 rating the best possible outcome?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >Research from Northwestern's Spiegel Research Center found that
              purchase likelihood actually plateaus in the 4.0–4.7 range and
              softens slightly as ratings climb toward a perfect 5.0. Buyers
              have learned that flawless scores often mean too few reviews,
              curated feedback, or something that doesn't feel authentic. A 4.3
              with a few honest 3-star reviews mixed in can convert better than
              a spotless 5.0.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              How does the calculator turn my rating into a revenue number?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >It applies a conversion curve built from the studies in the
              sources section — flat across the 4.0–4.7 sweet spot, with a
              steeper penalty the further below 4.0 you sit, especially around
              the 3.5-to-3.7 range where Uberall found the single largest
              conversion jump of any rating range. That multiplier gets applied
              to your actual average order value and customer volume.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              Does the number of reviews matter as much as the star rating?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >Close to it, especially early on. The same Spiegel research found
              that purchase likelihood with five reviews ran 270% higher than
              with zero — the jump from having no social proof at all to having
              a handful of reviews moves the needle more than almost any other
              single change. After that, the effect of adding more reviews
              tapers off.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              How is the cost of negative reviews actually calculated?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >None of the three source studies measured "percent negative
              reviews" directly — they measured the effect of the rating itself
              and the review count. So this figure works backward: it estimates
              how much your visible rating is likely being pulled down by your
              current share of negative reviews, then runs that hypothetical
              higher rating back through the same conversion curve. It's a
              reasoned estimate built on real research, not a number lifted
              directly from a study.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              Does this apply to any type of business, or just restaurants?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >The Harvard/Yelp study was restaurant-specific and found the
              effect held for independent restaurants but not chains. The
              Spiegel and Uberall research covered a much broader mix of retail
              and brick-and-mortar categories, so the rating-curve and
              review-count effects generalize more widely — but if you're
              running an independent, locally-known business, the underlying
              pattern is likely to be even stronger for you specifically.</span
            >
          </details>
          <details class="rh-cp-faq-item">
            <summary class="rh-cp-faq-q">
              What should I actually do with this number?
            </summary>
            <span class="rh-cp-faq-a" style="display: block"
              >Use it as a planning estimate, not a guarantee. If the gap
              between your current revenue and your 4.5-star projection is
              large, that's a signal that review management is worth real
              budget, not just an occasional reply to an angry customer. If the
              gap is small, your time is probably better spent elsewhere.</span
            >
          </details>
        </div>
      </div>
    </section>
    <section class="rh-cp-cross">
      <div class="rh-cp-cross-wrap">
        <h2 class="rh-cp-h2">Reviews Are One Piece of the Picture</h2>
        <div class="rh-cp-cross-grid">
          <div class="rh-cp-cross-card a">
            <span class="rh-cp-cross-eyebrow"
              >Free tool · Reputation Risk Score</span
            >
            <span class="rh-cp-cross-bignum">6/20</span>
            <span class="rh-cp-cross-title"
              >Reviews are one of six surfaces — see the rest</span
            >
            <span class="rh-cp-cross-text"
              >Search, AI platforms, media, compliance, and crisis readiness all
              shape reputation alongside reviews. This free scan checks all six
              surfaces and twenty signals at once.</span
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
          <div class="rh-cp-cross-card b">
            <span class="rh-cp-cross-eyebrow"
              >Free tool · Damage Cost Estimator</span
            >
            <span class="rh-cp-cross-bignum">$</span>
            <span class="rh-cp-cross-title"
              >What a bigger incident would cost you</span
            >
            <span class="rh-cp-cross-text"
              >This page covers steady, ongoing review damage. If you're dealing
              with something more acute — a leak, a scandal, a coordinated
              attack — this estimator puts a dollar range on that instead.</span
            >
            <div class="rh-cp-cross-btn-row">
              <a
                href="/calculator/reputation-damage-cost"
                target="_blank"
                rel="noopener"
                class="rh-cp-cross-btn"
                >Estimate the cost →</a
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

.rh-ri {
  width: 100%;
  background: #f7f7f7;
}
.rh-ri-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px;
}
.rh-ri-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: start;
}

/* LEFT: FORM */
.rh-ri-form {
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
}
.rh-ri-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 6px 0;
}
.rh-ri-title {
  font-size: 19px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin-bottom: 8px;
}
.rh-ri-sub {
  font-size: 12.5px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-bottom: 28px;
  line-height: 1.55;
}

.rh-ri-q {
  margin: 0 0 24px 0;
}
.rh-ri-q:last-of-type {
  margin-bottom: 10px;
}
.rh-ri-q-text {
  font-size: 13px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin: 0 0 10px 0;
}

.rh-ri-input-row {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 4px 16px;
}
.rh-ri-input-row input[type="number"] {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 16px;
  font-weight: 700;
  color: #262626;
  padding: 12px 0;
  outline: none;
  font-family: inherit;
}
.rh-ri-input-suffix {
  font-size: 12px;
  font-weight: 600;
  color: #a0a0a0;
  white-space: nowrap;
}

.rh-ri-slider-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 8px;
}
.rh-ri-slider-val {
  font-size: 22px;
  font-weight: 700;
  color: #262626;
}
.rh-ri-slider-hint {
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
.rh-ri-slider-marks {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
}
.rh-ri-slider-marks span {
  font-size: 10px;
  font-weight: 600;
  color: #c2c2c2;
}

.rh-ri-btn-calc {
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
.rh-ri-btn-calc:hover {
  background: #464646;
}

/* RIGHT: RESULT */
.rh-ri-result {
  background: #262626;
  border-radius: 20px;
  padding: 40px;
  position: sticky;
  top: 24px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
}

.rh-ri-result-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
}
.rh-ri-result-empty-icon {
  font-size: 28px;
  opacity: 0.4;
}
.rh-ri-result-empty-text {
  font-size: 12px;
  font-weight: 600;
  color: #808080;
  max-width: 230px;
  line-height: 1.6;
}

.rh-ri-result-filled {
  display: none;
  flex-direction: column;
  height: 100%;
}
.rh-ri-result-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 4px 0;
}
.rh-ri-result-headline {
  font-size: 14px;
  font-weight: 600;
  color: #f7f7f7;
  display: block;
  margin-bottom: 22px;
  line-height: 1.4;
}

.rh-ri-current-box {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  padding: 22px;
  margin-bottom: 16px;
}
.rh-ri-current-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f7f7f7;
  display: block;
  margin-bottom: 8px;
}
.rh-ri-current-num {
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
}
.rh-ri-current-sub {
  font-size: 11px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-top: 6px;
}

.rh-ri-compare-rows {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}
.rh-ri-compare-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 14px 18px;
}
.rh-ri-compare-row.highlight {
  background: rgba(191, 216, 179, 0.1);
  border: 1px solid rgba(191, 216, 179, 0.2);
}
.rh-ri-compare-label {
  font-size: 12.5px;
  font-weight: 700;
  color: #f7f7f7;
}
.rh-ri-compare-label-sub {
  font-size: 10.5px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-top: 2px;
}
.rh-ri-compare-val {
  font-size: 15px;
  font-weight: 700;
  color: #99ad8f;
  text-align: right;
}

.rh-ri-loss-box {
  background: rgba(203, 129, 125, 0.1);
  border: 1px solid rgba(203, 129, 125, 0.22);
  border-radius: 14px;
  padding: 18px 20px;
  margin-bottom: 18px;
}
.rh-ri-loss-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #cb817d;
  display: block;
  margin-bottom: 8px;
}
.rh-ri-loss-num {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
}
.rh-ri-loss-sub {
  font-size: 11.5px;
  font-weight: 600;
  color: #a3a3a3;
  display: block;
  margin-top: 8px;
  line-height: 1.55;
}

.rh-ri-sources {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.rh-ri-sources-toggle {
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  user-select: none;
}
.rh-ri-sources-toggle:hover {
  color: #808080;
}
.rh-ri-sources-list {
  display: none;
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  line-height: 1.85;
  margin-top: 8px;
}
.rh-ri-sources-list.open {
  display: block;
}

@media (max-width: 860px) {
  .rh-ri-wrap {
    padding: 32px 20px;
  }
  .rh-ri-inner {
    grid-template-columns: 1fr;
  }
  .rh-ri-result {
    position: static;
    min-height: auto;
  }
  .rh-ri-form {
    padding: 28px 22px;
  }
}
@media (max-width: 960px) {
  .rh-ri-wrap {
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
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.rh-cp-cross-card {
  border-radius: 20px;
  padding: 36px 38px;
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

.rh-cp-cross-bignum {
  font-size: 36px;
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

.rh-cp-cross-title {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.35;
  display: block;
  margin: 0 0 12px 0;
}
.a .rh-cp-cross-title {
  color: #ffffff;
}
.b .rh-cp-cross-title {
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

.rh-cp-cross-btn-row {
  margin-top: 22px;
}
.rh-cp-cross-btn {
  display: inline-flex !important;
  align-items: center;
  gap: 8px;
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
.a .rh-cp-cross-btn {
  background: #bfd8b3 !important;
  color: #1a2417 !important;
}
.a .rh-cp-cross-btn:hover,
.a .rh-cp-cross-btn:visited,
.a .rh-cp-cross-btn:active {
  background: #99ad8f !important;
  color: #1a2417 !important;
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
