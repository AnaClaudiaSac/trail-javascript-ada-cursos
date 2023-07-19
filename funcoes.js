//FUNÇOES

// Definições de funçao

function saudacao() {
  console.log('Olá, seja bem-vinda(o) ao nosso curso de JavaScript!')
}

saudacao()

console.clear()

//Como enviar parâmetros para as funções

function saudacao(name) {
  console.log(name)
  console.log('Olá, seja bem-vinda(o) ao nosso curso de JavaScript!')
}

saudacao('Anna')

//Imprimi         //Anna
//Olá, seja bem-vinda(o) ao nosso curso de JavaScript!



//Customizar

function saudacao(name) {
  console.log(`Olá, ${name} seja bem-vinda(o) ao nosso curso de JavaScript!`)  // Uasr dessa com forma crase`` e ${}
}

saudacao('Anna') 

console.clear()

//imprimi = Olá, Anna seja bem-vinda(o) ao nosso curso de JavaScript!

//Passar mais parâmetros na função

function saudacao(name, curso) {
  console.log(`Olá, ${name} seja bem-vinda(o) ao nosso curso de ${curso}!`)  // Uasr dessa com forma crase`` e ${}
}

saudacao('Anna', 'JavaScript') 

// Imprimi = Olá, Anna seja bem-vinda(o) ao nosso curso de JavaScript!

//Ex: pode passar parametro na função também = function saudacao(name, curso= 'JavaScrit') ou no nome dado a função//

console.clear()

//Retorno na função

function soma(numero1, numero2) {
  return numero1 + numero2
}

const resultado = soma(10, 20)  //salvar soma na variável

console.log(resultado) //imprimir 30

console.log(resultado / 2)  //Posso fazer outras contas 15

//function soma(numero1, numero2) {
//  return numero1 + numero2
//  ---Aqui nada---}
// Quando usar return ela encerra//


console.clear()

// Mas tem casos que pode continuar...

function maiorDoQue50(numero) {
  if (numero >50)
  return true
}

return false 

//Pesquisar sobre Arrow Function//

