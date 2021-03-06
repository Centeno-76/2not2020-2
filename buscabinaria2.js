// Pré-requisito para a busca binária: o conjunto de dados
// PRECISA estar ordenado pelo critério de busca
let comp = 0
function buscaBinaria(lista, valorBusca, fnComp) {
    let inicio = 0
    let fim = lista.length - 1
    
    while(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)
        let res = fnComp(lista[meio], valorBusca)
        // Verifica se o valor na posição média é o valor de busca
        if(res == 0) {
            comp++
            return meio
        }
        else if(res < 0) {
            comp += 2
            fim = meio - 1
        }
        else {  // res > 0
            comp += 2
            inicio = meio + 1
        }
    }
    return -1       // Valor não encontrado
}
function comparaNome(obj, valorBusca) {
    // Os dois valores são iguais
    if(valorBusca === obj.first_name) return 0
    // Um número negativo para indicar que o primeiro < segundo
    else if(valorBusca < obj.first_name) return -1
    // Um número positivo para indicar que o primeiro > segundo
    else return 1 // valorBusca > obj.first_name
}

let listaNome = require('./dados/lista-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(lisstaNomes, 'FAUSTO', comparaNome))
console.logtimeEnd('FAUSTO')
console.log('Comparações:', comp)

console.log('-----------------------------------------------')
console.time('FAUSTO')
console.log(buscaBinaria(listaNomes, 'FAUSTO', (obj, busca) =>{
if(busca == obj.first_name) return 0 
else if(busca < obj.first_name) return -1
else return 1
}))
console.timeEnd('ENEDINO')
console.log('Comparações')