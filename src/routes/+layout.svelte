<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton-svelte"
  import LightSwitch from "$lib/light-switch.svelte"

  import "../app.css"

  let { children } = $props()
</script>

<div class="mx-auto max-w-5xl">
  <AppBar>
    {#snippet lead()}
      <h1 class="h1">Jon Willesen</h1>
    {/snippet}
    {#snippet trail()}
      <LightSwitch />
    {/snippet}
  </AppBar>

  <main class="m-4">
    {@render children()}
  </main>
</div>
