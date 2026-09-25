<script setup lang="ts">
import { identityElements, credentials } from "~/data/homepage";
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="container hero__content">
      <p class="eyebrow">Digital risks protection for brands & individuals</p>
      <div class="hero__grid">
        <div class="hero__copy">
          <h1 id="hero-title">
            Control what people find about your brand and you online
          </h1>
          <p>
            Our online reputation management services combine a proprietary
            platform with a dedicated expert team into one end-to-end solution —
            so your digital profile works for you, not against you
          </p>
          <div class="button-row">
            <ActionButton>Get a Call with Expert</ActionButton>
            <ActionButton
              href="https://strategy.reputation.house/strategy/"
              variant="outline"
              >Find a Your Strategy Online</ActionButton
            >
          </div>
        </div>

        <div
          class="identity-map"
          aria-label="Five elements of your digital identity"
        >
          <div class="identity-map__center">
            <p>5 elements of your digital identity</p>
            <strong>Complex protection of your digital profile</strong>
          </div>
          <div class="identity-cards">
            <article
              v-for="element in identityElements"
              :key="element.key"
              class="identity-card"
              :class="`identity-card--${element.key}`"
            >
              <div class="identity-card__label">
                <img
                  :src="`/images/${element.icon}`"
                  alt=""
                  width="20"
                  height="20"
                />{{ element.label }}
              </div>
              <div>
                <h2>
                  <SiteLink :href="element.href">{{ element.title }}</SiteLink>
                </h2>
                <p>{{ element.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div class="credentials">
      <dl class="container credentials__grid">
        <div v-for="credential in credentials" :key="credential.title">
          <dt>{{ credential.title }}</dt>
          <dd>{{ credential.description }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 140px;
}
.hero__content {
  border-top: 1px solid var(--line);
  padding-top: 24px;
  padding-bottom: 56px;
}
.hero__grid {
  display: grid;
  grid-template-columns: 461px 1fr;
  gap: 40px;
  margin-top: 32px;
}
.hero h1 {
  font-size: 56px;
  line-height: 1.2;
  font-weight: 400;
}
.hero__copy > p {
  font-size: 20px;
  line-height: 1.4;
  margin-top: 14px;
}
.hero__copy .button-row {
  margin-top: 28px;
  gap: 12px;
  flex-wrap: nowrap;
}
.hero__copy .action-button {
  padding-inline: 24px;
  white-space: nowrap;
}
.identity-map {
  position: relative;
  align-self: center;
  width: 100%;
  aspect-ratio: 660 / 596;
  margin-top: -50px;
}
.identity-cards {
  display: contents;
}
.identity-map__center {
  position: absolute;
  width: 46%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #deecd6;
  left: 27%;
  top: 27%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 22px;
}
.identity-map__center p {
  font-size: 14px;
  margin-bottom: 8px;
}
.identity-map__center strong {
  font-size: 20px;
  line-height: 1.4;
  font-weight: 600;
}
.identity-card {
  position: absolute;
  width: 30.3%;
  min-height: 162px;
  padding: 18px 16px;
  border-radius: 17px;
  background: var(--ink);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
}
.identity-card--search {
  top: 0;
  left: 35%;
}
.identity-card--scan {
  left: 0;
  top: 33%;
}
.identity-card--ai {
  right: 0;
  top: 33%;
}
.identity-card--tone {
  bottom: 0;
  left: 13.6%;
}
.identity-card--reviews {
  bottom: 0;
  right: 13.6%;
}
.identity-card__label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}
.identity-card h2 {
  font-size: 16px;
  line-height: 1.4;
  font-weight: 600;
  color: var(--sage);
  margin-bottom: 5px;
}
.identity-card p {
  font-size: 14px;
  line-height: 1.6;
}
.credentials {
  background: var(--green);
  color: white;
  padding: 40px 0;
}
.credentials__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px;
}
.credentials dt {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}
.credentials dd {
  font-size: 16px;
  line-height: 1.6;
  max-width: 200px;
}
@media (min-width: 1200px) and (max-width: 1399px) {
  .hero__grid {
    grid-template-columns: 42% 1fr;
    gap: 30px;
  }
  .hero h1 {
    font-size: 50px;
  }
  .identity-card {
    min-height: 150px;
  }
  .identity-card p {
    font-size: 12px;
  }
  .hero__copy .button-row {
    flex-wrap: wrap;
  }
}
@media (max-width: 1199px) {
  .hero {
    padding-top: 110px;
  }
  .hero__grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 50px;
  }
  .hero__copy {
    max-width: 680px;
  }
  .identity-map {
    max-width: 660px;
    margin: 0 auto;
  }
  .credentials__grid {
    gap: 30px;
  }
}
@media (max-width: 600px) {
  .hero {
    padding-top: 82px;
  }
  .hero__content {
    width: min(360px, calc(100% - 16px));
    border-top: 0;
    padding-top: 0;
    padding-bottom: 36px;
  }
  .hero .eyebrow {
    max-width: 250px;
    font-size: 12px;
    line-height: 1.05;
  }
  .hero__grid {
    margin-top: 34px;
    gap: 36px;
  }
  .hero h1 {
    font-size: 32px;
    line-height: 1.18;
    letter-spacing: 0;
  }
  .hero__copy > p {
    font-size: 18px;
    line-height: 1.4;
    margin-top: 18px;
  }
  .hero__copy .button-row {
    margin-top: 28px;
    flex-direction: column;
    align-items: stretch;
  }
  .identity-map {
    display: block;
    aspect-ratio: auto;
  }
  .identity-cards {
    display: flex;
    overflow-x: auto;
    gap: 12px;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    padding-bottom: 10px;
  }
  .identity-cards::-webkit-scrollbar {
    display: none;
  }
  .hero__copy .action-button {
    white-space: normal;
    font-size: 16px;
  }
  .identity-map__center {
    position: static;
    width: auto;
    aspect-ratio: auto;
    border-radius: 0;
    padding: 0 0 20px;
    background: none;
    text-align: left;
  }
  .identity-map__center p {
    font-size: 12px;
    margin-bottom: 4px;
  }
  .identity-map__center strong {
    font-size: 18px;
    max-width: 240px;
  }
  .identity-card {
    position: static;
    overflow-wrap: anywhere;
    flex: 0 0 180px;
    width: 180px;
    min-height: 210px;
    padding: 16px;
    scroll-snap-align: start;
  }
  .identity-card:last-child {
    min-height: 210px;
  }
  .identity-card p {
    font-size: 12px;
  }
  .credentials {
    padding: 30px 0;
  }
  .credentials__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, auto);
  }
  .credentials dt {
    font-size: 18px;
  }
  .credentials dd {
    font-size: 16px;
  }
}
</style>
