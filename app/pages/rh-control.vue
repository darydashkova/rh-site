<script setup lang="ts">
import { rhModes } from "~/data/rhModes";
useSeoMeta({
  title: "Enterprise Reputation Management Platform | RH Control",
  description: rhModes.control.description,
});
</script>
<template><RhModePage :mode="rhModes.control" /></template>
