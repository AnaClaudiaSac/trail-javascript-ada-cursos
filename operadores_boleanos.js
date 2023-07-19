// > OPERAD0RES BOLEANOS
// Booleano é um tipo de dado utilizado na linguagem de programação JavaScript para representar valores lógicos, ou seja, valores que podem ser verdadeiros ou falsos. Em JavaScript, o tipo booleano possui apenas dois valores possíveis: true (verdadeiro) e false (falso).


// Igualdade:      == (ou ==)         
// Desigualdade:   != (!==)
// Maior que:      >
// Maior ou igual: >=
// Menor que:      <
// Menor ou igual: <=

// - Conjunções Lógicas


  const numero = 10
  
   
  console.log(numero ==10)   // true
  console.log(numero > 20)   //false
  console.log(numero == '10') //true Usando 2 iguais == ele compara só o conteúdo.

  console.log(numero === '10') // false porque um é Number e o outro é string
 
  console.clear() // limpar
  console.log(10!=10)  //false (!=) é diferente em termos de tipo
  console.log(10!='10') //false (!=) é diferente em termos de tipo
  console.log(10!=='10') //true (!==) realmente diferente


 // AND => &&  /And descreve && = E
 //Atribuir =
 //Igual ==
 //Coerção, verificar os tipos Ex: number, String se são iguais ===

let idade = 47
let tenhoCNH = true

const possoDirigir = idade >= 18 && tenhoCNH === true  // && é igual a e
console.log('Posso dirigir?', possoDirigir) //true


// OR => ||  - Comparacão ou combinações que envolve ou usa ||

idade = 40
const votoFacultativo = idade < 18 || idade >= 70



  //NOT => !  - Usar  o ! Inverte o resultado

  const estouGostandoDoCurso = false
  console.log(!estouGostandoDoCurso) //true - Por causa do ! na frente da variável