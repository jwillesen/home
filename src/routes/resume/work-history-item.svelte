<script lang="ts">
  import { type ExperienceItem } from "./experience"

  type Props = ExperienceItem
  const { description, bullets }: Props = $props()
</script>

<section class="flex flex-col gap-4">
  <!-- <h4 class="h4">{company}</h4>
  <div>
    <h5 class="h5">{title}</h5>
    <div class="italic">{dateStart} – {dateEnd} · {location}</div>
  </div> -->
  <blockquote class="blockquote">
    {description}
  </blockquote>
  <ul class="list-inside list-disc">
    {#each bullets as bullet (bullet)}
      <li>{bullet}</li>
    {/each}
  </ul>
</section>
