<script setup lang="ts">
import type { RhMode } from "~/data/rhModes";
import rhDetails from "~/data/rhDetails.json";
import "./rh-mode-page.css";

const props = defineProps<{ mode: RhMode }>();
const details = computed(() => rhDetails[props.mode.key]);
const id = useId();
const layer = ref<"technology" | "services">("technology");
const activeRole = ref(0);
const scenario = computed(() => details.value.scenarios[activeRole.value]!);
function selectRole(index: number, focus = false) {
  activeRole.value =
    (index + details.value.scenarios.length) % details.value.scenarios.length;
  if (focus)
    nextTick(() =>
      document.getElementById(`${id}-role-${activeRole.value}`)?.focus(),
    );
}
function selectLayer(value: "technology" | "services", focus = false) {
  layer.value = value;
  if (focus) nextTick(() => document.getElementById(`${id}-${value}`)?.focus());
}
const activeHeroSlide = ref(0);
const activeRiskSlide = ref(0);
const riskSlides = [
  "/images/risk-check-slide-1.webp",
  "/images/risk-check-slide-2.webp",
  "/images/risk-check-slide-3.png",
  "/images/risk-check-slide-4.webp",
];
const heroSlides = [1, 2, 3, 4].map(
  (number) => `/images/rh-platform-slide-${number}.webp`,
);
function changeHeroSlide(direction: number) {
  activeHeroSlide.value =
    (activeHeroSlide.value + direction + heroSlides.length) % heroSlides.length;
}
const otherModes = computed(() =>
  [
    {
      label: "RH Detection",
      href: "/rh-detection",
      description: "See and understand",
    },
    {
      label: "RH Control",
      href: "/rh-control",
      description: "Influence your narrative",
    },
    {
      label: "RH Defence",
      href: "/rh-defence",
      description: "Respond to crisis",
    },
    {
      label: "RH Personal",
      href: "/rh-personal",
      description: "Shape your identity",
    },
  ].filter((item) => item.href !== `/rh-${props.mode.key}`),
);
</script>

