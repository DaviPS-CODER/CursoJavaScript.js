//tagged templates - processa uma tamplate dentro de uma função

function tag(partes,...valores){
    console.log(partes)
    console.log(valores)
    return "outra strigs"
}

const aluno = "Gui"
const situacao = "aprovado"
console.log(tag`${aluno} está ${situacao}.`)