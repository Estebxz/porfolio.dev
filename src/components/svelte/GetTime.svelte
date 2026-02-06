<script lang="ts">
  import { onMount } from "svelte";

  const zone = "America/Bogota";
  let time = "";

  function updateTime() {
    time = new Intl.DateTimeFormat("es-CO", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: zone,
      hour12: false,
    }).format(new Date());
  }

  onMount(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });
</script>

<time
  datetime={new Date().toISOString()}
  title="Hora actual en Bogotá, Colombia"
  class="emphasis-text"
>
  {time}
</time>
