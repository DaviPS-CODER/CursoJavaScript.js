//Um Objeto em JS ele tem uma referencia ao seu protótipo (pai),
//em que ele pode acessar seus atributos. 
//O "filho" pode receber um atributo do pai através do uso do prototype

//É Dessa forma que JS define herança.

const ferrari = {
    modelo: "f40",
    val: 324
}

const volvo = {
    modelo: "v40",
    vel: 200
}

console.log(ferrari.__proto__) // busca  a propriedade nos protótipos acima de "ferrari"
console.log(ferrari.__proto__  === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)  //o prototype gerado no objeto vai apontar para o Object.prototype

function MeuObject(){}
console.log( typeof Object, typeof MeuObject)
//Toda função tem prototype
//mas no caso dos objetos, é necessário usar "__proto__"