//o filter ele básicamente filtra o array, e retendo apenas os elementos que se encaixam noq foi passado
//normalmente ele retorna um array com um tamanho diferente.


produtos = [
     {nome:"notebook", preco:2499, fragil:true},
    {nome: "ipad pro", preco: 4199,fragil:true},
    {nome: "copo de plástico", preco: 18.99,fragil: false}
]
console.log(produtos.filter(function(p){
//aqui dentro vc estabelece o critério, que os elementos deverão cumprir
    return p.preco > 500 && p.fragil

}))