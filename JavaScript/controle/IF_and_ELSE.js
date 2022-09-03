//Exemplo de condicional com notas
function SoBoaNoticia(nota){
    if(nota >= 7){
        console.log("Voce passou com a nota " + nota)
    } else { 
        console.log("infelizmente vc n passo pq n alcançou a nota 7")
    }
}

SoBoaNoticia(6.9)

//Exemplo de condicional com valores que a linguegem entende por true or false
function SeForTrue(valor){
    if(valor){
        console.log("é verdade que... " + valor)
    } else {
        console.log(valor + " não é verdade!")
    }
}
SeForTrue(false)