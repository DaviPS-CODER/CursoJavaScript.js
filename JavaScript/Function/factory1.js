// factory é uma função que retorna um objeto
// usa uma factory pra n ficar criando um monte de objetos separados
const prod1 = {
    nome: "asd",
    preço: 43
}

// factory simples
function CriarPessoa(){
    return {
        nome: "davi",
        idade:20
    }
}
console.log((CriarPessoa()))


function criarProduto(nome,valor){
   
    return {
       nome: nome,
        preço: valor
    }
}
console.log(criarProduto("bala",20))