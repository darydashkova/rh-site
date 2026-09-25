<script setup lang="ts">
import { statistics } from "~/data/homepage";
</script>

<template>
  <section class="section container">
    <SectionHeading
      eyebrow="Market leading analysts prove"
      title="Unmanaged Online Profile is a Financial Risk. Not a Just a PR Problem"
      ><template #title
        >Unmanaged Online Profile is a
        <span class="risk-text">Financial Risk.</span><br />Not a Just a PR
        Problem</template
      ></SectionHeading
    >
    <div class="statistics-grid">
      <article
        v-for="stat in statistics"
        :key="stat.value"
        class="stat-card"
        :class="{ 'stat-card--positive': stat.positive }"
      >
        <strong class="stat-card__value">{{ stat.value }}</strong>
        <h3>{{ stat.label }}</h3>
        <p>{{ stat.description }}</p>
        <SiteLink v-if="stat.href" :href="stat.href" class="eyebrow">{{
          stat.source
        }}</SiteLink>
        <span v-else class="eyebrow">{{ stat.source }}</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.statistics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 44px;
}
.stat-card {
  padding: 28px 24px;
  border: 1px solid var(--line);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}
.stat-card__value {
  font-size: 44px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--rose);
}
.risk-text {
  color: var(--rose);
}
.stat-card h3 {
  color: var(--rose);
  font-size: 20px;
  line-height: 1.4;
  font-weight: 600;
  margin: 8px 0;
}
.stat-card--positive .stat-card__value,
.stat-card--positive h3 {
  color: var(--green);
}
.stat-card > p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 38px;
}
.stat-card .eyebrow {
  font-size: 14px;
  margin-top: auto;
  color: #9a8b82;
}
@media (max-width: 900px) {
  .statistics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .statistics-grid {
    gap: 12px;
  }
  .stat-card {
    padding: 20px 16px;
  }
  .stat-card__value {
    font-size: 36px;
  }
  .stat-card h3 {
    font-size: 16px;
  }
  .stat-card > p,
  .stat-card .eyebrow {
    font-size: 13px;
  }
}
</style>
