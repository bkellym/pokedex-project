
const pokeApi = {}

pokeApi.getPokemonDetailById = (pokeid) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeid}/`

    return fetch(url)
        .then((response) => response.json())
        .then(pokeUtils.pokemonDetailFromJson);
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(pokeUtils.pokemonFromJson)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}