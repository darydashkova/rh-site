export default defineNuxtConfig({
  compatibilityDate: "2026-09-23",
  devtools: { enabled: false },
  css: ["~/assets/main.css"],
  app: {
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
