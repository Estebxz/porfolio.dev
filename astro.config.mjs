// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  experimental: {
    svgo: true
  },

  output: "static",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte()],
  adapter: netlify()
});