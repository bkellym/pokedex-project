const nome = document.getElementById('nomePokemon');
const numero = document.getElementById('numeroPokemon');
const imagem = document.getElementById('imagemPokemon');
const tipo = document.getElementById('tipoPokemon');
const habilidades = document.getElementById('habilidadesPokemon');
const stats = document.getElementById('statsPokemon');
const egg_group = document.getElementById('groupPokemon');

const urlParams = new URLSearchParams(window.location.search);
returnHome = () => window.location.href='/';

function inicializaComponentes() {
    let pokeID = urlParams.get('pokeid');
    
    pokeApi.getPokemonDetailById(pokeID).then(function(pokeDetail) {
        nome.innerHTML = pokeDetail.name;
        numero.innerHTML = `#${pokeDetail.number}`;
        imagem.innerHTML = `<img src="${pokeDetail.photo}" alt="${pokeDetail.name}" class="imagem">`

        tipo.innerHTML += `${pokeDetail.types.map((type) => `<div class="tag ${type} darken">${type}</div>`).join('')}`
        habilidades.innerHTML = pokeDetail.abilities.map((ability) => `<tr> <th> ${ability} </th> </tr>`);
        egg_group.innerHTML = pokeDetail.egg_group.map((group) => `<th style="text-align: center;"> ${group} </th>`);
        stats.innerHTML =  htmlComponents.getPokemonStatsTable(pokeDetail.stats);

        numeroPokemon.classList += ` ${pokeDetail.type} lighten numero tag `;
        imagem.classList += ` ${pokeDetail.type} lighten`;
        document.body.classList = pokeDetail.type;
    })
}

inicializaComponentes();