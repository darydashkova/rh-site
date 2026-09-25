<script setup lang="ts">
import cases from "~/data/cases.json";
</script>

<template>
  <section id="case-studies" class="section container">
    <SectionHeading
      eyebrow="Our clients case studies"
      title="Your privacy is valuable, that's why we do not disclose any data publicly. Anyway some of our clients agreed to share their results"
    />
    <aside class="confidentiality">
      <h3>
        <img
          src="/images/lock-01.svg"
          alt=""
          width="25"
          height="25"
          loading="lazy"
        />NDA from the very first contact
      </h3>
      <p>
        We don't disclose that a client works with us, whether in proposals,
        case studies, or press. Protecting your reputation includes protecting
        the fact that you sought protection at all: not as a courtesy, but as
        the foundation on which every engagement is built.
      </p>
    </aside>
    <div class="case-grid">
      <article v-for="item in cases" :key="item.title" class="case-card">
        <header>
          <h3>{{ item.title }}</h3>
          <p>{{ item.region }}</p>
        </header>
        <div class="case-card__before">
          <h4>Before</h4>
          <p>{{ item.before }}</p>
        </div>
        <div class="case-card__after">
          <h4>After</h4>
          <strong>{{ item.result }}</strong>
          <p>{{ item.after }}</p>
        </div>
        <div class="case-card__tags">
          <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>
        <SiteLink v-if="item.href" class="text-link" :href="item.href"
          >Full case study ↗</SiteLink
        >
      </article>
    </div>
    <div class="button-row section-actions">
      <ActionButton href="https://reputation.house/cases-hub" variant="outline"
        >All Client Cases</ActionButton
      >
      <ActionButton>Get a Case Selection for Your Industry</ActionButton>
    </div>
  </section>
</template>

<style scoped>
.confidentiality {
  margin: 40px 0 60px;
  padding: 24px;
  background: var(--ink);
  color: white;
  border-radius: 18px;
}
.confidentiality h3 {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 20px;
  margin-bottom: 16px;
  font-weight: 500;
}
.confidentiality img {
  flex-shrink: 0;
}
.confidentiality p {
  font-size: 16px;
  line-height: 1.6;
}
.case-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.case-card {
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.case-card header {
  padding: 4px 4px 6px;
}
.case-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
}
.case-card header p {
  font-size: 14px;
}
.case-card__before,
.case-card__after {
  padding: 20px 16px;
  border-radius: 18px;
}
.case-card__before {
  background: #f7eaea;
  min-height: 232px;
}
.case-card__after {
  background: var(--pale);
  flex: 1;
}
.case-card h4 {
  font-size: 16px;
  margin-bottom: 14px;
}
.case-card p {
  font-size: 16px;
  line-height: 1.5;
}
.case-card__after strong {
  display: block;
  color: var(--green);
  font-size: 44px;
  line-height: 1.3;
  font-style: italic;
  margin-bottom: 14px;
}
.case-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.case-card__tags span {
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 12px;
}
@media (max-width: 900px) {
  .confidentiality {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .case-grid {
    grid-template-columns: 1fr;
  }
  .case-card__before {
    min-height: auto;
  }
}
</style>
