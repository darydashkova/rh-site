const pagesBuild = process.env.PAGES_BUILD === "1";
const baseURL = process.env.NUXT_APP_BASE_URL || "/";

export default defineNuxtConfig({
  // Keep branch-deployment artifacts separate from the local preview server.
  ...(pagesBuild ? { nitro: { output: { dir: ".pages" } } } : {}),
  vite: {
    plugins: [{
      name: "public-assets-base-url",
      enforce: "pre",
      transform(source, id) {
        if (baseURL === "/" || !id.replaceAll("\\", "/").includes("/app/")) return;
        // Includes data-driven images and inline CSS, not just template src attributes.
        const withBoundImages = id.endsWith(".vue")
          ? source.replace(/\bsrc="(\/(?:images|fonts|styles)\/[^"\n]+)"/g, ':src="\'$1\'"')
          : source;
        return withBoundImages.replace(/(from\s+)?(["'`(])\/(images|fonts|styles)\//g,
          (match, imported, quote, directory) => imported ? match : `${quote}${baseURL}${directory}/`);
      },
    }],
  },
  compatibilityDate: "2026-09-23",
  devtools: { enabled: false },
  css: ["~/assets/main.css"],
  app: {
    baseURL,
    head: {
      title: "Online Reputation Management Services | Reputation House",
      htmlAttrs: { lang: "en" },
      meta: [
        {
          name: "description",
          content:
            "Complex protection of your digital profile. Reputation House — online reputation management and digital risk protection.",
        },
      ],
    },
  },
});
