// A função concat simplesmente agrupa os elementos,mas não os altera.

const filhas = ["waleska", "cidalena"]
const filhos = [ "davi", "joao"]

const todos = filhas.concat(filhos, "fulano") //além de concatenar os arrays, tem como colocar outro elemento

console.log([].concat([1,2],[123,54],54,[[23,65]]))