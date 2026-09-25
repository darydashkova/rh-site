<script setup lang="ts">
defineProps<{ open: boolean }>();
</script>
<template>
  <div
    class="accordion-panel"
    :class="{ 'accordion-panel--open': open }"
    :aria-hidden="!open"
    :inert="!open || undefined"
  >
    <div class="accordion-panel__clip"><slot /></div>
  </div>
</template>
<style scoped>
.accordion-panel {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition:
    grid-template-rows 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}
.accordion-panel--open {
  grid-template-rows: 1fr;
  opacity: 1;
}
.accordion-panel__clip {
  min-height: 0;
  overflow: hidden;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-panel {
    transition: none;
  }
}
</style>
