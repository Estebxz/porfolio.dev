// eslint.config.mjs (cambiar extensión a .mjs)
import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
  // Ignorar archivos
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      ".astro/**",
      "**/*.config.js",
      "**/*.config.mjs",
    ],
  },

  // Configuración recomendada de Astro
  ...eslintPluginAstro.configs.recommended,

  // Configuración para archivos .astro
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: eslintPluginAstro.parser,  // ← Cambio importante aquí
      parserOptions: {
        parser: tsParser,  // ← TypeScript parser como opción
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      // Errores críticos
      "astro/no-conflict-set-directives": "error",
      "astro/no-unused-define-vars-in-style": "error",
      "astro/no-deprecated-astro-canonicalurl": "error",
      "astro/no-deprecated-astro-fetchcontent": "error",
      "astro/no-deprecated-astro-resolve": "error",

      // Advertencias y mejores prácticas
      "astro/no-unused-css-selector": "warn",
      "astro/prefer-class-list-directive": "warn",
      "astro/prefer-object-class-list": "warn",
      "astro/prefer-split-class-list": "warn",
      "astro/missing-client-only-directive-value": "error",
      "astro/no-set-html-directive": "warn",
    },
  },
];