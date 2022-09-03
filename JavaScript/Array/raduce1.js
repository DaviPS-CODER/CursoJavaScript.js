//o reduce é basicamente um acumulador,que pode retornar um number, string, etc...
//ele pega o primeiro elemento "acumulador" e executa junto ao próximo elemento

const alunos =[
    {nome:"joão", nota: 8.0, bolsista: false},
    {nome: "maria",nota:7.8, bolsista:true},
    {nome:"pedro", nota:9.8,bolsista:false},
    {nome: "maria", nota: 8.7,bolsista: true}
]
                  
                //esse array "map"retorna as notas  
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual

}/*,10*/)  //teria como adicionar um valor inicial, mas tem q ser dps da callback