<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string;
    title: string;
    description?: string;
    tone?: "dark" | "green";
  }>(),
  { tone: "dark" },
);
</script>
<template>
  <section class="page-hero" :class="`page-hero--${tone}`">
    <div class="container">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>
        <slot name="title">{{ title }}</slot>
      </h1>
      <p v-if="description" class="page-hero__description">{{ description }}</p>
      <slot />
    </div>
  </section>
</template>
<style scoped>
.page-hero {
  padding: 140px 0 96px;
  color: white;
  background: var(--ink) url("/images/back-green.svg") center top / cover
    no-repeat;
}
.page-hero--green {
  background-color: #5d6e55;
}
.page-hero .eyebrow {
  border-top: 1px solid #ffffff50;
  padding-top: 24px;
}
.page-hero h1 {
  font-size: 56px;
  line-height: 1.2;
  font-weight: 400;
  margin-top: 38px;
}
.page-hero__description {
  max-width: 660px;
  font-size: 20px;
  line-height: 1.4;
  margin-top: 30px;
}
@media (max-width: 760px) {
  .page-hero {
    padding: 104px 0 48px;
    background-size: 600px;
  }
  .page-hero h1 {
    font-size: 34px;
    margin-top: 32px;
  }
  .page-hero__description {
    font-size: 18px;
  }
}
</style>
