<script setup lang="ts">
import type { CalculationResult } from "~/utils/calculators/model";
defineProps<{ result: CalculationResult }>();
</script>
<template>
  <section class="calculation-result" role="status" aria-live="polite">
    <h3>{{ result.title }}</h3>
    <strong class="result-value">{{ result.value }}</strong>
    <p v-if="result.subtitle">{{ result.subtitle }}</p>
    <meter
      v-if="result.score !== undefined"
      :value="result.score"
      min="0"
      max="100"
      :aria-label="result.title"
    />
    <dl>
      <div v-for="metric in result.metrics" :key="metric.label">
        <dt>{{ metric.label }}</dt>
        <dd>{{ metric.value }}</dd>
      </div>
    </dl>
    <ol v-if="result.advice?.length">
      <li v-for="advice in result.advice" :key="advice">{{ advice }}</li>
    </ol>
    <small>Estimated from the published methodology; not a guarantee.</small>
  </section>
</template>
<style scoped>
.calculation-result {
  color: #ccc;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 13px;
  line-height: 1.6;
  min-width: 0;
}
.calculation-result h3 {
  color: #bfd8b3;
  font-size: 13px;
  font-weight: 600;
  margin: 0;
}
.result-value {
  font-size: 36px;
  line-height: 1.2;
  color: #bfd8b3;
  overflow-wrap: anywhere;
}
.calculation-result p {
  margin: 0;
  color: #aaa;
}
.calculation-result meter {
  width: 100%;
  height: 10px;
  accent-color: #99ad8f;
}
dl {
  margin: 0;
}
dl > div {
  padding: 16px 0;
  border-bottom: 1px solid #ffffff18;
}
dt {
  color: #999;
}
dd {
  font-size: 22px;
  color: white;
  margin: 4px 0 0;
}
ol {
  padding-left: 20px;
  margin: 0;
}
li + li {
  margin-top: 14px;
}
small {
  color: #888;
  font-size: 11px;
}
</style>
