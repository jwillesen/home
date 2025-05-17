<script lang="ts">
  const nStars = 200
  const minRadius = 0.1
  const maxRadius = 0.3
  const opacity = 0.8
  const colors = ["#ffffff", "#ffe9c4", "#d4fbff"]
  const stars = Array.from({ length: nStars }, (_v, index) => ({
    id: index,
    x: Math.random() * 100,
    y: Math.random() * 100,
    radius: Math.random() * (maxRadius - minRadius) + minRadius,
    color: colors[Math.floor(Math.random() * colors.length)],
  }))
</script>

{#each stars as star (star.id)}
  <div
    class="star"
    style="top: {star.y - star.radius / 2}%; left: {star.x - star.radius / 2}%;"
  >
    <div
      class="star-shape"
      style="
        width: {star.radius}rem;
        height: {star.radius}rem;
        background-color: {star.color};
        opacity: {opacity};
        border-radius: 50%;
      "
    ></div>
  </div>
{/each}

<style>
  .star {
    position: absolute;
    pointer-events: none;
  }
</style>
