<script setup lang="ts">
import CalculatorResult from "./CalculatorResult.vue";
import { calculate, money, revenue } from "~/utils/calculators/model";
const state = reactive<Record<string, string | number>>({
  type: "data_breach",
  spread: "slow",
  platform: "social",
});
const ready = ref(false);
onMounted(() => {
  ready.value = true;
});
const submitted = ref(true);
const sourcesOpen = ref(false);
const result = computed(() => calculate("crisis-response-time", state));
</script>
<template>
  <section class="rh-crt" :data-calculator-ready="ready">
    <div class="rh-crt-wrap">
      <div class="rh-crt-inner">
        <div class="rh-crt-form">
          <span class="rh-crt-eyebrow">Calculator</span>
          <span class="rh-crt-title">Crisis Response Time Calculator</span>
          <span class="rh-crt-sub"
            >Find your critical response window — how long you have before the
            narrative hardens and damage becomes difficult to reverse.</span
          >
          <div class="rh-crt-q">
            <span class="rh-crt-q-text">Type of crisis</span>
            <div class="rh-crt-grid" data-q="type">
              <button
                class="rh-crt-opt"
                data-val="data_breach"
                type="button"
                :class="{ selected: state['type'] === 'data_breach' }"
                @click="state['type'] = 'data_breach'"
                :aria-pressed="state['type'] === 'data_breach'"
              >
                <span class="rh-crt-opt-text">Data breach</span
                ><span class="rh-crt-opt-sub"
                  >Customer or internal data exposed</span
                >
              </button>
              <button
                class="rh-crt-opt"
                data-val="media_scandal"
                type="button"
                :class="{ selected: state['type'] === 'media_scandal' }"
                @click="state['type'] = 'media_scandal'"
                :aria-pressed="state['type'] === 'media_scandal'"
              >
                <span class="rh-crt-opt-text">Media scandal</span
                ><span class="rh-crt-opt-sub">Press coverage, allegations</span>
              </button>
              <button
                class="rh-crt-opt"
                data-val="reviews"
                type="button"
                :class="{ selected: state['type'] === 'reviews' }"
                @click="state['type'] = 'reviews'"
                :aria-pressed="state['type'] === 'reviews'"
              >
                <span class="rh-crt-opt-text">Review wave</span
                ><span class="rh-crt-opt-sub"
                  >Coordinated or spike in negatives</span
                >
              </button>
              <button
                class="rh-crt-opt"
                data-val="fake_news"
                type="button"
                :class="{ selected: state['type'] === 'fake_news' }"
                @click="state['type'] = 'fake_news'"
                :aria-pressed="state['type'] === 'fake_news'"
              >
                <span class="rh-crt-opt-text">Fake news / disinformation</span
                ><span class="rh-crt-opt-sub">False claims spreading fast</span>
              </button>
              <button
                class="rh-crt-opt"
                data-val="safety_crisis"
                type="button"
                :class="{ selected: state['type'] === 'safety_crisis' }"
                @click="state['type'] = 'safety_crisis'"
                :aria-pressed="state['type'] === 'safety_crisis'"
              >
                <span class="rh-crt-opt-text">Safety incident</span
                ><span class="rh-crt-opt-sub"
                  >Physical harm, product recall</span
                >
              </button>
              <button
                class="rh-crt-opt"
                data-val="exec_scandal"
                type="button"
                :class="{ selected: state['type'] === 'exec_scandal' }"
                @click="state['type'] = 'exec_scandal'"
                :aria-pressed="state['type'] === 'exec_scandal'"
              >
                <span class="rh-crt-opt-text">Executive scandal</span
                ><span class="rh-crt-opt-sub"
                  >CEO or leadership misconduct</span
                >
              </button>
            </div>
          </div>
          <div class="rh-crt-q">
            <span class="rh-crt-q-text">Speed of spread</span>
            <span class="rh-crt-q-hint">How fast is it moving right now?</span>
            <div class="rh-crt-pills" data-q="spread">
              <button
                class="rh-crt-pill"
                data-val="slow"
                type="button"
                :class="{ selected: state['spread'] === 'slow' }"
                @click="state['spread'] = 'slow'"
                :aria-pressed="state['spread'] === 'slow'"
              >
                Slow
              </button>
              <button
                class="rh-crt-pill"
                data-val="active"
                type="button"
                :class="{ selected: state['spread'] === 'active' }"
                @click="state['spread'] = 'active'"
                :aria-pressed="state['spread'] === 'active'"
              >
                Active
              </button>
              <button
                class="rh-crt-pill"
                data-val="viral"
                type="button"
                :class="{ selected: state['spread'] === 'viral' }"
                @click="state['spread'] = 'viral'"
                :aria-pressed="state['spread'] === 'viral'"
              >
                Viral
              </button>
            </div>
          </div>
          <div class="rh-crt-q">
            <span class="rh-crt-q-text">Where is it spreading?</span>
            <div class="rh-crt-pills" data-q="platform">
              <button
                class="rh-crt-pill"
                data-val="social"
                type="button"
                :class="{ selected: state['platform'] === 'social' }"
                @click="state['platform'] = 'social'"
                :aria-pressed="state['platform'] === 'social'"
              >
                Social media
              </button>
              <button
                class="rh-crt-pill"
                data-val="media"
                type="button"
                :class="{ selected: state['platform'] === 'media' }"
                @click="state['platform'] = 'media'"
                :aria-pressed="state['platform'] === 'media'"
              >
                Press / news
              </button>
              <button
                class="rh-crt-pill"
                data-val="reviews"
                type="button"
                :class="{ selected: state['platform'] === 'reviews' }"
                @click="state['platform'] = 'reviews'"
                :aria-pressed="state['platform'] === 'reviews'"
              >
                Review platforms
              </button>
              <button
                class="rh-crt-pill"
                data-val="all"
                type="button"
                :class="{ selected: state['platform'] === 'all' }"
                @click="state['platform'] = 'all'"
                :aria-pressed="state['platform'] === 'all'"
              >
                All channels
              </button>
            </div>
          </div>
          <button class="rh-crt-btn" @click="submitted = true">
            Calculate response window →
          </button>
        </div>
        <div class="rh-crt-result">
          <div class="rh-crt-empty" id="rh-crt-empty" v-if="!submitted">
            <span class="rh-crt-empty-text"
              >Select your crisis type, spread speed, and platform — your
              response window appears here</span
            >
          </div>
          <calculator-result v-else="" :result="result"></calculator-result>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.rh-crt {
  width: 100%;
  background: #f7f7f7;
}
.rh-crt-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px;
}
.rh-crt-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: start;
}

