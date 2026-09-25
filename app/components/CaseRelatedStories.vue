<script setup lang="ts">
import { cases, categories } from "~/data/caseCatalog";
const props = defineProps<{ filters?: boolean }>();
const selected = ref("All");
const stories = computed(() => {
  const ordered = [...cases].reverse();
  return props.filters
    ? ordered.filter(
        (item) => selected.value === "All" || item.category === selected.value,
      )
    : [ordered[0]!, ordered[1]!, cases[0]!];
});
</script>
<template>
  <section class="case-related">
    <div class="case-related__inner">
      <h2>Related Stories</h2>
      <div
        v-if="filters"
        class="case-related__filters"
        aria-label="Filter related stories"
      >
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          :aria-pressed="selected === category"
          @click="selected = category"
        >
          {{ category }}
        </button>
      </div>
      <ContentCarousel
        v-if="stories.length"
        :key="selected"
        label="Related case studies"
      >
        <SiteLink
          v-for="item in stories"
          :key="item.href"
          :href="item.href"
          class="case-related__card"
        >
          <img :src="item.image" :alt="item.title" loading="lazy" />
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </SiteLink>
      </ContentCarousel>
      <p v-else class="case-related__empty" role="status">
        No case studies in this category yet.
        <button type="button" @click="selected = 'All'">
          View all stories
        </button>
      </p>
    </div>
  </section>
</template>
<style scoped>
.case-related {
  background: #efefef;
  padding: 90px 24px;
}
.case-related__inner {
  max-width: 1160px;
  margin: auto;
}
h2 {
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 75px;
}
.case-related__filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 7px;
  margin: -5px 0 40px;
}
.case-related__filters button {
  border: 1px solid #aaa;
  border-radius: 22px;
  background: transparent;
  padding: 4px 13px;
  font-size: 13px;
  color: #777;
}
.case-related__filters button[aria-pressed="true"] {
  color: white;
  background: #28292d;
  border-color: #28292d;
}
.case-related__card {
  display: block;
  background: white;
  color: #28292d;
  text-decoration: none;
}
.case-related__card img {
  width: 100%;
  aspect-ratio: 1.28;
  object-fit: cover;
}
.case-related__card > div {
  padding: 24px;
}
h3 {
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  margin: 0 0 14px;
}
p {
  font-size: 16px;
  line-height: 1.55;
  color: #888;
}
.case-related__empty {
  min-height: 180px;
  text-align: center;
}
.case-related__empty button {
  border: 0;
  background: none;
  text-decoration: underline;
  color: inherit;
}
.case-related :deep(.carousel__controls button) {
  background: #28292d;
}
@media (max-width: 760px) {
  .case-related {
    padding: 60px 20px;
  }
  h2 {
    margin-bottom: 35px;
    font-size: 28px;
  }
  .case-related__filters {
    gap: 6px;
  }
  .case-related__filters button {
    font-size: 12px;
    padding: 5px 10px;
  }
}
</style>
