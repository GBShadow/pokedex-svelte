<script>
  import { pokemons } from '../stores/pokemonStore';
  import PokemonCard from '../components/pokemonCard.svelte';

  let searchTerm = '';
  let filteredPokemon = [];

  $: {
    if (searchTerm) {
      filteredPokemon = $pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredPokemon = [...$pokemons];
    }
  }
</script>

<svelte:head>
  <title>Pokedex | Home</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to Pokedex</h1>

<input
  type="text"
  class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
  bind:value={searchTerm}
  placeholder="Search Pokemon"
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
  {#each filteredPokemon as pokemon}
    <PokemonCard {pokemon} />
  {/each}
</div>
