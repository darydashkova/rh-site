<script setup lang="ts">
import risks from "~/data/risks.json";
</script>

<template>
  <section id="risk-examples" class="section section--muted">
    <div class="container">
      <SectionHeading
        eyebrow="Why it matters"
        title="What Happens When the Digital Profile isn't Managed"
      />
    </div>
    <ContentCarousel
      label="Digital reputation risks"
      :columns="2"
      class="risk-carousel"
      bleed
      :card-width="560"
    >
      <article v-for="risk in risks" :key="risk.title" class="risk-card">
        <header>
          <img
            :src="risk.image"
            :alt="risk.title"
            width="100"
            height="100"
            loading="lazy"
          />
          <div>
            <h3>{{ risk.title }}</h3>
            <p>{{ risk.subtitle }}</p>
          </div>
        </header>
        <p>{{ risk.description }}</p>
        <p class="eyebrow">{{ risk.label }}</p>
        <p>{{ risk.explanation }}</p>
      </article>
    </ContentCarousel>
    <div class="container section-actions">
      <ActionButton href="https://reputation.house/cases-hub" variant="outline"
        >Anti-cases: Risks without protection</ActionButton
      >
    </div>
  </section>
</template>

<style scoped>
#risk-examples :deep(.section-heading h2) {
  max-width: 704px;
}
.risk-carousel {
  margin-top: 60px;
}
.risk-carousel :deep(.carousel__track) {
  gap: 24px;
}
.risk-card {
  padding: 40px;
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 24px;
}
.risk-card header {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 36px;
}
.risk-card header img {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 50%;
  background: white;
}
.risk-card h3 {
  font-size: 24px;
  font-weight: 600;
}
.risk-card header p {
  font-size: 14px;
  color: #66403f;
  margin-top: 6px;
}
.risk-card > p {
  font-size: 18px;
  line-height: 1.45;
}
.risk-card > .eyebrow {
  font-size: 14px;
  margin-top: 28px;
  margin-bottom: 8px;
  color: var(--muted);
  font-weight: 700;
  letter-spacing: 0;
}
.risk-card > p:last-child {
  font-size: 16px;
}
@media (max-width: 600px) {
  .risk-card {
    padding: 22px;
  }
  .risk-card > p {
    font-size: 16px;
  }
  .risk-card header {
    gap: 14px;
  }
  .risk-card header img {
    width: 70px;
    height: 70px;
  }
  .risk-card h3 {
    font-size: 20px;
  }
}
</style>
