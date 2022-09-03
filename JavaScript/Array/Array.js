//O array na verdade é um objeto, mas que tem suas características próprias.
// Ele organiza sua estrutura através de indices.


let aprovados = new Array("bia", "carlos", "davi") //uma forma de se criar arrays
console.log(aprovados)

//prova de que é uma ferramenta indexida
aprovados = ["Bia", "carlos", "ana"]
console.log(aprovados[0])
console.log(aprovados[1])

aprovados[3] = "paula"  //forma válida de adicionar novos elementos
aprovados.push("abia")
console.log(aprovados.length)

//tem como adicionar um valor a um indice em específico, pulando os outros.
//mas os outros ficarão "undefined"
aprovados[9] = "rafael"
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort() //altera a ordem dos elementos
console.log(aprovados)

delete aprovados[1] // delete vai excluir o elemento, mas n vai alterar a  ordem

aprovados = ["bia","carlos","ana"]
aprovados.splice(1,2) 
//o primeiro número é o indice em que começa a alteração, 
//e o segundo são quantos ele vai excluir.

aprovados.splice(1,2, "elemento1", "elemento2")  
//vai  fazer a mesma coisa  que o de cima, mas agora irá adicionar elemento1 e 2