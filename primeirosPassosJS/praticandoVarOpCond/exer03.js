/*
  3- Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
  Utilize os codigos da tabela a seguir para ler qual a condição de pagamento e efetuar o calculo adequado.

  Codigo Condição de pagamento:
   1- À vista no Dinheiro ou PIX, recebe 15% de desconto;
   2- À vista Débito, recebe 10% de desconto;
   3- Em duas vezes, preço normal de etiqueta sem juros;
   4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const formaPagamento = 1;
let preco = 100;
let condicao = 0;

//testa a condição de pagamento e da atribuição aos descontos ou acrescimos
if (formaPagamento === 1) {
  condicao = (preco * 15 / 100);
  preco = (preco - condicao).toFixed(2);
  console.log(`A forma de pagamento foi: Ávista ou Pix\n. O preço ficou: R$ ${preco}`);
}
else if (formaPagamento === 2) {
  condicao = (preco * 10 / 100);
  preco = (preco - condicao).toFixed(2);
  console.log(`A forma de pagamento foi: Debito\n. O preço ficou: R$ ${preco}`);
}
else if (formaPagamento === 3) {
  condicao = 0;
  preco = (preco + condicao).toFixed(2);
  console.log(`A forma de pagamento foi: em ${formaPagamento} vezes. O preço ficou: R$ ${preco}`);
}
else if (formaPagamento > 3) {
  condicao = (preco * 10 / 100);
  preco = (preco + condicao).toFixed(2);
  console.log(`A forma de pagamento foi: em ${formaPagamento} vezes. O preço ficou: R$ ${preco}`);
}
