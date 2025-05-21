<script lang="ts">
  import { onMount, tick } from "svelte"
  import { prefersReducedMotion } from "svelte/motion"
  import { gsap } from "gsap"

  const subtitles = [
    "Web Developer",
    "Accessibility Advocate",
    "Indie Builder",
    "AI Enthusiast",
    "Storyteller",
    "Creative Technologist",
    "Frontend Specialist",
    "PWA Enthusiast",
    "Rubber Duck Debugger",
    "What are you still doing here? Click a link below!",
  ]
  let currentSubtitleIndex = $state(0)
  let subtitle: HTMLSpanElement

  type Props = { active: boolean }
  const { active }: Props = $props()

  async function subtitleTransition() {
    // Use opacity only instead of autoAlpha so screen readers will read the aria-live text
    if (!prefersReducedMotion.current) {
      await gsap.to(subtitle, { opacity: 0, duration: 0.5, ease: "power1.out" })
    }
    currentSubtitleIndex = (currentSubtitleIndex + 1) % subtitles.length
    if (!prefersReducedMotion.current) {
      await tick()
      await gsap.to(subtitle, { opacity: 1, duration: 0.5, ease: "power1.out" })
    }
  }

  $effect(() => {
    if (active) {
      const interval = setInterval(() => {
        subtitleTransition()
      }, 5000)

      return () => clearInterval(interval)
    }
  })
</script>

<span bind:this={subtitle} aria-live="polite" aria-atomic="true"
  >{subtitles[currentSubtitleIndex]}</span
>
