let vetor1 = [] //fomra moderna
let vetor2 = Array() //forma tradicional

//Criação de vetores vom valores iniciais

let vetor3 = [2, 4, 6, 8, 10]
let vetor4 = Array('vaca', 'cachorro', 'gato', 'papagaio')
 //inserção de novos valores em um vetor

 //fomra 1: push()
 vetor1.push('laranja')
 vetor1.push('limão')

 console.log(vetor1)

 //forma 2: unshift() adiciona novos elementos no inicio do vetor
 vetor1.unshift('maçã')
 console.log(vetor1)

 vetor1.unshift('abacaxi')
 console.log(vetor1)

 //forma 3: splice() - Primeiro parâmetro a posição de inserção, e segundo para/ quantos elementos serão eliminados(para inserção tem que ser ==0)
 vetor1.splice(2, 0, 'morango')
 console.log(vetor1)

 vetor1.splice(1, 0, 'jaca')
 console.log(vetor1)

 //remoção de elementos de um vetor

 // forma 1: pop() retira o ultimo elemento do vetor
 let x1 = vetor1.pop()
 console.log(vetor1, x1)

 // forma 2: shift() retira o primeiro elemeto do vetor
 let x2 = vetor1.shift()
 console.log(vetor1, x2)

 //forma 3: splice()
 //primeiro para/ a posição para remoção
 //segundo prara/ a quantidade de elementos a serem removidos
 let x3 = vetor1.splice(2, 1)
 console.log(vetor1, x3)

 // O splice também serve para fazer substituições
vetor1.splice(1 , 1, 'pera')
console.log(vetor1)

//Colocando mais alguns elementos no vetor
vetor1.push('amora'; 'jabuticaba')
vetor1.push('pessego')
vetor1.push('uva')
vetor1.push('abacate')
console.log(vetor1)

//Métodos de percurso de vetores

//forma 1: usando o for tradicional
//O inicio da variavel é sempre na posição 0 e ser incremento
//deve ir até uma posição ANTES do seu número de elementos(lenght)

// i++ significa  i = 1+1
for(let i = 0; i < vetor1.length; i++) {
    console.log(vetor1[i])
}


console.log('---------------------------------')

//Fomra 2: for..of
//Percorrer o vetor do primeiro ao último elemento de uma forma
//mais simples que o for tradicional
for(let fruta of vetor1) {
    console.log(fruta)
}