<script>
  export let data;
  let pokemonList = data.pokemonList;
</script>

<nav>
  <a href="/">Logout</a>
</nav>

<h1>PokeStore</h1>

<input type="text" placeholder="Search Pokemon..." />

<div class="grid">
  <ul>
    {#each pokemonList as pokemon}
      <li><img src={pokemon.image} alt={pokemon.name} /></li>
    {/each}
  </ul>
</div>

<style>
  nav {
    margin: 10px;
    position: absolute;
  }

  h1 {
    text-align: center;
  }

  input {
    display: block;
    margin: 0 auto;
    justify-content: center;
  }

  .grid {
    display: flex;
    justify-content: center;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    list-style: none;
    padding: 0;
    gap: 1rem;
  }
</style>
