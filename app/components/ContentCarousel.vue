<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    columns?: 1 | 2 | 3 | 4;
    bleed?: boolean;
    cardWidth?: number;
  }>(),
  {
    columns: 3,
  },
);
const track = ref<HTMLElement>();
const atStart = ref(true);
const atEnd = ref(false);
const overflowing = ref(false);
let observer: ResizeObserver | undefined;

function resetPosition() {
  if (!track.value) return;
  track.value.scrollTo({ left: 0, behavior: "instant" });
  updatePosition();
}

function updatePosition() {
  if (!track.value) return;
  const { scrollLeft, clientWidth, scrollWidth } = track.value;
  atStart.value = scrollLeft < 2;
  atEnd.value = scrollLeft + clientWidth >= scrollWidth - 2;
  overflowing.value = scrollWidth > clientWidth + 2;
}

function move(direction: number) {
  if (!track.value) return;
  const first = track.value.firstElementChild as HTMLElement | null;
  const gap = parseFloat(getComputedStyle(track.value).columnGap) || 20;
  const step =
    (first?.getBoundingClientRect().width || track.value.clientWidth) + gap;
  const currentIndex = Math.round(track.value.scrollLeft / step);
  const lastIndex = Math.max(0, track.value.children.length - 1);
  const nextIndex = Math.min(
    lastIndex,
    Math.max(0, currentIndex + direction),
  );
  track.value.scrollTo({
    left: nextIndex * step,
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
}

onMounted(() => {
  // Overflow positions can be restored after hydration. Reset once now and
  // once after layout so every carousel opens exactly on its first card.
  resetPosition();
  nextTick(() => requestAnimationFrame(resetPosition));
  observer = new ResizeObserver(updatePosition);
  if (track.value) observer.observe(track.value);
});
onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <div
    class="carousel"
    :class="{ 'carousel--bleed': bleed }"
    :style="cardWidth ? { '--card-width': `${cardWidth}px` } : undefined"
    role="region"
    aria-roledescription="carousel"
    :aria-label="label"
  >
    <div
      ref="track"
      class="carousel__track"
      :class="`carousel__track--${columns}`"
      tabindex="0"
      @scroll.passive="updatePosition"
      @keydown.left.prevent="move(-1)"
      @keydown.right.prevent="move(1)"
    >
      <slot />
    </div>
    <div v-if="overflowing" class="carousel__controls">
      <button
        type="button"
        aria-label="Previous slide"
        :disabled="atStart"
        @click="move(-1)"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="m12 3-7 7 7 7" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        :disabled="atEnd"
        @click="move(1)"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="m8 3 7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
}
.carousel__track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% - 40px) / 3);
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.carousel__track::-webkit-scrollbar {
  display: none;
}
.carousel__track--2 {
  grid-auto-columns: calc((100% - 20px) / 2);
}
.carousel__track--1 {
  grid-auto-columns: 100%;
}
.carousel__track--4 {
  grid-auto-columns: calc((100% - 60px) / 4);
}
.carousel__track :deep(> *) {
  scroll-snap-align: start;
  min-width: 0;
}
.carousel__controls button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: var(--green);
  color: white;
  font-size: 32px;
  line-height: 1;
}
.carousel__controls button:first-child {
  left: -80px;
}
.carousel__controls button:last-child {
  right: -80px;
}
.carousel__controls button:disabled {
  opacity: 0.45;
  cursor: default;
}
.carousel--bleed {
  --carousel-gutter: max(32px, calc((100% - 1160px) / 2));
}
.carousel--bleed .carousel__track {
  grid-auto-columns: var(--card-width, 400px);
  padding-inline: var(--carousel-gutter);
  scroll-padding-inline: var(--carousel-gutter);
  gap: 20px;
}
.carousel--bleed .carousel__controls button:first-child {
  left: 40px;
}
.carousel--bleed .carousel__controls button:last-child {
  right: 40px;
}
.carousel--bleed .carousel__controls button:disabled {
  opacity: 1;
}
@media (max-width: 1350px) {
  .carousel__controls {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 24px;
  }
  .carousel__controls button {
    position: static;
    transform: none;
  }
  .carousel--bleed .carousel__controls {
    margin: 0;
  }
  .carousel--bleed .carousel__controls button {
    position: absolute;
    transform: translateY(-50%);
  }
}
@media (max-width: 760px) {
  .carousel__track,
  .carousel__track--2,
  .carousel__track--4 {
    grid-auto-columns: 88%;
    gap: 16px;
  }
  .carousel--bleed {
    --carousel-gutter: 20px;
  }
  .carousel--bleed .carousel__track {
    grid-auto-columns: min(var(--card-width), calc(100% - 20px));
    gap: 16px;
  }
  .carousel--bleed .carousel__controls {
    display: flex;
    justify-content: flex-end;
    padding-inline: 20px;
    margin-top: 20px;
  }
  .carousel--bleed .carousel__controls button {
    position: static;
    transform: none;
  }
}
</style>
