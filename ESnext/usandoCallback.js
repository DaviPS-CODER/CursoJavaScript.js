//Sem promises....

const http = require('http') //um módulo do próprio node

const getTurma = (letra,callback) =>{
    const url =`http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on("data", dados => {          //pegando o que está no endereço e colocando numa string
            resultado += dados
        })
        res.on("end",() =>{
            callback(JSON.parse(resultado))     //transformando a string em JSON
        })
    })
}

//Forma de obter todos os nomes da turma A
let nomes =[]
getTurma('A',alunos => {
    nomes = nomes.concat(alunos.map(e => `A: ${e.nome}`))
    

    getTurma('B',alunos =>{
        nomes = nomes.concat(alunos.map(e => `B: ${e.nome}`))
        
    })

    getTurma('C',alunos => {
        nomes = nomes.concat(alunos.map(e => `C: ${e.nome}`))
        console.log(nomes)
    })
})
