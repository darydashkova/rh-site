<script setup lang="ts">
withDefaults(
  defineProps<{
    href?: string;
    variant?: "solid" | "outline" | "light" | "dark-outline";
  }>(),
  { variant: "solid" },
);
const consultation = useConsultation();
</script>

<template>
  <SiteLink
    v-if="href"
    :href="href"
    class="action-button"
    :class="`action-button--${variant}`"
    ><slot
  /></SiteLink>
  <button
    v-else
    type="button"
    class="action-button"
    :class="`action-button--${variant}`"
    @click="consultation.open"
  >
    <slot />
  </button>
</template>
