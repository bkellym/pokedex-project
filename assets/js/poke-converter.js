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

pokeUtils.pokemonDetailFromJson = (pokeDetail) => {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const abilities = pokeDetail.abilities.map((slot) => slot.ability.name);
    const [type] = types

    pokemon.abilities = abilities;
    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    pokemon.stats = pokeUtils.getStatsFromJson(pokeDetail.stats);
    
    return pokemon
}

pokeUtils.getStatsFromJson = (statsJson) => {
    const statsArray = statsJson.map((slot) => slot.base_stat);

    let stats = {};

    stats.hp = statsArray[0];
    stats.attack = statsArray[1];
    stats.defense = statsArray[2];
    stats.special_attack = statsArray[3];
    stats.special_defense = statsArray[4];
    stats.speed = statsArray[5];

    return stats;
}
