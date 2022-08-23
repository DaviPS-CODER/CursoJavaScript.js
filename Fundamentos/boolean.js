let isAtivo = false

isAtivo = true // vai substituir por ser let
console.log(isAtivo)
isAtivo = 1
console.log(!!isAtivo) //negação reversa, volta a ser oq era

console.log(" casos true ")
console.log(!!3)
console.log(!!-1)
console.log(!!" ") // string n ta vazia
console.log(!!{})
console.log(!![])
console.log(!!"text")
console.log(!!Infinity)
console.log(isAtivo = true)

console.log(" casos que dão false")
console.log(!!0)
console.log(!!"") //agr ta vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("caso de estrutura cond...")
console.log(!!("" || null || 0 || " ")) //se um for true, o resultado é true

let idade ="19"
console.log(idade || "não foi informada a idade") //se tiver a idade imprime a idade, se n imprime a string


