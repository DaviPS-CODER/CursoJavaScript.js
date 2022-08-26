//usando notação literal

const obj = {

}
console.log(obj)

//Object em JS
console.log(typeof Object, typeof new Object())
const obj1 = new Object
console.log(obj1)

//Funções contrutoras 
function produto(nome, preco, desc){  //nesse caso "nome" vai ficar visível, porém "preco" e "desc" vão ficar encapsulados
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)    
    }
}

const p1 = new produto("caneta",7.99,0.14)  //se eu quiser acessar "p1.nome" eu consigo, pq "nome" ta visivel, mas n consigo acessar "p1.preco" nem "p1.desc"
const p2 = new produto("note",1000,0.1)

console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome,salario,faltas){
    return{                                         //A função factory ela apenas retorna um objeto
        nome,                           
        salario,
        faltas,
        getSalario(){
            return ((salario /30) * (30 - faltas)).toFixed(2)
        }
    }
}

const f1 = criarFuncionario("davi",1500,3)
const f2 = criarFuncionario("joao",2000,5)

console.log(f1.getSalario())
console.log(f2.getSalario())


// um simples teste:

/*function criarPedidos(cliente,recheio,quant){
    this.cliente = cliente
    this.valor = ()=> {
        switch(recheio){
           case "chocolate": recheio = 10
           break
            case "ninho": recheio = 20
            break
            case "ninho com chocolate": recheio = 30
            break
            default: console.log("digite uma das opções! ")
        }
        return (quant * recheio)
    }
}

const pedido1 = new criarPedidos("davi","ninho com chocolate",20)
console.log(pedido1.cliente,pedido1.valor())*/


const filha = Object.create(null)
filha.nome = "ana"
console.log(filha)

// Uma função famosa que retorna um objeto?
const fromJson = JSON.parse('{"info":"sou um JSON"}')
console.log(fromJson.info)