<script setup lang="ts">
const { isOpen, open, close } = useConsultation();
const bannerVisible = ref(false);
let bannerTimer: ReturnType<typeof setTimeout> | undefined;

onMounted(() => {
  bannerTimer = setTimeout(() => {
    bannerVisible.value = true;
  }, 15000);
});
onBeforeUnmount(() => clearTimeout(bannerTimer));
</script>

<template>
  <div>
    <a class="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
    <button
      class="chat-launcher"
      aria-label="Request a consultation"
      @click="open"
    >
      <svg viewBox="0 0 36 36" aria-hidden="true">
        <path
          d="M29 17a12 12 0 0 1-12 12H7l-4 4V17A13 13 0 0 1 16 4h1a12 12 0 0 1 12 13Z"
        />
        <path d="M10 13h13M10 18h13M10 23h8" />
      </svg>
    </button>
    <aside v-if="bannerVisible && !isOpen" class="consultation-banner">
      <span>Want to Boost Your Online Reputation?</span>
      <button @click="open">Request a free consultation</button>
      <button
        class="banner-dismiss"
        aria-label="Dismiss consultation banner"
        @click="bannerVisible = false"
      >
        ×
      </button>
    </aside>
    <ConsultationModal v-if="isOpen" @close="close" />
  </div>
</template>

<style scoped>
.chat-launcher {
  position: fixed;
  z-index: 90;
  left: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 50%;
  background: #f70920;
  box-shadow: 0 0 18px #0003;
  display: grid;
  place-items: center;
}
.chat-launcher svg {
  width: 36px;
  height: 36px;
  fill: none;
  stroke: white;
  stroke-width: 1.4;
}
.consultation-banner {
  position: fixed;
  z-index: 80;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 60px;
  background: #444e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 12px;
  font-weight: 600;
}
.consultation-banner button:not(.banner-dismiss) {
  border: 0;
  border-radius: 3px;
  padding: 12px 16px;
  text-transform: uppercase;
  color: #262626;
  background: white;
  font-size: 12px;
  font-weight: 700;
}
.banner-dismiss {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  background: none;
  color: white;
  font-size: 25px;
}
@media (max-width: 640px) {
  .chat-launcher {
    width: 56px;
    height: 56px;
    bottom: 12px;
    left: 12px;
  }
  .consultation-banner {
    padding: 10px 40px 10px 75px;
    gap: 8px;
  }
  .consultation-banner span {
    display: none;
  }
  .consultation-banner button:not(.banner-dismiss) {
    font-size: 10px;
  }
}
</style>
