//Tem como criar funções e colocar dentro dos protótipos dos elementos reservados de JS

console.log(typeof String)
console.log(typeof Function)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log("escola codre".reverse())

Array.prototype.first = function(){     //um simples método para retornar o primeiro elemento
    return this[0]
}

//obs: vc acessa os elementos do array, string... através do "this"