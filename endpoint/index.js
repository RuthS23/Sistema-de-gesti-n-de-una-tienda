

const peticionApi = async () => {

    const peticionGet = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");

    const datosPokemon = await peticionGet.json();

    console.log("endpoint de Api de Pokémon Busqueda por nombre");
    console.log("Respuesta del servicio",datosPokemon);
    console.log(datosPokemon.sprites.other.dream_world.front_default);
    const imagenBulbasaur = datosPokemon.sprites.other.dream_world.front_default;
    const nombreBulbasaur = datosPokemon.name;

}

peticionApi();
