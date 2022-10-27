const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname,'dados.txt')

function ler(caminho){
    return new Promise(resolve => {
    fs.readFile(caminho, function(_,conteudo){
        resolve(conteudo.toString())
    })
    })
}

ler(caminho)
    .then(conteudo => conteudo.split(''))
    .then(linha => console.log(linha[1]))
