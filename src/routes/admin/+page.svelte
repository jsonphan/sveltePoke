<script>
  export let data;
  let pokemonList = data.pokemonList;
  let searchName = "";
  let result = null;
  let timeout;

  async function getPokemon(name) {
    try {
      const pokeInfo = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      const data = await pokeInfo.json();
      result = {
        name: data.name,
        image: data.sprites.front_default,
      };
    } catch (rror) {
      result = null;
    }
  }

  function getInput(event) {
    clearTimeout(timeout);
    const userInput = event.target.value;
    searchName = userInput;

    timeout = setTimeout(() => {
      getPokemon(searchName);
    }, 400);
  }
</script>

<nav>
  <a href="/">Logout</a>
</nav>

<h1>PokeStore</h1>

<input type="text" placeholder="Search Pokemon..." on:input={getInput} />

{#if result}
  <div class="grid">
    <img src={result.image} alt={result.name} />
  </div>
{:else}
  <div class="grid">
    <ul>
      {#each pokemonList as pokemon}
        <li><img src={pokemon.image} alt={pokemon.name} /></li>
      {/each}
    </ul>
  </div>
{/if}

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
    width: 200px;
  }

  .grid {
    display: flex;
    justify-content: center;
    padding: 2 rem;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    list-style: none;
    padding: 0;
    gap: 1rem;
  }

  li {
    border-radius: 10px;
  }
  img {
    width: 100px;
    height: auto;
  }
</style>
