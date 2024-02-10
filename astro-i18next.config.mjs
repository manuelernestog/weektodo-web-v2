/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
    defaultLanguage: "en",
    supportedLanguages: ["en", "es", "fr", "de", "it", "ja", "ko", "pt", "ru", "tr", "uk", "zh", "hi"],


    i18next: {
      debug: true,
      initImmediate: false,
      supportedLngs: ["hi"],
      backend: {
        loadPath: "./src/locales/{{lng}}.json",
      },
    },
    i18nextPlugins: { fsBackend: "i18next-fs-backend" },
  };