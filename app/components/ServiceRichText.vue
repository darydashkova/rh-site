<script setup lang="ts">
// Only the build-time allowlisted editorial tags are present in these strings.
const props = defineProps<{ html: string }>();
const content = computed(() =>
  props.html.replace(
    /href="([^"]+)"/g,
    (_, href: string) => `href="${resolveSiteLink(href)}"`,
  ),
);
const consultation = useConsultation();
function onClick(event: MouseEvent) {
  const link = (event.target as HTMLElement).closest("a");
  if (link?.getAttribute("href")?.startsWith("#popup:")) {
    event.preventDefault();
    consultation.open();
  }
}
</script>
<template>
  <div class="service-copy" @click="onClick" v-html="content" />
</template>
