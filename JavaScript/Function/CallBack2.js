const notas = [9,9,4,2,5,6,7,3]

// sem callback
let notasBaixas =[]
for(let  i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter(function(nota) 
{return nota < 7 })                                  //essa função será chamada para cada elemento

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota <7)
console.log(notasBaixas3)

//callback é basicamente uma função que vai sendo passada para cada elemento, como um pente fino
//se for positivo, executa, se não, segue para o próximo

const notasAltas = notas.filter(function(notas)  {return notas > 7})
console.log(notasAltas)