// > ARRAYS - PARTE 2 - MÉTODOS DE ARRAYS

// Quando usar métodos tem que ussr ()  //

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento: slice

console.log(arr1.slice(0, 2))   // 30 12
console.log(arr1.slice(2))     // 45 34 29
console.log(arr1.slice(0))    //30 12 45 34 29

console.clear()

// Adicionando elementos: push | unshift

console.log('Antes de adicionar:', arr2)

arr2.push(10 ,20, 30)  // 10, 20, 30
arr2.push(40)  //Pode colocar vários elementos separados por , //

console.log('Depois de adicionar:', arr2)

//Unshift

console.log('Antes de adicionar com unshift:' ,arr2)

arr2.unshift(0)  // 10, 20, 30, 40

console.log('Depois de adicionar com unshift:' ,arr2) // 0, 10, 20, 30, 40


console.clear() 

//Removendo elementos: pop | shift

console.log('Antes de remover com o pop:' , arr2) // 0, 10, 20, 30, 40

const elementoRemovido = arr2.pop()

console.log('Depois de remover com o pop:' , arr2) // 0, 10, 20, 30
console.log('O elemento removido foi' , elementoRemovido)
//  foi removido = 40

// Com Shift

console.log('Antes de remover com o shift:' , arr2)  // 0, 10, 20, 30, 40

 arr2.shift()

console.log('Depois de remover com o shift:' , arr2) // 10, 20, 30


console.clear()

// Concatenando arrays: concat

console.log('arr1', arr1)  // 30, 12 ,45, 34,29
console.log('arr2', arr2)  // 10, 20, 30

console.log(arr1.concat(arr2))  // junta com o arr1 com o arr2 //
console.log(arr2.concat(arr1))  // junta com arr2 com o arr1//

console.clear()

// Buscando elememtos: indexOf | lastIndexOf

console.log(arr1)

let indeciDoElemento34 = arr1.indexOf(34)

console.log(indeciDoElemento34) 

let arr3 = [1, 2, 3 ,3, 5, 3]

console.log(arr3.indexOf(3))   // O indexOf procura sempre 0 primeiro indice do elemento, caso exista dois ou mais iguais.  EX: valor 2 =  0,  1, 2  que é o  primeiro 3 do array, (sendo 1 é 0)//

 // LastIndexOf

 console.log(arr3.lastIndexOf(3))   // O LastIndexOf procura o último indice do elemento Ex: 0,  1, 2, 3, 4, 5, 3
 // valor 5 = no caso o último 3 do array  (sendo 1 é 0)

console.clear()

// Descobrindo a existencia de um elemento: includes

console.log(arr1)   //arr1 [ 30, 12, 45, 34, 29 ]

console.log(arr1.includes(10))  // false - Não possui

console.log(arr1.includes(12))  // true - Existe
  
console.clear()

//Invertendo arrays: reverse

console.log('arr1 normal', arr1)  //arr1 normal [ 30, 12, 45, 34, 29 ]

const arr1Invertido = arr1.reverse()

console.log('arr1 invertido', arr1Invertido)  //arr1 invertido [ 29, 34, 45, 12, 30 ]


