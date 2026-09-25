<script setup lang="ts">
defineProps<{ title: string }>();
const { open } = useConsultation();
</script>
<template>
  <aside class="case-cta">
    <div>
      <h2>{{ title }}</h2>
      <p><slot /></p>
    </div>
    <button type="button" @click="open">Get a consultation</button>
  </aside>
</template>
<style scoped>
.case-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 60px;
  border-radius: 8px;
  background: #efefef;
}
h2 {
  font-size: 16px;
  font-weight: 600;
  color: #ff202b;
  text-transform: uppercase;
  margin: 0 0 12px;
}
p {
  max-width: 760px;
  font-size: 20px;
  line-height: 1.55;
  color: #858585;
  margin: 0;
}
button {
  flex-shrink: 0;
  padding: 20px 30px;
  background: #28292d;
  color: white;
  border: 0;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}
@media (max-width: 760px) {
  .case-cta {
    padding: 28px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  p {
    font-size: 16px;
  }
}
</style>
