//refatorando exercicio 3 com uso de funcoes

(function () {
  let formaPagamento = 1;
  let preco = 100.99;
  let condicao = 0;

  function verificaCondicao(opcao) {
    function condicao(preco,acrescimo) {
      return (preco * acrescimo / 100);
    }

    //testa a condição de pagamento e da atribuição aos descontos ou acrescimos
    if (opcao === 1) {
      preco = (preco - condicao(preco,15)).toFixed(2);
      return (`A forma de pagamento foi: Ávista ou Pix\n. O preço ficou: R$ ${preco}`);
    }
    else if (opcao === 2) {
      preco = (preco - condicao(preco,10)).toFixed(2);
      return (`A forma de pagamento foi: Debito\n. O preço ficou: R$ ${preco}`);
    }
    else if (opcao === 3) {
      formaPagamento = 2
      preco = (preco).toFixed(2);
      return (`A forma de pagamento foi: em ${formaPagamento} vezes. O preço ficou: R$ ${preco}`);
    }
    else if (opcao > 3) {
      formaPagamento = 3
      preco = (preco + condicao(preco,10)).toFixed(2);
      return (`A forma de pagamento foi: em ${formaPagamento} vezes. O preço ficou: R$ ${preco}`);
    }
  }

  console.log(verificaCondicao(4))
})()
