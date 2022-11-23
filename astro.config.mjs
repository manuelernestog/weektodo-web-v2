import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://weektodo.me/",
  integrations: [
    tailwind(),
    astroI18next(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-ES",
          fr: "fr-CA",
          de: "de-DE",
          it: "it",
          ja: "ja",
          ko: "ko",
          pt: "pt",
          ru: "ru",
          tr: "tr",
          uk: "uk",
          zh: "zh",
        },
      },
    }),
  ],
});
