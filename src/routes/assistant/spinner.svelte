<div class="spin text-2xl">
  <div class="pulse">
    <i class="fa-regular fa-atom-simple"></i>
    <span class="sr-only">Loading...</span>
  </div>
</div>

<style>
  .spin {
    animation: spin 2s linear infinite;
    display: inline-block;
  }

  .pulse {
    animation: pulse 2s ease-in-out infinite;
    display: inline-block;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
</style>
