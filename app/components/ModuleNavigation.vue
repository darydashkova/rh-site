<script setup lang="ts">
defineProps<{ items: { title: string; icon?: string; active?: boolean }[] }>();
const track = ref<HTMLElement>();
const atEnd = ref(false);
function updatePosition() {
  const el = track.value;
  if (el) atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
}
function move() {
  const el = track.value;
  if (!el) return;
  el.scrollBy({ left: atEnd.value ? -el.scrollWidth : el.clientWidth * .7, behavior: 'smooth' });
}
</script>
<template>
  <section class="module-navigation" aria-label="Risk Control Center modules">
    <div class="module-navigation__container">
      <button type="button" :aria-label="atEnd ? 'Previous modules' : 'Next modules'" @click="move">{{ atEnd ? '⟵' : '⟶' }}</button>
      <div ref="track" class="module-navigation__track" tabindex="0" @scroll.passive="updatePosition" @keydown.right.prevent="move">
        <div v-for="item in items" :key="item.title" class="module-navigation__item" :class="{ 'is-active': item.active }">
          <img v-if="item.icon" :src="item.icon" alt="" />
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.module-navigation { padding: 0 0 90px; background: #f7f7f7; }
.module-navigation__container { width: min(1160px, calc(100% - 40px)); margin: auto; }
.module-navigation button { display: block; margin-left: auto; border: 0; background: none; color: #9aae92; font-size: 32px; line-height: 40px; cursor: pointer; }
.module-navigation__track { display: flex; gap: 12px; overflow-x: auto; scrollbar-width: none; scroll-snap-type: x proximity; }
.module-navigation__item { flex: 0 0 auto; display: flex; align-items: center; gap: 12px; padding: 16px 20px; border-radius: 40px; background: #f2f2f2; color: #4a4a4a; font-size: 20px; font-weight: 600; scroll-snap-align: start; }
.module-navigation__item.is-active { background: #606c59; color: #fff; }
.module-navigation__item img { width: 28px; height: 28px; }
@media (max-width: 639px) { .module-navigation { padding-bottom: 60px; } .module-navigation__item { font-size: 16px; padding: 14px 18px; } }
</style>
