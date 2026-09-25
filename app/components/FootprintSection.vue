<script setup lang="ts">
import { footprintStates } from "~/data/homepage";
</script>

<template>
  <section class="section container footprint-section">
    <SectionHeading
      eyebrow="The main threat is an unclear digital footprint"
      title="The worst signal isn’t negative, but a controversial digital footprint"
      description="Markets react to bad news, but they react even more to conflicting information background. Managing only part of your digital profile can cost you more."
    >
      <template #title
        >The worst signal isn’t negative,<br /><span class="risk-text"
          >but a controversial digital footprint</span
        ></template
      >
    </SectionHeading>
    <div class="footprint-states">
      <article
        v-for="state in footprintStates"
        :key="state.label"
        class="state-card"
        :class="{ 'state-card--danger': state.dangerous }"
      >
        <span v-if="state.dangerous" class="state-card__badge"
          >Most dangerous</span
        >
        <p class="eyebrow">{{ state.label }}</p>
        <h3>{{ state.title }}</h3>
        <p>{{ state.description }}</p>
        <img
          :src="`/images/${state.image}`"
          alt="Digital footprint risk scale"
          loading="lazy"
        />
      </article>
    </div>
    <div class="research-callout">
      <strong>×1.73</strong>
      <div>
        <p>
          <strong
            >Social media sentiment moves markets more than official financial
            results.</strong
          >
          Higher stock volatility following media peaks, not financial reports.
        </p>
        <ActionButton
          href="https://rc.reputation.house/brand-reputation-research-2026"
          variant="dark-outline"
          >Check Brand Visibility Research</ActionButton
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.footprint-states {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 70px;
}
.footprint-section :deep(.section-description) {
  max-width: 798px;
}
.risk-text {
  color: var(--rose);
}
.state-card {
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.state-card--danger {
  background: white;
  border-color: #a26764;
}
.state-card__badge {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -14px;
  background: #a26764;
  color: white;
  border-radius: 20px;
  padding: 3px 14px;
  white-space: nowrap;
  font-size: 13px;
}
.state-card .eyebrow {
  color: var(--muted);
  margin-bottom: 12px;
}
.state-card h3 {
  font-weight: 500;
  font-size: 28px;
  margin-bottom: 16px;
}
.state-card > p:not(.eyebrow) {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}
.state-card img {
  width: 100%;
  height: 78px;
  object-fit: contain;
  margin-top: auto;
}
.research-callout {
  margin-top: 40px;
  padding: 36px 24px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 290px 1fr;
  align-items: center;
  gap: 50px;
  background: #464646 url("/images/bg1.png") center / cover no-repeat;
  color: white;
  overflow: hidden;
}
.research-callout > strong {
  font-size: 44px;
  color: white;
  text-align: center;
  padding-block: 45px;
}
.research-callout p {
  font-size: 20px;
}
.research-callout a {
  display: inline-block;
  margin-top: 22px;
  color: white;
}
@media (max-width: 760px) {
  .footprint-states {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 45px;
  }
  .research-callout {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 28px;
  }
  .research-callout > strong {
    font-size: 64px;
  }
  .research-callout p {
    font-size: 17px;
  }
}
</style>
