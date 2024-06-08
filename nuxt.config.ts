// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: ["@/assets/css/main.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-svgo-loader",
    "nuxt-icon",
  ],

  googleFonts: {
    families: {
      // Add your desired fonts
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "DM+Sans": [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  svgLoader: {
    svgoConfig: {
      plugins: [
        { prefixIds: false }, // Disables prefixing for SVG IDs
      ],
    },
  },
});
