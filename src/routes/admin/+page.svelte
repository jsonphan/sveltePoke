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
      // I would add an error check/msg if nothing was found for pokeInfo after fetching
      // ex. error fetching name
      const data = await pokeInfo.json();
      result = {
        name: data.name,
        image: data.sprites.front_default,
      };
    } catch (error) {
      result = null;
      // I would show an error message here instead of it just failing
      // For example "no searches found"
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

  // Here I would add a cart array to store the Pokemon that was selected
  // let cart = [];

  // I would also create a variable cartModal and set it to true or false
  // This would keep track if the modal should be open or not

  // Another variable I would add is a var to store the Pokemon that the user selected
  // let currentPoke = null;

  // I would add a function that would open a modal and show the pokemon
  // The function would be triggered if the user clicked "Add to Cart"
  // It would then open the modal and show it in the top right
  // It's parameters would inclucde the pokemon we selected, setting currentPoke to that selected pokemon

  // I would add a function here to close the modal when clicking the "x" button on the top right and anywhere off the modal
</script>

<nav>
  <a href="/">Logout</a>
  <!-- Logout is currently not correctly handled, all it does is change to the homepage -->
  <!-- Fix logout so it correctly logs out the user and doesn't remember their computer is an admin -->
</nav>

<h1>PokeStore</h1>

<input type="text" placeholder="Search Pokemon..." on:input={getInput} />

{#if result}
  <div class="grid">
    <img src={result.image} alt={result.name} />
    <!--I would add a pricetag here-->
    <!-- I would add an add to cart button here-->
    <!-- On the button I would add the onclick event to trigger the cart function-->
  </div>
{:else}
  <div class="grid">
    <ul>
      {#each pokemonList as pokemon}
        <li><img src={pokemon.image} alt={pokemon.name} /></li>
        <!--My intention for this was to show a fun grid of pokemon 
        at the start and have the sprites bounching up and down-->
        <!-- I would've added some text here maybe saying search for a pokemon-->
      {/each}
    </ul>
  </div>
{/if}

<!-- I would create a modal here-->
<!-- The modal would list the pokemon I have selected and the price total at the bottom-->
<!-- I would also included a checkout button and an x button on the top right-->

<style>
  /* I would've refined the css to make the webpage cleaner and more responsive */
  /* Ex - make the logout button prettier / change font of title / make search bar more modern / made the images bigger*/
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
