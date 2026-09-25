<script setup lang="ts">
import content from "~/data/solutions.json";
import "./solutions.css";

const audience = ref<"companies" | "individuals">("companies");
const situationsTrack = ref<HTMLElement>();
const atStart = ref(true);
const atEnd = ref(false);
const dragging = ref(false);
let dragStart: { x: number; left: number; pointer: number } | undefined;
let suppressClick = false;
let resizeObserver: ResizeObserver | undefined;
function updateSituations() {
  const track = situationsTrack.value;
  if (!track) return;
  atStart.value = track.scrollLeft <= 2;
  atEnd.value = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
}
function moveSituations(direction: number) {
  const track = situationsTrack.value;
  if (!track) return;
  const step = (track.firstElementChild?.getBoundingClientRect().width || 273) + parseFloat(getComputedStyle(track).columnGap || '20');
  track.scrollBy({ left: direction * step, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}
function startDrag(event: PointerEvent) {
  if (event.pointerType !== 'mouse' || event.button !== 0 || !situationsTrack.value) return;
  suppressClick = false;
  dragStart = { x: event.clientX, left: situationsTrack.value.scrollLeft, pointer: event.pointerId };
}
function moveDrag(event: PointerEvent) {
  const track = situationsTrack.value;
  if (!dragStart || !track) return;
  const distance = event.clientX - dragStart.x;
  if (!dragging.value && Math.abs(distance) < 6) return;
  dragging.value = true;
  suppressClick = true;
  track.setPointerCapture(event.pointerId);
  event.preventDefault();
  track.scrollLeft = dragStart.left - distance;
}
function endDrag() {
  const track = situationsTrack.value;
  if (dragStart && track?.hasPointerCapture(dragStart.pointer)) track.releasePointerCapture(dragStart.pointer);
  dragStart = undefined;
  dragging.value = false;
  updateSituations();
}
function guardDragClick(event: MouseEvent) {
  if (!suppressClick) return;
  event.preventDefault();
  event.stopPropagation();
  suppressClick = false;
}
onMounted(() => {
  // Browsers may restore a horizontal offset when returning to this page.
  situationsTrack.value?.scrollTo({ left: 0, behavior: 'instant' });
  updateSituations();
  resizeObserver = new ResizeObserver(updateSituations);
  if (situationsTrack.value) resizeObserver.observe(situationsTrack.value);
});
onBeforeUnmount(() => resizeObserver?.disconnect());
const groups = computed(() =>
  content.groups.filter((group) => group.audience === audience.value),
);

function choose(value: "companies" | "individuals") {
  audience.value = value;
}

useSeoMeta({
  title: "Online Reputation Management Solutions | Reputation House",
  description: content.intro,
});
</script>

<template>
  <main id="main-content" class="solutions-page">
    <section class="solutions-hero">
      <div class="container">
        <p class="solutions-hero__eyebrow">Reputation House Solutions</p>
        <div class="solutions-hero__grid">
          <div>
            <h1>
              Not sure <span>where to start?</span><br />We will help you to<br
                class="desktop-break"
              />
              make the right choice
            </h1>
            <p class="solutions-hero__description">{{ content.intro }}</p>
            <p class="solutions-hero__prompt">Already know what you need?</p>
            <div class="solutions-hero__actions">
              <a href="#solutions-catalog" @click="choose('companies')"
                >For companies</a
              >
              <a href="#solutions-catalog" @click="choose('individuals')"
                >For individuals</a
              >
            </div>
          </div>
          <div class="decision-map" aria-label="Two ways to choose a solution">
            <div class="decision-map__origin">
              <img
                src="/images/pin-location.svg"
                width="18"
                height="18"
                alt=""
              />
              YOU'RE HERE
            </div>
            <svg viewBox="0 0 420 150" aria-hidden="true">
              <path
                d="M210 0C210 85 125 140 75 140M210 0C210 85 295 140 345 140"
              />
              <circle cx="210" cy="0" r="4" />
              <circle cx="75" cy="140" r="4" />
              <circle cx="345" cy="140" r="4" />
            </svg>
            <a
              href="https://strategy.reputation.house/strategy/"
              class="decision-map__card"
            >
              <p>
                <img
                  src="/images/target-goal.svg"
                  width="18"
                  height="18"
                  alt=""
                />
                GUIDED MATCH
              </p>
              <strong>4 quick questions</strong>
              <span>Know something's wrong — not sure what</span>
            </a>
            <a href="https://checkmyrisks.com/" class="decision-map__card">
              <p>
                <img
                  src="/images/free-circle.svg"
                  width="18"
                  height="18"
                  alt=""
                />
                FREE DIAGNOSTIC
              </p>
              <strong>Free risk audit</strong>
              <span>Not sure if anything's wrong at all</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="solutions-helper">
      <div class="container helper-grid">
        <article
          v-for="(helper, index) in content.helpers"
          :key="helper.title"
          class="helper-card"
        >
          <p class="helper-card__label">{{ helper.label }}</p>
          <h2>{{ helper.title }}</h2>
          <p>{{ helper.description }}</p>
          <ul class="helper-card__tags">
            <li v-for="tag in helper.tags" :key="tag">{{ tag }}</li>
          </ul>
          <ActionButton
            :href="helper.href"
            :variant="index ? 'outline' : 'solid'"
            >{{ helper.action }}</ActionButton
          >
        </article>
      </div>
    </section>

    <section id="solutions-catalog" class="catalog-intro">
      <div class="container">
        <p class="catalog-intro__eyebrow">
          how companies and individuals work with us
        </p>
        <h2>Browse by category or go straight to a service</h2>
        <p class="catalog-intro__description">
          All online reputation management solutions, grouped by what they do —
          see what's included and where support kicks in.
        </p>
        <div class="audience-tabs" role="tablist" aria-label="Solutions for">
          <button
            id="companies-tab"
            role="tab"
            :aria-selected="audience === 'companies'"
            aria-controls="audience-panel"
            @click="choose('companies')"
          >
            For companies
          </button>
          <button
            id="individuals-tab"
            role="tab"
            :aria-selected="audience === 'individuals'"
            aria-controls="audience-panel"
            @click="choose('individuals')"
          >
            For individuals
          </button>
        </div>
      </div>
    </section>

    <div
      id="audience-panel"
      role="tabpanel"
      :aria-labelledby="`${audience}-tab`"
    >
      <nav class="category-area" aria-label="Solution categories">
        <div class="container category-links">
          <a
            v-for="(group, index) in groups"
            :key="group.id"
            :href="`#${group.id}`"
            :class="`category-links__card--${index % 3}`"
          >
            <img class="category-links__icon" :src="'icon' in group ? group.icon : '/images/lock-01.svg'" alt="" />
            <strong>{{ group.title }}</strong>
            <span>{{ 'categoryDescription' in group ? group.categoryDescription : group.description }}</span>
          </a>
        </div>
      </nav>

      <section
        v-for="group in groups"
        :id="group.id"
        :key="group.id"
        class="solution-group"
        :class="`solution-group--${group.id}`"
      >
        <div class="container">
          <header class="solution-group__header">
            <h2>{{ group.title }}: {{ group.description }}</h2>
            <ActionButton
              v-if="group.id === 'defence'"
              :href="group.href"
              variant="dark-outline"
              >Check RH Defence</ActionButton
            >
          </header>
          <div class="solution-grid">
            <article
              v-for="service in group.services"
              :key="service.title"
              class="solution-card"
            >
              <p class="solution-card__program">{{ service.program }}</p>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <ActionButton :href="service.href">Learn More</ActionButton>
            </article>
          </div>
        </div>
      </section>
    </div>

    <section class="situations">
      <div class="container situations__heading">
        <p>By Situation</p>
        <h2>Or start from what's happening</h2>
        <div class="situations__controls" aria-label="Situation navigation">
          <button type="button" aria-label="Previous situations" aria-controls="situations-track" :disabled="atStart" @click="moveSituations(-1)">←</button>
          <button type="button" aria-label="Next situations" aria-controls="situations-track" :disabled="atEnd" @click="moveSituations(1)">→</button>
        </div>
      </div>
      <div
        ref="situationsTrack"
        id="situations-track"
        class="situations__track"
        :class="{ 'is-dragging': dragging }"
        tabindex="0"
        role="region"
        @scroll.passive="updateSituations"
        @keydown.left.prevent="moveSituations(-1)"
        @keydown.right.prevent="moveSituations(1)"
        @pointerdown="startDrag"
        @pointermove="moveDrag"
        @pointerup="endDrag"
        @pointercancel="endDrag"
        @lostpointercapture="endDrag"
        @pointerleave="!dragging && endDrag()"
        @dragstart.prevent
        @click.capture="guardDragClick"
        aria-label="Choose a solution by situation"
      >
        <SiteLink
          v-for="situation in content.situations"
          :key="situation.title"
          :href="situation.href"
          class="situation-card"
        >
          <h3>{{ situation.title }}</h3>
          <span>{{ situation.action }} <span aria-hidden="true">↗</span></span>
        </SiteLink>
      </div>
    </section>

    <section class="solution-callout">
      <div class="container">
        <p>Didn't find what you're looking for above?</p>
        <h2>Answer 4 Quick Questions</h2>
        <p>
          Tell us what's going on, and we'll point you to the right solution —
          plus anything else worth a look.
        </p>
        <ActionButton
          href="https://strategy.reputation.house/strategy/"
          variant="dark-outline"
          >Find the Best Solution For Your Case</ActionButton
        >
        <ul class="solution-callout__tags">
          <li>~1 minute</li>
          <li>Free</li>
          <li>4 Questions</li>
        </ul>
      </div>
    </section>
  </main>
</template>
