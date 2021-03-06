//Expressão de função "Tradicional"

//Características desta função
//Um único argumento -> n
// Seu corpo tem apenas uma linha de código com return
let quadrado = function(n) {
    return n * n
}

//A função tradicional acima pode ser transformada em uma ARROW FUNCTION

//Desaparece a palavra function
//O argumento não precisa de parênteses
//Após o argumento há a flecha (arrow) =>
//As chaves e a palavra return são omitidas
let quadrado2 = n => n * n

console.log(quadrado(6))
console.log(quadrado2(6))

//Situação alternativa 1: função sem argumento

//Retorna um número aleatório entre 0 e 99

let aleatorio = function() {
    //Math.random() -> gera um número aleatório entre 0 e 1 (francionário)
    //Math.Floor() -> "corta fora" as casas decimais de um número   
    return Math.floor(Math.random() * 1000)
}

console.log('--------------------------------------')
console.log(aleatorio())

// Arrow function com 0 argumento
// -Os parênteses vazios marcam o lugar do argumento (obrigatório)
let aleatório2 = () => Math.floor(Math.random() * 1000)


//situação alternativa 2: função com 1+ argumentos

//Função tradicional com 1+ argumentos
let imc = function(peso, altura) {
    return peso / (altura ** 2)
}

//Arrow function com mais de um argumento
//Os parênteses dos argumentos são obrigatórios quando o número de argumentos > 1
let imc2 = (peso, altura) => peso / (altura ** 2)

console.log(imc(87, 1.78))
console.log(imc(87, 1.78))

//CONCLUSÃO: os parênteses só podem ser omitidos da lista de argumentos de uma arrow function quando há UM e APENAS um argumento.

//Situação alternativa 3: funções com mais de uma linha no corpo

//função tradicional
let fatorial = function(n) {
    let res = 1
    for(let i = n; i > 1; i--) {
        res *= i
    }
    return res
}

// Arrow function com corpo maior que uma linha
//Não há como fazer otimizações quanto ao corpo de função
let fatorial2 = n => {
    let res = 1
    for(let i = n; i > 1; i--) {
        res *= i
    }
    return res
}
 console.log(fatorial(5))
 console.log(fatorial2(5))