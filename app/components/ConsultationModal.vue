<script setup lang="ts">
const emit = defineEmits<{ close: [] }>();
const dialog = ref<HTMLDialogElement>();
const sent = ref(false);
const previousFocus = ref<HTMLElement | null>(null);
onMounted(() => {
  previousFocus.value = document.activeElement as HTMLElement;
  dialog.value?.showModal();
  document.body.style.overflow = "hidden";
});
onBeforeUnmount(() => {
  document.body.style.overflow = "";
  previousFocus.value?.focus();
});
function submit() {
  sent.value = true;
}
</script>
<template>
  <dialog
    ref="dialog"
    class="consultation-modal"
    aria-labelledby="consultation-title"
    @cancel.prevent="emit('close')"
    @click="$event.target === dialog && emit('close')"
  >
    <div class="modal-content">
      <button
        class="modal-close"
        aria-label="Close consultation"
        @click="emit('close')"
      >
        ×
      </button>
      <template v-if="!sent">
        <p class="modal-eyebrow">REPUTATION HOUSE</p>
        <h2 id="consultation-title">
          Get your tailored<br />reputation strategy
        </h2>
        <p>Tell us about your situation. Our experts are here to help.</p>
        <form @submit.prevent="submit">
          <label
            >Your name<input
              name="name"
              autocomplete="name"
              placeholder="Your name"
              required
          /></label>
          <label
            >Email<input
              name="email"
              type="email"
              autocomplete="email"
              placeholder="you@company.com"
              required
          /></label>
          <label
            >Phone number<input
              name="phone"
              type="tel"
              autocomplete="tel"
              placeholder="+1 (999) 999-9999"
          /></label>
          <label
            >How can we help?<textarea
              name="message"
              rows="3"
              placeholder="Describe your situation"
              required
            />
          </label>
          <label class="consent"
            ><input type="checkbox" required />
            <span
              >I agree to the
              <SiteLink
                href="https://reputation.house/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                >Privacy Policy</SiteLink
              >.</span
            ></label
          >
          <button class="modal-submit" type="submit">
            Get a tailored strategy
          </button>
          <p class="demo-note">Preview form — no information will be sent.</p>
        </form>
      </template>
      <div v-else class="demo-success" role="status">
        <span class="success-icon">✓</span>
        <h2 id="consultation-title">Your form is ready.</h2>
        <p>
          This is a demonstration. Your information has not been sent or stored.
        </p>
        <button class="modal-submit" @click="emit('close')">
          Back to the website
        </button>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.consultation-modal {
  padding: 0;
  border: 0;
  width: min(560px, calc(100% - 32px));
  max-height: 90dvh;
  background: #fff;
  color: #262626;
  border-radius: 16px;
  box-shadow: 0 24px 100px #0005;
}
.consultation-modal::backdrop {
  background: #0009;
  backdrop-filter: blur(4px);
}
.modal-content {
  padding: 45px;
  position: relative;
}
.modal-close {
  position: absolute;
  right: 16px;
  top: 10px;
  font-size: 32px;
  background: none;
  border: 0;
  color: #5e6858;
}
.modal-eyebrow {
  font-size: 12px;
  letter-spacing: 1px;
  color: #5e6858;
  margin-bottom: 20px;
}
.modal-content h2 {
  font-size: 32px;
  line-height: 1.2;
  font-weight: 400;
  margin: 0 0 16px;
}
.modal-content p {
  font-size: 14px;
  line-height: 1.6;
}
.modal-content form {
  margin-top: 24px;
}
.modal-content label:not(.consent) {
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-top: 14px;
}
.modal-content input:not([type="checkbox"]),
.modal-content textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d5d7d2;
  border-radius: 6px;
  background: #fafbf9;
  color: #262626;
  margin-top: 7px;
  padding: 12px 14px;
  font-size: 15px;
}
.modal-content textarea {
  resize: vertical;
}
.modal-content .consent {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 18px 0;
  font-size: 12px;
  line-height: 1.5;
}
.consent input {
  accent-color: #5e6858;
}
.consent a {
  color: #5e6858;
}
.modal-submit {
  width: 100%;
  padding: 15px;
  background: #5e6858;
  border: 0;
  border-radius: 30px;
  color: #fff;
  font-weight: 500;
}
.demo-note {
  color: #777;
  text-align: center;
  font-size: 11px !important;
}
.demo-success {
  padding: 30px 0;
  text-align: center;
}
.success-icon {
  display: inline-grid;
  place-items: center;
  background: #e0ecd8;
  color: #5e6858;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  font-size: 32px;
  margin-bottom: 20px;
}
.demo-success button {
  margin-top: 20px;
}

@media (max-width: 640px) {
  .modal-content {
    padding: 32px 24px;
  }
  .modal-content h2 {
    font-size: 28px;
  }
}
</style>
