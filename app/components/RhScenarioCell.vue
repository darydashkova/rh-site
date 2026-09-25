<script setup lang="ts">
type Run = { text: string; strong: boolean; emphasis: boolean };
defineProps<{
  content: { blocks: { runs: Run[]; items: Run[][]; spaceAfter: boolean }[] };
}>();
</script>

<template>
  <div class="rh-scenario-cell">
    <template v-for="(block, index) in content.blocks" :key="index">
      <p
        v-if="block.runs.length"
        :class="{ 'rh-scenario-cell__spaced': block.spaceAfter }"
      >
        <span
          v-for="(run, runIndex) in block.runs"
          :key="runIndex"
          :class="{
            'rh-scenario-cell__bold': run.strong,
            'rh-scenario-cell__italic': run.emphasis,
          }"
          >{{ run.text }}</span
        >
      </p>
      <ul
        v-if="block.items.length"
        :class="{ 'rh-scenario-cell__spaced': block.spaceAfter }"
      >
        <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
          <span
            v-for="(run, runIndex) in item"
            :key="runIndex"
            :class="{
              'rh-scenario-cell__bold': run.strong,
              'rh-scenario-cell__italic': run.emphasis,
            }"
            >{{ run.text }}</span
          >
        </li>
      </ul>
    </template>
  </div>
</template>
