async function getPokemons() {
    try {
        // const pokemonName = document.getElementById("pokemon").value.toLowerCase();
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);
        const response = await data.json();
        //  console.log(response);
        const data1 = response.sprites;
         console.log(data1)

        if(!response.ok) {
            // console.error("Detected an error")
        }

    }catch(error) {
        // console.log("Received an error")
    }
   
}
getPokemons();