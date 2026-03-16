import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      ".astro/**",
      "**/*.config.js",
      "**/*.config.mjs",
    ],
  },

  ...eslintPluginAstro.configs.recommended,

  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      "astro/no-conflict-set-directives": "error",
      "astro/no-unused-define-vars-in-style": "error",
      "astro/no-deprecated-astro-canonicalurl": "error",
      "astro/no-deprecated-astro-fetchcontent": "error",
      "astro/no-deprecated-astro-resolve": "error",

      "astro/no-unused-css-selector": "warn",
      "astro/prefer-class-list-directive": "warn",
      "astro/prefer-object-class-list": "warn",
      "astro/prefer-split-class-list": "warn",
      "astro/missing-client-only-directive-value": "error",
      "astro/no-set-html-directive": "warn",
    },
  },
];