<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  note: string;
  values: { name: string; value: number }[];
}>();
</script>
<template>
  <figure class="case-search-chart">
    <figcaption>
      <strong>{{ title }}</strong
      ><span>{{ subtitle }}</span>
    </figcaption>
    <dl>
      <div
        v-for="item in values"
        :key="item.name"
        class="case-search-chart__row"
      >
        <dt>{{ item.name }}</dt>
        <dd>
          <span class="case-search-chart__track" aria-hidden="true"
            ><span :style="{ width: `${Math.min(100, item.value)}%` }" /></span
          ><span>+{{ item.value }}%</span>
        </dd>
      </div>
    </dl>
    <p>{{ note }}</p>
  </figure>
</template>
<style scoped>
.case-search-chart {
  padding: 24px 0;
}
figcaption strong {
  display: block;
  font-size: 17px;
  line-height: 1.4;
  color: #262626;
}
figcaption > span {
  display: block;
  font-size: 12px;
  color: #888;
  margin: 8px 0 24px;
}
dl {
  margin: 0;
  display: grid;
  gap: 14px;
}
.case-search-chart__row {
  display: grid;
  grid-template-columns: 105px 1fr;
  gap: 12px;
  align-items: center;
  font-size: 12px;
}
dt {
  font-weight: 600;
}
dd {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 12px;
  align-items: center;
}
.case-search-chart__track {
  display: block;
  background: #f2f1ee;
  height: 20px;
  border-radius: 3px;
  overflow: hidden;
}
.case-search-chart__track > span {
  display: block;
  height: 100%;
  background: #75965f;
}
p {
  font-size: 12px;
  color: #888;
  margin: 20px 0 0;
}
@media (max-width: 480px) {
  .case-search-chart__row {
    grid-template-columns: 82px 1fr;
    gap: 8px;
    font-size: 11px;
  }
  dd {
    gap: 8px;
    grid-template-columns: 1fr 34px;
  }
}
</style>
