<script setup lang="ts">
import CalculatorResult from "./CalculatorResult.vue";
import recovery from "~/data/calculators/reputation-recovery-timeline.json";
import risk from "~/data/calculators/reputation-risk-score.json";
import {
  calculate,
  exposure,
  surfaceNames,
  surfaceMax,
} from "~/utils/calculators/model";
const props = defineProps<{ kind: string }>();
type Step = {
  title: string;
  subtitle: string;
  groups: {
    key: string;
    title: string;
    options: { value: string; label: string; description?: string }[];
  }[];
};
const isRisk = computed(() => props.kind === "reputation-risk-score");
const steps = computed<Step[]>(() => (isRisk.value ? risk : recovery));
const step = ref(0),
  done = ref(false),
  answers = reactive<Record<string, string | number>>({});
const current = computed(() => steps.value[step.value]!);
const valid = computed(() =>
  current.value.groups.every((g) => answers[g.key] !== undefined),
);
const result = computed(() => calculate(props.kind, answers));
const scan = computed(() => exposure(answers));
const vulnerabilities = computed(
  () =>
    scan.value.values.filter((v, i) => v > (surfaceMax[i] ?? 0) * 0.5).length,
);
const answered = computed(() => Object.keys(answers).length);
function next() {
  if (!valid.value) return;
  if (step.value < steps.value.length - 1) step.value++;
  else done.value = true;
}
function reset() {
  for (const k of Object.keys(answers)) delete answers[k];
  step.value = 0;
  done.value = false;
}
</script>
<template>
  <section class="wizard-section">
    <div class="wizard-wrap" :class="{ 'risk-grid': isRisk }">
      <div v-if="!done || isRisk" class="wizard-form">
        <div class="wizard-meta">
          <span>{{ isRisk ? "EXPOSURE SCAN" : "RECOVERY TIMELINE" }}</span
          ><span>{{
            done ? "Scan complete" : `Step ${step + 1} of ${steps.length}`
          }}</span>
        </div>
        <progress
          :value="done ? steps.length : step + 1"
          :max="steps.length"
          aria-label="Progress"
        />
        <h3>{{ current.title }}</h3>
        <p v-if="current.subtitle">{{ current.subtitle }}</p>
        <fieldset v-for="group in current.groups" :key="group.key">
          <legend v-if="isRisk">{{ group.title }}</legend>
          <div class="options" :class="{ 'options-grid': !isRisk }">
            <label
              v-for="option in group.options"
              :key="option.value"
              :class="{ selected: answers[group.key] === option.value }"
            >
              <input
                v-model="answers[group.key]"
                type="radio"
                :name="group.key"
                :value="option.value"
                @change="done = false"
              /><span
                >{{ option.label
                }}<small v-if="option.description">{{
                  option.description
                }}</small></span
              >
            </label>
          </div>
        </fieldset>
        <div class="wizard-nav">
          <button
            v-if="step > 0"
            class="back"
            @click="
              step--;
              done = false;
            "
          >
            ← Back</button
          ><button :disabled="!valid" @click="next">
            {{
              step === steps.length - 1
                ? isRisk
                  ? "Run Exposure Scan →"
                  : "See My Timeline →"
                : isRisk
                  ? "Next Surface →"
                  : "Continue →"
            }}
          </button>
        </div>
      </div>
      <aside v-if="isRisk" class="wizard-result" aria-live="polite">
        <div class="wizard-meta">
          <span>{{ done ? "EXPOSURE REPORT" : "LIVE EXPOSURE MAP" }}</span
          ><span>{{
            answered ? `${answered}/20 signals` : "Awaiting signals..."
          }}</span>
        </div>
        <div class="exposure-total">
          <small>CURRENT EXPOSURE INDEX</small
          ><strong>{{ answered ? scan.total : "–" }}<small>/100</small></strong>
          <p>
            {{
              answered
                ? scan.status + " Exposure"
                : "Answer signals to begin analysis"
            }}
          </p>
        </div>
        <div v-for="(name, i) in surfaceNames" :key="name" class="surface">
          <span>{{ name }}</span
          ><progress
            :value="scan.values[i]"
            :max="surfaceMax[i]"
            :aria-label="name"
          /><b>{{ answered ? scan.values[i] : "–" }}</b>
        </div>
        <h4>SCAN LOG</h4>
        <p v-for="(name, i) in surfaceNames" :key="name" class="scan-log">
          {{ i < step || done ? "✓" : i === step ? "▶" : "·" }} {{ name }} —
          {{
            i < step || done ? "Completed" : i === step ? "Scanning" : "pending"
          }}
        </p>
        <template v-if="done"
          ><h4>Next steps</h4>
          <p>{{ vulnerabilities }} surfaces require attention.</p>
          <a href="https://checkmyrisks.com/">Get a Full Exposure Audit →</a
          ><button @click="reset">↺ Run another scenario</button></template
        >
      </aside>
      <div v-else-if="done" class="wizard-result">
        <CalculatorResult :result="result" /><button @click="reset">
          ↺ Run another scenario
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.wizard-section {
  background: #f7f7f7;
  padding: 56px 24px;
  color: #262626;
}
.wizard-wrap {
  max-width: 1000px;
  margin: auto;
}
.risk-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: start;
}
.wizard-form {
  padding: 40px 56px;
  background: white;
  border-radius: 20px;
}
.risk-grid .wizard-form {
  padding: 36px;
}
.wizard-meta {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 11px;
  color: #99ad8f;
  letter-spacing: 1px;
  margin-bottom: 12px;
}
.wizard-meta span:last-child {
  color: #999;
  letter-spacing: 0;
}
progress {
  width: 100%;
  height: 4px;
  accent-color: #99ad8f;
  display: block;
  border: 0;
  margin-bottom: 28px;
}
h3 {
  font-size: 20px;
  margin: 0 0 12px;
  font-weight: 600;
}
p {
  font-size: 14px;
  line-height: 1.5;
  color: #888;
}
fieldset {
  border: 0;
  margin: 22px 0 0;
  padding: 0;
}
legend {
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 600;
}
.options {
  display: grid;
  gap: 8px;
}
.options-grid {
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.options label {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f3f3f3;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 13px;
  cursor: pointer;
}
.options label.selected {
  border-color: #99ad8f;
  background: #dfecd9;
}
.options input {
  accent-color: #606c59;
  flex-shrink: 0;
}
.options-grid input {
  position: absolute;
  opacity: 0;
}
.options label:focus-within {
  outline: 2px solid #99ad8f;
}
.options small {
  display: block;
  color: #999;
  font-size: 11px;
  margin-top: 3px;
}
.wizard-nav {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}
button,
.wizard-result a {
  border: 0;
  border-radius: 999px;
  padding: 14px 20px;
  background: #262626;
  color: white;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  text-align: center;
}
button:disabled {
  opacity: 0.4;
  cursor: default;
}
.wizard-nav button {
  flex: 1;
}
.wizard-nav .back {
  flex: 0 0 auto;
  background: #eee;
  color: #555;
}
.wizard-result {
  background: #262626;
  border-radius: 20px;
  padding: 36px;
  color: white;
}
.wizard-result button {
  background: #bfd8b3;
  color: #262626;
  margin-top: 24px;
  width: 100%;
}
.wizard-result a {
  background: #bfd8b3;
  color: #262626;
}
.exposure-total {
  background: #ffffff08;
  border-radius: 10px;
  padding: 22px;
  margin: 24px 0;
}
.exposure-total > small {
  font-size: 10px;
  letter-spacing: 1px;
  color: #a5b59d;
}
.exposure-total strong {
  display: block;
  font-size: 40px;
  margin-top: 12px;
  color: #bfd8b3;
}
.exposure-total strong small {
  font-size: 14px;
  color: #777;
}
.surface {
  display: grid;
  grid-template-columns: 120px 1fr 24px;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #aaa;
  margin: 14px 0;
}
.surface progress {
  margin: 0;
}
.wizard-result h4 {
  font-size: 11px;
  color: #99ad8f;
  letter-spacing: 1px;
  margin: 28px 0 10px;
}
.scan-log {
  margin: 5px 0;
  font-size: 12px;
}
@media (max-width: 760px) {
  .risk-grid {
    grid-template-columns: 1fr;
  }
  .wizard-form,
  .risk-grid .wizard-form,
  .wizard-result {
    padding: 24px;
  }
  .options-grid {
    grid-template-columns: 1fr 1fr;
  }
  .wizard-section {
    padding: 32px 20px;
  }
  .surface {
    grid-template-columns: 110px 1fr 20px;
  }
}
</style>
