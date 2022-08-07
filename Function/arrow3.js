let comparacomThis = function(param){
    console.log( this === param)
}
comparacomThis(global)

const obj = {} 
comparacomThis = comparacomThis.bind(obj)
comparacomThis(global)
comparacomThis(obj)

let comparaComThisArrow = param => console.log(this === param) //this declarado dentro de um arrow aponta para o module.exports
comparaComThisArrow(global)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)                    //mesmo usando Bind, n vai mudar