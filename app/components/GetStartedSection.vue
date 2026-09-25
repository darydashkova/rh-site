<template>
  <section id="get-started" class="get-started">
    <div class="container">
      <p class="eyebrow">How to start</p>
      <h2>Two ways to proceed</h2>
      <div class="get-started__grid">
        <article class="start-card">
          <header>
            <span>01</span>
            <h3>Talk to an Expert</h3>
          </header>
          <p class="start-card__subtitle">Discuss your case · Free of charge</p>
          <p>
            Describe your situation — we’ll listen and propose a solution
            specific to your case. Whether you have a clear task or just a vague
            concern, the first conversation starts with understanding. No pitch
            until we know what you actually need.
          </p>
          <footer>
            <p>NDA from the very first contact</p>
            <ActionButton>Write to an expert</ActionButton>
          </footer>
        </article>
        <article class="start-card start-card--dark">
          <header>
            <span>02</span>
            <h3>Online Self Diagnostic</h3>
          </header>
          <p class="start-card__subtitle">
            Self-serve · 3 minutes · Free of charge
          </p>
          <p>
            See the full picture across all 5 elements of your digital profile —
            without talking to anyone. Online diagnostic is free of charge.
            Covers AI representation, search results, mentions, reviews and
            narrative tone. You get your Risk Check report in 3 minutes.
          </p>
          <footer>
            <p>3 min · No commitment</p>
            <ActionButton
              href="https://checkmyrisks.com/"
              variant="dark-outline"
              >Free online risk audit</ActionButton
            >
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.get-started {
  background: var(--green) url("/images/back-green.svg") center top / cover
    no-repeat;
  color: white;
  padding: 72px 0;
}
.get-started > .container > h2 {
  margin: 30px 0 48px;
}
.get-started > .container {
  max-width: 1040px;
}
.get-started > .container > .eyebrow,
.get-started > .container > h2 {
  text-align: center;
}
.start-card footer {
  text-align: center;
}
.start-card footer .action-button {
  width: 100%;
}
.get-started__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.start-card {
  border-radius: 30px;
  padding: 32px;
  background: white;
  color: var(--ink);
  display: flex;
  flex-direction: column;
}
.start-card--dark {
  background: var(--ink);
  color: white;
}
.start-card header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}
.start-card header span {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #99ad8f35;
  font-size: 20px;
  font-weight: 600;
}
.start-card h3 {
  font-size: 32px;
  line-height: 1.3;
  font-weight: 400;
}
.start-card .start-card__subtitle {
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 12px;
}
.start-card > p {
  font-size: 20px;
  line-height: 1.4;
}
.start-card footer {
  padding-top: 35px;
  margin-top: auto;
}
.start-card footer p {
  margin-bottom: 18px;
  font-size: 14px;
}
@media (max-width: 760px) {
  .get-started__grid {
    grid-template-columns: 1fr;
  }
  .start-card {
    padding: 26px;
  }
  .start-card h3 {
    font-size: 28px;
  }
  .start-card > p {
    font-size: 18px;
  }
}
</style>
