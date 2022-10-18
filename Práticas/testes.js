/*const http = require('http')
const { reject } = require('lodash')
const { resolve } = require('path')

const getTurma = letra => {
    let url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject) => {
        http.get(url, res =>{
            let resultado = ''

            res.on("data", data =>{
                resultado += data
            })

            res.on("end",() =>{
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })

        })
    })

}

Promise.all([getTurma("A"),getTurma("B"),getTurma("C")])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nome => console.log(nome))*/
