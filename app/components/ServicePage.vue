<script setup lang="ts">
import pages from "~/data/servicePages.json";
import type { ServicePageData, ServiceSection } from "~/types/service";
const props = defineProps<{ slug: string }>();
const page = computed(
  () => (pages as unknown as Record<string, ServicePageData>)[props.slug]!,
);
const consultation = useConsultation();
useSeoMeta({
  title: () => page.value.metaTitle,
  description: () => page.value.description,
});
function sectionStyle(section: ServiceSection) {
  return {
    backgroundColor: section.background,
    paddingTop: `${section.paddingTop}px`,
    paddingBottom: `${section.paddingBottom}px`,
  };
}
</script>
<template>
  <main id="main-content" class="service-page" :class="`service-page--${slug}`">
    <section
      class="service-hero"
      :style="{
        backgroundColor: page.hero.background,
        '--hero-pattern': page.hero.pattern
          ? `url('${page.hero.pattern}')`
          : undefined,
      }"
    >
      <div class="container service-hero__layout">
        <div class="service-hero__copy">
          <p class="service-eyebrow">{{ page.hero.eyebrow }}</p>
          <h1>{{ page.hero.title }}</h1>
          <ServiceRichText
            v-for="part in page.hero.body"
            :key="part"
            :html="part"
          />
          <button class="action-button" @click="consultation.open()">
            {{ page.hero.action }}
          </button>
          <small>{{ page.hero.note }}</small>
          <div v-if="page.hero.logos.length" class="service-hero__logos">
            <img
              v-for="logo in page.hero.logos"
              :key="logo.src"
              :src="logo.src"
              :alt="logo.alt"
            />
          </div>
        </div>
        <aside v-if="page.hero.coverage.length" class="service-coverage">
          <p>{{ page.hero.coverageTitle }}</p>
          <ul>
            <li v-for="(item, index) in page.hero.coverage" :key="item">
              <img
                :src="page.hero.coverageIcons[index] || '/images/scan.svg'"
                alt=""
              /><ServiceRichText :html="item" />
            </li>
          </ul>
        </aside>
      </div>
    </section>
    <section
      v-for="(section, index) in page.sections"
      :key="index"
      class="service-section"
      :class="[
        `service-section--${section.kind}`,
        { 'service-section--dark': section.background === '#262626' },
      ]"
      :style="sectionStyle(section)"
    >
      <div class="container">
        <header
          v-if="section.eyebrow || section.title"
          class="service-section__heading"
          :class="{ 'service-section__heading--split': section.aside?.length }"
        >
          <p v-if="section.eyebrow" class="service-eyebrow">
            {{ section.eyebrow }}
          </p>
          <h2 v-if="section.title">{{ section.title }}</h2>
          <div v-if="section.body?.length" class="service-section__description">
            <ServiceRichText
              v-for="part in section.body"
              :key="part"
              :html="part"
            />
          </div>
          <aside v-if="section.aside?.length" class="service-section__aside">
            <ServiceRichText
              v-for="part in section.aside"
              :key="part"
              :html="part"
            />
          </aside>
        </header>
        <div v-else-if="section.body?.length" class="service-section__prose">
          <ServiceRichText
            v-for="part in section.body"
            :key="part"
            :html="part"
          />
        </div>
        <ServiceComparison
          v-if="section.kind === 'compare'"
          :headings="section.headings || []"
          :rows="section.rows || []"
        />
        <ServicePlatform
          v-else-if="section.kind === 'showcase'"
          :slides="section.slides || []"
        />
        <ContentCarousel
          v-else-if="
            ['gallery', 'cases', 'signs'].includes(section.kind) &&
            section.cards?.length
          "
          :label="
            section.title ||
            (section.kind === 'gallery'
              ? 'AI platform screens'
              : 'Case studies')
          "
          :columns="
            section.kind === 'signs' ||
            (section.kind === 'cases' && section.cards.length === 2)
              ? 2
              : 3
          "
        >
          <ServiceCards
            v-for="(card, cardIndex) in section.cards"
            :key="cardIndex"
            :cards="[card]"
            :columns="1"
            :kind="section.kind"
            tone="white"
          />
        </ContentCarousel>
        <ServiceCards
          v-else-if="section.cards?.length"
          :cards="section.cards"
          :kind="section.kind"
          :columns="section.kind === 'roles' ? 3 : section.columns || 4"
          :tone="section.tone"
        />
        <nav
          v-if="section.kind === 'modules'"
          class="service-modules"
          aria-label="Platform modules"
        >
          <SiteLink
            v-for="item in section.items"
            :key="item"
            href="/risk-control-center"
            :class="{
              'is-active':
                item.includes('this page') ||
                (slug === 'ai-brand-monitoring' &&
                  item === 'AI Representation') ||
                (slug === 'digital-risk-protection' &&
                  item === 'Risk Signals & Alerts'),
            }"
            >{{ item }}</SiteLink
          >
        </nav>
        <div v-if="section.callout" class="service-callout">
          <h3>{{ section.callout.title }}</h3>
          <ServiceRichText
            v-for="part in section.callout.body"
            :key="part"
            :html="part"
          />
        </div>
        <div v-if="section.note?.length" class="service-note">
          <ServiceRichText
            v-for="part in section.note"
            :key="part"
            :html="part"
          />
        </div>
        <div v-if="section.actions?.length" class="service-actions">
          <ServiceAction
            v-for="action in section.actions"
            :key="action.label"
            :action="action"
          />
        </div>
        <QuickRequestForm v-if="section.kind === 'form'" />
        <QuestionList
          v-if="section.kind === 'faq'"
          :questions="section.questions || []"
        />
      </div>
    </section>
  </main>
</template>
<style src="./service-page.css"></style>
