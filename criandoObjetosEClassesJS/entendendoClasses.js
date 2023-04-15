//CLASSE
// a classe é um modelo abstrato de cmo deveria ser uma pessoa dentro do meu programa. é como um modelo
class Pessoa {
  nome; //1 instancia
  idade;
  anoDeNascimento;

  //sempre que um objeto for instanciado ela passara pelo metodo contrusctor quando ele é declarado, gerando um padrao automatizado dentro da classe
  constructor (nome,idade) {
    this.nome = nome;   // o this usado informa que a variavel do metodo 
    this.idade = idade;//assumira o atributo da classe, qundo for passado
    this.anoDeNascimento = 2023 - idade // nesse caso o ano não foi informado como variavel, mas pode ser dedutivel realizando o calculo

  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}. Nascido em ${this.anoDeNascimento}`);
  }
}

/*// instanciando uma pessoa nova dentro do objeto

//ocorrencia 1
const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

//ocorrencia 2
const renan = new Pessoa();
console.log(vitor); // aqui ainda nao foi atribuido nada por isso ira apresentar undefined
renan.nome = 'Renan j Paula';
renan.idade = 30;
*/

//instanciando novas pessoas utilizando o padrao do constructor
//dessa forma basta passar os parametros padroes definitos no constructos e ele criara o objeto sem que seja necessario redeclarar variavel por variavel
const vitor = new Pessoa('Vitor',25);
const renan = new Pessoa('Renan',30);



vitor.descrever(); // usando o atributo e chamarndo a função para apresentar todo os valores
renan.descrever();


//funcao compara pessoas e suas idades
function compararPessoas(p1,p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho que ${p2.nome}`)
  }
  else if (p1.idade < p2.idade) {
    console.log(`${p2.nome} é mais velho que ${p1.nome}`)
  }
  else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
  }
}

compararPessoas(vitor,renan)
