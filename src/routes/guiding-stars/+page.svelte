<script lang="ts">
  import Constellation from "./constellation.svelte"
  import Starfield from "./starfield.svelte"
  import { type GuidingStarDescriptor } from "./types"

  let activeStarLabel = $state("")

  const stars: GuidingStarDescriptor[] = [
    { x: 20, y: 30, label: "Accessibility is not optional" },
    { x: 55, y: 50, label: "Craft matters" },
    { x: 75, y: 25, label: "Kind UX is smart UX" },
    { x: 40, y: 70, label: "Build softly, carry sharp tools" },
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
    activeStarLabel = star ? star.label : ""
  }

  const handleStarClick = (star: GuidingStarDescriptor) => {
    console.log("Star clicked:", star)
  }
</script>

<div class="flex flex-col items-center gap-4">
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
    class="plaque h3 card bg-secondary-500 border-secondary-900 border-radius-8 text-surface-50 flex min-h-25 items-center justify-center border-4 p-2"
  >
    {activeStarLabel}
  </div>
</div>

<style>
  .plaque {
    width: 100%;
    max-width: 40rem; /* same as .telescope-frame */
  }

  .telescope-frame {
    flex: 1;
    width: 100%;
    max-width: 40rem;
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
    height: 100%;
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
