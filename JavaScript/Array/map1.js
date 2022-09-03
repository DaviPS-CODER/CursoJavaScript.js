//o map ele serve para mapear os elementos de um array para um novo array,
//só que com os  dados transformados.
// e os arrays gerados pelo map, sempre terão a mesma quantidade de elementos.

//gerando um array com os valores dobrados
const nums = [1,2,3,4,5]

//todos os valores de "nums" serão dobrados e colocados em "resultado"
let resultado = nums.map(function(e){
    return e*2
})

console.log(resultado)

const soma10 = e => e+10
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

//há como fazer uma cadeia de arrays, com uma série de "maps" que irão retornar os arrays
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)