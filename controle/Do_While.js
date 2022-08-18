function NumberAleato(min, max){
    const valor = Math.random() * (min, max) + min
    return Math.floor(valor)
}

var opção = -1              /*nesse caso dá para colocar o valor que seria false, 
                            porque a primeira sentença será executada e dps que irá para a condição while*/
do {
    opção = NumberAleato(-1,20)
    console.log(`seu número é: ${opção}!`)
} while (opção != -1)

NumberAleato(7,4)