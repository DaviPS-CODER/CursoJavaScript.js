const fs =require ('fs')

//ai no caso nós queremos "persistir" esse dado no disco
// e para isso precisamos transformar em JSON
const produto = {
    nome: "celular",
    preco: 2499.90,
    desconto: 0.15
}

//nesse momento eu estou criando esse novo arquivo a partir de "produto"
//o JSON.stringfy que indica qual o conteudo que eu quero persistir no arquivo
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'arquivo salvo')
})

