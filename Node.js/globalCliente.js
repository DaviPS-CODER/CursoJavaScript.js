
//apenas "carregando" o que está no "global",
// o objeto que eu criei já estará disponível em tudo
//ai é só fazer isso em cada módulo, para acessar oq está no global
require('./global')

console.log(myApp.saudacao())

//esse objeto global pode ser mudado também.
//a não ser que vc use o frezze.
myApp.nome = "davi"
console.log(myApp.nome)