<script setup lang="ts">
const props = defineProps<{ href?: string }>();
const destination = computed(() => resolveSiteLink(props.href || "/"));
</script>
<template>
  <NuxtLink :to="destination"><slot /></NuxtLink>
</template>
