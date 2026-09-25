<script setup lang="ts">
import content from "~/data/pricing.json";
import "./reputation-management-pricing.css";

const priceRange = "$5,000 to $100,000+ a month";
const [descriptionBefore, descriptionAfter] =
  content.description.split(priceRange);

useSeoMeta({
  title: "Reputation Management Pricing & Cost (2026) | Reputation House",
  description:
    "Reputation House pricing: payment models, agreed KPIs, and the full menu by solution.",
});
</script>

<template>
  <main id="main-content" class="pricing-page">
    <section class="pricing-hero">
      <div class="container">
        <p class="pricing-hero__eyebrow">{{ content.eyebrow }}</p>
        <h1>{{ content.title }}</h1>
        <p class="pricing-hero__description">
          {{ descriptionBefore }}<strong>{{ priceRange }}</strong
          >{{ descriptionAfter }}
        </p>

        <div class="pricing-hero__actions">
          <ActionButton>Book a consultation</ActionButton>
          <a href="#payment">See how these numbers are actually built</a>
        </div>
        <div class="price-overview">
          <SiteLink
            v-for="item in content.summary"
            :key="item.id"
            :href="
              item.id === 'risk-check'
                ? 'https://checkmyrisks.com/'
                : `#${item.id}`
            "
            class="price-overview__card"
          >
            <h2>{{ item.name }}</h2>
            <p class="price-overview__price">{{ item.price }}</p>
            <span class="price-overview__unit">{{ item.unit }}</span>
            <p class="price-overview__description">{{ item.description }}</p>
          </SiteLink>
        </div>
      </div>
    </section>

    <section id="payment" class="pricing-band pricing-band--white">
      <div class="container">
        <header class="pricing-heading">
          <p class="pricing-heading__label">{{ content.paymentIntro[0] }}</p>
          <h2>{{ content.paymentIntro[1] }}</h2>
          <p class="pricing-heading__description">
            {{ content.paymentIntro[2] }}
          </p>
        </header>
        <div class="payment-models">
          <article
            v-for="model in content.paymentModels"
            :key="model.title"
            class="payment-model"
          >
            <span>{{ model.label }}</span>
            <h3>{{ model.title }}</h3>
            <p>{{ model.description }}</p>
            <p class="payment-model__usage">{{ model.usage }}</p>
          </article>
        </div>
        <aside class="dark-note">
          <span class="dark-note__icon" aria-hidden="true">⌁</span>
          <div>
            <h3>{{ content.continuous[0] }}</h3>
            <p>{{ content.continuous[1] }}</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="pricing-band pricing-band--gray">
      <div class="container">
        <header class="pricing-heading">
          <p class="pricing-heading__label">{{ content.stepsIntro[0] }}</p>
          <h2>{{ content.stepsIntro[1] }}</h2>
          <p class="pricing-heading__lead">{{ content.stepsIntro[2] }}</p>
        </header>
        <ol class="pricing-steps">
          <li v-for="step in content.steps" :key="step.number">
            <span>{{ step.number }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </li>
        </ol>
        <div class="pricing-timelines">
          <article v-for="timeline in content.timelines" :key="timeline.label">
            <span>{{ timeline.label }}</span>
            <h3>{{ timeline.title }}</h3>
            <p>{{ timeline.description }}</p>
          </article>
        </div>
        <p class="pricing-timelines__note">{{ content.timelineNote }}</p>
      </div>
    </section>

    <section class="pricing-band pricing-band--white">
      <div class="container">
        <header class="pricing-heading pricing-heading--proposal">
          <p class="pricing-heading__label">{{ content.proposal.label }}</p>
          <h2>{{ content.proposal.title }}</h2>
          <p class="pricing-heading__description">
            {{ content.proposal.description }}
          </p>
        </header>
        <div class="proposal-metrics">
          <article
            v-for="metric in content.proposal.metrics"
            :key="metric.title"
          >
            <h3>{{ metric.title }}</h3>
            <p>{{ metric.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section
      v-for="(program, index) in content.programs"
      :id="program.id"
      :key="program.id"
      class="pricing-band pricing-program"
      :class="index % 2 === 0 ? 'pricing-band--gray' : 'pricing-band--white'"
    >
      <div class="container">
        <p class="pricing-program__label">{{ program.name }}</p>
        <div class="pricing-program__layout">
          <div class="pricing-program__story">
            <h2>{{ program.title }}</h2>
            <p>{{ program.description }}</p>
            <ul
              :class="{
                'pricing-program__features--red': program.id === 'defence',
              }"
            >
              <li v-for="feature in program.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>

          <article
            class="pillar-card"
            :class="{ 'pillar-card--crisis': program.id === 'defence' }"
          >
            <header>
              <span>{{ program.product }}</span>
              <strong>PILLAR SOLUTION</strong>
            </header>
            <div class="pillar-card__body">
              <p>{{ program.productDescription }}</p>
              <div class="pillar-card__kpi">
                <h3>How the KPI is set</h3>
                <p>{{ program.kpi }}</p>
              </div>
              <div class="pillar-card__price">
                <span>{{ program.price }}{{ program.unit }}</span>
                <span>{{ program.billing }}</span>
              </div>
              <ActionButton>Book a consultation</ActionButton>
            </div>
          </article>
        </div>
        <div class="related-prices">
          <h3>Also priced under {{ program.name }}</h3>
          <div class="related-prices__list">
            <article v-for="item in program.related" :key="item.title">
              <div>
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
              <div class="related-prices__cost">
                <span>{{ item.billing }}</span>
                <strong>{{ item.price }}</strong>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="pricing-band pricing-band--gray market-section">
      <div class="container">
        <header class="pricing-heading">
          <p class="pricing-heading__label">{{ content.marketIntro[0] }}</p>
          <h2>{{ content.marketIntro[1] }}</h2>
          <p class="pricing-heading__lead">{{ content.marketIntro[2] }}</p>
        </header>
        <div class="market-cases">
          <article v-for="item in content.marketCases" :key="item.title">
            <div class="market-cases__brand">
              <span
                v-if="item.title === 'KPMG Australia'"
                class="market-cases__mark"
                >KPMG</span
              >
              <span v-else class="market-cases__marks">
                <span class="market-cases__mark">A</span>
                <span class="market-cases__mark">intuit</span>
                <span class="market-cases__mark">WIX</span>
              </span>
              <div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.label }}</p>
              </div>
            </div>
            <p>{{ item.description }}</p>
            <strong>Sources:</strong>
            <p>{{ item.source }}</p>
          </article>
        </div>
        <div class="market-conclusion">
          <p v-for="paragraph in content.marketConclusion" :key="paragraph">
            {{ paragraph }}
          </p>
          <SiteLink href="https://reputation.house/cases-hub"
            >Public reputation crisis cases</SiteLink
          >
        </div>
      </div>
    </section>

    <section class="pricing-band pricing-band--white results-section">
      <div class="container">
        <header class="pricing-heading">
          <p class="pricing-heading__label">{{ content.resultsIntro[2] }}</p>
          <h2>{{ content.resultsIntro[3] }}</h2>
          <p class="pricing-heading__lead">{{ content.resultsIntro[4] }}</p>
        </header>
        <aside class="dark-note dark-note--nda">
          <span class="dark-note__icon" aria-hidden="true">♙</span>
          <div>
            <h3>{{ content.resultsIntro[0] }}</h3>
            <p>{{ content.resultsIntro[1] }}</p>
          </div>
        </aside>
        <div class="pricing-results">
          <article v-for="item in content.cases" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.region }}</p>
            <div class="result-before">
              <h4>Before</h4>
              <p>{{ item.before }}</p>
            </div>
            <div class="result-after">
              <h4>After</h4>
              <strong>{{ item.result }}</strong>
              <p>{{ item.after }}</p>
            </div>
            <div class="result-tags">
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
        </div>
        <SiteLink
          class="pricing-results__link"
          href="https://reputation.house/cases-hub"
          >All client cases</SiteLink
        >
      </div>
    </section>

    <section class="pricing-band pricing-band--white pricing-faq">
      <div class="container">
        <header class="pricing-heading">
          <p class="pricing-heading__label">Questions</p>
          <h2>Reputation Management Pricing FAQ</h2>
        </header>
        <QuestionList :questions="content.faq" />
      </div>
    </section>
  </main>
</template>