<template>
  <main
    id="main-content"
    class="rh-mode-page"
    :class="`rh-mode-page--${mode.key}`"
  >
    <section class="rh-mode-hero">
      <div class="rh-mode-container rh-mode-hero__grid">
        <div class="rh-mode-hero__copy">
          <p class="rh-mode-eyebrow">{{ mode.eyebrow }}</p>
          <h1>{{ mode.title }}</h1>
          <p class="rh-mode-hero__description">{{ mode.description }}</p>
          <ActionButton>{{ mode.action }}</ActionButton>
        </div>
        <div class="rh-mode-hero__visual">
          <img
            :src="heroSlides[activeHeroSlide]"
            :alt="`Risk Control Center platform screen ${activeHeroSlide + 1}`"
          />
          <button
            class="rh-mode-hero__arrow rh-mode-hero__arrow--previous"
            type="button"
            aria-label="Previous platform screen"
            @click="changeHeroSlide(-1)"
          >
            ‹
          </button>
          <button
            class="rh-mode-hero__arrow rh-mode-hero__arrow--next"
            type="button"
            aria-label="Next platform screen"
            @click="changeHeroSlide(1)"
          >
            ›
          </button>
        </div>
      </div>
    </section>
    <section class="rh-mode-video">
      <div class="rh-mode-container">
        <h2>{{ mode.videoTitle }}</h2>
        <div
          class="rh-mode-video__frame"
          role="img"
          :aria-label="`${mode.videoTitle} video preview`"
        ></div>
      </div>
    </section>

    <section class="rh-mode-section rh-mode-pains">
      <div class="rh-mode-container">
        <div class="rh-mode-rule">
          <p>{{ mode.painEyebrow }}</p>
          <h2>{{ mode.painTitle }}</h2>
        </div>
        <ContentCarousel
          :label="`${mode.key} risks`"
          :columns="3"
          :card-width="340"
          ><article
            v-for="(pain, index) in details.pains"
            :key="pain.title"
            class="rh-mode-pain"
          >
            <span>0{{ index + 1 }}</span>
            <h3>{{ pain.title }}</h3>
            <em v-if="pain.subtitle">{{ pain.subtitle }}</em>
            <p>{{ pain.text }}</p>
          </article></ContentCarousel
        >
      </div>
    </section>

    <section class="rh-mode-callout">
      <div class="rh-mode-container">
        <p class="rh-mode-eyebrow">{{ mode.calloutEyebrow }}</p>
        <h2>{{ mode.calloutTitle }}</h2>
        <p>{{ mode.calloutText }}</p>
        <ActionButton>{{ mode.action }}</ActionButton>
      </div>
    </section>

    <section class="rh-mode-section rh-mode-roles">
      <div class="rh-mode-container">
        <div class="rh-mode-rule">
          <p>{{ mode.rolesEyebrow }}</p>
          <h2>{{ mode.rolesTitle }}</h2>
          <p v-if="mode.key === 'control'" class="rh-mode-section-intro">
            {{ mode.rolesDescription }}
          </p>
        </div>
        <ContentCarousel
          :label="`${mode.key} roles`"
          :columns="3"
          :card-width="340"
          ><article
            v-for="role in details.roles"
            :key="role.title"
            class="rh-mode-role"
          >
            <h3>{{ role.title }}</h3>
            <span>{{ role.audience }}</span>
            <RhScenarioCell :content="role.content" />
            <blockquote>{{ role.quote }}</blockquote>
          </article></ContentCarousel
        >
      </div>
    </section>

    <section class="rh-mode-section rh-mode-inside">
      <div class="rh-mode-container">
        <div class="rh-mode-inside__intro">
          <div>
            <p class="rh-mode-eyebrow">{{ mode.priceLabel }}</p>
            <h2>{{ mode.insideTitle }}</h2>
          </div>
          <p>{{ mode.insideDescription }}</p>
        </div>
        <div class="rh-mode-tabs" role="tablist" aria-label="Plan contents">
          <button
            :id="`${id}-technology`"
            role="tab"
            :aria-controls="`${id}-plan-panel`"
            :tabindex="layer === 'technology' ? 0 : -1"
            :aria-selected="layer === 'technology'"
            @click="layer = 'technology'"
            @keydown.right.prevent="selectLayer('services', true)"
            @keydown.left.prevent="selectLayer('services', true)"
          >
            Technology Layer</button
          ><button
            :id="`${id}-services`"
            role="tab"
            :aria-controls="`${id}-plan-panel`"
            :tabindex="layer === 'services' ? 0 : -1"
            :aria-selected="layer === 'services'"
            @click="layer = 'services'"
            @keydown.right.prevent="selectLayer('technology', true)"
            @keydown.left.prevent="selectLayer('technology', true)"
          >
            Service Layer
          </button>
        </div>
        <div
          :id="`${id}-plan-panel`"
          class="rh-mode-platform"
          role="tabpanel"
          :aria-labelledby="`${id}-${layer}`"
          tabindex="0"
        >
          <h3>
            {{
              layer === "technology"
                ? details.platformTitle
                : details.serviceTitle
            }}
          </h3>
          <p v-if="layer === 'technology'">
            {{
              layer === "technology"
                ? details.platformDescription
                : "A dedicated team interprets what the platform finds and turns it into the right action."
            }}
          </p>
          <div class="rh-mode-feature-grid">
            <article
              v-for="feature in layer === 'technology'
                ? details.technology
                : details.services"
              :key="feature.title"
            >
              <h4>{{ feature.title }}</h4>
              <p>{{ feature.text }}</p>
              <span>✓ &nbsp; {{ feature.badge }}</span>
            </article>
          </div>
        </div>
        <div class="rh-mode-statement">
          <p>{{ details.statementTitle }}</p>
          <ContentCarousel :columns="1" :label="`${mode.key} approach`">
            <div
              v-for="(statement, index) in details.statements"
              :key="statement"
              class="rh-mode-statement__slide"
            >
              <blockquote>{{ statement }}</blockquote>
              <span>0{{ index + 1 }}</span>
            </div>
          </ContentCarousel>
        </div>
      </div>
    </section>

    <section class="rh-mode-section rh-mode-process">
      <div class="rh-mode-container">
        <div class="rh-mode-inside__intro">
          <div>
            <p class="rh-mode-eyebrow">
              What Happens After You Submit a Request
            </p>
            <h2>{{ details.processIntro[1] }}</h2>
          </div>
          <p>{{ details.processIntro[2] }}</p>
        </div>
        <div class="rh-mode-process__steps">
          <article v-for="(step, index) in details.process" :key="step.title">
            <div class="rh-mode-process__icon" aria-hidden="true">
              <svg
                v-if="index === 0"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
              >
                <rect x="5" y="9" width="38" height="34" />
                <path d="M5 17h38M14 5v8M34 5v8" />
                <text
                  x="10"
                  y="33"
                  fill="currentColor"
                  stroke="none"
                  font-size="11"
                >
                  24/7
                </text>
              </svg>
              <svg
                v-else-if="index === 1"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
              >
                <path d="M6 40V8M6 40h37M10 33l9-10 8 5 11-17M33 11h5v5" />
              </svg>
              <svg
                v-else-if="index === 2"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
              >
                <path d="M24 5 45 42H3L24 5Z" />
                <path d="M24 17v12M24 34v2" stroke-width="2" />
              </svg>
              <svg
                v-else
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                stroke-width="1.3"
              >
                <circle cx="22" cy="13" r="8" />
                <path
                  d="M6 39v-4c0-8 7-13 16-13 4 0 8 1 11 4M32 34l10 10M42 34 32 44"
                />
              </svg>
            </div>
            <span>STEP 0{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section
      v-if="mode.key === 'control'"
      class="rh-mode-section rh-mode-scope"
    >
      <div class="rh-mode-container">
        <p class="rh-mode-eyebrow">Platform Scope</p>
        <h2>{{ mode.scopeTitle }}</h2>
        <div class="rh-mode-scope__grid">
          <article v-for="item in details.scope" :key="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
        <aside v-if="details.scopeStatistic" class="rh-mode-scope__statistic">
          <div>
            <strong>{{ details.scopeStatistic.value }}</strong
            ><span>{{ details.scopeStatistic.label }}</span>
          </div>
          <p>{{ details.scopeStatistic.text }}</p>
        </aside>
      </div>
    </section>

    <section class="rh-mode-section rh-mode-scenarios">
      <div class="rh-mode-container">
        <p class="rh-mode-eyebrow">Scenarios</p>
        <h2>Explore key scenarios by roles</h2>
        <div
          class="rh-mode-scenario-tabs"
          role="tablist"
          aria-label="Role scenarios"
        >
          <button
            v-for="(role, index) in details.scenarios"
            :key="role.title"
            :id="`${id}-role-${index}`"
            role="tab"
            :aria-controls="`${id}-scenario`"
            :tabindex="activeRole === index ? 0 : -1"
            :aria-selected="activeRole === index"
            @click="selectRole(index)"
            @keydown.right.prevent="selectRole(index + 1, true)"
            @keydown.left.prevent="selectRole(index - 1, true)"
            @keydown.home.prevent="selectRole(0, true)"
            @keydown.end.prevent="
              selectRole(details.scenarios.length - 1, true)
            "
          >
            {{ role.tab }}
          </button>
        </div>
        <article
          :id="`${id}-scenario`"
          class="rh-mode-scenario"
          role="tabpanel"
          :aria-labelledby="`${id}-role-${activeRole}`"
          tabindex="0"
        >
          <h3>{{ scenario.title }}</h3>
          <p>{{ scenario.audience }}</p>
          <div
            v-for="(row, index) in scenario.rows"
            :key="index"
            class="rh-mode-scenario__row"
          >
            <div>
              <span
                class="rh-mode-scenario__label"
                :class="{ 'rh-mode-scenario__label--repeat': index > 0 }"
                >Situation</span
              ><RhScenarioCell :content="row.situation" />
            </div>
            <div>
              <span
                class="rh-mode-scenario__label"
                :class="{ 'rh-mode-scenario__label--repeat': index > 0 }"
                >How RH {{ mode.key }} helps</span
              ><RhScenarioCell :content="row.help" />
            </div>
            <div>
              <span
                class="rh-mode-scenario__label"
                :class="{ 'rh-mode-scenario__label--repeat': index > 0 }"
                >Results</span
              ><RhScenarioCell :content="row.result" />
            </div>
          </div>
        </article>
      </div>
    </section>

    <template v-if="mode.key === 'defence'">
      <section class="rh-mode-section rh-mode-scope">
        <div class="rh-mode-container">
          <p class="rh-mode-eyebrow">Crisis Management</p>
          <h2>
            Crisis Management Case Studies: How Enterprise Clients Handle
            Reputation Crises
          </h2>
          <div class="rh-mode-scope__grid">
            <article v-for="item in details.scope" :key="item.title">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>
      <section class="rh-mode-section rh-mode-retainer">
        <div class="rh-mode-container">
          <p class="rh-mode-eyebrow">Pricing & Retainer</p>
          <h2>Online Reputation Management Pricing and Retainer Structure</h2>
          <div class="rh-mode-retainer__intro">
            <div>
              <strong>{{ details.pricing[0] }}</strong
              ><span>{{ details.pricing[1] }}</span>
            </div>
            <p>{{ details.pricing[2] }}</p>
          </div>
          <div class="rh-mode-scope__grid">
            <article>
              <h3>{{ details.pricing[3] }}</h3>
              <p>{{ details.pricing[4] }}</p>
            </article>
            <article>
              <h3>{{ details.pricing[5] }}</h3>
              <p>{{ details.pricing[6] }}</p>
            </article>
          </div>
        </div>
      </section>
    </template>

    <section class="rh-mode-risk-check">
      <div class="rh-mode-container">
        <div class="rh-mode-risk-check__copy">
          <p class="rh-mode-eyebrow">{{ details.risk.eyebrow }}</p>
          <h2>{{ details.risk.title }}</h2>
          <p>{{ details.risk.text }}</p>
          <ActionButton href="https://checkmyrisks.com/" variant="light"
            >Try Risk Check For Free</ActionButton
          >
        </div>
        <div class="rh-mode-risk-check__visual">
          <img
            :src="riskSlides[activeRiskSlide]"
            :alt="`Risk Check diagnostic screen ${activeRiskSlide + 1}`"
            loading="lazy"
          />
          <button
            class="rh-mode-hero__arrow rh-mode-hero__arrow--previous"
            type="button"
            aria-label="Previous Risk Check screen"
            @click="activeRiskSlide = (activeRiskSlide + 3) % 4"
          >
            ‹
          </button>
          <button
            class="rh-mode-hero__arrow rh-mode-hero__arrow--next"
            type="button"
            aria-label="Next Risk Check screen"
            @click="activeRiskSlide = (activeRiskSlide + 1) % 4"
          >
            ›
          </button>
        </div>
      </div>
    </section>
    <section class="rh-mode-section rh-mode-faq">
      <div class="rh-mode-container">
        <h2>Frequently Asked Questions</h2>
        <QuestionList :questions="details.questions" :initial-open="0" />
      </div>
    </section>
    <section class="rh-mode-final">
      <div class="rh-mode-container">
        <p class="rh-mode-eyebrow">{{ details.final.eyebrow }}</p>
        <h2>{{ details.final.title }}</h2>
        <p>{{ details.final.text }}</p>
        <RhContactForm
          :action="details.final.action"
          :note="details.final.note"
        />
        <a :href="`mailto:${details.final.email}`">{{ details.final.email }}</a>
      </div>
    </section>
    <section class="rh-mode-other">
      <div class="rh-mode-container">
        <p class="rh-mode-eyebrow">Other Reputation House products</p>
        <div>
          <SiteLink
            v-for="item in otherModes"
            :key="item.href"
            :href="item.href"
            ><strong>{{ item.label }}</strong
            ><span>{{ item.description }} ↗</span></SiteLink
          >
        </div>
      </div>
    </section>
  </main>
</template>
