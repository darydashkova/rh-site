<script setup lang="ts">
if (import.meta.server) useResponseHeader('Cache-Control').value = 'no-store, max-age=0';

type NewsSummary = {
  title: string;
  slug: string;
  excerpt: string;
  cover_url: string | null;
  cover_alt: string | null;
  published_at: string | null;
};
type NewsPage = {
  data: NewsSummary[];
  meta: { current_page: number; last_page: number; total: number };
};

const cmsApiBase = useRuntimeConfig().public.cmsApiBase;
if (!cmsApiBase) throw createError({ statusCode: 503, statusMessage: 'News is unavailable' });

const { data, error } = await useAsyncData('cms-news-list', () =>
  $fetch<NewsPage>(`${cmsApiBase}/news`),
);
if (error.value) throw createError({ statusCode: 502, statusMessage: 'Could not load news' });

const loadedPosts = ref<NewsSummary[]>(data.value?.data || []);
const currentPage = ref(data.value?.meta.current_page || 1);
const lastPage = ref(data.value?.meta.last_page || 1);
const loadingMore = ref(false);
const loadError = ref(false);

const loadMore = async () => {
  if (loadingMore.value || currentPage.value >= lastPage.value) return;
  loadingMore.value = true;
  loadError.value = false;
  try {
    const next = await $fetch<NewsPage>(`${cmsApiBase}/news`, { query: { page: currentPage.value + 1 } });
    loadedPosts.value.push(...next.data);
    currentPage.value = next.meta.current_page;
    lastPage.value = next.meta.last_page;
  } catch {
    loadError.value = true;
  } finally {
    loadingMore.value = false;
  }
};

const articles = computed(() => loadedPosts.value.map((post) => ({
  title: post.title,
  description: post.excerpt,
  href: `/news/${post.slug}`,
  image: post.cover_url || '/images/resource-34634393a271.png',
  alt: post.cover_alt || '',
  date: post.published_at?.slice(0, 10) || '',
  dateLabel: post.published_at?.slice(0, 10).split('-').reverse().join('.') || '',
})));

useSeoMeta({ title: 'News & Media about online reputation | Reputation House' });
</script>

<template>
  <main id="main-content" class="resource-page">
    <div class="resource-container">
      <nav class="resource-breadcrumb" aria-label="Breadcrumb">
        <NuxtLink to="/">Reputation.house</NuxtLink><span>/</span><span>News</span>
      </nav>
      <h1>News &amp; Media about online reputation</h1>
      <ArticleList v-if="articles.length" :items="articles" variant="news" />
      <p v-else class="resource-empty">News is coming soon.</p>
      <button v-if="currentPage < lastPage" class="resource-more" type="button" :disabled="loadingMore" @click="loadMore">
        {{ loadingMore ? 'Loading...' : 'Read more' }}
      </button>
      <p v-if="loadError" class="resource-load-error">Could not load more news. Please try again.</p>
    </div>
  </main>
</template>

<style scoped>
#main-content { padding-top: 72px; }
.resource-container { width: calc(100% - 40px); max-width: 1160px; margin: auto; padding-bottom: 100px; }
.resource-breadcrumb { display: flex; gap: 14px; padding-top: 115px; color: #8d8d8d; font-size: 16px; }
.resource-page h1 { font-size: 40px; line-height: 1.2; font-weight: 600; margin: 120px 0 100px; }
.resource-empty { color: #777; font-size: 18px; }
.resource-more { display: block; margin: 70px auto 0; background: #303030; color: white; border: 0; padding: 18px 35px; cursor: pointer; font-weight: 600; }
.resource-more:disabled { cursor: wait; opacity: .6; }
.resource-load-error { margin-top: 20px; color: #9c3535; text-align: center; }
@media (max-width: 640px) {
  .resource-breadcrumb { padding-top: 40px; font-size: 13px; }
  .resource-page h1 { font-size: 28px; margin: 55px 0; }
  .resource-container { padding-bottom: 60px; }
}
</style>
