<template>
  <section id="infrastructure" class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Elements of Reputation House"
        title="Four Components of One Safety Infrastructure"
        description="From the first diagnostic to full narrative control: one infrastructure, one team, one outcome."
      />
      <article class="research-center">
        <header>
          <h3>Research Center</h3>
          <p class="eyebrow">Independent Knowledge Layer</p>
        </header>
        <div class="research-center__description">
          <strong>7+</strong>
          <p>
            years of accumulated practice, aggregated into industry benchmarks,
            sector reports, and forward-looking intelligence. Operates
            independently, continuously advancing the field, and informs both
            the platform logic and every strategic decision made by the team.
          </p>
        </div>
        <ActionButton href="https://rc.reputation.house/"
          >Visit research center</ActionButton
        >
      </article>
      <div class="infrastructure-grid">
        <div>
          <p class="infrastructure-label">Entry point</p>
          <article class="infrastructure-card infrastructure-card--entry">
            <p class="eyebrow">Free</p>
            <h3>Risk Check</h3>
            <p>
              Assess your full digital profile across all 5 elements: AI
              responses, search, mentions, reviews, and narrative tone.<br />3
              minutes. Free of charge.
            </p>
            <ActionButton href="https://checkmyrisks.com/"
              >Free Online Risk Audit</ActionButton
            >
          </article>
        </div>
        <div class="core-product">
          <p class="infrastructure-label">
            Core product <span class="eyebrow">One end-to-end solution</span>
          </p>
          <div class="core-product__grid">
            <article class="infrastructure-card">
              <p class="eyebrow">Platform</p>
              <h3>Risk Control Center</h3>
              <p>
                Proprietary platform. Real-time monitoring across all 5
                elements. Automated alerts before escalation. Single interface
                to manage your entire digital narrative.
              </p>
              <ul class="tag-list">
                <li>Real-time monitoring</li>
                <li>Alerts</li>
                <li>AI tracking</li>
                <li>SERM control</li>
              </ul>
              <ActionButton
                href="https://reputation.house/risk-control-center"
                variant="solid"
                >Risk Control Center</ActionButton
              >
            </article>
            <article class="infrastructure-card">
              <p class="eyebrow">Services</p>
              <h3>Expert Teams</h3>
              <p>
                Human intelligence that reads platform data and acts on it.
                Strategy, execution, and crisis management — SERM, PR, content,
                narrative, removal. Can't work without the platform. That's the
                point.
              </p>
              <ul class="tag-list">
                <li>SERM</li>
                <li>Narrative</li>
                <li>Crisis</li>
                <li>PR</li>
                <li>Removal</li>
              </ul>
              <ActionButton variant="solid">Talk to an expert</ActionButton>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.research-center {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px 30px;
  margin-top: 44px;
  padding: 24px;
  border-radius: 24px;
  background: var(--ink);
  color: white;
}
.research-center header {
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.research-center h3 {
  font-size: 20px;
  font-weight: 600;
}
.research-center .eyebrow {
  color: var(--sage);
  font-size: 14px;
}
.research-center__description {
  display: flex;
  gap: 24px;
  align-items: center;
}
.research-center__description strong {
  font-size: 68px;
  line-height: 1;
  color: var(--sage);
}
.research-center__description p {
  font-size: 16px;
  line-height: 1.5;
}
.research-center > .action-button {
  align-self: end;
  font-size: 14px;
  padding: 16px 20px;
  border-radius: 16px;
}
.infrastructure-grid {
  display: grid;
  grid-template-columns: 308px 1fr;
  gap: 32px;
  margin-top: 32px;
}
.infrastructure-grid > div {
  border: 1px solid #ccc;
  border-radius: 24px;
  overflow: hidden;
}
.infrastructure-grid > div:first-child {
  border: 2px solid #99ad8f;
}
.infrastructure-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 20px;
  background: var(--ink);
  color: white;
  min-height: 56px;
}
.infrastructure-label .eyebrow {
  font-size: 14px;
  color: var(--sage);
  letter-spacing: 0;
}
.core-product__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.infrastructure-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background: white;
  min-height: 394px;
}
.core-product__grid > .infrastructure-card + article {
  border-left: 1px solid #ccc;
}
.infrastructure-card .eyebrow {
  font-size: 14px;
  line-height: 20px;
  padding: 3px 12px;
  background: #deecd6;
  color: var(--green);
  border-radius: 20px;
}
.infrastructure-card h3 {
  font-size: 22px;
  font-weight: 600;
  line-height: 1.25;
}
.infrastructure-card > p:not(.eyebrow) {
  font-size: 16px;
  line-height: 1.5;
  color: #464646;
}
.infrastructure-card .action-button {
  margin-top: auto;
  font-size: 16px;
  padding: 15px 18px;
  border-radius: 16px;
  width: 100%;
  max-width: 270px;
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
}
.tag-list li {
  padding: 4px 12px;
  border: 1px solid #ddd;
  border-radius: 18px;
  font-size: 14px;
  color: #666;
}
@media (max-width: 1000px) {
  .infrastructure-grid {
    grid-template-columns: 1fr;
  }
  .research-center {
    grid-template-columns: 1fr;
  }
  .research-center > .action-button {
    justify-self: start;
  }
}
@media (max-width: 600px) {
  .core-product__grid {
    grid-template-columns: 1fr;
  }
  .core-product__grid > .infrastructure-card + article {
    border-left: 0;
    border-top: 1px solid #ccc;
  }
  .research-center header {
    display: block;
  }
  .research-center header .eyebrow {
    margin-top: 12px;
  }
  .research-center__description {
    flex-direction: column;
    align-items: flex-start;
  }
  .infrastructure-label {
    flex-wrap: wrap;
  }
}
</style>
