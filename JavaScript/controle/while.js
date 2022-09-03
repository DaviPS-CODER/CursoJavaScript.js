/*while é uma estrutura de repetição, de uma quantidade indeterminada de vezes, que a expressão inicia, é true/false.
enquanto for true ele executa, quando for false, sai do laço*/

function GetInteiroRamdon(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
while (opcao != -1){
    opcao = GetInteiroRamdon(-1,10)
    console.log(`Opção escolhida é ${opcao}.`)
}