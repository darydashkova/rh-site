<script setup lang="ts">
defineProps<{title: string; red?: boolean; images: string[]}>();
</script>
<template>
  <header class="policy-hero" :class="{'policy-hero--red':red}">
    <img v-if="images[0]" class="policy-hand policy-hand--left" :src="images[0]" alt="" />
    <div class="policy-hero__container"><h1>{{title}}</h1></div>
    <img v-if="images[1]" class="policy-hand policy-hand--right" :src="images[1]" alt="" />
  </header>
</template>
<style scoped>
.policy-hero{height:760px;position:relative;overflow:hidden;background:white;color:#303030}
.policy-hero--red{background:#f4101b;color:white}
.policy-hero__container{max-width:1200px;width:calc(100% - 40px);margin:auto;padding-top:490px}
.policy-hero h1{font-size:42px;line-height:1.3;font-weight:700;max-width:400px;position:relative;z-index:1}
.policy-hand{position:absolute;width:360px;height:300px;object-fit:contain}
.policy-hand--left{left:-5px;top:80px}.policy-hand--right{right:-10px;bottom:-10px;width:400px}
@media(max-width:640px){.policy-hero{height:520px}.policy-hero__container{padding-top:260px}.policy-hero h1{font-size:30px;max-width:320px}.policy-hand{width:190px;height:170px}.policy-hand--left{top:30px}.policy-hand--right{width:150px;height:140px;bottom:-15px}}
</style>
