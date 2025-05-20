<script lang="ts">
  import { onMount } from "svelte"
  import { Switch } from "@skeletonlabs/skeleton-svelte"

  let mode: string | null = $state(null)

  function handleClick() {
    const newMode = mode === "light" ? "dark" : "light"
    localStorage.setItem("theme-mode", newMode)
    document.documentElement.setAttribute("data-mode", newMode)
    mode = newMode
  }

  onMount(() => {
    mode = document.documentElement.getAttribute("data-mode") ?? "dark"
  })
</script>

<span
  class={[
    "no-print transition-opacity delay-200", // delay to allow switch to move first
    { "opacity-0": !mode, "opacity-100": mode },
  ]}
>
  <Switch
    name="mode"
    checked={mode === "light"}
    controlActive="bg-surface-200"
    onCheckedChange={handleClick}
    label="Toggle light/dark mode"
  >
    <span class="sr-only">Toggle light/dark mode</span>
    {#snippet inactiveChild()}
      <i class="fa-regular fa-moon"></i>
    {/snippet}
    {#snippet activeChild()}
      <i class="fa-regular fa-sun"></i>
    {/snippet}
  </Switch>
</span>
