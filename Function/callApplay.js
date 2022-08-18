//FORMA "PADRÃO"
function getPreco(imposto = 0,moeda = "R$"){
    
    return `${moeda} ${this.preco * (1 - this.desc) * (1+ imposto)}`
}
const produto = {
    nome: "notabook",
    preco: 1500,
    desc:0.15,
    getPreco
}

//chamando a função diretamente:
console.log(getPreco()) // vai dar NaN pq preco e desc n estão no global

//chamando a partir de um objeto:
console.log(produto.getPreco())

//CHAMANDO USANDO CALL....
const carro = {
    preco:50000, desc: 0.10
}
console.log(getPreco.call(carro))

//E CHAMANDO COM APPLY
console.log(getPreco.apply(carro))

//A diferença entre call e apply são a passagem dos parametros, em apply, serão passados como array


//CALL:
console.log(getPreco.call(carro, 0.17, "$"))
//Em call eu consigo repassar os parametros que serão usados pela function getPreco
// o primeiro é o  contexto, e os outros são os parametros que foram setados

//Apply:
console.log(getPreco.apply(carro,[0.10,"$"]))
//os parametros serão passados em um array