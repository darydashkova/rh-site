<script setup lang="ts">
if (import.meta.server) useResponseHeader('Cache-Control').value = 'no-store, max-age=0';

type BlogItem = {
  title: string;
  slug: string;
  excerpt: string;
  cover_url: string | null;
  cover_alt: string | null;
};

type BlogBlock = {
  type: string;
  data: {
    heading?: string;
    body?: string;
    text?: string;
    attribution?: string;
    tone?: string;
    url?: string | null;
    alt?: string;
    caption?: string;
    button_text?: string;
    button_url?: string;
    left_title?: string;
    left_text?: string;
    right_title?: string;
    right_text?: string;
    items?: Array<{ title?: string; text?: string; value?: string; label?: string }>;
  };
};

type BlogArticle = BlogItem & {
  eyebrow: string | null;
  published_at: string | null;
  updated_at: string | null;
  author_name: string;
  author_role: string | null;
  author_bio: string | null;
  author_photo_url: string | null;
  author_stats: Array<{ value: string; label: string }>;
  author_linkedin_url: string | null;
  reading_minutes: number;
  seo_title: string;
  seo_description: string;
  blocks: BlogBlock[];
  faqs: Array<{ question: string; answer: string }>;
  related: BlogItem[];
};

const route = useRoute();
const slug = String(route.params.slug || "");
const apiBase = useRuntimeConfig().public.cmsApiBase;

if (!apiBase) {
  throw createError({ statusCode: 503, statusMessage: "Blog is unavailable" });
}

const { data: post, error } = await useAsyncData<BlogArticle>(
  `cms-blog-${slug}`,
  () => $fetch<BlogArticle>(`${apiBase}/blog/${encodeURIComponent(slug)}`),
);

if (error.value || !post.value) {
  const statusCode = Number(error.value?.statusCode || 502);
  throw createError({
    statusCode,
    statusMessage: statusCode === 404 ? "Article not found" : "Could not load article",
  });
}

const article = post.value;
const contents = article.blocks.flatMap((block, index) =>
  block.type === "section" && block.data.heading
    ? [{ id: `section-${index}`, title: block.data.heading }]
    : [],
);
if (article.faqs.length) contents.push({ id: "faq", title: "FAQ" });

const relatedCards = article.related.map((item) => ({
  ...item,
  href: `/blog/${item.slug}`,
  category: "ARTICLE",
}));
const formatDate = (value: string | null) =>
  value
    ? new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(value))
    : "";

const safeHttpUrl = (value?: string) => {
  if (!value) return "";
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? value : "";
  } catch {
    return "";
  }
};

useSeoMeta({
  title: article.seo_title || article.title,
  description: article.seo_description || article.excerpt,
  ogTitle: article.seo_title || article.title,
  ogDescription: article.seo_description || article.excerpt,
  ogImage: article.cover_url || undefined,
});
</script>

