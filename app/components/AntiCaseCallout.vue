<script setup lang="ts">
defineProps<{ size?: "small" }>();
</script>
<template>
  <aside
    class="anti-callout"
    :class="{ 'anti-callout--small': size === 'small' }"
  >
    <svg
      class="anti-callout__icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill="#01142f" />
      <path d="M11 10h2v8h-2z" fill="white" />
      <circle cx="12" cy="7" r="1.2" fill="white" />
    </svg>
    <slot />
  </aside>
</template>
<style scoped>
.anti-callout {
  position: relative;
  background: #ebebeb;
  color: #000;
  margin: 32px 0;
  padding: 30px 20px 28px 55px;
  font-size: 18px;
  line-height: 1.55;
}
.anti-callout--small {
  font-size: 16px;
}
.anti-callout__icon {
  position: absolute;
  top: 27px;
  left: 20px;
}
@media (max-width: 640px) {
  .anti-callout {
    font-size: 16px;
  }
  .anti-callout--small {
    font-size: 14px;
  }
}
</style>
