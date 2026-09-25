<script setup lang="ts">
import footer from "~/data/footer.json";
const companyLinks = footer.groups[0]!.links;
const individualLinks = footer.groups[1]!.links;
const footerGroups = footer.groups.slice(2, 6);
const socials = footer.groups[6]!.links;
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="site-footer__grid">
        <div>
          <section class="footer-links">
            <h2>Solutions for companies</h2>
            <SiteLink
              v-for="link in companyLinks"
              :key="link.label"
              :href="link.href"
              >{{ link.label }}</SiteLink
            >
          </section>
          <section class="footer-links">
            <h2>Solutions for individuals</h2>
            <SiteLink
              v-for="link in individualLinks"
              :key="link.label"
              :href="link.href"
              >{{ link.label }}</SiteLink
            >
          </section>
          <section class="footer-links">
            <h2>{{ footerGroups[0]?.title }}</h2>
            <SiteLink
              v-for="link in footerGroups[0]?.links"
              :key="link.label"
              :href="link.href"
              >{{ link.label }}</SiteLink
            >
          </section>
        </div>
        <div>
          <section
            v-for="group in footerGroups.slice(1)"
            :key="group.title"
            class="footer-links"
          >
            <h2>{{ group.title }}</h2>
            <SiteLink
              v-for="link in group.links"
              :key="link.label"
              :href="link.href"
              >{{ link.label }}</SiteLink
            >
          </section>
        </div>
        <div>
          <section class="footer-contacts">
            <h2>Contacts</h2>
            <address>
              <strong>Dubai Office</strong>
              <p>AL SAQR BUSINESS TOWER 2901-24 Office</p>
              <SiteLink href="mailto:contact@reputation.house"
                >contact@reputation.house</SiteLink
              >
              <SiteLink href="tel:+971585052288">+971 58 5052288</SiteLink>
            </address>
            <address>
              <strong>Hong Kong Office</strong>
              <p>
                HK 999077, China, Hong Kong, Wanchai, 20 Luard Road, 9/F Dannies
                House
              </p>
              <SiteLink href="mailto:contact@reputation.house"
                >contact@reputation.house</SiteLink
              >
              <SiteLink href="tel:+971585052288">+971 58 5052288</SiteLink>
            </address>
            <address>
              <strong>Kingdom Of Saudi Arabia Office</strong>
              <p>
                13519, KSA, Riyadh, Al Aqeeq District, 7229 Innovation
                Boulevard, Secondary No. 3004
              </p>
              <SiteLink href="mailto:ha@reputation.house"
                >Hanan Alatuwi ha@reputation.house</SiteLink
              >
            </address>
          </section>
          <section class="footer-links">
            <h2>Social media</h2>
            <SiteLink
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              >{{ social.label }}</SiteLink
            >
          </section>
        </div>
      </div>
      <div class="site-footer__legal">
        <p>
          © 2026 Reputation House<br />Reputation House Marketing Management
          LLC. All rights reserved
        </p>
        <SiteLink
          v-for="link in footer.legal"
          :key="link.label"
          :href="link.href"
          >{{ link.label }}</SiteLink
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--ink);
  color: white;
  padding: 70px 0 36px;
}
.site-footer__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.site-footer h2 {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: #aaa;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
}
.footer-links {
  margin-bottom: 36px;
}
.footer-links a {
  display: block;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.site-footer a:hover {
  color: var(--sage);
}
.footer-contacts address {
  font-size: 13px;
  line-height: 1.6;
  font-style: normal;
  margin-bottom: 26px;
}
.footer-contacts strong {
  font-weight: 500;
}
.footer-contacts p {
  margin: 8px 0;
}
.footer-contacts a {
  display: block;
}
.site-footer__legal {
  display: flex;
  align-items: flex-end;
  gap: 26px;
  border-top: 1px solid #ffffff35;
  padding-top: 28px;
  margin-top: 24px;
  font-size: 12px;
  color: #b7b7b7;
}
.site-footer__legal p {
  margin-right: auto;
}
@media (max-width: 900px) {
  .site-footer__grid {
    grid-template-columns: 1fr 1fr;
  }
  .site-footer__legal {
    flex-wrap: wrap;
    align-items: flex-start;
  }
  .site-footer__legal p {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .site-footer__grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
