const resumoPokemon = document.getElementById('resumoPokemon');
const nomePokemon = document.getElementById('nomePokemon');
const numeroPokemon = document.getElementById('numeroPokemon');
const imagemPokemon = document.getElementById('imagemPokemon');

const urlParams = new URLSearchParams(window.location.search);
returnHome = () => window.location.href='/';

function inicializaComponentes() {
    let pokeID = urlParams.get('pokeid');
    
    pokeApi.getPokemonDetailById(pokeID).then(function(pokeDetail) {
        nomePokemon.innerHTML = pokeDetail.name;
        numeroPokemon.innerHTML = `#${pokeDetail.number}`;
        imagemPokemon.innerHTML = `<img src="${pokeDetail.photo}" alt="${pokeDetail.name}" class="imagem">`
        document.body.classList = pokeDetail.type;
    })
}

inicializaComponentes();