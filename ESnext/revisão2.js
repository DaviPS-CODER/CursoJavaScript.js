//Arrow function

//quando não um corpo de função, o "return" é implícito
const soma = (a,b) => a+b
console.log(soma(1,2))

/*as arrows são naturalmente anônimas, 
vc só as chama pelo noma da variável em que foi inserida*/

//Arrow Function (this):
//o this dentro de uma arrow sempre aponta para "exports".
const lexico1 = () => console.log(this === exports)

const lexico2 = lexico1.bind({}) 
// não adianta tentar mudar usando o "bind", pois sempre vai apontar para o exports


//parametro default
//uma forma de setar o valor de uma variável desde o início
function log(texto = "node"){
    console.log(texto)
}
log()
log("sou mais forte")//mas tem como vc substituir o valor "padrão"


//operador rest
//basicamente reune em uma array uma série de parâmetros
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return console.log(total)
}

total(2,2,2,2,2)