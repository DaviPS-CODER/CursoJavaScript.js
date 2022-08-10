//se eu fizer uma func normal, o this aponta para o global
//se eu fizer um arrow, o this vai ser referir à aquele contexto

let comparacomThis = function(param){
    console.log( this === param)
}
comparacomThis(global)

const obj = {} 
comparacomThis = comparacomThis.bind(obj)
comparacomThis(global)
comparacomThis(obj)

let comparaComThisArrow = param => console.log(this === param) 
comparaComThisArrow(global)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)                    //mesmo usando Bind, n vai mudar

//o this de uma arrow vai  estar relacionado apenas ao contexto da arrow