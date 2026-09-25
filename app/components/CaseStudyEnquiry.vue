<script setup lang="ts">
const submitted = ref(false);
const id = useId();
</script>
<template>
  <section class="case-enquiry">
    <div class="case-enquiry__inner">
      <h2>Let's talk about your market entry</h2>
      <p>
        We run the same audit for your company and show you<br
          class="desktop-break"
        />
        what your digital reputation looks like to local buyers<br
          class="desktop-break"
        />
        before you spend on acquisition
      </p>
      <form v-if="!submitted" @submit.prevent="submitted = true">
        <div class="case-enquiry__row">
          <label :for="`${id}-name`"
            >Full Name*<input
              :id="`${id}-name`"
              name="name"
              autocomplete="name"
              placeholder="John Smith"
              required
          /></label>
          <label :for="`${id}-email`"
            >Email*<input
              :id="`${id}-email`"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="mail@example.com"
              required
          /></label>
        </div>
        <label :for="`${id}-company`"
          >Company<input
            :id="`${id}-company`"
            name="company"
            autocomplete="organization"
            placeholder="Acme Inc"
        /></label>
        <label :for="`${id}-message`"
          >Brief description of your situation<textarea
            :id="`${id}-message`"
            name="message"
            rows="4"
          />
        </label>
        <button type="submit">Get free consultation</button>
      </form>
      <p v-else class="case-enquiry__status" role="status">
        Your form is ready. This is a demonstration — your information has not
        been sent or stored.
      </p>
      <ul class="case-enquiry__assurances">
        <li>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <rect x="5" y="10" width="14" height="12" rx="2" />
            <path d="M8 10V6a4 4 0 0 1 8 0v4M12 15v3" /></svg
          >Your information is confidential and will never be shared
        </li>
        <li>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 5v7l5 3" /></svg
          >Assessment delivered within 48 business hours
        </li>
        <li>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="m12 2 3 6 7 1-5 5 1 8-6-4-6 4 1-8-5-5 7-1Z" /></svg
          >No sales pressure — just actionable insights
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped>
.case-enquiry {
  background: #28292d;
  color: white;
  padding: 90px 24px 45px;
}
.case-enquiry__inner {
  max-width: 960px;
  margin: auto;
}
h2 {
  font-size: 35px;
  text-align: center;
  line-height: 1.2;
  font-weight: 600;
  margin: 0 0 28px;
}
p {
  font-size: 20px;
  line-height: 1.55;
  text-align: center;
  margin: 0 auto 65px;
}
form {
  display: grid;
  gap: 20px;
}
.case-enquiry__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
label {
  display: grid;
  gap: 9px;
  font-size: 16px;
  font-weight: 600;
}
input,
textarea {
  width: 100%;
  min-width: 0;
  color: white;
  background: #343539;
  border: 1px solid transparent;
  padding: 14px;
  font: inherit;
  font-size: 16px;
  font-weight: 400;
  border-radius: 0;
}
textarea {
  resize: vertical;
}
input:focus,
textarea:focus {
  outline: 1px solid #c4d9b8;
}
button {
  justify-self: start;
  margin-top: 12px;
  background: #f31520;
  border: 0;
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding: 17px 45px;
  text-transform: uppercase;
}
.case-enquiry__assurances {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 0;
  margin: 85px 0 0;
  list-style: none;
  font-size: 13px;
  line-height: 1.5;
  color: #999;
}
li {
  display: flex;
  gap: 14px;
  align-items: start;
}
li svg {
  flex-shrink: 0;
  font-size: 24px;
  color: #ff222d;
  line-height: 1;
}
.case-enquiry__status {
  padding: 40px;
  background: #343539;
}
@media (max-width: 760px) {
  .case-enquiry {
    padding-top: 60px;
  }
  h2 {
    font-size: 28px;
  }
  p {
    font-size: 17px;
    margin-bottom: 35px;
  }
  .case-enquiry__row {
    grid-template-columns: 1fr;
  }
  .case-enquiry__assurances {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 45px;
  }
  .desktop-break {
    display: none;
  }
}
</style>