/* LEFT: FORM */
.rh-crt-form {
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
}
.rh-crt-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 6px 0;
}
.rh-crt-title {
  font-size: 19px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin-bottom: 8px;
}
.rh-crt-sub {
  font-size: 12.5px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-bottom: 28px;
  line-height: 1.55;
}

.rh-crt-q {
  margin: 0 0 22px 0;
}
.rh-crt-q-text {
  font-size: 13px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin: 0 0 4px 0;
}
.rh-crt-q-hint {
  font-size: 11px;
  font-weight: 600;
  color: #b3b3b3;
  display: block;
  margin: 0 0 10px 0;
}

.rh-crt-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.rh-crt-opt {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 14px 16px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
}
.rh-crt-opt:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-crt-opt.selected {
  background: #dfecd9;
  border-color: #99ad8f;
}
.rh-crt-opt-text {
  font-size: 13px;
  font-weight: 700;
  color: #262626;
  display: block;
}
.rh-crt-opt-sub {
  font-size: 10.5px;
  font-weight: 600;
  color: #939393;
  display: block;
  margin-top: 2px;
}

.rh-crt-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.rh-crt-pill {
  background: #f5f5f5;
  border-radius: 100px;
  padding: 10px 18px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
  font-size: 13px;
  font-weight: 600;
  color: #262626;
}
.rh-crt-pill:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-crt-pill.selected {
  background: #262626;
  border-color: #262626;
  color: #fff;
}

.rh-crt-btn {
  width: 100%;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: #262626;
  color: #ffffff;
  border: none;
  padding: 15px 28px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.15s;
  margin-top: 6px;
}
.rh-crt-btn:hover {
  background: #464646;
}

/* RIGHT: RESULT */
.rh-crt-result {
  background: #262626;
  border-radius: 20px;
  padding: 40px;
  position: sticky;
  top: 24px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
}

