// uma coleção dinâmica de pares "chaves/valor"

// essa é uma coleção dinamica, então dá para colocar e trocar valores

const produto = new Object //this is a function constructor 
produto.nome = "cadeira"
produto["marca"] = "generica" //outra forma de estabelecer os atributos
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto["marca"]
console.log(produto)

//Um Objeto pode ter uma estrutura mais complexa:

const carro = {
    modelo: "A4",
    valor: 89000,
    
    proprietário: {
        nome: "raul",
        idade: 59,
        endereco: {
            Avenida: "Florentina Avidos",
            numero: 10
        }
    }, 
    condutores: [{
        nome: "junior",
        idade: 19
    }, {
        nome: "ana",
        idade: 30
    }],
    valorSeguro: () => {/*...*/}


}
carro.proprietário.endereco.numero = 1000  // tem como acessar os atributos pela notação "."
carro["proprietário"]["endereco"]["numero"] = 100 // tem como acessar pelos colchetes, mas é mt pior.

console.log(carro)

delete carro.condutores
delete carro.valorSeguro

console.log(carro.condutores) // nesse caso vai dar undefined pq carro existe, mas "condutores" n foi definido
//console.log(carro.condutores.length) // vai dar erro pq n tem como acessar nada em um atributo q n foi definido