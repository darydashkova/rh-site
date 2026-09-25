<script setup lang="ts">
import { rhModes } from "~/data/rhModes";
useSeoMeta({
  title: "Brand Monitoring Tools & Risk Detection | Reputation House",
  description: rhModes.detection.description,
});
</script>
<template><RhModePage :mode="rhModes.detection" /></template>
