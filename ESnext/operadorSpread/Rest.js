//operador "..." rest (juntar)/spread(espalhar)
//usar rest com parâmetros de função

//usar spread com objeto
const funcionario = {nome:"maria", salario: 2000}

//aqui eu estou pegando os atributos de "funcionario" e espalhando em "clone"
const clone = {ativo: true,...funcionario}

console.log(clone)


//usando spread com array
const grupoA = ["joão","maria","gloria"]
const grupoFinal = ["maria",...grupoA,"rafael"]
console.log(grupoFinal)