.rh-crt-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.rh-crt-empty-text {
  font-size: 12px;
  font-weight: 600;
  color: #585858;
  max-width: 230px;
  line-height: 1.6;
}

.rh-crt-filled {
  display: none;
  flex-direction: column;
  height: 100%;
}

/* Zone indicator */
.rh-crt-zone {
  border-radius: 14px;
  padding: 18px 22px;
  margin-bottom: 18px;
}
.rh-crt-zone.red {
  background: rgba(203, 129, 125, 0.15);
  border: 1px solid rgba(203, 129, 125, 0.35);
}
.rh-crt-zone.orange {
  background: rgba(212, 168, 87, 0.15);
  border: 1px solid rgba(212, 168, 87, 0.35);
}
.rh-crt-zone.yellow {
  background: rgba(191, 216, 179, 0.12);
  border: 1px solid rgba(191, 216, 179, 0.25);
}
.rh-crt-zone-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
}
.red .rh-crt-zone-label {
  color: #cb817d;
}
.orange .rh-crt-zone-label {
  color: #d4a857;
}
.yellow .rh-crt-zone-label {
  color: #99ad8f;
}
.rh-crt-zone-title {
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  display: block;
  line-height: 1.4;
}

/* Time bars */
.rh-crt-times {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 18px;
}
.rh-crt-time-row {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 16px 18px;
}
.rh-crt-time-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a3a3a3;
  display: block;
  margin-bottom: 6px;
}
.rh-crt-time-val {
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
}
.rh-crt-time-val.red {
  color: #cb817d;
}
.rh-crt-time-val.orange {
  color: #d4a857;
}
.rh-crt-time-val.green {
  color: #99ad8f;
}
.rh-crt-time-sub {
  font-size: 11px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-top: 4px;
  line-height: 1.45;
}

/* Timeline bar */
.rh-crt-bar-wrap {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  height: 8px;
  overflow: hidden;
  margin: 10px 0 4px 0;
}
.rh-crt-bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.6s ease;
}

/* Checklist */
.rh-crt-checklist {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 16px;
  margin-top: auto;
}
.rh-crt-checklist-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f7f7f7;
  display: block;
  margin-bottom: 12px;
}
.rh-crt-check-item {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.rh-crt-check-num {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #99ad8f;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: #1a2417;
  flex-shrink: 0;
  margin-top: 1px;
}
.rh-crt-check-text {
  font-size: 12.5px;
  font-weight: 600;
  color: #a3a3a3;
  line-height: 1.5;
}
.rh-crt-check-text b {
  color: #ffffff;
}

.rh-crt-sources {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.rh-crt-src-toggle {
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  cursor: pointer;
  user-select: none;
}
.rh-crt-src-toggle:hover {
  color: #808080;
}
.rh-crt-src-list {
  display: none;
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  line-height: 1.85;
  margin-top: 8px;
}
.rh-crt-src-list.open {
  display: block;
}

@media (max-width: 860px) {
  .rh-crt-wrap {
    padding: 32px 20px;
  }
  .rh-crt-inner {
    grid-template-columns: 1fr;
  }
  .rh-crt-result {
    position: static;
    min-height: auto;
  }
  .rh-crt-form {
    padding: 28px 22px;
  }
  .rh-crt-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 960px) {
  .rh-crt-wrap {
    padding-left: 40px;
    padding-right: 40px;
  }
}

:root {
  --rh-dark: #262626;
  --rh-green: #bfd8b3;
  --rh-green-hover: #cfe2c6;
  --rh-transition: 180ms ease;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  padding-top: 73px;
  background: #f7f7f7;
  color: var(--rh-dark);
  font-family: Montserrat, Arial, sans-serif;
}

button,
input,
textarea,
select {
  font: inherit;
}

button:focus,
button:focus-visible,
a:focus,
a:focus-visible {
  box-shadow: none;
  outline: none;
}

a {
  color: inherit;
}

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 990;
  width: 100%;
  color: #ffffff;
  background: var(--rh-dark);
  border-bottom: 1px solid rgb(229 229 229 / 10%);
}

.app-header__inner {
  display: grid;
  width: 100%;
  min-height: 73px;
  align-items: center;
  gap: 24px;
  grid-template-columns: 100px minmax(0, 1fr) auto;
  padding: 0 24px;
}

.app-header__logo {
  display: inline-flex;
  align-items: center;
  justify-self: start;
  text-decoration: none;
}

.app-header__logo img {
  display: block;
  width: 100px;
  max-width: 100px;
  height: auto;
}

.app-header__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(18px, 1.7vw, 30px);
  justify-self: stretch;
  min-width: 0;
}

