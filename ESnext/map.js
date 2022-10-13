
const tecnologias = new Map()
tecnologias.set('react',{framework:false})
tecnologias.set('angular',{framework:true})

console.log(tecnologias.get("react").framework)  //a forma certa de acessar os valores
console.log(tecnologias)

const chavesVariadas= new Map([
    [function (){ }, "função"], //nesses casos vc usa como chave, elementos diferentes
    [{},"objeto"],
    [123,"número"],

])

chavesVariadas.forEach((vl,ch) => {
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123) //vai excluir
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)