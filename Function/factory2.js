//tem como retornar funções dentro do objeto

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }

}
console.log(criarProduto("notebook", 1233))
////////////////////////////////////////////////////////////////////////////////////////
//class VS Facotry
class pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}
const p1 = new pessoa("pessoa")
p1.falar()