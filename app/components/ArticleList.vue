<script setup lang="ts">
defineProps<{
  items: {title: string; description: string; href: string; image: string; alt: string; date: string; dateLabel: string}[];
  variant: 'news' | 'blog' | 'calculator' | 'compact';
}>();
</script>
<template>
  <div class="article-list" :class="`article-list--${variant}`">
    <article v-for="item in items" :key="item.href" class="article-row">
      <a :href="item.href" class="article-image" tabindex="-1" aria-hidden="true"><img :src="item.image" :alt="item.alt" loading="lazy" /></a>
      <div class="article-copy">
        <time v-if="variant === 'news'" :datetime="item.date">{{ item.dateLabel }}</time>
        <h2><a :href="item.href">{{ item.title }}</a></h2>
        <p v-if="item.description">{{ item.description }}</p>
        <time v-if="variant === 'calculator' || variant === 'compact'" :datetime="item.date">{{ item.dateLabel }}</time>
      </div>
    </article>
  </div>
</template>
<style scoped>
.article-row{display:grid;grid-template-columns:190px minmax(0,1fr);gap:40px;padding:25px 0;border-bottom:1px solid #ddd}
.article-row:first-child{padding-top:0}.article-row:last-child{border-bottom:0}
.article-image img{display:block;width:100%;height:150px;object-fit:cover}
.article-copy h2{font-size:22px;line-height:1.3;font-weight:600;margin:0 0 12px}
.article-copy a:hover{text-decoration:underline}.article-copy p{font-size:18px;line-height:1.5;margin:0}
.article-copy time{display:block;font-size:11px;letter-spacing:1px;color:#999;margin-top:20px}
.article-list--news time{color:#ed1c24;margin:0 0 10px}
.article-list--calculator .article-row{grid-template-columns:200px minmax(0,1fr)}
.article-list--calculator .article-image img{height:80px}
.article-list--calculator h2{font-size:20px}.article-list--calculator p{font-size:16px;color:#777}
.article-list--compact .article-row{grid-template-columns:190px minmax(0,1fr);gap:40px}
.article-list--compact h2{font-size:18px}.article-list--compact p{font-size:14px;color:#777}.article-list--compact time{font-size:10px;margin-top:15px}
@media(max-width:640px){.article-row,.article-list--calculator .article-row,.article-list--compact .article-row{grid-template-columns:95px minmax(0,1fr);gap:18px;padding:22px 0}.article-image img,.article-list--calculator .article-image img{height:80px}.article-copy h2,.article-list--calculator h2,.article-list--compact h2{font-size:17px}.article-copy p,.article-list--calculator p,.article-list--compact p{font-size:14px}.article-copy time{font-size:10px}}
</style>
