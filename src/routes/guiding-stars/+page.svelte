<script lang="ts">
  import { toast } from "svelte-french-toast"
  import Constellation from "./constellation.svelte"
  import Starfield from "./starfield.svelte"
  import { type GuidingStarDescriptor } from "./types"

  const instructions =
    "This constellation is still taking shape. Hover or click a star to preview what's coming soon."
  let activeStarLabel = $state(instructions)

  const stars: GuidingStarDescriptor[] = [
    { x: 20, y: 30, label: "Accessibility is Not Optional" },
    { x: 55, y: 50, label: "Craft Matters" },
    { x: 75, y: 25, label: "Design Beyond the Happy Path" },
    { x: 40, y: 70, label: "Where the Type System Ends" },
  ]

  const connections: [number, number][] = [
    [0, 1],
    [1, 2],
    // [2, 3],
    // [3, 0],
    // [0, 2],
    // [1, 3],
    // [2, 0],
    [3, 1],
  ]

  const handleStarAttention = (star: GuidingStarDescriptor | null) => {
    activeStarLabel = star ? star.label : instructions
  }

  const handleStarClick = (star: GuidingStarDescriptor) => {
    toast(
      `${star.label}: This star's page hasn't been written yet, but it's on the horizon.`,
    )
  }
</script>

<div class="telescope flex flex-col items-center gap-4">
  <div class="telescope-frame">
    <div class="telescope-glass">
      <Starfield />
      <Constellation
        {stars}
        {connections}
        onStarClick={handleStarClick}
        onStarAttention={handleStarAttention}
      />
    </div>
  </div>
  <div
    aria-live="polite"
    class="plaque h4 card bg-secondary-500 border-secondary-900 border-radius-8 text-surface-50 flex min-h-30 items-center justify-center border-4 p-4"
  >
    {activeStarLabel}
  </div>
</div>

<style>
  .telescope {
    --max-telescope-width: 40rem;
  }

  .plaque {
    width: 100%;
    max-width: var(--max-telescope-width);
  }

  .telescope-frame {
    flex: 1;
    width: 100%;
    max-width: var(--max-telescope-width);
    aspect-ratio: 1;

    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, #5e4a20 0%, #2f2410 100%);
    box-shadow:
      inset 0 0 10px rgba(255, 255, 255, 0.1),
      0 0 30px rgba(0, 0, 0, 0.5);
    padding: 1.5rem;
    border: 6px solid #b68e2e; /* outer ring highlight */
  }

  .telescope-glass {
    width: 100%;
    /* height: 100%; */ /* This is broken in Safari -- use aspect-ratio instead */
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      #11152b 0%,
      #0d1120 100%
    ); /* indigo sky background */
    position: relative;
    overflow: hidden;
  }
</style>
