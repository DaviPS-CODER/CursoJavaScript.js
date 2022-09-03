// a ideia do flat map é colocar os elementos em um só array
//ao invés de ter um "array de array"


const escola = [{
    nome:"turma1",
    alunos: [{
        nome: "gustavo",
        nota: 8.1
    },{
        nome:"ana",
        nota: 9.3
    }]
},{
    nome: "turma2",
    alunos:[{
        nome:"rebeca",
        nota: 8.9
    },{
        nome:"roberto",
        nota: 7.3
    }]
}]

const getNota = a => a.nota
const getNotasTurma = escola => escola.alunos.map(getNota)

const notas1 = escola.map(getNotasTurma)
console.log(notas1)



console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}