// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    svgo: true
  },
  
  output: "static",
  site: "https://joanmm.netlify.app",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    svelte(),
    sitemap({
      entryLimit: 10000
    })
  ]
});