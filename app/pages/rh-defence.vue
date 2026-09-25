<script setup lang="ts">
import { rhModes } from "~/data/rhModes";
useSeoMeta({
  title: "RH Defence: Enterprise Crisis Management | Reputation House",
  description: rhModes.defence.description,
});
</script>
<template><RhModePage :mode="rhModes.defence" /></template>
