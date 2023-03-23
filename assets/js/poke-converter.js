const pokeUtils = {};

pokeUtils.pokemonFromJson = (pokeDetail) => {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeUtils.statsFromJson = (statsJson) => {
    const stats = {};

    return stats;
}

pokeUtils.abilitiesFromJson = (abilitiesJson) => {
    const abilities = {};

    return abilities ;
}

pokeUtils.eggGroupFromJson = (eggGroupJson) => {
    const eggGroup = {};

    return eggGroup ;
}