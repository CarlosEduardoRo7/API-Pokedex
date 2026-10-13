var nome = document.getElementById("nome");
var numero = document.getElementById("numero");
var tipo = document.getElementById("tipo");
var desc = document.getElementById("desc");
var imagem = document.getElementById("sprite");
var tipos = [2];

var buscar = document.getElementById("buscar");

function buscarDescricao(){
    var pokemon = document.getElementById("buscar_nome").value;
    pokemon = pokemon.toLowerCase();
    return fetch("https://pokeapi.co/api/v2/pokemon-species/" + pokemon)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(dados){
        desc.innerHTML = dados.flavor_text_entries[0].flavor_text;
    });
}

function buscarPokemon() {
    var pokemon = document.getElementById("buscar_nome").value;
    pokemon = pokemon.toLowerCase();
    
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then(function(resposta) {
        if(!resposta.ok){
            throw new Error("Pokemon não encontrado");
        }
        return resposta.json();
    })
    .then(function(dados){
        console.log(dados);
        nome.innerHTML = dados.name;
        for (let i = 0; i < dados.types.length; i++) {
            tipos[i] = dados.types[i].type.name;
        }     
        tipo.innerHTML = "Tipo: " + tipo[0] ; 
        numero.innerHTML = "N°: " + dados.id;
        imagem.src = dados.sprites.front_default;
        buscarDescricao();
    })
};