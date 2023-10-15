// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "default" },
  },
  css: [
    "@/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@hypernym/nuxt-anime",
  ],
  googleFonts: {
    families: {
      "Lato": true,
    },
    display: "swap",
  },
  runtimeConfig: {
    // Will be available in both server and client
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://dkmhndr.me',
      siteName: 'REVIVE',
      siteDescription: 'Bring the second life to surrounding things',
      language: 'en-ID'
    },
  },
});
