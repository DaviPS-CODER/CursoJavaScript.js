//Revisão dia 24/08/22

const pessoa = {
    nome: "siclano",
    idade: 10
}
//quando eu passo um objeto como prototipo para outro, os atributos ficam escondidos, porém eles existem:
const pessoa1 = {__proto__: pessoa,documento: 2123}
console.log(pessoa1)

const pessoa2 = {}
// uma forma de estabelecer a relação de herança entre 2 objetos, ou mais...
Object.setPrototypeOf(pessoa2,pessoa/*...*/)

//outra forma de estabelecer a relação de herança, mas na criação do Objeto
const pessoa3 = Object.create(pessoa) 

const pessoa4 = Object.create(pessoa,{   //além disso tem como estabelecer algumas propriedades para os atributos
    nome:{
        valeu: "outra pessoa",
        Writable: false,
        enumerable: true
    }    
    
})

function CriarObjeto(){}

//o __proto__ de um objeto criado a partir de uma função construtora, é o CriarObjeto.prototype
const obj1 = new CriarObjeto

CriarObjeto.prototype.nome = "colher"
CriarObjeto.prototype.valor = 10

console.log(obj1)

