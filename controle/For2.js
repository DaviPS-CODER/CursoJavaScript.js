const notas = [6.7, 7.4, 5, 7.9, 7, 5.4]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: "ana",
    peso: 64,
    idade: 28
}
for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}