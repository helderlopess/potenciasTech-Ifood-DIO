const pokeApi = {}

function convertPokeApiDetailToPokemon(pokemonsDetail) {
  const pokemon = new Pokemon() //instanciando a classe criada
  pokemon.number = pokemonsDetail.order
  pokemon.name = pokemonsDetail.name
  //convertendo a lista para um mapa em string
  
    
  const types = pokemonsDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types //destructuring

  pokemon.types = types
  pokemon.type = type
  pokemon.photo = `${pokemonsDetail["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]}`
                  /*pokemonsDetail.sprites.other.dream_world.front_default */
  
  return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon) //evoca a classe ja instanciada
}

pokeApi.getPokemons = (offset = 0,limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    //.catch((error) => console.error(error))
}
//buscando a lista>response em http>response jason>lista pokemons>map lista fetch do detalhe> convertendo para json>espera terminar todas as requisições> lista de detalhe do pokemon

/*
o map funciona como uma lista de promisses onde fara uma unica requisição para o servidor que retorna para ser renderizada pelo browser

Promise.all([
  fetch('https://pokeapi.co/api/v2/pokemon/1')
  fetch('https://pokeapi.co/api/v2/pokemon/2')
  fetch('https://pokeapi.co/api/v2/pokemon/3')
]).then((results) =>{
    console.log(results)
  }

*/
