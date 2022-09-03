//Metódos do Arrays

const pilotos = [ "vettel","alonso","massa"]
pilotos.pop() // o último elemento será retirado

pilotos.push("Verstappen") // o elemento em questão será adicionado a última posição do  array

pilotos.shift() // ele remove o primeiro elemento

pilotos.unshift("Hamilton")  // adiciona o elemento a primeira posição

//Splice pode adicionar ou remover, 

//Adicionar
pilotos.splice(2,0,"bottas","massa")  //vai  adicionar antes do segundo elemento e n vai tirar ngm
console.log(pilotos)

//Remover
pilotos.splice(3,1) // massa irá sair

/*splice("vai começar a partir desse elemento", "quantidade de elementos a seguir q serão retirados", 
"elementos adicionados")*/


//vai gerar um novo array a partir do elemento selecionado
const algunsPilotos1 = pilotos.slice(2)

const algunsPilotos2 = pilotos.slice(1,4) //irá adicionar a partir do indice 1 até o 4 (tirando o 4)