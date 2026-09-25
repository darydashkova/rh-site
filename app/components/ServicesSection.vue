<script setup lang="ts">
import services from "~/data/services.json";
</script>

<template>
  <section id="services" class="section section--muted">
    <div class="container">
      <SectionHeading
        eyebrow="What we can help you with"
        title="These issues we help to solve every day"
      />
      <ContentCarousel
        label="Reputation management services"
        class="services-carousel"
      >
        <article
          v-for="service in services"
          :key="service.description"
          class="service-card"
        >
          <p class="eyebrow">{{ service.title }}</p>
          <h3>{{ service.description }}</h3>
          <ActionButton :href="service.action.href" variant="outline">{{
            service.action.label
          }}</ActionButton>
        </article>
      </ContentCarousel>
      <div class="button-row section-actions">
        <ActionButton>Discuss Your Case with an Expert</ActionButton>
        <ActionButton
          href="https://reputation.house/solutions"
          variant="outline"
          >All Services</ActionButton
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-carousel {
  margin-top: 64px;
}
.service-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 26px;
}
.service-card .eyebrow {
  font-size: 14px;
  color: var(--rose);
}
.service-card h3 {
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  margin: 18px 0 40px;
}
.service-card .action-button {
  margin-top: auto;
  font-size: 14px;
}
</style>
