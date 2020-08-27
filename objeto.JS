forEach()
//O argumento do foreach() é uma função que recebe cada elemento do vetor para fazer algo com ele

//argumento como arrow function

vetor1.forEach(fruta => console.log(fruta))

//argumento como função tradicional
vetor1.forEach(function(fruta)) {
      console.log(fruta)
})

//Declaração de objeto vazio
let pessoa1 = {}  //método moderno
let pessoa2 = new Object()  //método tradicional


//Declrando e inicializando um objeto já com propriedades - propriedade -> atributo + valor

let pessoa3 = {
   nome: 'João das Couves',
   naturalidade: 'Franca/SP',
   data_de_nascimento : '1997-11-03',
   estudante_fatec: true

}

//Acessando uma propriedade de um objeto
//Atributo é uma única palavra -> sintaxe do ponto

console.log(pessoa3.nome)
console.log(pessoa3.estudante_fatec)

//Acessando uma propriedade composta por várias palvras ->
// sintaxe dos colchetes

console.log(pessoa3['data_de_nascimento'])

//sintaxe dos colchetes SEMPRE funciona, mesmo com propriedades cujo nome é uma única palavra

console.log(pessoa3['naturalidade'])

let atrib = 'nome'
console.log(pessoa3[atrib])

//Criando novas propriedade com objeto
pessoa3.nacionalidade = 'portuguesa'     //única palavra
pessoa3['registro de estrangeiro'] = 123456789 //várias palavras

console.log(pessoa3)

//Eliminando uma propriedade
delete pessoa3.estudante_fatec

console.log('--------------------------------------------')
 console.log(pessoa3) 

 //Como percorrer todas as propriedades de um objeto: for..in 
 for(let prop in pessoa3) {
     console.log(prop)
 }

 //Listando atributo e valor de um objeto usando for..in
 for(let atrib in pessoa3) {
     //console.log('Atributo:' + atrib + '; valor: ' + pessoa3[atrib])


     //Usando string template (delimitando por acentos GRAVES)
     console.log(`Atributo: ${atrib}; valor: ${pessoa3[atrib]}`)

 }
     

