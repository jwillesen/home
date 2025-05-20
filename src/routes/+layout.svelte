<script lang="ts">
  import { onMount } from "svelte"
  import { prefersReducedMotion } from "svelte/motion"
  import gsap from "gsap"
  import { Flip } from "gsap/Flip"
  import { onNavigate } from "$app/navigation"
  import { page } from "$app/state"
  import LightSwitch from "$lib/light-switch.svelte"
  import SubtitleRotator from "./subtitle-rotator.svelte"

  import "../app.css"

  const { children } = $props()
  const isHome = $derived(page.url.pathname === "/")
  const fadeDuration = 0.25

  onMount(() => {
    gsap.registerPlugin(Flip)
  })

  onNavigate(async (navigation) => {
    const from = navigation.from?.url.pathname
    const to = navigation.to?.url.pathname
    const home = "/"
    if (prefersReducedMotion.current) return
    if (from === to) return

    // If we're navigating from anywhere but the home page, fade out main first
    if (from !== home) {
      await gsap.to("#main", { autoAlpha: 0, duration: fadeDuration })
    }

    // We're navigating from or to the home page, so do a flip
    if (from === home || to === home) {
      const flipState = Flip.getState("[data-flip-id]")

      return async () => {
        const tl = Flip.from(flipState, {
          duration: 1,
          ease: "power2.inOut",
          stagger: isHome ? -0.05 : 0.05,
          absolute: true,
          onLeave: (elements) =>
            gsap.fromTo(elements, { autoAlpha: 1 }, { autoAlpha: 0 }),
          onEnter: (elements) =>
            gsap.fromTo(elements, { autoAlpha: 0 }, { autoAlpha: 1, delay: 1 }),
        })
        if (to !== home) tl.to("#main", { autoAlpha: 1, duration: 0.5 })
      }
    } else {
      // We're navigating between two non-home pages, so fade-out and fade-in
      // Doing a cross-fade would require having both pages loaded temporarily
      await gsap.to("#main", { autoAlpha: 0, duration: fadeDuration })
      return () => gsap.to("#main", { autoAlpha: 1, duration: fadeDuration })
    }
  })
</script>

<svelte:head>
  <title>Jon Willesen</title>
  <meta name="description" content="Jon Willesen's professional website" />
</svelte:head>

<div class="relative mx-auto min-h-screen max-w-5xl">
  <div class="flex">
    <header class={[isHome && "home"]}>
      <h1 data-flip-id="h1" class="h1"><a href="/">Jon Willesen</a></h1>
      <h2 data-flip-id="subtitle" class={["h6", !isHome && "hidden"]}>
        <SubtitleRotator active={isHome} />
      </h2>
      <nav class="no-print">
        <a
          data-flip-id="assistant"
          class={["anchor", { active: page.url.pathname === "/assistant" }]}
          href="/assistant"><i class="fa-regular fa-robot"></i> Assistant</a
        >
        <a
          data-flip-id="guiding-stars"
          class={["anchor", { active: page.url.pathname === "/guiding-stars" }]}
          href="/guiding-stars"
          ><i class="fa-regular fa-telescope"></i> Guiding Stars</a
        >
        <a
          data-flip-id="resume"
          class={["anchor", { active: page.url.pathname === "/resume" }]}
          href="/resume"><i class="fa-regular fa-file-lines"></i> Résumé</a
        >
      </nav>
    </header>
    <div class="flex flex-1 justify-end pt-4 pr-4">
      <LightSwitch />
    </div>
  </div>

  <main id="main" class="mx-4">
    {@render children()}
  </main>
</div>

<style>
  header {
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
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

  nav {
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.25rem;
    column-gap: 1rem;
  }

  nav i {
    width: 1.25rem;
    text-align: center;
  }

  .home nav {
    flex-direction: column;
  }
</style>
