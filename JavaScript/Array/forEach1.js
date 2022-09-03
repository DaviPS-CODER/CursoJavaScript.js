const aprovados = ["agata","aldo","davi"]

//ForEach: percorre um array acionando um callback (passando o elemento e indice como parametro)
// só podem ser apenas passados 3 parametros, nome e indice e o array (mas n é mt usado o array)
aprovados.forEach(function(nome,indice,array){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => {
    console.log(nome)
})


//posso criar uma função e passar ela para o forEach:
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)