<template>
  <section class="audit-section">
    <div class="container audit-section__inner">
      <p class="eyebrow">Now you know what is online risks</p>
      <h2>Find out where your brand stands right now</h2>
      <p class="audit-section__description">
        See what clients, banks, investors and AI currently say about you and
        your brand across all five direction. Or tell us about your specific
        situation.<br />We are always here to help.
      </p>
      <div class="audit-section__actions">
        <div>
          <ActionButton variant="light">Discuss your case with us</ActionButton>
          <p>NDA from day one. Confidential</p>
        </div>
        <div>
          <ActionButton href="https://checkmyrisks.com/" variant="dark-outline"
            >Free online risk audit</ActionButton
          >
          <p>3 min check. No credit card needed</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.audit-section {
  padding: 110px 0 60px;
  background: var(--green) url("/images/back-green.svg") center top / cover
    no-repeat;
  color: white;
  text-align: center;
}
.audit-section__inner {
  max-width: 754px;
}
.audit-section h2 {
  margin: 40px 0 16px;
}
.audit-section__description {
  max-width: 800px;
  margin-inline: auto;
  font-size: 20px;
  line-height: 1.4;
}
.audit-section__actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 42px;
}
.audit-section__actions > div {
  min-width: 0;
  width: 270px;
}
.audit-section__actions .action-button {
  width: 100%;
}
.audit-section__actions p {
  font-size: 14px;
  opacity: 0.7;
  margin-top: 12px;
}
@media (max-width: 600px) {
  .audit-section {
    padding: 55px 0;
  }
  .audit-section h2 {
    margin-top: 30px;
  }
  .audit-section__description {
    font-size: 18px;
  }
  .audit-section__actions {
    flex-direction: column;
    gap: 24px;
  }
}
@media (max-width: 600px) {
  .audit-section__actions > div {
    width: 100%;
  }
}
</style>
