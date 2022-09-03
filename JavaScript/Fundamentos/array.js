const valores = [7.7,8.9,6.3]
console.log (valores[0], valores[3]) //vai acessar oq está em cada espaço do array
console.log(valores[4]) //se n tem o elemento na posição indicada, ele da undefined

valores[4] = 10 //tem como acrescentar um elemento a posição do array por fora.

console.log(valores.length)// diz quantos elementos tem

valores.push({id:3} , false , null) /*a identação push adiciona valores no array
 tem como colocar até a mãe no array*/
 