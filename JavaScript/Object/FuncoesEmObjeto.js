const pessoa = {
    nome: "davi",
    idade: 12,
    peso:20
}

console.log(Object.keys(pessoa)) // pega o nome das "chaves" (nomes) das propriedads e  devolve num array
//[ 'nome', 'idade', 'peso' ]

console.log(Object.values(pessoa))// pega os valores q estão nas propriedades e devolve num array
//[ 'davi', 12, 20 ]

console.log(Object.entries(pessoa)) // devolve um array, com sub-arrays com as chaves e valores.
//[ [ 'nome', 'davi' ], [ 'idade', 12 ], [ 'peso', 20 ] ]

//Desestruturação de Array:
Object.entries(pessoa).forEach(e => { //essa função percorre os elementos do array
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave,valor]) => { //tem como usar dessa forma tbm.
    console.log(`${chave}: ${valor}`)
})

//segue abaixo uma forma de criar uma propriedade 
// e já setar algumas características específicas que vc queira
Object.defineProperty(pessoa, "dataNascimento",{  
    enumerable: true,   //pode ser listada quando for chamado o objeto
    writable: false,  // não pode ser alterada
    value: "01/01/2019"
})
pessoa.dataNascimento = "01/01/2018"
console.log(pessoa.dataNascimento)

//Object.assign (ECMA 2015)
const dest = {a: 1}
const o1 = {b: 2}
const obj = Object.assign(dest,o1,/*...*/)  // vai passar todos os atributos do "o1" em diante, dentro de "dest".
//cuidado pq se o nome do atributo for o mesmo, pode ser so
console.log(obj)

Object.freeze(obj) // vai congelar todos os atributos.