// > ARRAYS  - Estrutura de dados

//É uma estrutura de dados que armazena uma coleção de elementos do mesmo tipo. Ele fornece uma forma eficiente de organizar e acessar esses elementos.

//Os arrays são amplamente utilizados em programação para armazenar e manipular conjuntos de dados relacionados. Cada elemento em um array é identificado por um índice, que representa sua posição no array. Os índices geralmente começam em zero para o primeiro elemento e aumentam em incrementos de um.
//array[0] e separado por , //
// Arrays são geralmente descritas como "lista de objetos"; elas são basicamente objetos que contem múltiplos valores armazenados em uma lista. //

// - Como criar um array?

let arr = ['Wallisson', 26, 1.77, true]

console.log(arr)

// - Como acessar os elemetos do array

console.log('Primeiro elemento:', arr[0])
console.log('Segundo elemento:', arr[1])
console.log('Terceiro elemento:', arr[2])
console.log('Quarto elemento:', arr[3])

// - Como  obter o tamanho do array

console.log('Tamanho do array:', arr.length) // Ao invés de Array.length - para saber ou dar o tamanho do array

// - Percorrendo arrays

console.clear()

for (let i = 0; i < arr.length; i++) {  // ; para a divisão //++ incremento de um em um 
  console.log(arr[1])
}

console.clear()

for (let elemento of arr) {    //Percorrendo o elemento de fora do array.
  console.log(elemento)
}

console.clear()

for (let indice in arr) {       // Percorrendo o elemento de dentro do array
  console.log(indice, arr[indice])
}


