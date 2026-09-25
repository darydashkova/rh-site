<script setup lang="ts">
import { comparisonRows } from "~/data/homepage";
</script>

<template>
  <section id="comparison" class="section container">
    <SectionHeading
      eyebrow="Why Reputation House is the best choice"
      title="ORM Reacts. We Prevent"
      description="Traditional reputation management is reactive, fragmented and built for a pre-AI world."
    />
    <div
      class="comparison-scroll"
      tabindex="0"
      role="region"
      aria-label="Comparison of reputation management capabilities"
    >
      <table class="comparison-table">
        <thead>
          <tr>
            <th scope="col">Capability</th>
            <th scope="col">Traditional ORM</th>
            <th scope="col">PR Software</th>
            <th scope="col">IRM Platforms</th>
            <th scope="col">Reputation House</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in comparisonRows" :key="row.capability">
            <th scope="row">{{ row.capability }}</th>
            <td>{{ row.traditional }}</td>
            <td>{{ row.software }}</td>
            <td>{{ row.platforms }}</td>
            <td>✔ {{ row.reputation }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.comparison-scroll {
  overflow-x: auto;
  margin-top: 44px;
}
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 1160px;
  table-layout: fixed;
  text-align: left;
  font-size: 16px;
  color: #464646;
}
.comparison-table th,
.comparison-table td {
  padding: 13px 16px;
  border-bottom: 1px solid var(--line);
}
.comparison-table thead {
  background: #f9f9f9;
}
.comparison-table thead th {
  font-weight: 600;
}
.comparison-table tbody th {
  font-weight: 400;
}
.comparison-table :is(td, th):last-child {
  color: var(--green);
  font-weight: 600;
  width: 26%;
}
.comparison-table th:first-child {
  width: 24.5%;
}
.comparison-table thead th:last-child {
  background: var(--green);
  color: white;
}
.comparison-table thead th {
  border-bottom-width: 2px;
}
.comparison-table tbody tr:last-child > * {
  border-bottom: 0;
}
</style>
