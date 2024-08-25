//OBJETOS
//Em JavaScript, um objeto é uma estrutura de dados que permite armazenar e organizar informações relacionadas em pares de chave-valor. Ele é uma coleção de propriedades, onde cada propriedade consiste em uma chave (também chamada de nome) e um valor associado.

//Em termos mais simples, um objeto em JavaScript é como um recipiente que pode conter várias informações e funcionalidades. As propriedades de um objeto podem ser acessadas e modificadas, e podem conter qualquer tipo de valor, como números, strings, booleanos, arrays, funções e até mesmo outros objetos.

//Como criar um objeto no JavaScript 

//chave = pessoa

//let pessoa = {
 // nome: 'Anna',
//}  // Se a chave EX: nome for simples colocar sem nada, mas se tiver nome-da-pessoa colocar Aspas" O conteúdo 'Ánna' se for string também com Aspas''

 //************************************

//chave = pessoa

let pessoa = {
  nome: 'Anna',
  idade: 47,
}
console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa.idade)   //imprii= Anna
47
console.log(pessoa['nome'])  // Forma alternativa de acessar  de acessar a chave.
//Nesse caso tem que colocar a ['Aspas'] se string

//Como adicionar um par chave-valor?

pessoa.altura = 1.71

console.log(pessoa)

//imprimi= { nome: 'Anna', idade: 47, altura: 1.71 }
// ***********************************


//Como remover um par chave-valor?

delete pessoa.altura

console.log(pessoa)

console.clear()

// Como percorrer

for (let chave in pessoa) {
  console.log(chave)
}
 //Com a chave consegue obter o valor do objeto//