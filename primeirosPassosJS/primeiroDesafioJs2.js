/*DECLARAÇÃO DE VARIAVEIS E OPERADORES
desafio: faça um programa para calcular
faça um programa para calcular o valor gato de combustivel em uma viagem.
voce tera 3 variaveis. Sendo elas:
  preco do combustivel
  gasto medio de combustivel do carro por KM
  distancia em KM da viagem

 imprima no console o valor que sera gasto de combustivel para realizar esta viagem
*/

const combustivel = 5.53; //alcool
const kmPorLitros = 10; //10km/L
const deltaSemKm = 100;

let valorGasto = deltaSemKm / kmPorLitros * combustivel

console.log(valorGasto.toFixed(2)); //arredondando valor para 2 casas
