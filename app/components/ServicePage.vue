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
    "--section-top": `${section.paddingTop}px`,
    "--section-bottom": `${section.paddingBottom}px`,
    "--split-copy-width": section.copyWidth
      ? `${section.copyWidth}px`
      : undefined,
    "--aside-height": section.asideHeight
      ? `${section.asideHeight}px`
      : undefined,
    backgroundColor: section.background,
    "--aside-image": section.asideImage ? `url('${section.asideImage}')` : undefined,
    "--cover-height": section.coverHeight,
    "--cover-copy-width": section.coverCopyWidth ? `${section.coverCopyWidth}px` : undefined,
    "--cover-image": section.coverImage ? `url('${section.coverImage}')` : undefined,
    "--section-pattern": section.patternImage ? `url('${section.patternImage}')` : undefined,
    paddingTop: `${section.paddingTop}px`,
    paddingBottom: `${section.paddingBottom}px`,
  };
}
</script>
<template>
  <main
    id="main-content"
    class="service-page"
    :class="[
      `service-page--${slug}`,
      { 'control-service': page.variant === 'control' },
      { 'new-service': page.newService, 'defence-service': page.theme === 'defence' },
      { 'personal-service': page.personalService, 'personal-service--split-hero': page.hero.split },
    ]"
  >
    <section
      class="service-hero"
      :style="{
        backgroundColor: page.hero.background,
        '--hero-title-width': page.hero.titleWidth ? `${page.hero.titleWidth}px` : undefined,
        '--hero-body-width': page.hero.bodyWidth ? `${page.hero.bodyWidth}px` : undefined,
        '--hero-pattern': page.hero.pattern
          ? `url('${page.hero.pattern}')`
          : undefined,
      }"
      :class="{ 'service-hero--compact': page.hero.compact }"
    >
      <div class="container service-hero__layout">
        <div class="service-hero__copy">
          <p class="service-eyebrow">{{ page.hero.eyebrow }}</p>
          <h1>{{ page.hero.title }}</h1>
          <ServiceFormattedText
            v-for="part in page.hero.body"
            :key="part"
            :text="part"
          />
          <button
            v-if="!page.hero.form"
            class="action-button"
            @click="consultation.open()"
          >
            {{ page.hero.action }}
          </button>
          <small>{{ page.hero.note }}</small>
          <div
            v-if="page.hero.logos.length && !page.hero.reviewScale"
            class="service-hero__logos"
          >
            <p
              v-if="slug === 'ai-influence-services'"
              class="service-hero__logos-caption"
            >
              Covered across
            </p>
            <img
              v-for="logo in page.hero.logos"
              :key="logo.src"
              :src="logo.src"
              :alt="logo.alt"
            />
          </div>
        </div>
        <div
          v-if="page.hero.reviewScale"
          class="review-orbit"
          aria-label="Review platforms: Google, G2, Trustpilot, Clutch and Glassdoor"
        >
          <div class="review-orbit__summary">
            <h2>A typical unmanaged review mix</h2>
            <img
              :src="page.hero.reviewScale"
              alt="Illustrative mix of positive, neutral and negative reviews"
            />
            <p>
              Illustrative example, not a client dataset. Your program starts
              with a real audit of your own online reviews and their sentiment
              mix.
            </p>
          </div>
          <div
            v-for="logo in page.hero.logos"
            :key="logo.src"
            class="review-orbit__platform"
            :class="`review-orbit__platform--${logo.alt}`"
          >
            <img :src="logo.src" alt="" /><span v-if="logo.alt === 'google'"
              >Google<br />Reviews</span
            ><span v-else>{{ logo.alt }}</span>
          </div>
          <div class="review-orbit__platform review-orbit__platform--industry">
            <span aria-hidden="true" class="review-orbit__plus">+</span
            >Industry-<br />specific
          </div>
        </div>
        <aside v-if="page.hero.coverage.length" class="service-coverage">
          <p>{{ page.hero.coverageTitle }}</p>
          <ul>
            <li v-for="(item, index) in page.hero.coverage" :key="item">
              <img
                :src="page.hero.coverageIcons[index] || '/images/scan.svg'"
                alt=""
              /><ServiceFormattedText :text="item" />
            </li>
          </ul>
        </aside>
      </div>
      <div v-if="page.hero.form" class="container serm-hero-form">
        <h2>Get Your Free SERM Audit</h2>
        <p>
          We'll analyze what Google currently shows about your brand and send
          you a custom strategy within 3 business days. Fully confidential.
        </p>
        <QuickRequestForm button-label="Submit" />
      </div>
      <nav
        v-if="page.hero.form"
        class="container serm-breadcrumb"
        aria-label="Breadcrumb"
      >
        <SiteLink href="/">Main page</SiteLink><span>/</span
        ><SiteLink href="/solutions">Solutions for companies</SiteLink
        ><span>/</span><span>Search engine reputation management (SERM)</span>
      </nav>
    </section>
    <section
      v-for="(section, index) in page.sections"
      :key="index"
      class="service-section"
      :data-reference-id="section.referenceId"
      :data-section-index="index"
      :class="[
        `service-section--${section.kind}`,
        section.layout ? `monitoring-${section.layout}` : undefined,
        { 'service-section--dark': section.background === '#262626' },
        { 'service-section--cover': section.coverHeight },
        { 'service-section--standard-cards': section.standardCards },
        { 'service-section--editorial': section.editorialBody },
        { 'service-section--full-split-title': section.splitTitleFull },
        { 'service-section--stacked-headings': section.stackedHeadings },
        { 'service-section--emphasis-description': section.descriptionEmphasis },
      ]"
      :style="sectionStyle(section)"
    >
      <div class="container">
        <header
          v-if="section.eyebrow || section.title || section.aside?.length"
          class="service-section__heading"
          :class="{ 'service-section__heading--split': section.aside?.length }"
        >
          <p v-if="section.eyebrow" class="service-eyebrow">
            {{ section.eyebrow }}
          </p>
          <h2
            v-if="section.title"
            :style="{ '--heading-size': section.headingSize ? `${section.headingSize}px` : undefined, '--heading-weight': section.headingWeight }"
            :class="{ 'service-section__title--with-icon': section.icon }"
          >
            <img
              v-if="section.icon"
              class="service-section__title-icon"
              :src="section.icon"
              alt=""
              aria-hidden="true"
            />
            <span>{{ section.title }}</span>
          </h2>
          <div v-if="section.body?.length" class="service-section__description">
            <ServiceFormattedText
              v-for="part in section.body"
              :key="part"
              :text="part"
            />
          </div>
          <aside v-if="section.aside?.length" class="service-section__aside">
            <ServiceFormattedText
              v-for="part in section.aside"
              :key="part"
              :text="part"
            />
          </aside>
        </header>
        <div v-else-if="section.body?.length" class="service-section__prose">
          <ServiceFormattedText
            v-for="part in section.body"
            :key="part"
            :text="part"
          />
        </div>
        <div v-if="section.images?.length" class="service-image-pair">
          <img v-for="picture in section.images" :key="picture.src" :src="picture.src" :alt="picture.alt" :width="picture.width" :height="picture.height" loading="lazy" />
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
            (['gallery', 'cases', 'signs'].includes(section.kind) || section.layout === 'horizontal-features') &&
            !(section.kind === 'cases' && (section.cards?.length || 0) <= 2) &&
            section.cards?.length
          "
          :label="
            section.title ||
            (section.kind === 'gallery'
              ? 'AI platform screens'
              : 'Case studies')
          "
          :bleed="section.bleed || slug === 'online-reputation-monitoring'"
          :card-width="
            section.cardWidth ||
            (slug === 'online-reputation-monitoring'
              ? section.kind === 'gallery'
                ? 520
                : 372
              : undefined)
          "
          :columns="
            (section.columns as 1 | 2 | 3 | 4) ||
            (section.kind === 'signs' ||
            (section.kind === 'cases' && section.cards.length === 2)
              ? 2
              : 3)
          "
        >
          <ServiceCards
            v-for="(card, cardIndex) in section.cards"
            :key="cardIndex"
            :cards="[card]"
            :columns="1"
            :kind="section.kind"
            :tone="section.tone || 'white'"
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
            v-for="(item, moduleIndex) in section.items"
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
            ><img v-if="section.moduleIcons?.[moduleIndex]" :src="section.moduleIcons[moduleIndex]" alt="" />{{ item }}</SiteLink
          >
        </nav>
        <div v-if="section.callout" class="service-callout">
          <h3><img v-if="section.callout.icon" :src="section.callout.icon" alt="" />{{ section.callout.title }}</h3>
          <ServiceFormattedText
            v-for="part in section.callout.body"
            :key="part"
            :text="part"
          />
        </div>
        <div v-if="section.note?.length" class="service-note">
          <ServiceFormattedText
            v-for="part in section.note"
            :key="part"
            :text="part"
          />
        </div>
        <div v-if="section.actions?.length" class="service-actions">
          <ServiceAction
            v-for="action in section.actions"
            :key="action.label"
            :action="action"
          />
        </div>
        <QuickRequestForm
          v-if="section.kind === 'form'"
          :button-width="section.formButtonWidth"
          :button-label="
            section.formButtonLabel || (slug === 'online-reputation-monitoring'
              ? 'Send me relevant cases'
              : undefined)
          "
        />
        <QuestionList
          v-if="section.kind === 'faq'"
          :questions="section.questions || []"
        />
        <ServiceFormattedText v-if="section.disclaimer" :text="section.disclaimer" class="service-disclaimer" />
      </div>
    </section>
  </main>
</template>
<style src="./service-page.css"></style>
<style src="./monitoring-page.css"></style>
<style src="./control-service.css"></style>
<style src="./defence-service.css"></style>
<style src="./personal-service.css"></style>
