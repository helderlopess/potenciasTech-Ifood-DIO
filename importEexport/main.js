//importando o arquivo funcaoAuxiliares criado anteriormente desde que eles estejam sendo exportados
//chamando o codigo 
//const funcoes = require('./funcaoAuxiliaresGetPrint');
//tambem pode ser feito no modo destructure object
const {gets,print} = require('./funcaoAuxiliaresGetPrint');

let sorteados = [];
let maior =0;
for (let i = 0;i < 5;i++) {
  sorteados[i] = gets();
  print(sorteados[i])

  
  if (sorteados[i] > maior) {
    maior = sorteados[i];
  } 
}
print(sorteados);
print(`Este foi o maior numero ${maior}`);

