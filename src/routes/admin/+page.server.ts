export async function load(){
    const pokeData = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"); // Fetch data
    const data = await pokeData.json(); // Turn into usable json

    return{
        pokemonList: data.results // Return the results
    }
}

