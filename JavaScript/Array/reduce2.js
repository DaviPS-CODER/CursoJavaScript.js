const alunos =[
    {nome:"joão", nota: 8.0, bolsista: false},
    {nome: "maria",nota:7.8, bolsista:true},
    {nome:"pedro", nota:9.8,bolsista:false},
    {nome: "maria", nota: 8.7,bolsista: true}
]
                  
 
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
}) 

//desafio: todos os alunos são bolsistas?
// desafio: algum aluno é bolsista?

//minha solução:
const Todosbolsistas = alunos.forEach(function(a){
    if(a.bolsista == true){
        console.log(`${a.nome} é bolsista`)
    } else{
         console.log(`${a.nome} não é bolsista`)
    }
})

//solução do vídeo:
//1
const todos = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todos))
//2
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))