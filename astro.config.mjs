import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),astroI18next()]
});