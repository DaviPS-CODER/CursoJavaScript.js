const http = require('http') 

//Essa é uma função assíncrona que retorna uma promise
const getTurma = letra =>{
    const url =`http://files.cod3r.com.br/curso-js/turma${letra}.json`
 return new Promise((resolve,reject) => {
    http.get(url, res => {
        let resultado = ''
        
        res.on("data", dados => {          
            resultado += dados
        })
        
        res.on("end",() =>{
            try{
                resolve(JSON.parse(resultado))
            }  catch(e) {
                reject(e)
            }                                     
        })
    })
 })
}

//Deixando o código mais semelhante à algo síncrono (recurso do ES8)

//precisa marcar a função com a palavra "async" para conseguir usar o "await"
let obterAlunos = async () => {
    const tA = await getTurma("A")
    const tB = await getTurma("B")
    const tC = await getTurma("C")
    return [].concat(tA,tB,tC)      //o retorno gerado é um objeto AsyncFunction
}
obterAlunos()
    .then(alunos => alunos.map(a => a.nome) )
    .then(nomes => console.log(nomes))