.app-header__group {
  position: relative;
  display: flex;
  min-height: 73px;
  align-items: center;
}

.app-header__group::after {
  position: absolute;
  top: 100%;
  right: -12px;
  left: -12px;
  height: 15px;
  content: "";
}

.app-header__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: color var(--rh-transition);
  white-space: nowrap;
}

.app-header__link:hover,
.app-header__link:focus-visible {
  color: var(--rh-green);
}

.app-header__arrow {
  width: 8px;
  height: 8px;
  margin-top: -4px;
  border-right: 1.5px solid currentcolor;
  border-bottom: 1.5px solid currentcolor;
  transform: rotate(45deg);
}

.app-header__menu,
.app-header__mega {
  position: fixed;
  top: 73px;
  right: 0;
  left: 0;
  z-index: 991;
  max-height: calc(100vh - 73px);
  padding: 0 40px;
  overflow-y: auto;
  color: #ffffff;
  background: var(--rh-dark);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition:
    opacity 0.2s ease-in-out,
    transform 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  visibility: hidden;
}

.app-header__group:focus-within .app-header__menu,
.app-header__group:hover .app-header__menu,
.app-header__group:focus-within .app-header__mega,
.app-header__group:hover .app-header__mega {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
  visibility: visible;
}

.app-header__panel-inner {
  display: grid;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 32px 0 38px;
  border-top: 1px solid rgb(255 255 255 / 18%);
}

.app-header__dropdown-grid {
  display: grid;
  align-items: start;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px 82px;
}

.app-header__dropdown-card {
  display: grid;
  align-content: start;
  align-self: start;
  max-width: 330px;
  gap: 10px;
  color: #ffffff;
  text-decoration: none;
}

.app-header__dropdown-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.55;
}

.app-header__dropdown-description {
  color: #919191;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.55;
}

.app-header__dropdown-card:hover .app-header__dropdown-title,
.app-header__dropdown-card:focus-visible .app-header__dropdown-title {
  color: var(--rh-green);
}

.app-header__mega-grid {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 40px;
}

.app-header__mega-column {
  display: grid;
  gap: 24px;
}

.app-header__mega-column + .app-header__mega-column {
  padding-left: 40px;
  border-left: 1px solid rgb(255 255 255 / 18%);
}

.app-header__mega-title {
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.55;
  text-decoration: none;
  text-transform: uppercase;
}

.app-header__mega-title:hover,
.app-header__mega-title:focus-visible {
  color: var(--rh-green);
}

.app-header__mega-sections {
  display: grid;
  align-items: start;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 35px 58px;
}

.app-header__mega-column + .app-header__mega-column .app-header__mega-sections {
  grid-template-columns: 1fr;
}

.app-header__submenu-section {
  display: grid;
  gap: 0;
}

.app-header__submenu-section h3,
.app-header__submenu-section p {
  margin: 0;
}

.app-header__submenu-section h3 {
  color: var(--rh-green);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.65;
  text-transform: uppercase;
}

.app-header__submenu-section p {
  color: #979797;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.65;
  text-transform: uppercase;
}

.app-header__submenu-section a {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  gap: 8px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  text-decoration: none;
  transition: color var(--rh-transition);
}

.app-header__submenu-section h3 + a,
.app-header__submenu-section p + a {
  margin-top: 20px;
}

.app-header__submenu-section a + a {
  margin-top: 6px;
}

.app-header__submenu-section a.app-header__mega-link--muted,
.app-header__mega-link--muted .app-header__badge {
  color: #979797;
  border-color: #979797;
}

.app-header__submenu-section a:hover,
.app-header__submenu-section a:focus-visible {
  color: var(--rh-green);
}

.app-header__badge {
  border: 1px solid rgb(255 255 255 / 45%);
  border-radius: 999px;
  color: #ffffff;
  flex: 0 0 auto;
  font-size: 7px;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1;
  padding: 2px 5px;
}

