//Enquanto o "For in" opera em cima de indice, o "For of" opera em cima de valores

for(let letra of "coder"){
    console.log(letra)
}

const assuntosEcma = ["map","set","promises"]

for(let i in assuntosEcma){
    console.log(i)      //pelo formato do "in", vc percorre pelos indices, 
}                       // e retorna os valores dos índices

for(let assunto of assuntosEcma){
    console.log(assunto)       // pelo formato "for", vc percorre pelos valores,
}                              // e os valores são retornados

const assuntosMap = new Map([
    ["map",{abordado: true}],
    ["Set",{abordado: true}],
    ["promise",{abordado: true}]
])

for(let assunto of assuntosMap){
    console.log(assunto)           // retorna cada array
}

for(let chave of assuntosMap.keys()){
    console.log(chave)             // retorna as chaves de cada array
}

for( let valor of assuntosMap.values()){
    console.log(valor)             // retorna apenas os valores
}

for(let[ch,vl] of assuntosMap.entries()){
    console.log(ch,vl)              //retorna as entradas feitas
}



const s = new Set(["a","b","c"])
for(let letra of s){
    console.log(letra)
}