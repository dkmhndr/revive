import VueHotjar from "vue-hotjar-next";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueHotjar, {
        id: process.env.HOTJAR_ID || 3628773,
        isProduction: process.env.HOTJAR_IS_PRODUCTION || false
    });
});
