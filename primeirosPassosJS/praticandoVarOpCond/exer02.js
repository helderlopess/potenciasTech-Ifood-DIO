/* 2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pressoa adulta.

Formula do IMC:
IMC = peso / altura²

Elabore um algoritimo que dado o  peso e altura de um adulto sua condição d





e acordo com a tabela abaixo.

IMC em adultos, Condição:
  abaixo de 18.5 > abaixo do peso;
   entre 18.5 e 25 > peso normal;
   entre 25 e 30 > acima do peso;
   entre 30 e 40 > obeso;
   acima de 40 > obesidade grave.*/


let imc;
const peso=70;
const altura=169;

imc = peso / (altura ** 2)*10000; // tambem pode ser math.pow(altura, 2)
if (imc < 18.5) {
  console.log(`Seu IMC é de: ${imc.toFixed(2)}. Você está abaixo do peso`);
}
else if (imc > 18.5 && imc <= 25) {
  console.log(`Seu IMC é de: ${imc.toFixed(2)}. Você está com peso normal`);

}
else if (imc >= 25 && imc <= 30) {
  console.log(`Seu IMC é de: ${imc.toFixed(2)}. Você está acima do peso`);

}
else if (imc >= 30 && imc <= 40) {
  console.log(`Seu IMC é de: ${imc.toFixed(2)}. Você está com quadro de obesidade`)  
}

else if (imc > 40) {
  console.log(`Seu IMC é de: ${imc.toFixed(2)}. Você está com quadro de obesidade grave`)
  
}



