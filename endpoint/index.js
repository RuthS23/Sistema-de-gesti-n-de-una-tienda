/**
 * Funcion Asincrona
 * Consumo de api atravez de fetch
 * Edpont por nombre y transformar a JSON
 * Eventos NA
 */

const namePokemon = document.getElementById("name__pokemon");

const imgPokemon = document.getElementById("img__pokemon");

const peticionApi = async () => {
    //consumo de api
    const peticionGet = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    // Transformar a JSON
    const datosPokemon = await peticionGet.json();
    //Pintar respuesta en consola
    console.log(datosPokemon);
    console.log(datosPokemon.sprites.other.dream_world.front_default);
    const imagenBulbasaur = datosPokemon.sprites.other.dream_world.front_default;
    const nombreBulbasaur = datosPokemon.name;

     namePokemon.textContent = nombreBulbasaur;
    imgPokemon.src = imagenBulbasaur;

}

//llamado a la función
peticionApi();
