<script setup lang="ts">
import type { ServiceAction } from "~/types/service";
defineProps<{ action: ServiceAction }>();
const consultation = useConsultation();
</script>
<template>
  <button
    v-if="
      !action.href ||
      action.href.startsWith('#popup:') ||
      action.href === '#audit'
    "
    class="action-button"
    @click="consultation.open()"
  >
    {{ action.label }}
  </button>
  <SiteLink v-else :href="action.href" class="action-button">{{
    action.label
  }}</SiteLink>
</template>
