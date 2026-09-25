<script setup lang="ts">
import type { ServiceCard } from "~/types/service";
const props = defineProps<{ slides: ServiceCard[] }>();
const selected = ref(0);
const slide = computed(() => props.slides[selected.value]!);
function move(direction: number) {
  selected.value =
    (selected.value + direction + props.slides.length) % props.slides.length;
}
</script>
<template>
  <div
    class="service-platform"
    role="region"
    aria-roledescription="carousel"
    aria-label="Inside the platform"
    @keydown.left.prevent="move(-1)"
    @keydown.right.prevent="move(1)"
  >
    <div class="service-platform__card">
      <img src="/images/scan.svg" alt="" width="32" height="32" />
      <div aria-live="polite">
        <h3>{{ slide.title }}</h3>
        <ServiceRichText v-for="part in slide.parts" :key="part" :html="part" />
      </div>
      <div class="service-platform__bottom">
        <p>
          {{ slide.eyebrow }}<br />{{
            String(selected + 1).padStart(2, "0")
          }}/{{ String(slides.length).padStart(2, "0") }}
        </p>
        <div class="service-platform__controls">
          <button aria-label="Previous platform screen" @click="move(-1)">
            ‹</button
          ><button aria-label="Next platform screen" @click="move(1)">›</button>
        </div>
      </div>
    </div>
    <Transition name="service-screen" mode="out-in"
      ><img
        :key="selected"
        :src="slide.image"
        :alt="slide.title"
        class="service-platform__screen"
        loading="lazy"
    /></Transition>
  </div>
</template>
