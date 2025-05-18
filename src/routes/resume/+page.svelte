<script lang="ts">
  import ContactInformation from "./contact-information.svelte"
  import Skills from "./skills.svelte"
  import Projects from "./projects.svelte"
  import { Accordion } from "@skeletonlabs/skeleton-svelte"

  let openAccordions: string[] = $state([])
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
  <!-- <hr /> -->

  <Accordion
    value={openAccordions}
    multiple
    onValueChange={(e) => (openAccordions = e.value)}
  >
    {#snippet iconClosed()}
      <i class="fa-regular fa-angle-left btn preset-filled-primary-500"></i>
    {/snippet}
    {#snippet iconOpen()}
      <i class="fa-regular fa-angle-down btn preset-filled-primary-500"></i>
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
      {#snippet lead()}
        <i class="h3 fa-regular fa-shelves"></i>
      {/snippet}
      {#snippet control()}<h3 class="h3">Featured Projects</h3>{/snippet}
      {#snippet panel()}<Projects />{/snippet}
    </Accordion.Item>
  </Accordion>
</div>
