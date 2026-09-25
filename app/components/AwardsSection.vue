<script setup lang="ts">
import awards from "~/data/awards.json";
</script>

<template>
  <section id="awards" class="section section--muted">
    <div class="container">
      <SectionHeading
        eyebrow="Recognised by global experts"
        title="Recognised Internationally Across Technology, AI and Client excellence"
      />
      <div class="awards-summary">
        <h3>25 Global Awards</h3>
        <p>
          Spanning technology innovation, AI and machine learning, client
          service and business excellence. Recognised by the Stevie Awards,
          Globee and industry-specific bodies across fintech, tech and
          professional services.
          <SiteLink href="https://reputation.house/company"
            >Learn more</SiteLink
          >
        </p>
      </div>
    </div>
    <ContentCarousel
      label="International awards"
      :columns="3"
      bleed
      :card-width="400"
    >
      <article
        v-for="(award, index) in awards"
        :key="`${award.title}-${index}`"
        class="award-card"
      >
        <img
          :src="award.image"
          :alt="award.title"
          loading="lazy"
          width="250"
          height="220"
        />
        <div>
          <h3>{{ award.title }}</h3>
          <p>{{ award.description }}</p>
          <ActionButton :href="award.action.href">Learn more</ActionButton>
        </div>
      </article>
    </ContentCarousel>
  </section>
</template>

<style scoped>
#awards :deep(.section-heading h2) {
  max-width: 875px;
}
.awards-summary {
  display: block;
  margin: 36px 0 60px;
}
.awards-summary h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.awards-summary p {
  font-size: 20px;
}
.awards-summary a {
  color: var(--rose);
}
.award-card {
  align-self: start;
  min-height: 436px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 18px;
  overflow: hidden;
}
.award-card > img {
  width: 100%;
  height: 225px;
  object-fit: cover;
  background: white;
}
.award-card > div {
  padding: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.award-card h3 {
  font-size: 18px;
  line-height: 1.35;
  font-weight: 600;
  margin-bottom: 14px;
}
.award-card p {
  font-size: 15px;
  margin-bottom: 20px;
  line-height: 1.55;
}
.award-card .action-button {
  margin-top: auto;
  font-size: 16px;
  padding: 12px 20px;
}
@media (max-width: 760px) {
  .awards-summary {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}
</style>
