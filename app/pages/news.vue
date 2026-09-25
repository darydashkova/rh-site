<script setup lang="ts">
const articles = [
  {
    title: "Reputation House Named a LEADING EMPLOYER 2027",
    description:
      "Reputation House has been certified by Institute of Research & Data Aggregation as a LEADING EMPLOYER 2027, placing the company among the top employers worldwide.",
    href: "https://reputation.house/news/reputation-house-named-a-leading-employer-2027",
    image: "/images/resource-34634393a271.png",
    alt: "",
    date: "2026-09-21",
    dateLabel: "21.09.2026",
  },
  {
    title:
      "We Analyzed Digital Reputation of 52 FinTech companies in the MENA Region – Here’s What We Found",
    description:
      "Reputation House analyzed 52 fintech companies in the UAE, Saudi Arabia, and Egypt. See what search negativity, app ratings, and HR presence reveal about leaders.",
    href: "https://reputation.house/news/fintech-mena-reputation-study",
    image: "/images/resource-13e49e911efa.png",
    alt: "",
    date: "2026-08-18",
    dateLabel: "18.08.2026",
  },
  {
    title:
      "Meet Reputation Strategy Finder – An Interactive Tool to Build Tailored Risk Protection Strategies for Your Particular Case",
    description:
      "A free interactive tool that maps your situation to the right reputation strategy across search, AI answers, media and forums. Get your plan in minutes.",
    href: "https://reputation.house/news/reputation-strategy-tool",
    image: "/images/resource-cfe5e80069d0.png",
    alt: "",
    date: "2026-07-31",
    dateLabel: "31.07.2026",
  },
  {
    title:
      "We Analyzed the Digital Reputation of 17 Leading U.S. Pharma Companies – Here’s What We Found",
    description:
      "Our new sector-wide Digital Risk Report shows that pharma's biggest reputational exposure is not today's headlines. It's the widening gap between how companies present themselves and how AI systems describe them",
    href: "https://reputation.house/news/pharma-ai-reputation-gap-report",
    image: "/images/resource-e2b6c18c4012.png",
    alt: "",
    date: "2026-07-22",
    dateLabel: "22.07.2026",
  },
  {
    title:
      "Reputation House is a Gold Winner of The 11th Annual Stevie® Awards for Great Employers",
    description:
      "The 11th Annual Stevie® Awards for Great Employers have just announced that Reputation House became a gold trophy winner in the Achievement in Managing a Remote Workforce category.",
    href: "https://reputation.house/news/stevie-award-remote-workforce-2026",
    image: "/images/resource-dfbdb216a3d5.png",
    alt: "",
    date: "2026-07-16",
    dateLabel: "16.07.2026",
  },
  {
    title:
      "Reputation House Releases Major Updates for Risk Check: New Modules Translate Digital Risk Into Business Consequences",
    description:
      "Two months after launch, the free digital risk diagnostic platform introduces Top Business Risks and Priority Matrix – helping companies not just identify risk signals, but understand what to fix, watch and monitor.",
    href: "https://reputation.house/news/risk-check-major-update",
    image: "/images/resource-67f140eb3015.png",
    alt: "",
    date: "2026-05-25",
    dateLabel: "25.05.2026",
  },
  {
    title:
      "Kristina Shinkareva Appointed CEO of Reputation House by the Board of Directors",
    description:
      "The Board of Directors has appointed Kristina Shinkareva as Chief Executive Officer of the company. The decision was made in February 2026, with Ms. Shinkareva officially taking office on April 22, 2026.",
    href: "https://reputation.house/news/kristina-shinkareva-appointed-ceo-of-reputation-house",
    image: "/images/resource-99ba471e26e8.png",
    alt: "",
    date: "2026-04-23",
    dateLabel: "23.04.2026",
  },
  {
    title:
      "Reputation House Is a Multiple Winner at the American Business Awards 2026",
    description:
      "We are proud to share that Reputation House has been recognized as a multiple winner at the American Business Awards 2026, securing awards in all three categories we entered.",
    href: "https://reputation.house/news/stevie-awards-2026",
    image: "/images/resource-117cff8e5c4b.jpg",
    alt: "",
    date: "2026-04-23",
    dateLabel: "23.04.2026",
  },
  {
    title:
      "Meet Risk Control Center.  A New Standard for Managing Digital Risk",
    description:
      "We've built a platform that puts you in control of your digital reputation — across search, AI, media, and reviews — before risks become losses. Meet Risk Control Center.",
    href: "https://reputation.house/news/meet-risk-control-center",
    image: "/images/resource-8d716f6d1970.png",
    alt: "",
    date: "2026-04-07",
    dateLabel: "07.04.2026",
  },
  {
    title: "We Launch a Free Product for Digital Risks Diagnostic – RiskCheck",
    description:
      "Reputation House launches RiskCheck — a free diagnostic platform that assesses digital risks for businesses in minutes.",
    href: "https://reputation.house/news/risk-check-is-live",
    image: "/images/resource-2730e4a03353.jpg",
    alt: "",
    date: "2026-03-17",
    dateLabel: "17.03.2026",
  },
];
const shown = ref(10);
useSeoMeta({
  title: "News & Media about online reputation | Reputation House",
});
</script>
<template>
  <main id="main-content" class="resource-page">
    <div class="resource-container">
      <nav class="resource-breadcrumb" aria-label="Breadcrumb">
        <NuxtLink to="/">Reputation.house</NuxtLink><span>/</span
        ><span>News</span>
      </nav>
      <h1>News &amp; Media about online reputation</h1>
      <ArticleList :items="articles.slice(0, shown)" variant="news" /><button
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
