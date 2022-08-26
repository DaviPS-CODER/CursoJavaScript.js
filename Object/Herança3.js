//Usando o "Object.create", vc já estabelece essa relação de prototipo

const pai = {
    nome: "pedro",
    corCabelo: "preto"

}

// ele está criando um objeto tendo como prototipo o objeto "Pai".
const filha1 = Object.create(pai) 
filha1.nome = "Ana"
console.log(filha1.corCabelo)


const filha2 = Object.create(pai,{
    nome: {value: "bia", writable: false, enumerable:true}  //definindo as características do atributo.
})

console.log(filha2.nome)
filha2.nome = "carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


//forma para se descobrir se um atributo é nativa daquele objeto, ou herança
for(let key in filha2){
    filha2.hasOwnProperty(key)?     //ultilizando um operador ternário
    console.log(key): console.log(`por herança: ${key}`)
}






