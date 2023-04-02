/*Faça um programa para calcular o valor de uma viagem.

voce terá 5 variaveis. sendo elas:
1 preco do etanol;
2 preço da gasolina
3 o tipo de combustivel que está no seu carro;
4 Gasto médio de combustivel do carro por KM;
5 Distancia em KM da viagem.

Imprima no console o valor que será gasto para realizar esta viagem */

const precoEtanol = 3.0;
const precoGasolina = 4.5;
const gastoMedioPorKM = 10;
const deltaSKm = 100; 
let tipoCombustivel = "gasolina";
let valorGasto = 0;

if (tipoCombustivel === 'gasolina') {
  valorGasto = deltaSKm / gastoMedioPorKM * precoGasolina
  console.log(`O gasto com ${tipoCombustivel} foi de R$${valorGasto.toFixed(2)}`)
}
else if (tipoCombustivel === 'etanol') {
  valorGasto = deltaSKm / gastoMedioPorKM * precoEtanol
  console.log(`O gasto com ${tipoCombustivel} foi de R$${valorGasto.toFixed(2)}`)
} else {console.log('opção invalida')}
