//usando o require

//cada "../" significa que estou saindo saindo da pasta e indo para a que está "acima".
//essa forma é conhecida como "caminhos relativos"
const ModuloA = require ('../../moduloA')

//tem como usar o "caminho absoluto" direto da pasta também
const ModuloA = require ('C:\Users\Davi\Documents\cursoJS\Node.js\ModuloA.js')

console.log(ModuloA.ola)

