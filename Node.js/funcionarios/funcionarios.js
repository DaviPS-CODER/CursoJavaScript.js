//url de onde o arquivo será "puxado"
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

//o axios ele é um "client http". Ele faz requisições pra obter dados de algo remoto
const axios = require('axios')


//por baixo está rolando o que é chamado de "promises"
// basicamente estou fazendo uma requisição dessa url, e terei o conteúdo do arquivo
axios.get(url).then(Response => {
    const funcionarios = Response.data
    
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSal)
    console.log(func)

    const dez = funcionarios.filter(os10primeiros)
    console.log(dez)
})

const chineses = f => f.pais == "China"
const mulheres = f => f.genero == "F"
const menorSal = (func,funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}


const os10primeiros = f => f.id <= 10;