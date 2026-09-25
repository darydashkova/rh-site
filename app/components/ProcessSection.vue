<script setup lang="ts">
import steps from "~/data/process.json";
</script>

<template>
  <section class="section container">
    <SectionHeading
      eyebrow="What happens after you submit a request"
      title="You Reach Out Once, and We Manage It All From There"
      description="There's no commitment in reaching out and no mystery in what comes next. You describe your situation, we build a strategy around it, and you decide when you're ready."
      ><template #title
        >You Reach Out Once,<br />and We Manage It All From There</template
      ></SectionHeading
    >
    <ol class="process-grid">
      <li v-for="step in steps" :key="step.number" class="process-card">
        <header>
          <h3>{{ step.title }}</h3>
          <span>{{ step.number }}</span>
        </header>
        <p>{{ step.description }}</p>
        <p class="process-card__note">{{ step.note }}</p>
      </li>
    </ol>
    <div class="process-callout">
      <p>
        Submit your case, and our team will reach out to understand it properly
        and find the right solution
      </p>
      <ActionButton>Get a tailored reputation strategy</ActionButton>
    </div>
  </section>
</template>

<style scoped>
.process-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;
}
.process-card {
  border-radius: 20px;
  background: #deecd6;
  color: var(--green);
  padding: 32px;
  display: flex;
  flex-direction: column;
}
.process-card:nth-child(2) {
  background: #99ad8f;
  color: white;
}
.process-card:nth-child(3) {
  background: var(--green);
  color: white;
}
.process-card header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
.process-card h3 {
  font-size: 30px;
  font-weight: 400;
}
.process-card header span {
  color: inherit;
  font-size: 20px;
}
.process-card > p {
  font-size: 16px;
}
.process-card .process-card__note {
  font-size: 16px;
  color: inherit;
  font-weight: 600;
  padding-top: 40px;
  margin-top: auto;
}
.process-callout {
  border-top: 1px solid var(--line);
  padding-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-top: 46px;
}
.process-callout p {
  font-size: 20px;
  max-width: 590px;
}
.process-callout .action-button {
  flex-shrink: 0;
}
@media (max-width: 760px) {
  .process-grid {
    grid-template-columns: 1fr;
  }
  .process-callout {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }
}
</style>
