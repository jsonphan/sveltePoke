<script>
  export let data;
  let pokemonList = data.pokemonList;
</script>

<h1>PokeStore</h1>

<ul>
  {#each pokemonList as pokemon}
    <li>{pokemon.name}</li>
  {/each}
</ul>
