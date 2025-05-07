<script>
  export let data;
  let pokemonList = data.pokemonList;
</script>

<nav>
  <a href="/">Logout</a>
</nav>

<h1>PokeStore</h1>

<div class="grid">
  <ul>
    {#each pokemonList as pokemon}
      <li>{pokemon.name}</li>
    {/each}
  </ul>
</div>

<style>
  nav {
    margin: 10px;
    position: absolute;
  }

  :global(body) {
    margin: 0;
  }

  h1 {
    text-align: center;
  }

  .grid {
    display: flex;
    justify-content: center;
  }
  ul {
    list-style: none;
    padding: 0;
    gap: 1rem;
  }
</style>
