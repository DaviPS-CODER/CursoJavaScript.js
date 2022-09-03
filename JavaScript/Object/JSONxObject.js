//JSON é um formato de arquivo muito fácil de ser lido, 
//e que é usado para a comunicação entre serviços de web services entre outros
//JSON é um formato de dados, funções n são geradas em JSON

//tudo o que for texto, tem que estar em "aspas duplas"
const pessoa = {
    n: 2,
    i: 12,
    soma() {return this.n + this.i}
}
console.log(pessoa.soma())


//passando um objeto para JSON
console.log(JSON.stringify(pessoa))

//passando um JSON para Objeto
console.log(JSON.parse('{"n":2,"i":12}')) // o único formato válido