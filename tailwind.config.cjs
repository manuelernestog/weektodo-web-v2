/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cello: {
          50: "#f2f7fd",
          100: "#e5edf9",
          200: "#c5dbf2",
          300: "#92bde7",
          400: "#579ad9",
          500: "#317ec6",
          600: "#2263a7",
          700: "#1d4f87",
          800: "#1b4471",
          900: "#183251",
          950: "#13253e",
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
