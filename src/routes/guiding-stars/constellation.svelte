<script lang="ts">
  import { type GuidingStarDescriptor } from "./types"
  import GuidingStar from "./guiding-star.svelte"

  type Props = {
    stars: GuidingStarDescriptor[]
    connections: [number, number][]
    onStarAttention: (star: GuidingStarDescriptor | null) => void
    onStarClick: (star: GuidingStarDescriptor) => void
  }
  const { stars, connections, onStarAttention, onStarClick }: Props = $props()

  const handleStarClick = (star: GuidingStarDescriptor) => {
    onStarClick(star)
  }

  const handleEnter = (star: GuidingStarDescriptor) => {
    onStarAttention(star)
  }

  const handleLeave = (star: GuidingStarDescriptor) => {
    onStarAttention(null)
  }
</script>

<div class="constellation">
  <svg
    class="star-lines"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid meet"
  >
    {#each connections as [from, to]}
      <line
        x1={stars[from].x}
        y1={stars[from].y}
        x2={stars[to].x}
        y2={stars[to].y}
        stroke="gold"
        stroke-opacity="0.5"
        stroke-width="3"
        vector-effect="non-scaling-stroke"
      />
    {/each}
  </svg>

  <div>
    {#each stars as star}
      <GuidingStar
        {star}
        onclick={handleStarClick}
        onmouseenter={handleEnter}
        onmouseleave={handleLeave}
      />
    {/each}
  </div>
</div>

<style>
  .constellation {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
