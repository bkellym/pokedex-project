const nome = document.getElementById('nomePokemon');
const numero = document.getElementById('numeroPokemon');
const imagem = document.getElementById('imagemPokemon');
const tipo = document.getElementById('tipoPokemon');
const habilidades = document.getElementById('habilidadesPokemon');
const stats = document.getElementById('statsPokemon');

const urlParams = new URLSearchParams(window.location.search);
returnHome = () => window.location.href='/';

function inicializaComponentes() {
    let pokeID = urlParams.get('pokeid');
    
    pokeApi.getPokemonDetailById(pokeID).then(function(pokeDetail) {
        nome.innerHTML = pokeDetail.name;
        numero.innerHTML = `#${pokeDetail.number}`;
        imagem.innerHTML = `<img src="${pokeDetail.photo}" alt="${pokeDetail.name}" class="imagem">`

        tipo.innerHTML += `${pokeDetail.types.map((type) => `<div class="tag ${type}">${type}</div>`).join('')}`

        habilidades.innerHTML = pokeDetail.abilities.map((ability) => `<tr> <th> ${ability} </th> </tr>`);

        stats.innerHTML =  htmlComponents.getPokemonStatsTable(pokeDetail.stats);

        numeroPokemon.classList += ` ${pokeDetail.type} numero tag `;
        document.body.classList = pokeDetail.type;
    })
}

inicializaComponentes();