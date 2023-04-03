/*/quando nao ha retorno é considerado um procedure
function sayMyName(name) {
  console.log(`Your name is ${name}`)
  
}

sayMyName("Helder")

//aqui ela recebe o para valor e retorna o resultado
function quadrado(valor) {
  return valor**2
  
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez)

NOTA: no JS as funcoes sao como objetos, podem ser atribuidos valores, outras funcoes ou atribuir funcoes a ela
*/
//>>>>>>>>>>> a partir de agora todos os programas serao iniciado com a função MAIN <<<<<<<

//************** *refatorando o exercicio IMC******************

function calcularImc(peso,altura) {
  return (peso / altura ** 2) * 100 * 100;
}

//funcao auxiliar de classificacao dos resultados do imc
function classificarImc(imc) {
  if (imc < 18.5) {
    return (`Seu IMC é de: ${imc.toFixed(2)}. Você está abaixo do peso`);
  }
  else if (imc > 18.5 && imc <= 25) {
    return (`Seu IMC é de: ${imc.toFixed(2)}. Você está com peso normal`);

  }
  else if (imc >= 25 && imc <= 30) {
    return (`Seu IMC é de: ${imc.toFixed(2)}. Você está acima do peso`);

  }
  else if (imc >= 30 && imc <= 40) {
    return (`Seu IMC é de: ${imc.toFixed(2)}. Você está com quadro de obesidade`)
  }

  else if (imc > 40) {
    return (`Seu IMC é de: ${imc.toFixed(2)}. Você está com quadro de obesidade grave`)

  }
}
//MAIN AUTO EVOCADO
(function () {
  console.log('Programa principal');
  const peso = 70;
  const altura = 169;

  const imc = calcularImc(peso,altura);
  console.log(classificarImc(imc));

})()

//evocando a funcao principal main > NÃO NECESSARIA QUANDO A FUNCAO PRINCIPAL ESTA ENTRE ()
//main();

//funcao imediatamente invocada
/*ao passar uma funcao dentro de um parentesiis (funcao)() ela sera resolvida primeito e seu valor sera atribuido a evocacao, assumindo seu valor

ainda é possivel chamar uma funcao e executa-la imediatamente, não passando nome que possa ovocala depois*/
