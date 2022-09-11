// o this não aponta para global na parte externa de um modulo, 
//e sim para module.exports
console.log( this === global)
console.log( this === module)

console.log( this === module.exports)
console.log(this === exports)
//vai dar verdadeiro pois o this aponta para o exports,
//que por sua vez aponta para module.exports

function logThis(){
    console.log("dentro da funcao")
    //o this dentro de uma funcao se refere apenas ao contexto daquela função
    console.log(this === exports)
    //mas o this também aponta para global, apenas dentro de uma função
    console.log( this === global)

    this.perigo = "qqr coisa" //cuidado pois nesse caso, aponta para o global

}
logThis()



//AVISO: Dentro das arrow functions não é possível ter acesso ao “this convencional”,
//em arrow functions elas vão apontar para o objeto global