.app-header__menu-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin-top: 38px;
  padding-top: 24px;
  border-top: 1px solid rgb(255 255 255 / 18%);
}

.app-header__menu-footer p {
  max-width: 650px;
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
}

.app-header__menu-actions {
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 16px;
}

.app-header__menu-action {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 18px;
  color: var(--rh-dark);
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  background: var(--rh-green);
  border: 1px solid var(--rh-green);
  border-radius: 999px;
  transition:
    color var(--rh-transition),
    background-color var(--rh-transition),
    border-color var(--rh-transition);
}

.app-header__menu-action--outline {
  color: var(--rh-green);
  background: transparent;
}

.app-header__menu-action:hover,
.app-header__menu-action:focus-visible {
  color: #5d6c57;
  background: var(--rh-green-hover);
  border-color: var(--rh-green-hover);
}

.app-header__menu-action-arrow {
  font-size: 18px;
  line-height: 1;
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-self: end;
}

.app-header__cta {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
  color: var(--rh-dark);
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  background: var(--rh-green);
  border: 1px solid var(--rh-green);
  border-radius: 999px;
  cursor: pointer;
  transition:
    color var(--rh-transition),
    border-color var(--rh-transition),
    background-color var(--rh-transition);
}

.app-header__cta:hover,
.app-header__cta:focus-visible {
  background: #dfecd9;
  border-color: #dfecd9;
  color: var(--rh-dark);
}

.app-header__cta--outline {
  background: transparent;
  border-color: rgba(191, 216, 179, 0.85);
  color: var(--rh-green);
}

.app-header__cta--outline:hover,
.app-header__cta--outline:focus-visible {
  background: var(--rh-green);
  border-color: var(--rh-green);
  color: var(--rh-dark);
}

.app-header__burger {
  display: none;
  width: 28px;
  height: 28px;
  padding: 0;
  position: relative;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.app-header__burger span {
  left: 0;
  position: absolute;
  width: 28px;
  height: 2px;
  background: #ffffff;
  transition:
    opacity var(--rh-transition),
    transform var(--rh-transition),
    top var(--rh-transition);
}

.app-header__burger span:nth-child(1) {
  top: 5px;
}

.app-header__burger span:nth-child(2),
.app-header__burger span:nth-child(3) {
  top: 13px;
}

.app-header__burger span:nth-child(4) {
  top: 21px;
}

.app-header__burger--open span:nth-child(1),
.app-header__burger--open span:nth-child(4) {
  opacity: 0;
}

.app-header__burger--open span:nth-child(2) {
  transform: rotate(45deg);
}

.app-header__burger--open span:nth-child(3) {
  transform: rotate(-45deg);
}

.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: none;
}

.mobile-menu[aria-hidden="false"] {
  display: block;
}

.mobile-menu__panel {
  display: flex;
  position: absolute;
  inset: 0;
  min-height: 100dvh;
  flex-direction: column;
  padding: 0 14px 15px;
  overflow-y: auto;
  color: #ffffff;
  background: var(--rh-dark);
  animation: mobile-menu-in var(--rh-transition);
}

.mobile-menu__header {
  display: flex;
  min-height: 64px;
  align-items: center;
  justify-content: space-between;
  margin: 0 -14px;
  padding: 0 20px;
  border-bottom: 1px solid rgb(217 217 217 / 18%);
}

.mobile-menu__logo {
  display: inline-flex;
}

.mobile-menu__logo img {
  display: block;
  width: 110px;
  height: auto;
}

