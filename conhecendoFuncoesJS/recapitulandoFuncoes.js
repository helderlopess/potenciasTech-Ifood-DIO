function escreverNome(nome) {
  return (`Meu nome é ${nome}`);
}


console.log(escreverNome('Helder'));
console.log(escreverNome('Vitor'));

function verificarIdade(idade) {
  if (idade > 17) {
    return ('maior de idade')
  }
  else {
    return ('menor de idade')
  }
}

console.log(verificarIdade(15));

//intercalando funcoes
function verificaridadeUser(nome,idade) {
  return escreverNome(nome) + ", " + verificarIdade(idade)
}

console.log(verificaridadeUser('Helder',25));

