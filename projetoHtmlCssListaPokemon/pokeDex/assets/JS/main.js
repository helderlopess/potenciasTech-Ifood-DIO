//o fetch retornara uma promise, uma promessa de resposta para solicitação. o fetch gera um response
//este primeiro  then faz uma promise e retorna um arquivo json que sera processado pelo 2 then que por fim imprimo no log
//utilizando a arrow function  quando for uma funcao que nao necessita de contexto isolado, ou simples callback
//arrow fucntion nao precisa de um corpo caso seja chamada apenas uma linha de retorno
//recebe o body convertido
//modelo de funcao convencional declarando o nome function

//uma lista retorndo um map
/*function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}*/
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
let pokemonCard = pokemonList
const limit = 5
let offset = 0;
const maxRecords = 151
/*
1,2,3,4,5   0-5
6,7,8,9,10  5-5
11          10-5  (remover botão)

*/

function loadPokemonItens(offset,limit) {
  // function convertPokemonToLi(pokemon) {
  // return }
  pokeApi.getPokemons(offset,limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => `
      <li class="pokemon ${pokemon.type}">
        <span class="number"> #${pokemon.number} </span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
          <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>
          <div class="img">  
            <img src="${pokemon.photo}"
                alt="${pokemon.name}" />                                  
          </div>
        </div>
       </li>  
    `).join('')
    pokemonList.innerHTML += newHtml
    
  })
}

//evocando a função de carregamento de paginas
loadPokemonItens(offset,limit)

loadMoreButton.addEventListener('click',() => {
  offset += limit
  
  const qtRecordNextPage = offset + limit

  if (qtRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset,newLimit)
    
    loadMoreButton.parentElement.removeChild(loadMoreButton)
    
  } else {
    loadPokemonItens(offset,limit)
  }

})
//listas onde sera renderizados todos os pokemons de uma unica vez
//pega a lista de pokemons, mapeia a lista, converte a lista para li e junta todos os li sem separados
//convertendo o objeto em uma lista html
/*const listItens = []

for (let i = 0;i < pokemons.length;i++) {
  const pokemon = pokemons[i];
  listItens.push(convertPokemonToLi(pokemon))

}
console.log(listItens)*/
  // não sera usado || .finally(() => console.log("Requisição concluida!"))

  //THEN retorno da promisse no 1 then e retorno do 1 no segundo

/*
semelhante ao:
try {
} catch (error) {
} finally {}
*/
