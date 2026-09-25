<script setup lang="ts">
defineProps<{ eyebrow: string; title: string; description?: string }>();
</script>

<template>
  <header class="section-heading">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2>
      <slot name="title">{{ title }}</slot>
    </h2>
    <p v-if="description" class="section-description">{{ description }}</p>
    <slot />
  </header>
</template>
