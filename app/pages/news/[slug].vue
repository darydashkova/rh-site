<script setup lang="ts">
if (import.meta.server) useResponseHeader('Cache-Control').value = 'no-store, max-age=0';

type NewsBlock = {
  type: 'rich_text' | 'heading' | 'notice' | 'quote' | 'image';
  data: {
    body?: string;
    text?: string;
    attribution?: string;
    url?: string | null;
    alt?: string;
    caption?: string;
  };
};
type NewsArticle = {
  title: string;
  slug: string;
  excerpt: string;
  cover_url: string | null;
  cover_alt: string | null;
  published_at: string | null;
  lead: string | null;
  lead_style: 'italic' | 'large' | 'regular';
  blocks: NewsBlock[];
  body: string;
  author_name: string | null;
  author_photo_url: string | null;
  source_url: string | null;
  seo_title: string;
  seo_description: string;
};

const route = useRoute();
const slug = String(route.params.slug || '');
const apiBase = useRuntimeConfig().public.cmsApiBase;
if (!apiBase) throw createError({ statusCode: 503, statusMessage: 'News is unavailable' });

const { data: article, error } = await useAsyncData<NewsArticle>(`cms-news-${slug}`, () =>
  $fetch<NewsArticle>(`${apiBase}/news/${encodeURIComponent(slug)}`),
);
if (error.value || !article.value) {
  const statusCode = Number(error.value?.statusCode || 502);
  throw createError({ statusCode, statusMessage: statusCode === 404 ? 'News not found' : 'Could not load news' });
}

const dateLabel = computed(() => article.value?.published_at
  ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' }).format(new Date(article.value.published_at))
  : '');
const sourceUrl = computed(() => /^https?:\/\//i.test(article.value?.source_url || '') ? article.value?.source_url : null);

useSeoMeta({ title: article.value.seo_title, description: article.value.seo_description });
</script>

<template>
  <main v-if="article" id="main-content" class="news-article">
    <article class="news-container">
      <h1>{{ article.title }}</h1>
      <img v-if="article.cover_url" class="news-cover" :src="article.cover_url" :alt="article.cover_alt || ''" />

      <div class="news-content">
        <p v-if="article.lead || article.excerpt" class="news-lead" :class="`news-lead--${article.lead_style || 'italic'}`">{{ article.lead || article.excerpt }}</p>

        <template v-if="article.blocks?.length">
          <template v-for="(block, index) in article.blocks" :key="index">
            <div v-if="block.type === 'rich_text'" class="news-rich-text" v-html="block.data.body" />
            <h2 v-else-if="block.type === 'heading'" class="news-heading">{{ block.data.text }}</h2>
            <aside v-else-if="block.type === 'notice'" class="news-notice">
              <span class="news-notice-icon" aria-hidden="true">i</span>
              <div class="news-notice-content" v-html="block.data.body" />
            </aside>
            <blockquote v-else-if="block.type === 'quote'" class="news-quote">
              <p>{{ block.data.text }}</p>
              <footer v-if="block.data.attribution">{{ block.data.attribution }}</footer>
            </blockquote>
            <figure v-else-if="block.type === 'image' && block.data.url" class="news-figure">
              <img :src="block.data.url" :alt="block.data.alt || ''" loading="lazy" />
              <figcaption v-if="block.data.caption">{{ block.data.caption }}</figcaption>
            </figure>
          </template>
        </template>
        <div v-else class="news-rich-text" v-html="article.body" />

        <a v-if="sourceUrl" class="news-source" :href="sourceUrl" target="_blank" rel="noopener noreferrer">Original announcement ↗</a>
        <div v-if="article.author_name" class="news-author">
          <img v-if="article.author_photo_url" :src="article.author_photo_url" :alt="article.author_name" loading="lazy" />
          <span>{{ article.author_name }}</span>
        </div>
        <time v-if="article.published_at" class="news-date" :datetime="article.published_at">{{ dateLabel }}</time>
      </div>
    </article>
  </main>
</template>

<style scoped>
.news-article { padding: 118px 20px 110px; background: #fff; }
.news-container { max-width: 760px; margin: 0 auto; }
.news-container h1 { margin: 0 0 30px; color: #252525; font-size: clamp(32px, 3.1vw, 38px); line-height: 1.16; font-weight: 600; }
.news-cover { display: block; width: 100%; height: auto; margin-bottom: 30px; }
.news-content { color: #353535; font-size: 17px; line-height: 1.5; }
.news-lead { margin: 0 0 26px; }
.news-lead--italic { font-style: italic; }
.news-lead--large { font-size: 22px; line-height: 1.45; }
.news-rich-text { margin: 0 0 25px; }
.news-rich-text :deep(p), .news-rich-text :deep(ul), .news-rich-text :deep(ol) { margin: 0 0 18px; }
.news-rich-text :deep(ul), .news-rich-text :deep(ol) { padding-left: 24px; }
.news-rich-text :deep(li) { margin: 0 0 7px; }
.news-rich-text :deep(a), .news-notice-content :deep(a) { color: #6d9344; text-decoration: none; }
.news-rich-text :deep(a:hover), .news-notice-content :deep(a:hover) { text-decoration: underline; }
.news-heading { margin: 35px 0 16px; font-size: 25px; line-height: 1.2; font-weight: 600; }
.news-notice { display: flex; align-items: flex-start; gap: 16px; margin: 28px 0; padding: 24px 20px; background: #ececec; }
.news-notice-icon { display: inline-flex; flex: 0 0 22px; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: #052342; color: white; font-size: 15px; font-weight: 700; font-style: normal; }
.news-notice-content { flex: 1; }
.news-notice-content :deep(p) { margin: 0 0 12px; }
.news-notice-content :deep(p:last-child) { margin-bottom: 0; }
.news-quote { margin: 28px 0; padding: 0 0 0 22px; border-left: 2px solid #2f2f2f; }
.news-quote p { margin: 0; font-style: italic; }
.news-quote footer { margin-top: 22px; font-weight: 600; }
.news-figure { margin: 34px 0; text-align: center; }
.news-figure img { display: block; max-width: 100%; height: auto; margin: 0 auto; }
.news-figure figcaption { margin-top: 10px; color: #888; font-size: 13px; }
.news-source { display: inline-block; margin: 12px 0 34px; color: #6d9344; font-size: 14px; }
.news-author { display: flex; align-items: center; gap: 12px; margin: 30px 0 38px; font-size: 13px; }
.news-author img { width: 30px; height: 30px; border-radius: 50%; object-fit: cover; }
.news-date { display: block; margin-top: 22px; color: #aaa; font-size: 12px; letter-spacing: .03em; }
@media (max-width: 640px) {
  .news-article { padding: 102px 20px 70px; }
  .news-container h1 { margin-bottom: 24px; }
  .news-content { font-size: 16px; }
  .news-lead--large { font-size: 19px; }
  .news-heading { font-size: 22px; }
  .news-notice { padding: 18px; }
}
</style>
