<script lang="ts">
  import { type GuidingStarDescriptor } from "./types"

  type Props = {
    star: GuidingStarDescriptor
    onStarClick: (star: GuidingStarDescriptor) => void
    onStarAttention: (star: GuidingStarDescriptor | null) => void
  }

  const { star, onStarClick, onStarAttention }: Props = $props()

  const handleClick = () => onStarClick(star)
  const handleEnter = () => onStarAttention(star)
  const handleLeave = () => onStarAttention(null)
  const handleFocus = () => onStarAttention(star)
  const handleBlur = () => onStarAttention(null)
</script>

<button
  class="star-button"
  style="top: {star.y}%; left: {star.x}%"
  onclick={handleClick}
  onmouseenter={handleEnter}
  onmouseleave={handleLeave}
  onfocus={handleFocus}
  onblur={handleBlur}
>
  <!-- ✦ -->
  <!-- <i class="fa-solid fa-star"></i> -->
  <!-- <i class="fa-solid fa-star-sharp"></i> -->
  <!-- <i class="fa-regular fa-star"></i> -->
  <!-- <i class="fa-regular fa-star-sharp"></i> -->
  <!-- <i class="fa-solid fa-star-sharp"></i> -->
  <!-- <i class="fa-regular fa-stars"></i> -->
  <!-- <i class="fa-solid fa-stars"></i> -->
  <!-- <i class="fa-regular fa-star-shooting"></i> -->
  <i class="fa-solid fa-star-shooting"></i>
  <span class="sr-only">{star.label}</span>
</button>

<style>
  .star-button {
    position: absolute;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2rem;
    transition: transform 0.2s ease;
  }

  .star-button:hover {
    transform: translate(-50%, -50%) scale(1.3);
  }
</style>
