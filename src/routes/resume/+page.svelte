<script lang="ts">
  import { tick } from "svelte"
  import { Accordion } from "@skeletonlabs/skeleton-svelte"
  import ContactInformation from "./contact-information.svelte"
  import Skills from "./skills.svelte"
  import Projects from "./projects.svelte"
  import WorkHistory from "./work-history.svelte"

  let openAccordions: string[] = $state([])
  let toggleAllLabel = $state("Expand All")
  const allAccordions = ["contact", "skills", "projects", "work-history"]
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
</script>

<h2 class="h2 sr-only">Resume</h2>

<div class="flex flex-col gap-4">
  <section>
    <em>Senior Front-End Developer | Accessibility Advocate | Indie Builder</em>
    <p>
      Crafting thoughtful web experiences with a focus on clean UX,
      accessibility, and technical elegance.
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

  <Accordion
    value={openAccordions}
    multiple
    onValueChange={(e) => (openAccordions = e.value)}
  >
    {#snippet iconClosed()}
      <i class="no-print fa-regular fa-angle-left btn preset-filled-primary-500"
      ></i>
    {/snippet}
    {#snippet iconOpen()}
      <i class="no-print fa-regular fa-angle-down btn preset-filled-primary-500"
      ></i>
    {/snippet}
    <Accordion.Item value="contact">
      {#snippet lead()}<i class="h3 fa-regular fa-address-card"></i>{/snippet}
      {#snippet control()}<h3 class="h3">Contact Information</h3>{/snippet}
      {#snippet panel()}<ContactInformation />{/snippet}
    </Accordion.Item>

    <Accordion.Item value="skills">
      {#snippet lead()}
        <i class="h3 fa-regular fa-screwdriver-wrench"></i>
      {/snippet}
      {#snippet control()}<h3 class="h3">Technical Skills</h3>{/snippet}
      {#snippet panel()}<Skills />{/snippet}
    </Accordion.Item>

    <Accordion.Item value="projects">
      {#snippet lead()}<i class="h3 fa-regular fa-shelves"></i>{/snippet}
      {#snippet control()}<h3 class="h3">Featured Projects</h3>{/snippet}
      {#snippet panel()}<Projects />{/snippet}
    </Accordion.Item>

    <Accordion.Item value="work-history">
      {#snippet lead()}<i class="h3 fa-regular fa-map"></i>{/snippet}
      {#snippet control()}<h3 class="h3">Work History</h3>{/snippet}
      {#snippet panel()}<WorkHistory bind:this={workHistoryRef} />{/snippet}
    </Accordion.Item>
  </Accordion>
</div>
