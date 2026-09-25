<script setup lang="ts">
defineProps<{ action: string; note: string }>();
const id = useId();
const submitted = ref(false);
</script>

<template>
  <form class="rh-contact-form" @submit.prevent="submitted = true">
    <label :for="`${id}-name`">Name</label>
    <input
      :id="`${id}-name`"
      name="name"
      autocomplete="name"
      placeholder="John Smith"
      required
    />
    <label :for="`${id}-email`">Email</label>
    <input
      :id="`${id}-email`"
      name="email"
      type="email"
      autocomplete="email"
      placeholder="mail@example.com"
      required
    />
    <label :for="`${id}-company`">Company</label>
    <input
      :id="`${id}-company`"
      name="company"
      autocomplete="organization"
      placeholder="Acme Inc"
      required
    />
    <label :for="`${id}-task`">Briefly describe your task (optional)</label>
    <textarea :id="`${id}-task`" name="task" rows="3"></textarea>
    <button type="submit">{{ action }}</button>
    <p v-if="submitted" role="status">
      This preview form is ready. Your information has not been sent or stored.
    </p>
    <small v-else>{{ note }}</small>
  </form>
</template>
