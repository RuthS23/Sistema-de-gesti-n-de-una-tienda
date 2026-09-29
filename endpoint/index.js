/**
 * Funcion Asincrona
 * Consumo de api atravez de fetch
 * Edpont por nombre y transformar a JSON
 * Eventos NA
 */

const peticionApi = async () => {
    //consumo de api
    const peticionGet = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    // Transformar a JSON
    const datosPokemon = await peticionGet.json();
    //Pintar respuesta en consola
    console.log("endpoint de Api de Pokémon Busqueda por nombre");
    console.log("Respuesta del servicio",datosPokemon);
    console.log(datosPokemon.sprites.other.dream_world.front_default);
    const imagenBulbasaur = datosPokemon.sprites.other.dream_world.front_default;
    const nombreBulbasaur = datosPokemon.name;

}

//llamado a la función
peticionApi();
