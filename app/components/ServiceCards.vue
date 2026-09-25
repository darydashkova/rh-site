<script setup lang="ts">
import type { ServiceCard } from "~/types/service";
withDefaults(
  defineProps<{
    cards: ServiceCard[];
    columns?: number;
    kind?: string;
    tone?: string;
  }>(),
  { columns: 4, kind: "cards", tone: "pale" },
);
</script>
<template>
  <div
    class="service-cards"
    :class="[`service-cards--${kind}`, `service-cards--${tone}`]"
    :style="{ '--columns': columns }"
  >
    <article
      v-for="(card, index) in cards"
      :key="index"
      class="service-card"
      :class="{ 'service-card--split-statistic': card.descriptionWeight }"
      :style="{
        backgroundColor: card.background,
        backgroundImage: card.backgroundImage ? `url('${card.backgroundImage}')` : undefined,
        color: card.color,
        border: card.borderColor ? `1px solid ${card.borderColor}` : undefined,
        '--card-description-weight': card.descriptionWeight,
      }"
    >
      <img
        v-if="card.icon"
        :src="card.icon"
        alt=""
        loading="lazy"
        class="service-card__icon"
      />
      <span
        v-if="card.number || kind === 'process'"
        class="service-card__number"
        >{{ card.number || String(index + 1).padStart(2, "0") }}</span
      >
      <p v-if="card.eyebrow" class="service-card__eyebrow">
        {{ card.eyebrow }}
      </p>
      <h3 v-if="card.title" :style="{
        fontSize: card.titleSize ? `${card.titleSize}px` : undefined,
        fontWeight: card.titleWeight,
        lineHeight: card.titleLineHeight,
        color: card.titleColor,
      }">{{ card.title }}</h3>
      <ServiceFormattedText v-if="card.subtitle" :text="card.subtitle" />
      <ServiceFormattedText
        v-for="(part, partIndex) in card.parts"
        :key="partIndex"
        :text="part"
        :class="{
          'service-card__quote':
            kind === 'roles' &&
            partIndex === card.parts.length - 1 &&
            card.parts.length > 1,
          'service-card__bullet':
            kind === 'roles' &&
            card.parts.length > 3 &&
            partIndex > 0 &&
            partIndex < card.parts.length - 1,
        }"
      />
      <template v-if="card.before">
        <div class="service-card__before">
          <ServiceFormattedText
            v-for="part in card.before"
            :key="part"
            :text="part"
          />
        </div>
        <div class="service-card__after">
          <ServiceFormattedText
            v-for="part in card.after"
            :key="part"
            :text="part"
          />
        </div>
        <ServiceFormattedText
          v-if="card.source"
          :text="card.source"
          class="service-card__source"
        />
      </template>
      <ServiceAction v-if="card.link" :action="card.link" />
    </article>
  </div>
</template>
