<script setup lang="ts">
import { rhModes } from "~/data/rhModes";
useSeoMeta({
  title: "Personal Reputation Management Software | RH Personal",
  description: rhModes.personal.description,
});
</script>
<template><RhModePage :mode="rhModes.personal" /></template>
