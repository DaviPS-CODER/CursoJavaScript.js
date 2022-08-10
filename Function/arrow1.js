//ARROW SEMPRE É ANONIMO!
//SE QUISER  CHAMAR DPS, VAI TER QUE ARMAZENAR.

let dobro = function(a){
    return a * 2 
}
dobro = (a) =>{return a*2} //usando arrow
dobro = (a) => 2*a          //tem como usar apenas com uma única linha

console.log(dobro(12))

parabens = (pessoa) => console.log(pessoa + " parabens!")
parabens("Davi")

delta = (a,b,c) => console.log("o valor  de delta é: " + ((b*b) - (4*a*c)))
delta(4,2,-6)

