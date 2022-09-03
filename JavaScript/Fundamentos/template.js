const name = "rebeca"

const conca = "ola " + name + " !"
const template = `olá ${name} ! ` //forma mais eficiente de fazer strings

console.log(template)
console.log(` se voce tem mais de ${15+1} anos, voce ainda não pode ir para o exercito,
porque vc precisa de ${6+12} anos para ir`)

const up = texto => texto.toUpperCase() // uma func arrow que coloca em maiusculo

console.log(`EEEI ${up("cuidado")} ! `) //usando a func dentro do template