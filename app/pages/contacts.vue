<script setup lang="ts">
import content from "~/data/contacts.json";
useSeoMeta({
  title: "Contact Us | Reputation House",
  description: content.hero[2],
});
</script>
<template>
  <main id="main-content">
    <PageHero
      eyebrow="Global digital reputation protection"
      title="Contact Us"
      :description="content.hero[2]"
    />
    <section class="container contacts-section">
      <p class="contacts-eyebrow">Global presence</p>
      <h2>{{ content.title }}</h2>
      <div class="office-grid">
        <article
          v-for="office in content.offices"
          :key="office.title"
          class="office-card"
        >
          <h3>{{ office.title }}</h3>
          <p>{{ office.address }}</p>
          <div class="office-card__contact">
            <span class="eyebrow">Send a confidential message</span>
            <a
              v-if="office.contact.startsWith('+')"
              :href="`tel:${office.contact.replaceAll(' ', '')}`"
              >{{ office.contact }}</a
            ><span v-else>{{ office.contact }}</span>
            <a :href="`mailto:${office.email}`">{{ office.email }}</a>
          </div>
        </article>
      </div>
    </section>
    <section class="contact-callout">
      <div class="container">
        <h2>{{ content.callout[0] }}</h2>
        <p>{{ content.callout[1] }}</p>
        <ActionButton variant="light">Get an action plan</ActionButton>
      </div>
    </section>
  </main>
</template>
<style scoped>
.contacts-section {
  padding-block: 90px;
}
.contacts-eyebrow {
  border-top: 1px solid var(--line);
  padding-top: 20px;
  letter-spacing: 1px;
}
.contacts-section h2 {
  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  margin: 42px 0;
}
.office-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.office-card {
  border: 1px solid #e7e7e7;
  border-radius: 30px;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
}
.office-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}
.office-card > p {
  min-height: 120px;
  font-size: 16px;
  line-height: 1.5;
  color: #464646;
}
.office-card__contact {
  display: grid;
  gap: 8px;
  padding-top: 36px;
  margin-top: auto;
}
.office-card__contact .eyebrow {
  font-size: 12px;
  margin-bottom: 18px;
  color: var(--green);
}
.office-card__contact a {
  overflow-wrap: anywhere;
}
.office-card__contact a:hover {
  text-decoration: underline;
}
.contact-callout {
  background: var(--green);
  color: white;
  text-align: center;
  padding: 80px 0;
}
.contact-callout p {
  max-width: 850px;
  margin: 24px auto 32px;
  font-size: 20px;
  line-height: 1.4;
}
@media (max-width: 800px) {
  .contacts-section {
    padding-block: 50px;
  }
  .office-grid {
    grid-template-columns: 1fr;
  }
  .office-card > p {
    min-height: 0;
  }
  .contact-callout p {
    font-size: 18px;
  }
}
</style>
