<script setup lang="ts">
import { protectionElements } from "~/data/homepage";
</script>

<template>
  <section id="protection" class="section container">
    <SectionHeading
      eyebrow="Complex protection of your digital profile"
      title="While you are fixing one problem, the risks in other four directions still exist"
      description="Clients, investors, partners and regulators check all five elements of your digital profile before making a decision on you. Most brands and individuals manage one, if any."
    >
      <p class="section-description">
        Fixing one negative article leaves four open doors.
        <strong>Reputation house manages all five as one system.</strong>
      </p>
    </SectionHeading>
    <div class="protection-grid">
      <article
        v-for="element in protectionElements"
        :key="element.title"
        class="protection-card"
      >
        <img
          :src="`/images/${element.icon}`"
          alt=""
          width="28"
          height="28"
          loading="lazy"
        />
        <h3>
          <SiteLink :href="element.href">{{ element.title }}</SiteLink>
        </h3>
        <p>{{ element.description }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.protection-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-top: 60px;
}
.protection-card {
  background: var(--pale);
  border-radius: 18px;
  padding: 22px 20px;
}
.protection-card img {
  margin-bottom: 26px;
}
.protection-card h3 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 10px;
}
.protection-card p {
  font-size: 16px;
  line-height: 1.5;
}
@media (max-width: 1000px) {
  .protection-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 600px) {
  .protection-grid {
    grid-template-columns: 1fr;
    margin-top: 30px;
    gap: 12px;
  }
  .protection-card {
    display: grid;
    grid-template-columns: 28px 1fr;
    gap: 6px 16px;
  }
  .protection-card img {
    grid-row: span 2;
    margin: 0;
  }
  .protection-card h3 {
    font-size: 18px;
    margin: 0;
  }
  .protection-card p {
    grid-column: 2;
    font-size: 15px;
  }
}
</style>
