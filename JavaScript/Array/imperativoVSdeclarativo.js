const alunos = [
    {nome: "davi", nota: 9},
    {nome: " ana", nota: 8}
]

//imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//declarativo
const getNota = aluno => aluno.nota
const soma = (total,atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)

// o nível de reuso no modo declarativo é muito maior.
// o imperativo foca na forma com que se vai resolver algo
// e o declarativo foca justamente na resulução da questão

//o imperativo tem foco nos detalhes, e o declarativo não tem essa necessidade

//