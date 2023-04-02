/*faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima sua média e a sua classificação conforme tabela abaixo

média = (nota 1 + nota 2 + nota 3)/3;

classificação:
Média menor que 5,reprovação;
média entre 5 e 7, recuperação;
média acima de 7, passou de semestre;
*/


let notas = [8,7,6];
let media = 0;

for (let i = 0;i < notas.length;i++) {
  media += notas[i];
  if (i >= notas.length - 1) {
    media = media / 3;
  } else {}
}


if (media < 5) {
  console.log(`Média: ${media.toFixed(2)}. Reprovação`);
}
else if (media >= 5 && media < 7) {
  console.log(`Média: ${media.toFixed(2)}. Recuperação`);
}
else if (media > 7) {
  console.log(`Média: ${media.toFixed(2)}. Passou de semestre`);
}
