htmlComponents = {};

htmlComponents.getPokemonCard = (pokemon) => {

    return `<li class="pokemon ${pokemon.type}" onclick="goToPokemon(${pokemon.number});">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>`;
}

htmlComponents.getPokemonStatsTable = (stats) => {
    
    return `<table class="stats">
                <tr>
                    <th class="nome"> Velocidade </th>
                    <th class="valor"> ${stats.speed} </th>
                    <th class="nome"> Vida </th>
                    <th class="valor"> ${stats.hp} </th>
                </tr>
                <tr>
                    <th class="nome"> Defesa Especial </th>
                    <th class="valor">  ${stats.special_defense} </th>
                    <th class="nome"> Defesa </th>
                    <th class="valor">  ${stats.defense} </th>
                </tr>
                <tr>
                    <th class="nome"> Ataque Especial </th>
                    <th class="valor">  ${stats.special_attack} </th>
                    <th class="nome"> Ataque </th>
                    <th class="valor">  ${stats.attack} </th>
                </tr>
            </table>`
}