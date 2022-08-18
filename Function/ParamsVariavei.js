/*arguments é um array interno de uma função com todos os argumentos que foram passados,
 e nessa função se pega o indice de cada elemento do array, */

function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1,4,6,5))
console.log(soma("a","b","c"))