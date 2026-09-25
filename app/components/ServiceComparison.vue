<script setup lang="ts">
defineProps<{ headings: string[]; rows: string[][] }>();
</script>
<template>
  <div class="service-comparison" tabindex="0" aria-label="Service comparison">
    <table>
      <thead>
        <tr>
          <th scope="col">
            <span class="service-visually-hidden">Comparison</span>
          </th>
          <th v-for="heading in headings" :key="heading" scope="col">
            {{ heading }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <component
            :is="i === 0 ? 'th' : 'td'"
            v-for="(cell, i) in row"
            :key="i"
            :scope="i === 0 ? 'row' : undefined"
            ><ServiceFormattedText :text="cell"
          /></component>
        </tr>
      </tbody>
    </table>
  </div>
</template>
