<script setup lang="ts">
withDefaults(defineProps<{ buttonLabel?: string; buttonWidth?: number }>(), {
  buttonLabel: "Submit",
});
const submitted = ref(false);
const id = useId();
</script>
<template>
  <div class="quick-request">
    <p v-if="submitted" role="status">
      Your form is ready. This is a demonstration — your information has not
      been sent or stored.
    </p>
    <form v-else @submit.prevent="submitted = true">
      <p>Leave a request and we will contact you as soon as possible</p>
      <div class="quick-request__fields" :style="buttonWidth ? { '--form-button-width': `${buttonWidth}px` } : undefined">
        <label :for="`${id}-name`"
          >Name<input
            :id="`${id}-name`"
            name="name"
            autocomplete="name"
            placeholder="John Smith"
            required
        /></label>
        <label :for="`${id}-email`"
          >Email<input
            :id="`${id}-email`"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="mail@example.com"
            required
        /></label>
        <button type="submit" class="action-button">{{ buttonLabel }}</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.quick-request {
  margin-top: 50px;
  padding: 48px 32px 28px;
  border-radius: 24px;
  background: var(--ink);
  color: white;
}
.quick-request__fields {
  display: grid;
  grid-template-columns: 1fr 1fr var(--form-button-width, 200px);
  gap: 20px;
  align-items: end;
  margin-top: 30px;
}
label {
  display: grid;
  gap: 8px;
  font-weight: 600;
}
input {
  min-width: 0;
  width: 100%;
  border: 1px solid #626262;
  color: white;
  background: transparent;
  border-radius: 28px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 400;
}
button {
  padding-block: 13px;
}
small {
  display: block;
  color: #bbb;
  font-size: 11px;
  margin-top: 14px;
}
@media (max-width: 760px) {
  .quick-request {
    padding: 28px 22px;
  }
  .quick-request__fields {
    grid-template-columns: 1fr;
  }
}
</style>
