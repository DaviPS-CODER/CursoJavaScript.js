//"SET" É UMA ESTRUTURA DE CONJUNTO, NÃO INDEXADA E NÃO ACEITA REPETIÇÃO

const times = new Set()
times.add("vasco")
times.add("Framengo").add("palmeiras")
times.add("vasco") // esse elemento n será aceito pois é repetição

console.log(times)
console.log(times.size)
console.log(times.has("vasco"))  //verifica se está dentro
//times.delete("Framengo") -  tem como deletar também

const nomes = ["davi","bia","bruna"]
const nomesSet = new Set(nomes)  //tem como criar um set com os elementos de outro array
console.log(nomesSet)