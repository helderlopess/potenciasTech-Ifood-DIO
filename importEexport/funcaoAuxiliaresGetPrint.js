const entradas = [5,50,10,98,23];
let i = 0;

function gets() {
  const valor = entradas[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}
const n = entradas.length;

//exportando o objeto e prepara o cache caso o arquico .js seja chamado novamente
module.exports = {//{}objeto literal o ecma atual pode ser apenas gets, print
  gets: gets,
  print: print,
  n: n //exportando o numero de elementos da matriz fornecida (entradas)

};