.mobile-menu__close {
  position: relative;
  width: 22px;
  height: 14px;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.mobile-menu__close::before,
.mobile-menu__close::after {
  position: absolute;
  top: 6px;
  left: 0;
  width: 22px;
  height: 2px;
  content: "";
  background: var(--rh-green);
}

.mobile-menu__close::before {
  transform: rotate(45deg);
}

.mobile-menu__close::after {
  transform: rotate(-45deg);
}

.mobile-menu__nav {
  display: grid;
  margin: auto 0;
  gap: 0;
}

.mobile-menu__details > summary,
.mobile-menu__direct {
  display: flex;
  width: 100%;
  min-height: 42px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  text-decoration: none;
  list-style: none;
  text-transform: uppercase;
  cursor: pointer;
}

.mobile-menu__details summary::-webkit-details-marker,
.mobile-menu__subdetails summary::-webkit-details-marker,
.mobile-menu__section summary::-webkit-details-marker {
  display: none;
}

.mobile-menu__details > summary > span,
.mobile-menu__subdetails > summary > span,
.mobile-menu__section > summary > i {
  width: 9px;
  height: 9px;
  margin-top: -4px;
  border-right: 1.5px solid currentcolor;
  border-bottom: 1.5px solid currentcolor;
  transform: rotate(-45deg);
  transition: transform var(--rh-transition);
}

.mobile-menu__details[open] > summary > span,
.mobile-menu__subdetails[open] > summary > span,
.mobile-menu__section[open] > summary > i {
  transform: rotate(45deg);
}

.mobile-menu__mega {
  display: grid;
  gap: 0;
  padding: 2px 0 8px 14px;
}

.mobile-menu__subdetails > summary {
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  gap: 12px;
  justify-content: space-between;
  line-height: 1.3;
  min-height: 42px;
  padding-left: 0;
}

.mobile-menu__section {
  padding-left: 14px;
}

.mobile-menu__section > summary {
  align-items: flex-start;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  min-height: 42px;
  padding: 7px 0;
}

.mobile-menu__section > summary > span {
  display: grid;
  gap: 3px;
}

.mobile-menu__section strong {
  color: var(--rh-green);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.35;
  text-transform: uppercase;
}

.mobile-menu__section em {
  color: rgb(255 255 255 / 58%);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.45;
  text-transform: uppercase;
}

.mobile-menu__details ul {
  display: grid;
  gap: 0;
  padding: 2px 0 7px 14px;
  list-style: none;
}

.mobile-menu__details a {
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 7px 14px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.45;
  text-decoration: none;
}

.mobile-menu__details a:hover,
.mobile-menu__details a:focus-visible,
.mobile-menu__direct:hover,
.mobile-menu__direct:focus-visible {
  color: var(--rh-green);
}

.mobile-menu__badge {
  border: 1px solid rgb(255 255 255 / 28%);
  border-radius: 999px;
  color: var(--rh-green);
  flex: 0 0 auto;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1;
  padding: 4px 7px;
}

.mobile-menu__actions {
  display: grid;
  justify-items: start;
  gap: 12px;
}

.mobile-menu__cta {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  color: #28292d;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  background: var(--rh-green);
  border: 1px solid var(--rh-green);
  border-radius: 999px;
  cursor: pointer;
}

.mobile-menu__cta--outline {
  color: var(--rh-green);
  background: transparent;
}

@keyframes mobile-menu-in {
  from {
    opacity: 0;
    transform: translateY(-16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1350px) {
  .app-header__nav {
    gap: 18px;
  }

  .app-header__link {
    font-size: 12px;
  }

  .app-header__inner {
    grid-template-columns: 100px minmax(0, 1fr) auto;
    padding: 0 16px;
  }

  .app-header__cta {
    padding: 0 16px;
    font-size: 12px;
  }
}

@media (max-width: 1200px) {
  body {
    padding-top: 64px;
  }

  .app-header {
    background: #28292d;
  }

  .app-header__inner {
    display: flex;
    min-height: 64px;
    padding: 0 20px;
  }

  .app-header__logo img {
    width: 110px;
    max-width: 110px;
  }

  .app-header__nav,
  .app-header__cta {
    display: none;
  }

  .app-header__actions {
    margin-left: auto;
  }

  .app-header__burger {
    display: block;
    width: 22px;
    height: 14px;
  }

  .app-header__burger span {
    width: 22px;
    height: 2px;
    background: var(--rh-green);
  }

  .app-header__burger span:nth-child(1) {
    top: 0;
  }

  .app-header__burger span:nth-child(2),
  .app-header__burger span:nth-child(3) {
    top: 6px;
  }

  .app-header__burger span:nth-child(4) {
    top: 12px;
    left: unset;
    right: 0;
    width: 70%;
  }
}

button {
  font-family: inherit;
  text-align: inherit;
}
input[type="range"] {
  accent-color: #99ad8f;
}
</style>
