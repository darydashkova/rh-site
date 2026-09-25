<script setup lang="ts">
import questions from "~/data/faq.json";
const opened = ref<number | null>(null);
</script>

<template>
  <section id="faq" class="section container">
    <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
    <div class="faq-list">
      <article
        v-for="(question, index) in questions"
        :key="question.title"
        class="faq-item"
      >
        <h3>
          <button
            type="button"
            :id="`faq-question-${index}`"
            :aria-expanded="opened === index"
            :aria-controls="`faq-answer-${index}`"
            @click="opened = opened === index ? null : index"
          >
            {{ question.title }}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path d="M1 12h22" />
              <path d="M12 1v22" />
            </svg>
          </button>
        </h3>
        <AccordionPanel
          :open="opened === index"
          :id="`faq-answer-${index}`"
          role="region"
          :aria-labelledby="`faq-question-${index}`"
        >
          <p class="faq-answer">{{ question.answer }}</p>
        </AccordionPanel>
      </article>
    </div>
  </section>
</template>

<style scoped>
.faq-list {
  margin-top: 48px;
}
.faq-item {
  border-bottom: 0;
}
.faq-item:first-child {
  border-top: 0;
}
.faq-item button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 26px 0;
  text-align: left;
  border: 0;
  background: none;
  color: #464646;
  font-size: 20px;
  font-weight: 500;
}
.faq-item button svg {
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;
}
.faq-item button[aria-expanded="true"] svg {
  transform: rotate(45deg);
}
.faq-item button:hover {
  color: var(--green);
}
.faq-answer {
  max-width: 1050px;
  padding: 0 40px 28px 0;
  font-size: 18px;
  line-height: 1.6;
}
@media (max-width: 600px) {
  .faq-item button {
    font-size: 18px;
    padding: 22px 0;
  }
  .faq-answer {
    font-size: 16px;
    padding-right: 0;
  }
}
</style>
