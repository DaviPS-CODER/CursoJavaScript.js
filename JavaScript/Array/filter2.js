Array.prototype.filter2 = function(callback){
    const array = []
    for( let i=0; i < this.length; i++){
       if(callback(this[i],i,this)){
         array.push(this[i])
       }
    }
    return array
}

produtos = [
    {nome:"notebook", preco:2499, fragil:true},
   {nome: "ipad pro", preco: 4199,fragil:true},
   {nome: "copo de plástico", preco: 18.99,fragil: false}
]
console.log(produtos.filter2(function(p){
//aqui dentro vc estabelece o critério, que os elementos deverão cumprir
   return p.preco > 500 && p.fragil

}))