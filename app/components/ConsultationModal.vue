<script setup lang="ts">
const emit = defineEmits<{ close: [] }>();
const dialog = ref<HTMLDialogElement>();
const sent = ref(false);
const country = ref("+49");
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
        type="button"
        aria-label="Close consultation"
        @click="emit('close')"
      >
        ×
      </button>
      <svg
        class="modal-pattern"
        viewBox="0 0 760 220"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#bfd8b3" stroke-width="27" stroke-linecap="round">
          <path d="M216 16 203 95" opacity=".35" />
          <path d="M313 70 318 155" opacity=".7" />
          <path d="M423 105 449 187" />
          <path d="M535 113 585 185" />
          <path d="M648 90 714 147" />
          <path d="M733 40 790 72" />
          <path d="M473 -31 480 20" />
          <path d="M552 -33 569 14" />
        </g>
      </svg>
      <div class="modal-body">
        <template v-if="!sent">
          <h2 id="consultation-title">Free Reputation Audit</h2>
          <p class="modal-description">
            Get a confidential consultation and preliminary audit
          </p>
          <form @submit.prevent="sent = true">
            <label for="audit-name">Full Name*</label>
            <input
              id="audit-name"
              name="name"
              autocomplete="name"
              placeholder="John Smith"
              required
            />
            <label for="audit-email">Email*</label>
            <input
              id="audit-email"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="johnsmith@mail.com"
              required
            />
            <label for="audit-phone">Phone*</label>
            <div class="phone-field">
              <select v-model="country" aria-label="Phone country code">
                <option value="+49">🇩🇪 +49</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+971">🇦🇪 +971</option>
                <option value="+852">🇭🇰 +852</option>
                <option value="+966">🇸🇦 +966</option>
                <option value="+7">+7</option>
                <option value="">Other</option>
              </select>
              <input
                id="audit-phone"
                name="phone"
                type="tel"
                autocomplete="tel-national"
                placeholder="(000) 000-00000"
                required
              />
            </div>
            <label for="audit-site">Site</label>
            <input id="audit-site" name="site" autocomplete="url" />
            <label for="audit-comment"
              >Brief description of your situation</label
            >
            <textarea id="audit-comment" name="message" rows="5" />
            <div class="verification-slot"><slot name="verification" /></div>
            <button class="modal-submit" type="submit">
              Get Free Confidential Assessment
            </button>
            <p class="confidential-note">
              Your information is confidential and will never be shared
            </p>
          </form>
        </template>
        <div v-else class="demo-success" role="status">
          <h2 id="consultation-title">Your form is ready.</h2>
          <p>
            This is a demonstration. Your information has not been sent or
            stored.
          </p>
          <button class="modal-submit" @click="emit('close')">
            Back to the website
          </button>
        </div>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.consultation-modal {
  padding: 0;
  border: 0;
  width: min(760px, calc(100% - 32px));
  max-width: none;
  max-height: calc(100dvh - 48px);
  margin: auto;
  background: #fff;
  color: #262626;
  border-radius: 20px;
}
.consultation-modal::backdrop {
  background: #0009;
}
.modal-content {
  position: relative;
  overflow: hidden;
}
.modal-pattern {
  display: block;
  width: 100%;
  height: auto;
}
.modal-close {
  position: absolute;
  right: 16px;
  top: 12px;
  z-index: 1;
  width: 36px;
  height: 36px;
  border: 0;
  background: #ffffffd9;
  border-radius: 50%;
  color: #5d6c57;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
}
.modal-body {
  padding: 28px 45px 40px;
}
.modal-body h2 {
  margin: 0 0 12px;
  font-size: 32px;
  line-height: 1.25;
  font-weight: 600;
  text-align: center;
}
.modal-description {
  margin: 0;
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  color: #494949;
}
form {
  margin-top: 28px;
}
label {
  display: block;
  margin: 26px 0 8px;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
}
label:first-child {
  margin-top: 0;
}
input,
textarea,
.phone-field {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #aaa;
  border-radius: 10px;
  background: #fff;
  color: #262626;
  font: inherit;
  font-size: 16px;
}
input {
  height: 60px;
  padding: 0 20px;
}
input::placeholder {
  color: #aaa;
}
textarea {
  padding: 18px 20px;
  min-height: 170px;
  resize: vertical;
}
.phone-field {
  display: flex;
  align-items: center;
}
.phone-field select {
  max-width: 130px;
  padding: 0 8px 0 16px;
  border: 0;
  background: transparent;
  font: inherit;
  color: inherit;
}
.phone-field input {
  border: 0;
  background: transparent;
  min-width: 0;
  padding-left: 6px;
}
.verification-slot {
  display: flex;
  justify-content: center;
  margin: 28px 0 24px;
}
.verification-slot:empty {
  margin: 28px 0 0;
}
.modal-submit {
  width: 100%;
  min-height: 60px;
  padding: 14px 20px;
  border: 0;
  border-radius: 999px;
  background: #5d6c57;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}
.modal-submit:hover {
  background: #bfd8b3;
  color: #5d6c57;
}
.confidential-note {
  margin: 20px 0 0;
  color: #777;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
}
.demo-success p {
  text-align: center;
  margin: 20px 0;
}
@media (max-width: 600px) {
  .consultation-modal {
    max-height: calc(100dvh - 24px);
    border-radius: 16px;
  }
  .modal-body {
    padding: 20px 24px 28px;
  }
  .modal-body h2 {
    font-size: 24px;
  }
  .modal-description {
    font-size: 14px;
  }
  label {
    font-size: 14px;
    margin-top: 20px;
  }
  input {
    height: 48px;
    padding-inline: 14px;
  }
  textarea {
    min-height: 140px;
  }
  .modal-submit {
    min-height: 48px;
    font-size: 14px;
  }
  .confidential-note {
    font-size: 11px;
  }
}
</style>
