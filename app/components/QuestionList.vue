<script setup lang="ts">
const props = defineProps<{
  questions: { title: string; answer: string }[];
  initialOpen?: number;
}>();
const opened = ref<number | null>(props.initialOpen ?? null);
const id = useId();
</script>
<template>
  <div class="question-list">
    <article
      v-for="(question, index) in questions"
      :key="question.title"
      class="question"
    >
      <h3>
        <button
          :id="`${id}-q-${index}`"
          :aria-expanded="opened === index"
          :aria-controls="`${id}-a-${index}`"
          @click="opened = opened === index ? null : index"
        >
          {{ question.title
          }}<span aria-hidden="true" class="question__icon">+</span>
        </button>
      </h3>
      <AccordionPanel
        :id="`${id}-a-${index}`"
        :open="opened === index"
        role="region"
        :aria-labelledby="`${id}-q-${index}`"
      >
        <p class="question__answer">{{ question.answer }}</p>
      </AccordionPanel>
    </article>
  </div>
</template>
<style scoped>
.question {
  border-bottom: 0;
}
.question:first-child {
  border-top: 0;
}
.question button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 26px 0;
  border: 0;
  background: none;
  text-align: left;
  color: #464646;
  font-size: 22px;
  font-weight: 500;
}
.question button span {
  font-size: 32px;
  font-weight: 300;
  flex: 0 0 30px;
  text-align: center;
}
.question button[aria-expanded="true"] .question__icon {
  transform: rotate(45deg);
}
.question__icon {
  transition: transform 0.3s ease-in-out;
}
.question__answer {
  padding: 0 48px 28px 0;
  font-size: 18px;
  line-height: 1.6;
  white-space: pre-line;
}
@media (max-width: 600px) {
  .question button {
    font-size: 18px;
  }
  .question__answer {
    font-size: 16px;
    padding-right: 0;
  }
}
</style>
