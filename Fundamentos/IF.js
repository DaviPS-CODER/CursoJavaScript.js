function soBoaNoticia(nota){
    if(nota >= 7){
        console.log(`parabens ${nota}`)
    }
}
soBoaNoticia(8.0)

function seForVerdade(valor){
    if(valor){
        console.log(`e verdade que ${valor}`)
    }
}
seForVerdade(5)
//=============================================================
//parte 2
function test(n){
    if(n > 7)
        console.log(n)  //somente essa primeira linha terá relação com o if
    
    console.log("final")
}
test(6)