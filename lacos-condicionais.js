
// > LAÇOS CONDICIONAIS

const input = require('readline-sync')

const numero_sorteado = 5

let numero = Number(input.question("Qual número você escolhe? ")) //Para essa string virar número colocar Number antes da palavra ou frase.
//Pode digitar um número e vai mostrar Number.

while (numero !== numero_sorteado) {
  console.log('Você errou o número. Tente novamente...')

numero = Number(input.question('Qual número você escolhe?'))
}

console.log('Você acertou!!!')