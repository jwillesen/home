<script lang="ts">
  import { tick } from "svelte"
  import { Accordion } from "@skeletonlabs/skeleton-svelte"
  import ContactInformation from "./contact-information.svelte"
  import Skills from "./skills.svelte"
  import Projects from "./projects.svelte"
  import WorkHistory from "./work-history.svelte"
  import Education from "./education.svelte"

  let openAccordions: string[] = $state([])
  let toggleAllLabel = $state("Expand All")
  const allAccordions = [
    "contact",
    "skills",
    "projects",
    "work-history",
    "education",
  ]
  let workHistoryRef: WorkHistory

  const handleToggleAll = async () => {
    if (openAccordions.length === allAccordions.length) {
      toggleAllLabel = "Expand All"
      openAccordions = []
    } else {
      toggleAllLabel = "Collapse All"
      openAccordions = allAccordions
      await tick()
      workHistoryRef.expandAll()
    }
  }

  const handleToggle = (e: { value: string[] }) => {
    openAccordions = e.value
    if (openAccordions.length === allAccordions.length) {
      toggleAllLabel = "Collapse All"
    } else {
      toggleAllLabel = "Expand All"
    }
  }
</script>

<h2 class="h2 sr-only">Resume</h2>

<div class="flex flex-col gap-4">
  <section class="flex flex-col gap-2">
    <em>Senior Front-End Developer · Accessibility Advocate · Indie Builder</em>
    <p>
      I'm a front-end engineer who brings ideas to life through thoughtful,
      user-centered design. With a background in educational tools, a passion
      for accessibility, and a growing suite of indie projects, I build software
      that's practical, delightful, and built to last.
    </p>
  </section>

  <div class="no-print flex items-center justify-between">
    <a href="/jon-willesen-resume.pdf" class="anchor">
      <i class="fa-regular fa-file-pdf"></i> Download PDF
    </a>
    <button
      type="button"
      class="btn preset-outlined-primary-500"
      onclick={handleToggleAll}>{toggleAllLabel}</button
    >
  </div>

  <div class="print-only">
    Want to learn more about me? Visit <a
      class="anchor"
      href="https://jonwillesen.dev">jonwillesen.dev</a
    >
  </div>

  <Accordion value={openAccordions} multiple onValueChange={handleToggle}>
    {#snippet iconClosed()}
      <i class="no-print fa-regular fa-angle-left btn preset-filled-primary-500"
      ></i>
    {/snippet}
    {#snippet iconOpen()}
      <i class="no-print fa-regular fa-angle-down btn preset-filled-primary-500"
      ></i>
    {/snippet}
    <Accordion.Item headingLevel={3} value="contact">
      {#snippet lead()}<i class="h3 fa-regular fa-address-card"></i>{/snippet}
      {#snippet control()}<div class="h3">Contact Information</div>{/snippet}
      {#snippet panel()}<ContactInformation />{/snippet}
    </Accordion.Item>

    <Accordion.Item headingLevel={3} value="skills">
      {#snippet lead()}
        <i class="h3 fa-regular fa-screwdriver-wrench"></i>
      {/snippet}
      {#snippet control()}<div class="h3">Technical Skills</div>{/snippet}
      {#snippet panel()}<Skills />{/snippet}
    </Accordion.Item>

    <Accordion.Item headingLevel={3} value="projects">
      {#snippet lead()}<i class="h3 fa-regular fa-shelves"></i>{/snippet}
      {#snippet control()}<div class="h3">Featured Projects</div>{/snippet}
      {#snippet panel()}<Projects />{/snippet}
    </Accordion.Item>

    <Accordion.Item headingLevel={3} value="work-history">
      {#snippet lead()}<i class="h3 fa-regular fa-map"></i>{/snippet}
      {#snippet control()}<div class="h3">Work History</div>{/snippet}
      {#snippet panel()}<WorkHistory bind:this={workHistoryRef} />{/snippet}
    </Accordion.Item>

    <Accordion.Item headingLevel={3} value="education">
      {#snippet lead()}<i class="h3 fa-regular fa-diploma"></i>{/snippet}
      {#snippet control()}<div class="h3">Education</div>{/snippet}
      {#snippet panel()}<Education />{/snippet}
    </Accordion.Item>
  </Accordion>
</div>
