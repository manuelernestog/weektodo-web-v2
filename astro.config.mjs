import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
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
        },
      },
    }),
  ],
  site: "http://localhost:3000/",
});
