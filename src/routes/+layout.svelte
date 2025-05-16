<script lang="ts">
  import { onMount } from "svelte"
  import gsap from "gsap"
  import { Flip } from "gsap/Flip"
  import { onNavigate } from "$app/navigation"
  import { page } from "$app/state"
  import LightSwitch from "$lib/light-switch.svelte"

  import "../app.css"

  const { children } = $props()
  const isHome = $derived(page.url.pathname === "/")

  onMount(() => {
    gsap.registerPlugin(Flip)
  })

  onNavigate((navigation) => {
    const flipState = Flip.getState("[data-flip-id]")
    return () => {
      if (navigation.from?.url.pathname === "/") {
        gsap.set(".main", { autoAlpha: 0 })
      }
      Flip.from(flipState, {
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.05,
        prune: true,
        absolute: true,
        onLeave: (elements) =>
          gsap.fromTo(elements, { autoAlpha: 1 }, { autoAlpha: 0 }),
        onEnter: (elements) =>
          gsap.fromTo(elements, { autoAlpha: 0 }, { autoAlpha: 1, delay: 1 }),
      }).to(".main", { autoAlpha: 1, duration: 0.5 })
    }
  })
</script>

<svelte:head>
  <title>Jon Willesen</title>
  <meta name="description" content="Jon Willesen's professional website" />
</svelte:head>

<div class="relative mx-auto min-h-screen max-w-5xl">
  <div class="m-4 flex justify-end">
    <LightSwitch />
  </div>
  <header class={[isHome && "home"]}>
    <h1 data-flip-id="h1" class="h1"><a href="/">Jon Willesen</a></h1>
    <h2 data-flip-id="subtitle" class={["h6", !isHome && "hidden"]}>
      Web Developer
    </h2>
    <nav>
      <a data-flip-id="resume" class="anchor" href="/resume">Resume</a>
    </nav>
  </header>

  <main class="main m-4">
    {@render children()}
  </main>
</div>

<style>
  header {
    margin: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    pointer-events: none;
  }

  header > * {
    pointer-events: auto;
  }

  header.home {
    position: absolute;
    inset: 0;
    flex-direction: column;
    justify-content: center;
  }
</style>
