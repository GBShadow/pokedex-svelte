<script context="module">
  export async function load({ page }) {
    const id = page.params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    return { props: { pokemon } };
  }
</script>

<script lang="typescript">
  type Pokemon = {
    id: number;
    name: string;
    types: {
      type: {
        name: string;
      };
    };
    height: number;
    weight: number;
    sprites: string;
  };

  export let pokemon: Pokemon;
</script>

<div class="flex flex-col items-center">
  <h1 class="text-4xl text-center my-8 u uppercase">{pokemon.name}</h1>
  <p>
    Type: <strong>{pokemon.types[0].type.name}</strong>| Height: <strong>{pokemon.height}</strong>|
    Weight:
    <strong>{pokemon.weight}</strong>
  </p>
  <img class="card-image" src={pokemon.sprites['front_default']} alt={pokemon.name} />
</div>
