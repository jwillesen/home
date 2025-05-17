<script lang="ts">
  import { type GuidingStarDescriptor } from "./types"

  type Props = {
    star: GuidingStarDescriptor
    onclick: (star: GuidingStarDescriptor) => void
    onmouseenter: (star: GuidingStarDescriptor) => void
    onmouseleave: (star: GuidingStarDescriptor) => void
  }

  const { star, onclick, onmouseenter, onmouseleave }: Props = $props()

  const handleClick = () => onclick(star)
  const handleEnter = () => onmouseenter(star)
  const handleLeave = () => onmouseleave(star)
</script>

<button
  class="star-button"
  style="top: {star.y}%; left: {star.x}%"
  onclick={handleClick}
  onmouseenter={handleEnter}
  onmouseleave={handleLeave}
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
