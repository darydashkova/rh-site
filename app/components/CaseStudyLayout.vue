<script setup lang="ts">
defineProps<{
  study: {
    title: string;
    description: string;
    image: string;
    meta: string[];
    breadcrumb: string;
    services: { title: string; text: string; icon: string }[];
    results: { value: string; label: string }[];
  };
  slug: string;
  filters?: boolean;
}>();
</script>
<template>
  <main class="case-study">
    <header
      class="case-hero"
      :style="{
        backgroundImage: `linear-gradient(#28292d80, #28292d80), url(${study.image})`,
      }"
    >
      <div class="case-container">
        <h1>{{ study.title }}</h1>
        <div class="case-hero__intro">
          <slot name="intro">{{ study.description }}</slot>
        </div>
        <ul class="case-hero__meta">
          <li v-for="item in study.meta" :key="item">
            <template v-if="item.includes(':')"
              >{{ item.slice(0, item.indexOf(":") + 1) }}<br />{{
                item.slice(item.indexOf(":") + 1).trim()
              }}</template
            >
            <template v-else>{{ item }}</template>
          </li>
        </ul>
      </div>
    </header>
    <nav class="case-container case-breadcrumb" aria-label="Breadcrumb">
      <SiteLink href="/">Reputation.house</SiteLink><span>/</span
      ><SiteLink href="/case-studies">Cases</SiteLink><span>/</span
      ><span>{{ study.breadcrumb || study.title }}</span>
    </nav>
    <div class="case-container">
      <section class="case-challenge"><slot name="challenge" /></section>
      <section class="case-services">
        <h2>What we did</h2>
        <div class="case-services__grid">
          <article v-for="service in study.services" :key="service.title">
            <h3>{{ service.title }}</h3>
            <p>{{ service.text }}</p>
            <img
              :src="service.icon"
              alt=""
              width="100"
              height="100"
              loading="lazy"
            />
          </article>
        </div>
      </section>
      <section class="case-results">
        <h2>Key Results</h2>
        <dl>
          <div v-for="result in study.results" :key="result.label">
            <dt>{{ result.value }}</dt>
            <dd>{{ result.label }}</dd>
          </div>
        </dl>
      </section>
      <article class="case-article"><slot name="audit" /></article>
      <div class="case-cta-wrap"><slot name="cta" /></div>
      <article class="case-article case-article--story">
        <slot name="story" />
      </article>
    </div>
    <CaseRelatedStories :filters="filters" />
    <CaseStudyEnquiry />
  </main>
