import { writable } from 'svelte/store';

export type Pokemon = {
  id: number;
  name: string;
  image: string;
};

export const pokemons = writable<Pokemon[]>([]);

const fetchPokemon = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const res = await fetch(url);
  const data = await res.json();

  const serializedPokemons = data.results.map(({ name }, index) => ({
    id: index + 1,
    name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`
  }));

  pokemons.set(serializedPokemons);
};

fetchPokemon();
