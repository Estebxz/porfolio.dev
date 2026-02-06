<script lang="ts">
  export let text: string;
  export let copiedLabel = "Copiado";
  export let idleLabel = "Haz click para copiar";

  let copied = false;
  let liveMessage = "";

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
      liveMessage = copiedLabel;

      setTimeout(() => {
        copied = false;
        liveMessage = "";
      }, 2000);
    } catch (error) {
      liveMessage = "No fue posible copiar";
      setTimeout(() => {
        liveMessage = "";
      }, 2000);
    }
  }
</script>

<button
  type="button"
  class={`copy-wrapper ${copied ? "copied" : ""}`}
  on:click={copy}
  aria-label={`Copiar ${text}`}
>
  <span class="word" aria-hidden="true">{text}</span>

  <span id="copy-hint" class="hint" aria-hidden="true">
    {copied ? copiedLabel : idleLabel}
  </span>

  <span class="sr-only" role="status">
    {liveMessage}
  </span>
</button>

<style>
  /* Botón base */
  /* Botón base */
  .copy-wrapper {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    user-select: none;
    font-size: 2rem;
    color: var(--color-alpha-200);
  }

  .copy-wrapper:hover {
    color: var(--color-alpha-100);
  }

  .copy-wrapper.copied .hint {
    opacity: 1;
    color: var(--color-emphasis);
  }

  /* Texto */
  .word {
    font-weight: 500;
  }

  /* Tooltip visual */
  .hint {
    flex-direction: column;
    font-size: 1rem;
    margin-top: 4px;
    opacity: 0;
    text-transform: uppercase;
    color: var(--color-steel-blue); /* 👈 color base */
    transform: translateY(-4px);
    transition:
      opacity 0.2s ease,
      transform 0.2s ease,
      color 0.2s ease;
  }

  /* Hover y foco (desktop + teclado) */
  .copy-wrapper:hover .hint,
  .copy-wrapper:focus-visible .hint {
    opacity: 1;
    transform: translateY(0);
  }

  /* Focus accesible */
  .copy-wrapper:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }

  /* Mejoras para móvil */
  @media (max-width: 640px) {
    .hint {
      font-size: 0.75rem;
    }
    .word {
      font-size: 1.25rem;
    }
  }

  /* Tablet */
  @media (min-width: 641px) and (max-width: 1024px) {
    .copy-wrapper {
      font-size: 1.75rem;
    }
  }

  /* Touch devices */
  @media (hover: none) {
    .copy-wrapper:active .hint {
      opacity: 1;
      transform: translateY(0);
      color: var(--color-emphasis); /* 👈 mismo comportamiento */
    }
  }

  /* Reduce motion */
  @media (prefers-reduced-motion: reduce) {
    .copy-wrapper,
    .hint {
      transition: none;
    }
  }
</style>