</template>
<style>
.case-study {
  padding-top: 72px;
  background: #fff;
  color: #28292d;
}
.case-container {
  max-width: 1160px;
  width: calc(100% - 48px);
  margin-inline: auto;
}
@media (min-width: 1240px) {
  .case-container {
    position: relative;
    left: 20px;
  }
}
.case-hero {
  padding: 170px 0 100px;
  background-color: #797979;
  background-size: cover;
  background-position: center;
  color: white;
}
.case-hero h1 {
  max-width: 760px;
  font-size: 42px;
  line-height: 1.15;
  font-weight: 700;
  margin: 0 0 24px;
}
.case-hero__intro {
  max-width: 760px;
  font-size: 20px;
  line-height: 1.55;
  font-weight: 400;
}
.case-hero__meta {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin: 80px 0 0;
  padding: 0;
  list-style: none;
}
.case-hero__meta li {
  border-top: 1px solid #ddd;
  padding-top: 14px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
}
.case-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding-block: 32px;
  font-size: 14px;
  color: #858585;
}
.case-breadcrumb a {
  text-decoration: none;
  color: inherit;
}
.case-challenge {
  margin: 80px 0 150px;
  padding: 70px;
  border-radius: 8px;
  background: #efefef;
}
.case-challenge h2 {
  color: #ff202b;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 20px;
}
.case-challenge p {
  max-width: 760px;
  font-size: 16px;
  line-height: 1.55;
  color: #999;
  margin: 22px 0 0;
}
.case-challenge p.case-challenge-lead {
  font-size: 20px;
  color: #777;
}
.case-services > h2,
.case-results > h2 {
  font-size: 42px;
  line-height: 1.2;
  font-weight: 400;
  margin: 0 0 60px;
}
.case-services__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}
.case-services__grid article {
  min-height: 465px;
  display: flex;
  flex-direction: column;
  padding: 26px 24px;
  border: 1px solid #eee;
  border-radius: 8px;
}
.case-services__grid article:nth-child(odd) {
  background: #efefef;
}
.case-services__grid h3 {
  font-size: 18px;
  line-height: 1.25;
  margin: 0 0 10px;
  font-weight: 600;
  color: #000;
}
.case-services__grid p {
  font-size: 16px;
  line-height: 1.45;
  color: #999;
  margin: 0 0 35px;
}
.case-services__grid img {
  margin-top: auto;
  max-width: 100%;
  object-fit: contain;
}
.case-results {
  padding: 180px 0 0;
}
.case-results dl {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 60px;
  row-gap: 65px;
  margin: 0;
}
.case-results dt {
  font-size: 32px;
  font-weight: 600;
  padding-bottom: 28px;
  border-bottom: 1px solid #eee;
}
.case-results dd {
  font-size: 18px;
  color: #999;
  line-height: 1.55;
  margin: 24px 0 0;
}
.case-article {
  width: 560px;
  max-width: 100%;
  margin: 140px 0 0 200px;
  color: #777;
  font-size: 16px;
  line-height: 1.7;
  overflow-wrap: break-word;
}
.case-article h2,
.case-article h3 {
  font-size: 32px;
  font-weight: 400;
  line-height: 1.25;
  color: #555;
  margin: 32px 0 20px;
}
.case-article h2:first-child,
.case-article h3:first-child {
  margin-top: 0;
}
.case-article h4 {
  font-size: 20px;
  margin: 24px 0 12px;
}
.case-prose {
  margin: 0 0 24px;
}
.case-article strong {
  font-weight: 600;
  color: #555;
}
.case-article ol,
.case-article ul {
  padding-left: 24px;
  margin: 18px 0;
}
.case-article a {
  color: #64745c;
  text-decoration: underline;
}
.case-callout {
  position: relative;
  background: #ebebeb;
  color: #28292d;
  padding: 30px 24px 30px 55px;
  margin: 36px 0;
  font-size: 16px;
  line-height: 1.55;
}
.case-callout::before {
  content: "i";
  position: absolute;
  left: 20px;
  top: 30px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  color: white;
  background: #28292d;
  font-weight: 700;
}
.case-callout strong {
  color: #28292d;
}
.case-article blockquote {
  margin: 24px 0;
  padding-left: 20px;
  border-left: 3px solid #aaa;
}
.case-article hr {
  height: 1px;
  background: #ddd;
  border: 0;
  margin: 30px 0;
}
.case-article figure {
  margin: 28px 0;
}
.case-article img {
  display: block;
  width: 100%;
  height: auto;
}
.case-table-scroll {
  max-width: 100%;
  overflow: auto;
  margin: 32px 0;
}
.case-table-scroll table {
  border-collapse: collapse;
  width: 100%;
  min-width: 620px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  text-align: left;
}
.case-table-scroll th {
  background: #333;
  color: white;
  font-weight: 400;
}
.case-table-scroll td,
.case-table-scroll th {
  border: 1px solid #ddd;
  padding: 8px 10px;
  vertical-align: top;
}
.case-cta-wrap {
  margin: 90px 0 70px;
}
.case-article--story {
  margin-top: 0;
  margin-bottom: 110px;
}
.case-stat-grid,
.case-result-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 24px 0;
}
.case-stat,
.case-result {
  background: #f2f1ee;
  border-top: 4px solid #e84a2f;
  border-radius: 0 0 10px 10px;
  padding: 18px 16px 20px;
  color: #262626;
}
.case-stat__label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #8a8a85;
  line-height: 1.4;
  margin-bottom: 14px;
}
.case-stat__value {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
}
.case-result {
  padding: 26px 16px;
  text-align: center;
}
.case-result__value {
  font-size: 38px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 12px;
}
.case-result__label {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
  line-height: 1.4;
}
.case-result__sub {
  font-size: 12px;
  color: #8a8a85;
  line-height: 1.4;
}
@media (max-width: 1199px) {
  .case-article {
    margin-left: auto;
    margin-right: auto;
  }
  .case-services__grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .case-services__grid article {
    min-height: 340px;
  }
  .case-services__grid article:nth-child(odd) {
    background: #efefef;
  }
}
@media (max-width: 760px) {
  .case-container {
    width: calc(100% - 40px);
  }
  .case-hero {
    padding: 80px 0 55px;
  }
  .case-hero h1 {
    font-size: 30px;
  }
  .case-hero__intro {
    font-size: 17px;
  }
  .case-hero__meta {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 45px;
  }
  .case-hero__meta li {
    font-size: 13px;
  }
  .case-breadcrumb {
    font-size: 12px;
    gap: 10px;
  }
  .case-challenge {
    margin: 35px 0 65px;
    padding: 28px;
  }
  .case-challenge p.case-challenge-lead {
    font-size: 18px;
  }
  .case-services > h2,
  .case-results > h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }
  .case-services__grid {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .case-services__grid article {
    padding: 20px 16px;
    min-height: 360px;
  }
  .case-services__grid h3 {
    font-size: 16px;
  }
  .case-services__grid p {
    font-size: 14px;
  }
  .case-services__grid img {
    width: 75px;
    height: 75px;
  }
  .case-results {
    padding-top: 65px;
  }
  .case-results dl {
    grid-template-columns: 1fr 1fr;
    gap: 32px 22px;
  }
  .case-results dt {
    font-size: 24px;
    padding-bottom: 18px;
  }
  .case-results dd {
    font-size: 14px;
    margin-top: 16px;
  }
  .case-article {
    margin-top: 80px;
  }
  .case-article h2,
  .case-article h3 {
    font-size: 28px;
  }
  .case-cta-wrap {
    margin: 50px 0;
  }
  .case-article--story {
    margin-top: 0;
    margin-bottom: 65px;
  }
  .case-stat-grid,
  .case-result-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .case-result__value {
    font-size: 30px;
  }
}
</style>
