//objeto == colecao de valores
/*const Pessoa = {
  nome: 'Vitor j Guerra',
  idade: 25,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`);
  }
};
*/



console.log(Pessoa.nome);
console.log(Pessoa.idade);
console.log(Pessoa);


//é possivel incrementar o objeto dinamicamente
Pessoa.altura = 170;

console.log(Pessoa)

//deletando valores
//delete pessoa.nome; >>> comentei senao ele deleta a chave nome declarada

console.log(Pessoa)

//metodo = funcao dentro de um objeto
// this == palavra reservado assume o contexto do objeto quanso invocado

//Pessoa.descrever();

//sintaxe dinamica para acessar valores 
const atributo = 'idade';

console.log(Pessoa[atributo]);



//vitor.descrever();
//renan.descrever();

console.log(vitor);
console.log(renan.descrever());
