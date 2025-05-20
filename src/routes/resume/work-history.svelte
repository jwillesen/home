<script lang="ts">
  import { Accordion } from "@skeletonlabs/skeleton-svelte"
  import WorkHistoryItem from "./work-history-item.svelte"
  import { experience } from "./experience"

  export function expandAll() {
    openJobs = experience.map((job) => job.company)
  }

  export function collapseAll() {
    openJobs = []
  }

  let openJobs: string[] = $state([])

  // TODO: snippets should be shared with the top level accordion
</script>

<Accordion
  value={openJobs}
  multiple
  onValueChange={(e) => (openJobs = e.value)}
>
  {#snippet iconClosed()}
    <i class="no-print fa-regular fa-angle-left btn preset-filled-primary-500"
    ></i>
  {/snippet}
  {#snippet iconOpen()}
    <i class="no-print fa-regular fa-angle-down btn preset-filled-primary-500"
    ></i>
  {/snippet}

  {#each experience as job (job.company)}
    <Accordion.Item headingLevel={4} value={job.company}>
      {#snippet control()}
        <div class="h4">
          {job.company} – {job.title}
        </div>
        <span>{job.dateStart} – {job.dateEnd} · {job.location}</span>
      {/snippet}
      {#snippet panel()}
        <WorkHistoryItem
          company={job.company}
          title={job.title}
          dateStart={job.dateStart}
          dateEnd={job.dateEnd}
          location={job.location}
          description={job.description}
          bullets={job.bullets}
        />
      {/snippet}
    </Accordion.Item>
  {/each}
</Accordion>
