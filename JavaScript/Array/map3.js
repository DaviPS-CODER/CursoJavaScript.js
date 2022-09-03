Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0; i < this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}',
]
//retornar apenas os preços

const transforJSON = e => JSON.parse(e)
const apenasPreco = e => e.preco

const Preco = carrinho.map2(transforJSON).map2(apenasPreco)


console.log(Preco)