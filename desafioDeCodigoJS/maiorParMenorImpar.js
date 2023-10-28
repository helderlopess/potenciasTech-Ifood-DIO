//24102023
/*
DESAFIO DE CODIGO
2- Escreva um programa que leia uma quantidade N de numeros e indique entre eles qual é o numero maior Par e o Menor Par
*/

let maiorPar = 0;
let menorImpar = 0;

//declaracao das funcoes auxiliares para automatizar como no desafio da plataforma
const {gets,print,n} = require('../importEexport/funcaoAuxiliaresGetPrint.js')
//o n precisou ser declarado na funcao exportada ja que nao consegui indicar o tamanho do vetor entradas para indicar no laço qual queria o numero de repetições do mesmo. nesse caso ficou o 5 como menor numero inmpar é o 98 como maior numero par.

for (let i = 0;i < n;i++) {
  const numero = gets();
  print(numero);
  if (numero % 2 === 0) {
    if (numero > maiorPar) {
      maiorPar = numero;
    }
  }  //se ele nao é par ele é impar  
  else {
    if (menorImpar === 0) {
      menorImpar = numero;
    } else if (numero < menorImpar) {
      menorImpar = numero;
    }
  }
};

print(`O maior número   par é: ${maiorPar}`);
print(`O menor número ímpar é: ${menorImpar}`);

