// >> LAÇO NUMÉRICO: FOR

const input = require('readline-sync')

// O Problema

/*const nota1 = Number(input.question('Informe a nota 1: '))
const nota2 = Number(input.question('Informe a nota 2: '))
const nota3 = Number(input.question('Informe a nota 3: '))

let media = (nota1 + nota2 + nota3) / 3 */


// Acumulador

let acumulador = 0
acumulador = acumulador + 10

acumulador += 2

acumulador++
console.log(acumulador)

// Estrutura for

for (let i = 0; i <= 4; i++) {
  console.log('Repetição', i)
}

console.clear()

for (let i = 10; i <= 12; i++) {   // Repetição com soma R: 10 11 12
  console.log('Repetição',i)
}

for (let i = 12; i > 8; i--) {  // Repetição com subtração R: 12 11 10 9
  console.log('Repetição', i)
}

console.clear()

//Resolvendo o problema inicial

let nota
let soma = 0

for (let i = 1; i <= 3; i++) {
  nota = Number(input.question(`Informe a nota ${i} do aluno: `))  //Templete string ${variável} e colocar  `crase` na frase ou palavra.

  soma = soma + nota // Juntando as somas
}

console.log(`A média do aluno é ${soma / 3})`)  // Vai somar 3X a nota do aluno e dividir por 3 e dar a média.

//OBS: Para colocar uma variável em uma string &{} e `crase`

//EX:
/*Informe a nota 1 do aluno: 10
Informe a nota 2 do aluno: 8
Informe a nota 3 do aluno: 9
A média do aluno é 9)*/