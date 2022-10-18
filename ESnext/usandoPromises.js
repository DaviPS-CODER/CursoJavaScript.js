//Com promises....

const http = require('http') //um módulo do próprio node
const { reject } = require('lodash')

const getTurma = letra =>{
    const url =`http://files.cod3r.com.br/curso-js/turma${letra}.json`
 return new Promise((resolve,reject) => {
    http.get(url, res => {
        let resultado = ''
        
        res.on("data", dados => {          //pegando o que está no endereço e colocando numa string
            resultado += dados
        })
        
        res.on("end",() =>{
            try{
                resolve(JSON.parse(resultado))
            }  catch(e) {
                reject(e)
            }                                     //transformando a string em JSON
        })
    })
 })
}

//USANDO CALLBACKS
//Forma de obter todos os nomes da turma A
let nomes =[]
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(e => `A: ${e.nome}`))
    
    getTurma('B').then(alunos =>{
        nomes = nomes.concat(alunos.map(e => `B: ${e.nome}`))
        
    getTurma('C').then(alunos => {
        nomes = nomes.concat(alunos.map(e => `C: ${e.nome}`))
        
        })
    })
})

//USANDO PROMISES
Promise.all([getTurma("A"),getTurma("B"),getTurma("C")])  //irá aguardar todas serem concluidas para mostrar dps
    .then(turmas => [].concat(...turmas))                //pra colocar todos os alunos em um array
    .then( alunos => alunos.map((aluno) => aluno.nome))   
    .then(nomes => console.log(nomes))             
    .catch(e => console.log(e.message))                 //é sempre importante fazer o tratamento do erro