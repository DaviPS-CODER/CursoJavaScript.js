
//todos os objetos criados a partir de uma mesma função construtora,
//apontam para o mesmo protótipo.
function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)

//Quando se cria um Objeto a partir de uma função construtora,
//o objeto aponta para a "função.prototype"

console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = "anonimo" 
//o prototipo da função tbm pode receber atributos
// QUALQUER OBJETO CRIADO A PARTIR DO "MeuObject" vai carregar em si "nome: "anonimo" "

MeuObjeto.prototype.falar = function(){
    console.log(`bom dia, meu nome é: ${this.nome}`)
}
console.log(MeuObjeto.prototype)
obj1.falar()

obj2.nome = "rafa"
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype  
// estou mudando a referencia do protótipo "Object.prototype" para MeuObjeto.prototype.

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)  //da mesma forma que os objetos tem, as funções também tem um protótipo "master".
console.log( Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) //esse é o último na cadeia