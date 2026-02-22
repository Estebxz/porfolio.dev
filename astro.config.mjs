// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    svgo: true,
    fonts: [
      {
        provider: fontProviders.local(),
        name: "BBH-Bartle",
        cssVariable: "--font-bartle",
        formats: ["woff2"],
        display: "swap",
        options: {
          variants: [
            {
              weight: 400,
              style: "normal",
              src: ["./public/fonts/bbh-sans-bartle-latin-400-normal.woff2"],
            },
          ],
        },
      },
    ],
  },

  output: "static",
  site: "https://joanmm.netlify.app",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    svelte(),
    sitemap({
      entryLimit: 10000,
    }),
  ],
});
