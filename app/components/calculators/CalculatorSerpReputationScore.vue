<script setup lang="ts">
import CalculatorResult from "./CalculatorResult.vue";
import { calculate, money, revenue } from "~/utils/calculators/model";
const state = reactive<Record<string, string | number>>({
  negatives: "0",
  posone: "yes",
  wiki: "no",
  "rh-sc-owned": 5,
});
const ready = ref(false);
onMounted(() => {
  ready.value = true;
});
const submitted = ref(false);
const sourcesOpen = ref(false);
const result = computed(() => calculate("serp-reputation-score", state));
</script>
<template>
  <section class="rh-sc" :data-calculator-ready="ready">
    <div class="rh-sc-wrap">
      <div class="rh-sc-inner">
        <div class="rh-sc-form">
          <span class="rh-sc-eyebrow">Calculator</span>
          <span class="rh-sc-title">SERP Control Score</span>
          <span class="rh-sc-sub"
            >See how much of your branded search page you actually own — and
            what the gaps are costing you in lost clicks and trust.</span
          >
          <div class="rh-sc-q">
            <div class="rh-sc-slider-row">
              <span class="rh-sc-slider-val" id="rh-sc-owned-val">{{
                state["rh-sc-owned"]
              }}</span>
              <span class="rh-sc-slider-hint"
                >of top-10 results you control</span
              >
            </div>
            <input
              type="range"
              id="rh-sc-owned"
              min="0"
              max="10"
              step="1"
              v-model.number="state['rh-sc-owned']"
              aria-label="owned"
            />
            <div class="rh-sc-slider-marks"><span>0</span><span>10</span></div>
          </div>
          <div class="rh-sc-q">
            <span class="rh-sc-q-text">Negative results in top-10</span>
            <span class="rh-sc-q-hint"
              >Articles, complaints, review aggregators working against
              you</span
            >
            <div class="rh-sc-pills" data-q="negatives">
              <button
                class="rh-sc-pill"
                data-val="0"
                type="button"
                :class="{ selected: state['negatives'] === '0' }"
                @click="state['negatives'] = '0'"
                :aria-pressed="state['negatives'] === '0'"
              >
                None
              </button>
              <button
                class="rh-sc-pill"
                data-val="1"
                type="button"
                :class="{ selected: state['negatives'] === '1' }"
                @click="state['negatives'] = '1'"
                :aria-pressed="state['negatives'] === '1'"
              >
                1
              </button>
              <button
                class="rh-sc-pill"
                data-val="2"
                type="button"
                :class="{ selected: state['negatives'] === '2' }"
                @click="state['negatives'] = '2'"
                :aria-pressed="state['negatives'] === '2'"
              >
                2
              </button>
              <button
                class="rh-sc-pill"
                data-val="3"
                type="button"
                :class="{ selected: state['negatives'] === '3' }"
                @click="state['negatives'] = '3'"
                :aria-pressed="state['negatives'] === '3'"
              >
                3+
              </button>
            </div>
          </div>
          <div class="rh-sc-q">
            <span class="rh-sc-q-text">Is your own site in position #1?</span>
            <span class="rh-sc-q-hint"
              >The #1 result gets more clicks than positions #3–#10
              combined</span
            >
            <div class="rh-sc-toggle-row" data-q="posone">
              <button
                class="rh-sc-toggle"
                data-val="yes"
                type="button"
                :class="{ selected: state['posone'] === 'yes' }"
                @click="state['posone'] = 'yes'"
                :aria-pressed="state['posone'] === 'yes'"
              >
                Yes
              </button>
              <button
                class="rh-sc-toggle"
                data-val="no"
                type="button"
                :class="{ selected: state['posone'] === 'no' }"
                @click="state['posone'] = 'no'"
                :aria-pressed="state['posone'] === 'no'"
              >
                No
              </button>
            </div>
          </div>
          <div class="rh-sc-q">
            <span class="rh-sc-q-text"
              >Wikipedia article or Knowledge Panel?</span
            >
            <span class="rh-sc-q-hint"
              >Either counts — both signal Google entity trust</span
            >
            <div class="rh-sc-toggle-row" data-q="wiki">
              <button
                class="rh-sc-toggle"
                data-val="yes"
                type="button"
                :class="{ selected: state['wiki'] === 'yes' }"
                @click="state['wiki'] = 'yes'"
                :aria-pressed="state['wiki'] === 'yes'"
              >
                Yes
              </button>
              <button
                class="rh-sc-toggle"
                data-val="no"
                type="button"
                :class="{ selected: state['wiki'] === 'no' }"
                @click="state['wiki'] = 'no'"
                :aria-pressed="state['wiki'] === 'no'"
              >
                No
              </button>
            </div>
          </div>
          <button class="rh-sc-btn" @click="submitted = true">
            Calculate my SERP score →
          </button>
        </div>
        <div class="rh-sc-result">
          <div class="rh-sc-empty" id="rh-sc-empty" v-if="!submitted">
            <span class="rh-sc-empty-text"
              >Fill in what Google shows for your brand — your SERP Control
              Score appears here</span
            >
          </div>
          <calculator-result v-else="" :result="result"></calculator-result>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.rh-sc {
  width: 100%;
  background: #f7f7f7;
}
.rh-sc-wrap {
  max-width: 1160px;
  margin: 0 auto;
  padding: 56px 80px;
}
.rh-sc-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: start;
}

/* LEFT: FORM */
.rh-sc-form {
  background: #ffffff;
  border-radius: 20px;
  padding: 40px;
}
.rh-sc-eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 6px 0;
}
.rh-sc-title {
  font-size: 19px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin-bottom: 8px;
}
.rh-sc-sub {
  font-size: 12.5px;
  font-weight: 600;
  color: #808080;
  display: block;
  margin-bottom: 28px;
  line-height: 1.55;
}

