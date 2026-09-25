<script setup lang="ts">
import content from "~/data/faq-page.json";
const selected = ref(0);
function changeTab(index: number) {
  selected.value = (index + content.groups.length) % content.groups.length;
  document.getElementById(`faq-tab-${selected.value}`)?.focus();
}
useSeoMeta({
  title: "Digital Reputation & Risk Management FAQ | Reputation House",
  description: content.description,
});
</script>
<template>
  <main id="main-content">
    <PageHero
      eyebrow="Reputation House FAQ"
      title="Digital Reputation & Risk Management: Frequently Asked Questions"
      :description="content.description"
      tone="green"
      ><QuickRequestForm
    /></PageHero>
    <nav class="container breadcrumbs" aria-label="Breadcrumb">
      <NuxtLink to="/">Main page</NuxtLink><span>/</span><span>FAQ</span>
    </nav>
    <section class="faq-intro">
      <div class="container faq-intro__grid">
        <div>
          <p class="eyebrow">{{ content.intro[0] }}</p>
          <h2>{{ content.intro[1] }}</h2>
          <p>{{ content.intro[2] }}</p>
        </div>
        <a class="faq-audit-card" href="https://checkmyrisks.com/"
          ><span>{{ content.intro[3] }}</span
          ><small>{{ content.intro[4] }}</small></a
        >
      </div>
    </section>
    <section
      class="container faq-browser"
      aria-label="Frequently asked questions"
    >
      <div
        class="faq-tabs"
        role="tablist"
        aria-label="Question categories"
        aria-orientation="horizontal"
      >
        <button
          v-for="(group, index) in content.groups"
          :id="`faq-tab-${index}`"
          :key="group.title"
          role="tab"
          :aria-selected="selected === index"
          :aria-controls="`faq-panel-${index}`"
          :tabindex="selected === index ? 0 : -1"
          @click="selected = index"
          @keydown.down.prevent="changeTab(selected + 1)"
          @keydown.up.prevent="changeTab(selected - 1)"
          @keydown.right.prevent="changeTab(selected + 1)"
          @keydown.left.prevent="changeTab(selected - 1)"
        >
          {{ group.title }}
        </button>
      </div>
      <div
        v-for="(group, index) in content.groups"
        v-show="selected === index"
        :id="`faq-panel-${index}`"
        :key="group.title"
        role="tabpanel"
        :aria-labelledby="`faq-tab-${index}`"
      >
        <QuestionList :questions="group.questions" />
      </div>
    </section>
  </main>
</template>
<style scoped>
.breadcrumbs {
  display: flex;
  gap: 12px;
  margin-block: 24px;
  font-size: 14px;
  color: #777;
}
.breadcrumbs a {
  text-decoration: underline;
}
.faq-intro {
  padding-block: 60px;
  background: #f3f3f3;
}
.faq-intro__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
}
.faq-intro h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  margin: 30px 0;
}
.faq-intro p:not(.eyebrow) {
  font-size: 16px;
  line-height: 1.2;
}
.faq-audit-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px;
  border-left: 4px solid #99ad8f;
  border-radius: 0 0 24px 0;
  background: #deecd6 url("/images/back-green.svg") right top / cover;
}
.faq-audit-card small {
  display: block;
  margin-top: 80px;
  font-size: 14px;
  text-transform: uppercase;
}
.faq-audit-card:hover {
  background-color: #d3e5c9;
}
.faq-browser {
  padding-block: 80px 100px;
}
.faq-tabs {
  display: flex;
  overflow-x: auto;
  scrollbar-width: thin;
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
}
.faq-tabs button {
  flex-shrink: 0;
  border: 0;
  border-bottom: 1px solid transparent;
  padding: 24px 18px;
  background: white;
  color: #888;
  font-size: 20px;
  white-space: nowrap;
}
.faq-tabs button[aria-selected="true"] {
  border-bottom-color: #464646;
  color: #464646;
  font-weight: 600;
}
@media (max-width: 760px) {
  .faq-intro__grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .faq-browser {
    padding-block: 40px 60px;
  }
  .faq-tabs button {
    font-size: 16px;
  }
}
</style>
