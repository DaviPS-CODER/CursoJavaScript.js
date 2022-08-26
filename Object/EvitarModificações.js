//Object.preventExtensions
// esse funcionalidade impede que eu adicione novos atributos, mas pode excluir
//e também alterar os dados dos atributos.

const produto = Object.preventExtensions({
    nome: "qualqer",preco:12,tag:"promoção"
})

produto.nome = "borracha"
delete produto.tag
produto.valor = 120 //não vai ser adicionado

console.log(produto)


//Object.seal
//com esse método eu n posso adicionar nem excluir os atributos,
//apenas mexer nos valores dos atributos
const pessoa = {nome: "bia", idade: 22}
Object.seal(pessoa)

pessoa.sobrenome = "silva" //n será adicionado
delete pessoa.nome // n será excluido

//Object.freeze: não vai deixar vc mexer em nadaaaa