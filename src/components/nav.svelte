<script>
  import { fade } from 'svelte/transition';
</script>

<nav class="flex justify-center w-full">
  <a transition:fade class="mx-4 text-lg" href="/">Home</a>
  <a transition:fade class="mx-4 text-lg" href="/about">About</a>
</nav>
