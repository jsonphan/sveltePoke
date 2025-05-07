export async function load(){
    const pokeData = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"); // Fetch data
    const data = await pokeData.json(); // Turn into usable json

    const pokeInfo = await Promise.all( // Promis, Await and Async to wait for all results
        data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url); // Find image in url
            const fullData = await res.json();
            return{
                name: pokemon.name,
                image: fullData.sprites.front_default // Get sprites
            };
        })
    );

    return{
        pokemonList: pokeInfo // Return the results
    }
}