.rh-sc-q {
  margin: 0 0 24px 0;
}
.rh-sc-q-text {
  font-size: 13px;
  font-weight: 700;
  color: #262626;
  display: block;
  margin: 0 0 4px 0;
}
.rh-sc-q-hint {
  font-size: 11px;
  font-weight: 600;
  color: #b3b3b3;
  display: block;
  margin: 0 0 10px 0;
}

/* Slider */
.rh-sc-slider-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 8px;
}
.rh-sc-slider-val {
  font-size: 24px;
  font-weight: 700;
  color: #262626;
}
.rh-sc-slider-hint {
  font-size: 11px;
  font-weight: 600;
  color: #a3a3a3;
}
input[type="range"] {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #f0f0f0;
  outline: none;
  -webkit-appearance: none;
  accent-color: #99ad8f;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #99ad8f;
  cursor: pointer;
  border: 3px solid #fff;
  box-shadow: 0 0 0 1px #99ad8f;
}
input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #99ad8f;
  cursor: pointer;
  border: 3px solid #fff;
}
.rh-sc-slider-marks {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
}
.rh-sc-slider-marks span {
  font-size: 10px;
  font-weight: 600;
  color: #c2c2c2;
}

/* Negative pills */
.rh-sc-pills {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.rh-sc-pill {
  background: #f5f5f5;
  border-radius: 100px;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
  font-size: 13px;
  font-weight: 600;
  color: #262626;
}
.rh-sc-pill:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-sc-pill.selected {
  background: #262626;
  border-color: #262626;
  color: #fff;
}

/* Toggle yes/no */
.rh-sc-toggle-row {
  display: flex;
  gap: 8px;
}
.rh-sc-toggle {
  flex: 1;
  text-align: center;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 14px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;
  font-size: 13px;
  font-weight: 600;
  color: #262626;
}
.rh-sc-toggle:hover {
  background: #dfecd9;
  border-color: #bfd8b3;
}
.rh-sc-toggle.selected {
  background: #262626;
  border-color: #262626;
  color: #fff;
}

.rh-sc-btn {
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
.rh-sc-btn:hover {
  background: #464646;
}

/* RIGHT: RESULT */
.rh-sc-result {
  background: #262626;
  border-radius: 20px;
  padding: 40px;
  position: sticky;
  top: 24px;
  min-height: 520px;
  display: flex;
  flex-direction: column;
}

.rh-sc-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.rh-sc-empty-text {
  font-size: 12px;
  font-weight: 600;
  color: #585858;
  max-width: 230px;
  line-height: 1.6;
}

.rh-sc-filled {
  display: none;
  flex-direction: column;
}

/* Score gauge */
.rh-sc-score-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin: 0 0 4px 0;
}

.rh-sc-gauge-wrap {
  display: flex;
  align-items: flex-end;
  gap: 14px;
  margin-bottom: 8px;
}
.rh-sc-score-big {
  font-size: 52px;
  font-weight: 700;
  line-height: 1;
}
.rh-sc-score-max {
  font-size: 18px;
  font-weight: 600;
  color: #585858;
  padding-bottom: 8px;
}

.rh-sc-bar-wrap {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  height: 10px;
  overflow: hidden;
  margin-bottom: 8px;
}
.rh-sc-bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.7s ease;
}

.rh-sc-zone-label {
  font-size: 12px;
  font-weight: 700;
  display: block;
  margin-bottom: 20px;
}

/* Control % strip */
.rh-sc-ctrl-strip {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 16px 18px;
  margin-bottom: 14px;
}
.rh-sc-ctrl-text {
  font-size: 13px;
  font-weight: 600;
  color: #f7f7f7;
  line-height: 1.5;
}
.rh-sc-ctrl-text b {
  color: #bfd8b3;
}

/* Risk map */
.rh-sc-risk-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f7f7f7;
  display: block;
  margin-bottom: 10px;
}
.rh-sc-risks {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
}
.rh-sc-risk-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.rh-sc-risk-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 4px;
  flex-shrink: 0;
}
.rh-sc-risk-text {
  font-size: 12.5px;
  font-weight: 600;
  color: #a3a3a3;
  line-height: 1.5;
}
.rh-sc-risk-text b {
  color: #ffffff;
}

/* Growth potential */
.rh-sc-growth {
  background: rgba(191, 216, 179, 0.08);
  border: 1px solid rgba(191, 216, 179, 0.16);
  border-radius: 12px;
  padding: 16px 18px;
  margin-bottom: 16px;
}
.rh-sc-growth-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #99ad8f;
  display: block;
  margin-bottom: 8px;
}
.rh-sc-growth-text {
  font-size: 13px;
  font-weight: 600;
  color: #bfd8b3;
  line-height: 1.55;
}
.rh-sc-growth-text b {
  color: #ffffff;
}

/* Sources */
.rh-sc-sources {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.rh-sc-src-toggle {
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  cursor: pointer;
  user-select: none;
}
.rh-sc-src-toggle:hover {
  color: #808080;
}
.rh-sc-src-list {
  display: none;
  font-size: 10px;
  font-weight: 600;
  color: #585858;
  line-height: 1.85;
  margin-top: 8px;
}
.rh-sc-src-list.open {
  display: block;
}

@media (max-width: 860px) {
  .rh-sc-wrap {
    padding: 32px 20px;
  }
  .rh-sc-inner {
    grid-template-columns: 1fr;
  }
  .rh-sc-result {
    position: static;
    min-height: auto;
  }
  .rh-sc-form {
    padding: 28px 22px;
  }
}
@media (max-width: 960px) {
  .rh-sc-wrap {
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
