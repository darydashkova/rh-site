<script setup lang="ts">
const articles = [
  {
    title: "SERP Control Score: Do You Own Your Brand Search Results?",
    description:
      "Five inputs, one score out of 100 — see how much of your branded top-10 you actually control, what the gaps are exposing you to, and exactly what to fix first.",
    href: "/calculator/serp-reputation-score",
    image: "/images/resource-54f9d653b258.png",
    alt: "",
    date: "2026-07-08",
    dateLabel: "08.07.2026",
  },
  {
    title: "Executive Reputation Score: What Does Google Say About You?",
    description:
      "Five questions about your digital presence — personal site, LinkedIn, media coverage, negative results, and your role — and you get a score out of 100 with a risk map and what others actually find when they search your name.",
    href: "/calculator/executive-reputation-score",
    image: "/images/resource-9be9a31a2a38.png",
    alt: "",
    date: "2026-07-08",
    dateLabel: "08.07.2026",
  },
  {
    title: "Crisis Response Time Calculator",
    description:
      "Six crisis types, three spread speeds, four platforms — select your situation and get your critical response window, the point of no return, and the first three steps to take right now.",
    href: "/calculator/crisis-response-time",
    image: "/images/resource-352c0237f7fc.png",
    alt: "",
    date: "2026-07-08",
    dateLabel: "08.07.2026",
  },
  {
    title: "Brand Monitoring ROI Calculator",
    description:
      "Enter your monthly mention volume, average reach, paid CPM, share of negative mentions, and response time — and see what your earned media is worth, and how much slow monitoring is quietly costing you.",
    href: "/calculator/brand-monitoring-roi",
    image: "/images/resource-0480f0d15362.png",
    alt: "",
    date: "2026-06-26",
    dateLabel: "26.06.2026",
  },
  {
    title:
      "Review Impact Calculator: See What Your Star Rating Is Actually Worth",
    description: "",
    href: "/calculator/review-impact-revenue",
    image: "/images/resource-bc16a1b47ac1.png",
    alt: "",
    date: "2026-06-23",
    dateLabel: "23.06.2026",
  },
  {
    title:
      "Reputation Recovery Timeline: How Long Until This Is Actually Behind You",
    description:
      "Incident type, how far it spread, whether it's still active, whether you have positive content, and company size — five quick inputs, one phase-by-phase timeline, no guesswork.",
    href: "/calculator/reputation-recovery-timeline",
    image: "/images/resource-392f53578327.png",
    alt: "",
    date: "2026-06-18",
    dateLabel: "18.06.2026",
  },
  {
    title:
      "Reputation Damage Cost Estimator: See What an Incident Would Actually Cost You",
    description:
      "Put a number on the thing you're already worried about. Revenue, incident type, how far it spreads, whether you have a plan — four inputs, one range, no email wall.",
    href: "/calculator/reputation-damage-cost",
    image: "/images/resource-cc63f2642bb7.png",
    alt: "",
    date: "2026-06-18",
    dateLabel: "18.06.2026",
  },
  {
    title:
      "Reputation Exposure Scan: Detect Hidden Vulnerabilities Before They Go Public",
    description:
      "Identify where your brand is exposed — across search, AI platforms, media, reviews, compliance databases, and crisis readiness. Built on WTW, Aon, and EY frameworks. Six surfaces. Twenty signals. One score.",
    href: "/calculator/reputation-risk-score",
    image: "/images/resource-ebd107718240.png",
    alt: "",
    date: "2026-06-18",
    dateLabel: "18.06.2026",
  },
];
const shown = ref(8);
useSeoMeta({
  title:
    "Online Reputation Calculators Free Risk Calculator & Recovery Tools | Reputation House",
});
</script>
<template>
  <main id="main-content" class="resource-page">
    <div class="resource-container">
      <h1 class="resource-title--center">
        Online Reputation Calculators<br />Free Risk Calculator &amp; Recovery
        Tools
      </h1>
      <ArticleList
        :items="articles.slice(0, shown)"
        variant="calculator"
      /><button
        v-if="shown < articles.length"
        class="resource-more"
        type="button"
        @click="shown += 10"
      >
        Read more
      </button>
    </div>
  </main>
</template>
<style scoped>
#main-content { padding-top: 72px; }
.resource-container {
  width: calc(100% - 40px);
  max-width: 1160px;
  margin: auto;
  padding-bottom: 100px;
}
.resource-breadcrumb {
  display: flex;
  gap: 14px;
  padding-top: 115px;
  color: #8d8d8d;
  font-size: 16px;
}
.resource-page h1 {
  font-size: 40px;
  line-height: 1.2;
  font-weight: 600;
  margin: 120px 0 100px;
  white-space: normal;
}
.resource-page h1.resource-title--center {
  text-align: center;
  font-size: 42px;
  margin: 130px auto 110px;
}
.resource-more {
  display: block;
  margin: 70px auto 0;
  background: #303030;
  color: white;
  border: 0;
  padding: 18px 35px;
  cursor: pointer;
  font-weight: 600;
}
.resource-company-news {
  background: #efefef;
  padding: 130px 20px 100px;
}
.resource-company-news h2 {
  text-align: center;
  font-size: 40px;
  font-weight: 600;
}
.resource-company-news > p {
  text-align: center;
  font-size: 20px;
  color: #777;
  margin: 40px 0 110px;
}
.resource-company-news__list {
  max-width: 760px;
  margin: auto;
}
@media (max-width: 640px) {
  .resource-breadcrumb {
    padding-top: 40px;
    font-size: 13px;
  }
  .resource-page h1,
  .resource-page h1.resource-title--center {
    font-size: 28px;
    margin: 55px 0;
  }
  .resource-container {
    padding-bottom: 60px;
  }
  .resource-company-news {
    padding: 65px 20px;
  }
  .resource-company-news h2 {
    font-size: 28px;
  }
  .resource-company-news > p {
    font-size: 16px;
    margin: 20px 0 50px;
  }
}
</style>
