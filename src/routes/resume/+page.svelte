<script lang="ts">
  import ContactInformation from "./contact-information.svelte"
  import Skills from "./skills.svelte"
  import Projects from "./projects.svelte"
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

  <section>
    <h3 class="h3">Contact Information</h3>
    <ContactInformation />
  </section>

  <section>
    <h3 class="h3">Technical Skills</h3>
    <Skills />
  </section>

  <section>
    <h3 class="h3">Featured Projects</h3>
    <Projects />
  </section>
</div>

<style>
  h3 {
    text-decoration: underline;
  }
</style>
