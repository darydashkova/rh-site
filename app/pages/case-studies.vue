<script setup lang="ts">
import { antiCases, cases, categories } from "~/data/caseCatalog";
import "./case-studies.css";

const route = useRoute();
const activeTab = ref<"cases" | "anti">(
  route.query.tab === "anti" ? "anti" : "cases",
);
const category = ref("All");
const visibleCount = ref(6);
const items = computed(() => (activeTab.value === "cases" ? cases : antiCases));
const filteredItems = computed(() =>
  category.value === "All"
    ? items.value
    : items.value.filter((item) => item.category === category.value),
);
const visibleItems = computed(() =>
  filteredItems.value.slice(0, visibleCount.value),
);

function selectTab(tab: "cases" | "anti") {
  activeTab.value = tab;
  category.value = "All";
  visibleCount.value = 6;
}
watch(
  () => route.query.tab,
  (value) => selectTab(value === "anti" ? "anti" : "cases"),
);
function selectCategory(value: string) {
  category.value = value;
  visibleCount.value = 6;
}

useSeoMeta({
  title: "Brand Reputation Management Case Studies | Reputation House",
  description:
    "Explore how brands detect threats, control digital narratives and grow their reputation with Reputation House.",
});
</script>

<template>
  <main id="main-content" class="case-studies-page">
    <section class="cases-hero">
      <div class="container">
        <p class="cases-hero__eyebrow">Case Studies</p>
        <h1>
          How Companies Protect<br class="desktop-break" />
          and Grow Their Reputation<br class="desktop-break" />
          with Us
        </h1>
        <p>
          These reputation management case studies explore how brands across
          industries detect threats early, control digital narratives and turn
          their reputation into a competitive advantage with Reputation House
        </p>
        <ActionButton variant="light">Discuss Your Case</ActionButton>
      </div>
    </section>

    <section
      id="case-directory"
      class="case-directory"
      style="scroll-margin-top: 90px"
    >
      <div class="container">
        <nav class="cases-breadcrumb" aria-label="Breadcrumb">
          <SiteLink href="/">Main page</SiteLink><span>/</span
          ><span>Case studies</span>
        </nav>
        <div class="case-tabs" role="tablist" aria-label="Case type">
          <button
            role="tab"
            :aria-selected="activeTab === 'cases'"
            @click="selectTab('cases')"
          >
            Cases
          </button>
          <button
            role="tab"
            :aria-selected="activeTab === 'anti'"
            @click="selectTab('anti')"
          >
            Anti-cases
          </button>
        </div>
        <div class="case-filters" aria-label="Filter by industry">
          <button
            v-for="item in categories"
            :key="item"
            :class="{ 'is-active': category === item }"
            :aria-pressed="category === item"
            @click="selectCategory(item)"
          >
            {{ item }}
          </button>
        </div>
        <div class="case-grid" role="tabpanel">
          <article
            v-for="item in visibleItems"
            :key="item.href"
            class="case-card"
          >
            <SiteLink
              :href="item.href"
              class="case-card__image-link"
              :aria-label="item.title"
              ><img
                :src="item.image"
                :alt="item.category"
                loading="lazy"
              /><span>{{ item.category }}</span></SiteLink
            >
            <div class="case-card__body">
              <h2>
                <SiteLink :href="item.href">{{ item.title }}</SiteLink>
              </h2>
              <p>{{ item.description }}</p>
              <SiteLink :href="item.href" class="case-card__more"
                >Read More</SiteLink
              >
            </div>
          </article>
        </div>
        <p v-if="filteredItems.length === 0" class="cases-empty">
          No {{ activeTab === "cases" ? "cases" : "anti-cases" }} in this
          category yet.
        </p>
        <button
          v-if="visibleCount < filteredItems.length"
          class="cases-show-more"
          @click="visibleCount += 6"
        >
          Show More
        </button>
      </div>
    </section>

    <section class="cases-risk-check">
      <div class="container">
        <p>Still have some doubts?</p>
        <h2>Check your digital reputation risks right now</h2>
        <span
          >Free express analysis in few minutes, no credit card required</span
        >
        <ActionButton href="https://checkmyrisks.com/" variant="light"
          >Run Risk Check</ActionButton
        >
      </div>
    </section>
  </main>
</template>
