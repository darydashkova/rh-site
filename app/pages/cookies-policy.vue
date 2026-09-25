<script setup lang="ts">
useSeoMeta({ title: "Cookies Policy | Reputation House" });
</script>
<template>
  <main id="main-content">
    <PolicyHero
      title="Cookies Policy"
      :red="true"
      :images="[
        '/images/resource-50651bc7243a.png',
        '/images/resource-302930053cbe.png',
      ]"
    />
    <article class="policy-content policy-content--cookies">
      <section class="policy-section">
        <strong>What Are Cookies <br /> </strong>
        This site, like almost all professional websites, uses cookies to
        improve your experience. Cookies are small files that a website
        downloads to your computer when you surf the website. This page
        describes what information they gather, how we utilize it, and why we
        occasionally need to store cookies. We'll also demonstrate to you how to
        disable these cookies, but be aware that doing so may cause some aspects
        of the Site's functionality to become impaired or 'broken.'
        <br />
        <br />
        <br />
        <br />
        <strong>How We Use Cookies <br /> </strong>
        We utilise cookies for a variety of reasons, including those stated
        below. Unfortunately, there are no industry-standard alternatives for
        deactivating cookies without also blocking the functionality and
        features that will be introduced to this site in the majority of
        situations. If you're not sure whether you need cookies or not, it's
        best to leave them on if they're needed to offer the service you're
        using.
        <br />
        <br />
        <br />
        <br />
        <strong>Disabling Cookies <br /> </strong>«y changing your browser's
        settings, you can prevent cookies from being set. Keep in mind that
        deactivating cookies will make this and many other websites you visit
        less functional. Some of the functionality and features of this site
        will be disabled if cookies are disabled. As a result, it is not advised
        that you disable cookies. Our cookies policies were created with this
        Cookie Policy Generator tool.<br />
        <br />
        <br />
        <br />
        <strong>The Cookies We Set<br /> </strong> <br />
        <strong>1. Forms related cookies <br /> </strong> Cookies may be used to
        remember your user details for future interaction when you enter data
        using a form, such as those found on contact sites or comment forms.<br />
        <br />
        <strong>2. Site preferences cookies <br /> </strong> We give the
        functionality to define your preferences for how this site works when
        you use it in order to provide you with a wonderful experience on our
        site. We need to establish cookies in order to remember your choices, so
        that this information may be retrieved anytime you interact with a page
        that is impacted by your preferences.<br />
        <br />
        <strong>3. Third Party Cookies <br /> </strong> In rare circumstances,
        we may additionally utilize cookies provided by third parties we trust.
        The section below explains the third-party cookies you may encounter
        when browsing this site.<br />
        <br />
        <br />
        <br />
        This site uses Google Analytics, one of the most commonly used and
        trusted analytics tools on the web, to help us better understand how you
        use the site and how we can improve it. These cookies may keep track of
        things like how long you stay on the site and which pages you visit so
        that we can keep creating interesting content for you.
        <br />
        <br />
        Visit the official Google Analytics page for more information about
        Google Analytics cookies.
        <br />
        <br />
        This site's usage is tracked and measured using third-party analytics so
        that we can continue to create compelling content. These cookies may
        record information such as how long you stay on the site or which pages
        you visit, allowing us to better understand how we can make the site
        more useful to you.
        <br />
        We test new features and make minor adjustments to the way the site is
        presented from time to time. These cookies may be utilized when we are
        still testing new features to guarantee that you have a consistent
        experience while on the site and to ensure that we understand which
        optimizations our users like the most.
        <br />
        <br />
        Affiliate tracking cookies are used to detect if a customer came to the
        site from one of our partner sites so that we may properly credit them
        and, if appropriate, give any bonuses that our affiliate partners may
        offer for completing a transaction.
        <br />
        <br />
        <br />
        <br />
        <strong>More Information<br /> </strong> <br />
        Hopefully, this has simplified things for you, and as previously stated,
        if you're not sure whether or not you need something, it's typically
        safer to keep cookies enabled in case it interacts with one of the
        functions you use on our site.
        <br />
      </section>
    </article>
  </main>
</template>
<style scoped>
#main-content { padding-top: 72px; }
.policy-content {
  max-width: 1200px;
  width: calc(100% - 40px);
  margin: 70px auto 40px;
  font-size: 18px;
  line-height: 1.55;
  color: #111;
}
.policy-section {
  margin-bottom: 70px;
  scroll-margin-top: 100px;
}
.policy-content :deep(a) {
  color: inherit;
  text-decoration: underline;
}
.policy-content :deep(ul),
.policy-content :deep(ol) {
  padding-left: 24px;
}
.policy-content :deep(strong) {
  font-weight: 700;
}
.policy-content--cookies .policy-section {
  margin-bottom: 0;
}
@media (max-width: 640px) {
  .policy-content {
    font-size: 15px;
    margin-top: 40px;
  }
  .policy-section {
    margin-bottom: 40px;
  }
}
</style>
