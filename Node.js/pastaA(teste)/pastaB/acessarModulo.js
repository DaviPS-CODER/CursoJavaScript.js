//usando o require

//cada "../" significa que estou saindo saindo da pasta e indo para a que está "acima".
//essa forma é conhecida como "caminhos relativos"
const ModuloA = require ('../../moduloA')

//tem como usar o "caminho absoluto" direto da pasta também
//const moduloa = require ('C:\Users\Davi\Documents\cursoJS\Node.js\moduloA.js')

console.log(ModuloA.ola)

//usando o require eu consigo importar os módulos do "node_modules"
// e também os módulos que vem no próprio node

//pegando um módulo interno do node:
//não precisa informar o caminho relativo
const http = require('http')
http.createServer((req,res) =>{
    res.write("bom dia")
    res.end()
}).listen(8080)

// para fazer o import, será necessário o "index.js" dentro da pasta