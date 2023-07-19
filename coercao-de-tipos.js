
//COERÇÃO É IGUAL A CONVERÇÃO 
// > COERÇÃO (CONVERSÃO) DE TIPOS

// 1. Coerção Explícita (Manual)

const numero = 10

console.log(numero, typeof numero) //tipo number

const numeroEmFormatoDeString = String(numero) //Manual
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString) // tipo String

console.log(Number('123456')) // Mostra os números
console.log(parseFloat('81975.47')) // mostra os números, mas preferivel usar o Number
console.log(parseInt('81975.47')) //Mostra os números sem a casa decimal.
console.log(Boolean(123456)) //true - Porque tem números.
console.log(Boolean(0)) //false  sem números

// Quando os números tiverem casa decimais colocar ponto . ao invés de virgula,


console.clear()

// 2. Coerção Implícita (Automática)

console.log('10'+ 1) // valor 101 - ele entende que junta os valores entende como texto
console.log('10' - 1) // valor 9 - o sinal de menos ele entende que são realmente números.
console.log('10' * 3) //valor 30
console.log(10 - 'aaaa') // valor NaN quer dizer Not a Number

// Outros exemplos

// Qual será a saída desse código?

let n = 1 + "1" // Valor texto  - 11

n = n - 1   // Valor 10

console.log(n)  // Valor é igual a 10

// // Qual será a saída desse código?

console.log(2 + 3 + 4 + "5") // Juntou o texto valor soma (2 + 3 + 4) + "5" = 95" 


// // Qual será a saída desse código?
 console.log("5" + 2 + 3 + 4) // Juntou o texto Valor 5234



 // // Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5") // Valor 15  -  subtraiu e somou + o "5" que tem valor de 10 no - let n = 1 + "1" // Valor texto  - 11
//n = n - 1   // Valor 10
 