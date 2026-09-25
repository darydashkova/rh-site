<script setup lang="ts">
defineProps<{
  article: {
    title: string;
    date: string;
    category: string;
    cover: string;
    coverWidth: number;
    coverHeight: number;
  };
}>();
function formattedDate(value: string) {
  return value.split("-").reverse().join(".");
}
</script>
<template>
  <div class="anti-page">
    <header class="anti-topbar">
      <NuxtLink
        to="/case-studies?tab=anti#case-directory"
        aria-label="Back to anti-cases"
        class="anti-back"
        ><svg
          width="11"
          height="20"
          viewBox="0 0 11 20"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="m10 1-9 9 9 9" /></svg
      ></NuxtLink>
      <NuxtLink to="/case-studies?tab=anti#case-directory">Anti-case</NuxtLink>
    </header>
    <main id="main-content" class="anti-article">
      <article>
        <h1>{{ article.title }}</h1>
        <div class="anti-meta">
          <time :datetime="article.date">{{ formattedDate(article.date) }}</time
          ><span v-if="article.category">{{ article.category }}</span>
        </div>
        <img
          class="anti-cover"
          :src="article.cover"
          :width="article.coverWidth"
          :height="article.coverHeight"
          :alt="article.title"
          fetchpriority="high"
        />
        <div class="anti-body"><slot /></div>
      </article>
    </main>
  </div>
</template>
<style>
.anti-page {
  background: #fff;
  color: #464646;
  min-height: 100vh;
  font-family: Montserrat, Arial, sans-serif;
}
.anti-topbar {
  position: fixed;
  inset: 0 0 auto;
  z-index: 110;
  height: 56px;
  border-bottom: 1px solid #ccc;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
}
.anti-topbar a {
  color: #666;
  text-decoration: none;
}
.anti-topbar .anti-back {
  position: absolute;
  left: 20px;
  top: 0;
  height: 55px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}
.anti-article {
  max-width: 760px;
  margin: 0 auto;
  padding: 95px 0;
}
.anti-article h1 {
  font-family: Montserrat, Arial, sans-serif;
  font-size: 36px;
  line-height: 1.23;
  font-weight: 600;
  color: #262626;
  margin: 0;
  padding: 0 0 15px;
}
.anti-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  color: #888;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  line-height: 1.55;
  padding-bottom: 15px;
  text-transform: uppercase;
}
.anti-meta span {
  letter-spacing: 2.5px;
}
.anti-cover {
  display: block;
  width: 100%;
  height: auto;
  margin: 15px 0 30px;
}
.anti-body {
  font-size: 18px;
  line-height: 1.55;
  color: #464646;
  overflow-wrap: break-word;
}
.anti-prose {
  line-height: 1.4;
  margin-bottom: 12px;
  padding: 4px 0;
}
.anti-body > .anti-prose:first-child {
  padding-top: 0;
}
.anti-body h2,
.anti-body h3,
.anti-body h4 {
  font-family: Montserrat, Arial, sans-serif;
  font-weight: 700;
  color: #464646;
  line-height: 1.3;
  margin: 32px 0 12px;
  padding: 4px 0;
}
.anti-body h2 {
  font-size: 30px;
}
.anti-body h3 {
  font-size: 28px;
}
.anti-body h4 {
  font-size: 22px;
}
.anti-body strong,
.anti-body b {
  font-weight: 700;
  color: inherit;
}
.anti-body blockquote {
  border-left: 3px solid rgba(0, 0, 0, 0.84);
  margin: 16px 0;
  padding-left: 20px;
  line-height: 1.5;
}
.anti-body blockquote strong {
  font-size: 18px;
}
.anti-body a {
  color: inherit;
  text-decoration: none;
  overflow-wrap: break-word;
}
.anti-body a:hover {
  text-decoration: underline;
}
.anti-body a.anti-link-accent {
  color: #b4cfa3;
}
.anti-body .anti-callout a,
.anti-body .anti-callout strong {
  color: #111;
}
.anti-body .anti-callout a.anti-link-accent {
  color: #b4cfa3;
}
.anti-body .anti-callout {
  color: #000;
}
.anti-body figure {
  margin: 16px 0;
  width: 100%;
}
.anti-body img {
  display: block;
  width: 100%;
  height: auto;
}
.anti-body figcaption {
  font-size: 16px;
  font-style: italic;
  margin-top: 5px;
  opacity: 0.5;
}
.anti-body ol,
.anti-body ul {
  margin: 0;
  padding-left: 20px;
}
.anti-body hr {
  border: 0;
  height: 1px;
  background: #ddd;
  margin: 40px 0;
}
.anti-body table {
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
}
.anti-body td,
.anti-body th {
  padding: 8px;
  border: 1px solid #ddd;
}
@media (max-width: 1199px) and (min-width: 961px) {
  .anti-article {
    max-width: 620px;
  }
  .anti-article h1 {
    font-size: 32px;
  }
}
@media (max-width: 960px) {
  .anti-article {
    max-width: 640px;
    width: calc(100% - 40px);
  }
  .anti-article h1 {
    font-size: 32px;
  }
  .anti-body h2 {
    font-size: 28px;
  }
  .anti-body h3 {
    font-size: 26px;
  }
  .anti-body h4 {
    font-size: 20px;
  }
}
@media (max-width: 640px) {
  .anti-article h1 {
    font-size: 28px;
  }
  .anti-body h2 {
    font-size: 26px;
  }
  .anti-body h3 {
    font-size: 24px;
  }
  .anti-body h4 {
    font-size: 18px;
  }
  .anti-body {
    font-size: 16px;
  }
  .anti-body blockquote strong {
    font-size: 16px;
  }
}
@media (max-width: 560px) {
  .anti-topbar {
    height: 50px;
  }
  .anti-topbar .anti-back {
    height: 49px;
    left: 14px;
  }
  .anti-article {
    padding: 90px 0 70px;
  }
  .anti-cover {
    margin-top: 0;
    margin-bottom: 20px;
  }
}
</style>