<template>
  <main id="main-content" class="cms-article">
    <div class="cms-article__container">
      <nav class="cms-article__breadcrumb" aria-label="Breadcrumb">
        <NuxtLink to="/">Reputation.house</NuxtLink><span>/</span>
        <NuxtLink to="/blog">Blog</NuxtLink><span>/</span>
        <span>{{ article.title }}</span>
      </nav>

      <article>
        <header class="cms-article__header">
          <div class="cms-article__badges">
            <span v-if="article.eyebrow" class="cms-article__badge cms-article__badge--dark">{{ article.eyebrow }}</span>
            <span class="cms-article__badge cms-article__badge--sage">Digital risk</span>
          </div>
          <h1>{{ article.title }}</h1>
          <div class="cms-article__meta">
            <time v-if="article.published_at" :datetime="article.published_at">{{ formatDate(article.published_at) }}</time>
            <span>{{ article.reading_minutes }} min read</span>
            <span v-if="article.updated_at" class="cms-article__updated">Updated {{ formatDate(article.updated_at) }}</span>
          </div>
          <div class="cms-article__divider" aria-hidden="true"><i /><i /><i /></div>

          <nav v-if="contents.length" class="cms-article__toc" aria-label="Table of contents">
            <p>Table of contents</p>
            <div>
              <a v-for="item in contents" :key="item.id" :href="`#${item.id}`">{{ item.title }}</a>
            </div>
          </nav>
        </header>

        <div class="cms-article__body">
          <template v-for="(block, index) in article.blocks" :key="index">
            <section v-if="block.type === 'section'" :id="`section-${index}`" class="cms-article__section">
              <h2>{{ block.data.heading }}</h2>
              <div v-if="block.data.body" class="cms-article__rich" v-html="block.data.body" />
            </section>

            <div
              v-else-if="block.type === 'paragraph'"
              class="cms-article__rich cms-article__paragraph"
              :class="{ 'cms-article__paragraph--lead': index === 0 }"
              v-html="block.data.body"
            />

            <blockquote v-else-if="block.type === 'quote'" class="cms-article__quote">
              <p>{{ block.data.text }}</p>
              <footer v-if="block.data.attribution">— {{ block.data.attribution }}</footer>
            </blockquote>

            <div
              v-else-if="block.type === 'callout'"
              class="cms-article__callout"
              :class="`cms-article__callout--${block.data.tone || 'green'}`"
            >
              {{ block.data.text }}
            </div>

            <div v-else-if="block.type === 'cards'" class="cms-article__cards">
              <div v-for="(item, itemIndex) in block.data.items || []" :key="itemIndex">
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </div>
            </div>

            <div v-else-if="block.type === 'stats'" class="cms-article__stats">
              <div v-for="(item, itemIndex) in block.data.items || []" :key="itemIndex">
                <strong>{{ item.value }}</strong>
                <span>{{ item.label }}</span>
              </div>
            </div>

            <div v-else-if="block.type === 'steps'" class="cms-article__steps">
              <div v-for="(item, itemIndex) in block.data.items || []" :key="itemIndex">
                <span>{{ itemIndex + 1 }}</span>
                <div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div>
              </div>
            </div>

            <div v-else-if="block.type === 'comparison'" class="cms-article__comparison">
              <div><h3>{{ block.data.left_title }}</h3><p>{{ block.data.left_text }}</p></div>
              <div><h3>{{ block.data.right_title }}</h3><p>{{ block.data.right_text }}</p></div>
            </div>

            <div v-else-if="block.type === 'chips'" class="cms-article__chips">
              <span v-for="(item, itemIndex) in block.data.items || []" :key="itemIndex">{{ item.text }}</span>
            </div>

            <section v-else-if="block.type === 'promo'" class="cms-article__promo">
              <div><span>Digital risk</span><h2>{{ block.data.heading }}</h2><p>{{ block.data.text }}</p></div>
              <div><strong>Know the facts.</strong><p>See what shapes your online reputation.</p><a v-if="safeHttpUrl(block.data.button_url)" :href="safeHttpUrl(block.data.button_url)">{{ block.data.button_text }} →</a></div>
            </section>

            <figure v-else-if="block.type === 'image' && block.data.url" class="cms-article__image">
              <img :src="block.data.url" :alt="block.data.alt || ''" loading="lazy" />
              <figcaption v-if="block.data.caption">{{ block.data.caption }}</figcaption>
            </figure>

            <section v-else-if="block.type === 'cta'" class="cms-article__cta">
              <div>
                <span>Take action</span>
                <h2>{{ block.data.heading }}</h2>
                <p v-if="block.data.text">{{ block.data.text }}</p>
              </div>
              <a v-if="safeHttpUrl(block.data.button_url)" :href="safeHttpUrl(block.data.button_url)">
                {{ block.data.button_text }} <span aria-hidden="true">→</span>
              </a>
            </section>
          </template>

          <section v-if="article.faqs.length" id="faq" class="cms-article__faq cms-article__section">
            <h2>FAQ</h2>
            <details v-for="(faq, index) in article.faqs" :key="index">
              <summary>{{ faq.question }}<span aria-hidden="true">+</span></summary>
              <p>{{ faq.answer }}</p>
            </details>
          </section>
        </div>
      </article>
    </div>

    <section v-if="relatedCards.length" class="cms-article__related" aria-labelledby="cms-related-heading">
      <div class="cms-article__container">
        <h2 id="cms-related-heading">Related articles</h2>
        <div class="cms-article__related-grid">
          <SiteLink v-for="item in relatedCards" :key="item.href" :href="item.href" class="cms-article__related-card">
            <img v-if="item.cover_url" :src="item.cover_url" :alt="item.cover_alt || ''" loading="lazy" />
            <div>
              <span>{{ item.category }}</span>
              <strong>{{ item.title }}</strong>
              <p>{{ item.excerpt }}</p>
              <small>Read article →</small>
            </div>
          </SiteLink>
        </div>
      </div>
    </section>

    <div class="cms-article__container cms-article__author-wrap">
      <section class="cms-article__author" aria-label="Article author">
        <div class="cms-article__author-heading">
          <img v-if="article.author_photo_url" :src="article.author_photo_url" :alt="article.author_name" />
          <div v-else class="cms-article__author-monogram" aria-hidden="true">RH</div>
          <div>
            <span>Author</span>
            <h2>{{ article.author_name }}</h2>
            <p v-if="article.author_role">{{ article.author_role }}</p>
          </div>
        </div>
        <div class="cms-article__author-tags"><span>Digital risk</span><span>Reputation</span><span>Brand protection</span><span>Tech</span></div>
        <div v-if="article.author_stats.length" class="cms-article__author-stats">
          <div v-for="(stat, index) in article.author_stats" :key="index">
            <strong>{{ stat.value.replace('+', '') }}<em v-if="stat.value.includes('+')">+</em></strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
        <p v-if="article.author_bio" class="cms-article__author-bio">{{ article.author_bio }}</p>
        <div class="cms-article__author-bottom">
          <span v-if="article.published_at">Published: {{ formatDate(article.published_at) }}</span>
          <span v-if="article.updated_at">Updated: {{ formatDate(article.updated_at) }}</span>
          <span>{{ article.reading_minutes }} min read</span>
        </div>
        <div class="cms-article__author-actions">
          <a v-if="safeHttpUrl(article.author_linkedin_url || undefined)" class="cms-article__linkedin-link" :href="safeHttpUrl(article.author_linkedin_url || undefined)" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
          <NuxtLink to="/team" class="cms-article__team-link">Meet the team →</NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.cms-article { padding-top: 72px; color: #262626; font-family: Montserrat, Arial, sans-serif; }
.cms-article__container { width: min(100%, 1160px); margin: 0 auto; }
.cms-article__breadcrumb { display: flex; flex-wrap: wrap; gap: 10px; padding: 48px 60px 0; color: #999; font-size: 12px; }
.cms-article__breadcrumb a { color: inherit; text-decoration: none; }
.cms-article__breadcrumb a:hover { color: #606c59; }
.cms-article__header { padding: 48px 60px 40px; }
.cms-article__badges { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 20px; }
.cms-article__badge { display: inline-flex; align-items: center; min-height: 25px; padding: 4px 14px; border-radius: 20px; font-size: 10px; font-weight: 700; letter-spacing: .09em; line-height: 1.2; text-transform: uppercase; }
.cms-article__badge--dark { color: #fff; background: #262626; }
.cms-article__badge--sage { color: #687e60; background: #e3efdc; }
.cms-article__badge--sage::before { content: ""; width: 5px; height: 5px; margin-right: 7px; border-radius: 50%; background: #91b181; }
.cms-article__header h1 { max-width: 1000px; margin: 0 0 16px; font-size: clamp(34px, 3.3vw, 46px); line-height: 1.15; font-weight: 600; letter-spacing: -.035em; }
.cms-article__meta { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; color: #999; font-size: 12px; font-weight: 600; }
.cms-article__meta > span:not(.cms-article__updated)::before { content: "·"; padding-right: 10px; }
.cms-article__updated { padding: 5px 12px; border-radius: 20px; color: #708767; background: #e5f0df; }
.cms-article__divider { display: flex; align-items: center; gap: 5px; margin: 27px 0 30px; }
.cms-article__divider i { display: block; width: 17px; height: 2px; background: #c1d7b3; }
.cms-article__divider i:first-child { width: 36px; background: #262626; }
.cms-article__toc { padding: 28px 32px; border-left: 3px solid #bfd8b3; border-radius: 20px; background: #f7f7f7; }
.cms-article__toc p { margin: 0 0 16px; color: #aaa; font-size: 11px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
.cms-article__toc > div { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 28px; row-gap: 10px; }
.cms-article__toc a { display: flex; gap: 10px; color: #262626; font-size: 14px; font-weight: 600; line-height: 1.45; text-decoration: none; }
.cms-article__toc a::before { content: ""; flex: 0 0 6px; width: 6px; height: 6px; margin-top: 7px; border-radius: 50%; background: #bfd8b3; }
.cms-article__toc a:hover { color: #647f59; }
.cms-article__body { padding: 0 60px 80px; font-size: 16px; line-height: 1.72; }
.cms-article__body > * { margin: 0 0 22px; }
.cms-article__rich :deep(p) { margin: 0 0 18px; }
.cms-article__rich :deep(p:last-child) { margin-bottom: 0; }
.cms-article__rich :deep(a) { color: #6d8a63; font-weight: 700; text-underline-offset: 3px; }
.cms-article__rich :deep(ul), .cms-article__rich :deep(ol) { margin: 0 0 20px; padding-left: 26px; }
.cms-article__rich :deep(h3) { margin: 26px 0 12px; font-size: 19px; }
.cms-article__paragraph--lead { margin-bottom: 24px !important; padding: 22px 25px; border-radius: 14px; background: #e3efdc; font-weight: 600; }
.cms-article__section { scroll-margin-top: 95px; margin-top: 82px !important; padding-top: 20px; border-top: 2px solid #bfd8b3; }
.cms-article__section h2 { margin: 0 0 18px; font-size: 28px; font-weight: 600; line-height: 1.25; letter-spacing: -.025em; }
.cms-article__quote { position: relative; overflow: hidden; min-height: 170px; margin: 30px 0 46px !important; padding: 72px 36px 34px; border-radius: 18px; background: #262626; color: #fff; }
.cms-article__quote::before { content: "“"; position: absolute; top: 6px; left: 34px; color: #819578; font-size: 80px; font-weight: 700; line-height: 1; }
.cms-article__quote::after { content: ""; position: absolute; right: -55px; bottom: -100px; width: 180px; height: 180px; border-radius: 50%; background: #ffffff0a; }
.cms-article__quote p { position: relative; z-index: 1; margin: 0; font-size: 20px; font-weight: 600; line-height: 1.5; }
.cms-article__quote footer { position: relative; z-index: 1; margin-top: 20px; color: #a9c09f; font-size: 12px; }
.cms-article__callout { padding: 22px 25px; border-left: 3px solid #a7c99d; border-radius: 12px; background: #e3efdc; font-weight: 600; }
.cms-article__callout--dark { border-color: #a7c99d; background: #262626; color: #fff; }
.cms-article__callout--light { border-color: #bfd8b3; background: #f7f7f7; }
.cms-article__cards, .cms-article__stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin: 26px 0 !important; }
.cms-article__cards > div { min-height: 124px; padding: 22px; border-top: 2px solid #bfd8b3; border-radius: 12px; background: #f7f7f7; }
.cms-article__cards h3 { margin: 0 0 9px; font-size: 17px; font-weight: 700; line-height: 1.35; }
.cms-article__cards p { margin: 0; color: #505050; font-size: 14px; line-height: 1.5; }
.cms-article__stats > div { padding: 23px; border-radius: 12px; background: #262626; color: #fff; }
.cms-article__stats strong { display: block; color: #bcd6af; font-size: 34px; font-weight: 600; line-height: 1.2; }
.cms-article__stats span { color: #ddd; font-size: 13px; }
.cms-article__steps { display: grid; gap: 12px; margin: 26px 0 !important; }
.cms-article__steps > div { display: flex; gap: 18px; padding: 22px; border-left: 2px solid #c5dab9; border-radius: 12px; background: #f7f7f7; }
.cms-article__steps > div > span { display: grid; flex: 0 0 30px; place-items: center; width: 30px; height: 30px; border-radius: 7px; background: #262626; color: #fff; font-size: 14px; font-weight: 700; }
.cms-article__steps h3 { margin: 0 0 6px; font-size: 16px; line-height: 1.35; }
.cms-article__steps p { margin: 0; color: #555; font-size: 14px; line-height: 1.55; }
.cms-article__comparison { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin: 26px 0 !important; }
.cms-article__comparison > div { padding: 25px; border-radius: 12px; background: #e7f0e1; }
.cms-article__comparison > div + div { background: #262626; color: #fff; }
.cms-article__comparison h3 { margin: 0 0 12px; font-size: 17px; }
.cms-article__comparison p { margin: 0; font-size: 14px; line-height: 1.55; }
.cms-article__chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0 24px !important; }
.cms-article__chips span { padding: 6px 13px; border: 1px solid #c6ddba; border-radius: 20px; color: #596e52; font-size: 11px; font-weight: 600; }
.cms-article__promo { display: grid; grid-template-columns: 1.25fr .75fr; overflow: hidden; margin: 50px 0 !important; border: 1px solid #e8e8e8; border-radius: 18px; box-shadow: 0 8px 24px #00000008; }
.cms-article__promo > div { padding: 32px; }
.cms-article__promo > div > span { color: #88a87e; font-size: 10px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.cms-article__promo h2 { margin: 10px 0; color: #618356; font-size: 23px; line-height: 1.2; }
.cms-article__promo p { margin: 0; font-size: 13px; line-height: 1.55; }
.cms-article__promo > div + div { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; background: #262626; color: #fff; }
.cms-article__promo strong { font-size: 17px; }
.cms-article__promo > div + div p { margin: 8px 0 18px; color: #ccc; }
.cms-article__promo a { padding: 10px 16px; border-radius: 20px; background: #c1d7b3; color: #262626; font-size: 11px; font-weight: 700; text-decoration: none; text-transform: uppercase; }
.cms-article__image { margin: 32px 0 !important; }
.cms-article__image img { display: block; width: 100%; border-radius: 12px; }
.cms-article__image figcaption { margin-top: 10px; color: #888; font-size: 12px; }
.cms-article__cta { position: relative; overflow: hidden; display: flex; align-items: center; justify-content: space-between; gap: 25px; margin: 52px 0 !important; padding: 36px; border-radius: 18px; background: #262626; color: #fff; }
.cms-article__cta::after { content: ""; position: absolute; right: -42px; top: -58px; width: 170px; height: 170px; border-radius: 50%; background: #ffffff08; }
.cms-article__cta > div, .cms-article__cta > a { position: relative; z-index: 1; }
.cms-article__cta > div > span { color: #a7c69b; font-size: 10px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
.cms-article__cta h2 { margin: 8px 0 12px; font-size: 22px; font-weight: 600; line-height: 1.25; }
.cms-article__cta p { max-width: 600px; margin: 0; color: #c4c4c4; font-size: 14px; line-height: 1.5; }
.cms-article__cta a { flex-shrink: 0; padding: 13px 20px; border-radius: 30px; background: #c1d7b3; color: #262626; font-size: 12px; font-weight: 700; text-decoration: none; text-transform: uppercase; }
.cms-article__cta a:hover { background: #e3efdc; }
.cms-article__faq { margin-bottom: 0 !important; }
.cms-article__faq details { margin: 0 0 9px; border-radius: 10px; background: #f7f7f7; }
.cms-article__faq summary { display: flex; align-items: center; justify-content: space-between; gap: 15px; padding: 16px 18px; cursor: pointer; font-size: 14px; font-weight: 600; list-style: none; }
.cms-article__faq summary::-webkit-details-marker { display: none; }
.cms-article__faq summary span { color: #8dac7e; font-size: 20px; font-weight: 400; line-height: 1; }
.cms-article__faq details[open] summary span { transform: rotate(45deg); }
.cms-article__faq details p { margin: 0; padding: 0 18px 18px; color: #555; font-size: 14px; line-height: 1.6; }
.cms-article__related { padding: 70px 0; background: #f7f7f7; }
.cms-article__related h2 { margin: 0 60px 26px; color: #aaa; font-size: 11px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
.cms-article__related-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; padding: 0 60px; }
.cms-article__related-card { display: flex; flex-direction: column; overflow: hidden; border-radius: 14px; background: #fff; color: inherit; text-decoration: none; }
.cms-article__related-card img { width: 100%; height: 165px; object-fit: cover; }
.cms-article__related-card > div { display: flex; flex: 1; flex-direction: column; padding: 18px; }
.cms-article__related-card span { color: #8ba582; font-size: 10px; font-weight: 700; letter-spacing: .08em; }
.cms-article__related-card strong { margin: 12px 0; font-size: 16px; line-height: 1.35; }
.cms-article__related-card p { margin: 0 0 20px; color: #777; font-size: 13px; line-height: 1.5; }
.cms-article__related-card small { margin-top: auto; color: #6a8061; font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.cms-article__author-wrap { width: min(100%, 1244px); padding: 18px 60px 48px; }
.cms-article__author { padding: 44px 56px; border-left: 3px solid #bfd8b3; border-radius: 22px; background: #f7f7f7; }
.cms-article__author-heading { display: flex; align-items: center; gap: 22px; }
.cms-article__author-heading img, .cms-article__author-monogram { width: 80px; height: 80px; border: 3px solid #bfd8b3; border-radius: 50%; object-fit: cover; }
.cms-article__author-heading img { object-position: center 15%; }
.cms-article__author-monogram { display: grid; place-items: center; background: #dcebd7; color: #5b7651; font-size: 17px; font-weight: 700; }
.cms-article__author-heading span { color: #9ab38e; font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
.cms-article__author-heading h2 { margin: 3px 0 1px; font-size: 26px; font-weight: 600; }
.cms-article__author-heading p { margin: 0; color: #777; font-size: 16px; font-weight: 600; }
.cms-article__author-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 25px 0; }
.cms-article__author-tags span { padding: 5px 15px; border: 1px solid #c7dfbc; border-radius: 20px; color: #536d4d; font-size: 12px; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; }
.cms-article__author-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin: 28px 0 34px; }
.cms-article__author-stats > div { display: grid; place-items: center; min-height: 112px; padding: 20px; border-radius: 16px; background: #fff; text-align: center; }
.cms-article__author-stats strong { font-size: 34px; font-weight: 600; line-height: 1.1; }
.cms-article__author-stats em { color: #8da982; font-style: normal; }
.cms-article__author-stats span { margin-top: 9px; color: #777; font-size: 13px; }
.cms-article__author-bio { margin: 0 0 22px; font-size: 16px; font-weight: 500; line-height: 1.65; }
.cms-article__author-bottom { display: flex; flex-wrap: wrap; gap: 8px 22px; margin-bottom: 24px; color: #aaa; font-size: 12px; }
.cms-article__author-bottom span + span::before { content: '•'; margin-right: 20px; color: #bfd8b3; }
.cms-article__author-actions { display: flex; flex-wrap: wrap; gap: 14px; }
.cms-article__linkedin-link { display: inline-block; padding: 10px 22px; border-radius: 25px; background: #262626; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: .08em; text-decoration: none; text-transform: uppercase; }
.cms-article__team-link { display: inline-block; padding: 10px 20px; border: 1px solid #cbdcc4; border-radius: 25px; color: #4d6246; font-size: 11px; font-weight: 700; text-decoration: none; text-transform: uppercase; }
@media (max-width: 800px) {
  .cms-article__breadcrumb, .cms-article__header, .cms-article__body { padding-left: 28px; padding-right: 28px; }
  .cms-article__related h2 { margin-left: 28px; }
  .cms-article__related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); padding: 0 28px; }
  .cms-article__author-wrap { padding-left: 28px; padding-right: 28px; }
  .cms-article__author { padding: 36px; }
}
@media (max-width: 600px) {
  .cms-article__breadcrumb { padding-top: 22px; font-size: 11px; }
  .cms-article__header { padding-top: 40px; }
  .cms-article__header h1 { font-size: 32px; }
  .cms-article__toc { padding: 22px; }
  .cms-article__toc > div, .cms-article__cards, .cms-article__stats, .cms-article__comparison, .cms-article__promo { grid-template-columns: 1fr; }
  .cms-article__body { font-size: 15px; }
  .cms-article__section { margin-top: 60px !important; }
  .cms-article__section h2 { font-size: 24px; }
  .cms-article__quote { padding: 70px 24px 28px; }
  .cms-article__quote p { font-size: 17px; }
  .cms-article__cta { display: block; padding: 28px; }
  .cms-article__cta a { display: inline-block; margin-top: 24px; }
  .cms-article__related-grid { grid-template-columns: 1fr; }
  .cms-article__related-card img { height: 190px; }
  .cms-article__author-wrap { padding-bottom: 70px; }
  .cms-article__author { padding: 24px; }
  .cms-article__author-stats { grid-template-columns: 1fr; }
}
</style>
