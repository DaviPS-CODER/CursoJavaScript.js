//Agora eu irei receber aqui que eu estou exportando dos outros módulos
//esses dados exportados chegam aqui em forma de objeto
const moduloA = require('./ModuloA')
const moduloB = require('./ModuloB')

console.log(moduloA)
console.log(moduloB)

//OBS:tudo o que foi feito dentro dos outros módulos, se não for exportado,
//não será visível em outros módulos.


//NPM nada mais é do que o gerenciador de pacotes do NODE.
//quando vc quer importar uma biblioteca ou algo do tipo, vc instala pelo node