
/*function despesas(itens) {
    var total = 0
    for (let item of itens) {
        total += item.preco
    }

    return console.log(total)
}

despesas([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
])
////////////////////////////////////////////////////////////////////////////////

function triangulo(base, altura) {
    let calc = (base * altura) / 2
    return console.log(calc.toFixed(2))

}
triangulo(2.50, 4.34)
/////////////////////////////////////////////////////////////////////////////

function menor(array) {
    var menor_num = 0
    for (let i of array) {
        let num = i
        if (i <= num) {
            menor_num = i
        }
        return console.log(menor_num)
    }
}
menor([2, 65, 7, 2, 7, 3])
//////////////////////////////////////////////////////////////////////////

function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []
    for (let palavra of palavras)
        if (palavra.includes(inicio))
            resultado.push(palavra)
    return resultado
}

var numeroAle = function (x, min, max) {
    min = 0
    max = 10
    num = Math.random() * ((max - min + 1) + min)
    numEscolhido = num.toFixed()

    var msg = ""
    if (x == numEscolhido) {
        msg = "parabens, o numero escolhido foi: " + numEscolhido
    } else {
        msg = "que pena, o numero escolhido foi: " + numEscolhido
    }

    return console.log(msg)
}
numeroAle(5)

////////////////////////////////////////////////////////////////////////////

const segundoMaior = function (array) {
    let firstNum = 0
    let maiorNum = 0
    let segundNum = 0
    for (let i = 0; i < array.length; i++) {
        firstNum = array[i]
        if (maiorNum < firstNum) {
            maiorNum = firstNum
        }
    }
    array.pop(maiorNum)

    for (let i = 0; i < array.length; i++) {
        firstNum1 = array[i]
        if (segundNum < firstNum1) {
            segundNum = firstNum1
        }
    }

    return console.log("O SEGUNDO MAIOR NUMERO É: " + segundNum)
}

segundoMaior([1, 5, 71, 66, 1425])
/////////////////////////////////////////////////////////////////////
const contarPalavras = function (palavras) {
    let conjunto = palavras.split(" ")
    let contador = 0
    for (let i = 0; i < conjunto.length; i++) {
        contador++
    }
    return console.log(contador)
}
contarPalavras("oi alessandro tudo bem com voce?")


const simboloMais = function (numero) {
    let contador = 0
    let simbolo = ""
    while (contador < numero) {
        contador++
        simbolo += "+"
    }
    return console.log(simbolo)
}
simboloMais(5)

const receberPares = function (array) {
    let pares = []
    let Num = 0
    for (let i = 0; i < array.length; i++) {
        Num = array[i]
        if (Num % 2 == 0 && i % 2 == 0) {
            pares.push(Num)
        }
    }
    return console.log(pares)
}
receberPares([4, 6, 8, 3, 3, 7, 2])

const onlyNumber = function (array) {
    let numbers = []

    for (let i = 0; i < array.length; i++) {
        let tipo = typeof array[i]
        if (tipo == "number") {
            numbers.push(array[i])
        }
    }
    return console.log(numbers)
}
onlyNumber(["davi", 8, "oi", 10, () => { 8 + 9 }, {}, 798, " "])

const objtParaArray = function (objeto) {
    const elementos = []

    for (let chaves in objeto) {
        elementos.push([chaves, objeto[chaves]])
    }
    return console.log(elementos)

}
objtParaArray({
    nome: "davi",
    idade: 19
})

const menorNumero = function (array) {
    let firstNum = 0
    let menortNum = 1
    for (let i in array) {
        firstNum = array[i]
        if (menortNum > firstNum) {
            menortNum = firstNum
        }

    }
    return console.log(menortNum)

}
menorNumero([2, 3, 0, 43, 5, 85, 4, 2])

const filtroQuant = function (array, casas) {
    let numbers = []
    for (i of array) {
        const quantNumero = String(i).length
        if (quantNumero === casas)
            numbers.push(i)
    }
    return console.log(numbers)
}
filtroQuant([2, 3, 32, 5, 55, 66, 522, 666], 2)


const repetir = function (elemento, quant) {
    let contador = 0
    while (contador < quant) {
        console.log(elemento)
    }
}
repetir("ola", 8)

const tirarVogais = function (palavra) {

    let consoantes = " ";

    for (i of palavra) {
        if (i != "a" ^ i != "e" ^ i != "i" ^ i != "o" ^ i != "u") {
            consoantes += i
        };

    };
    return console.log(consoantes)
};
tirarVogais("davi")

function inverter(objeto) {
    const objetoInvertido = {}

    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0,
            valor = 1
        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })
    return objetoInvertido
}

var limite = 1000
const compra = function (valorVenda) {
    let result = Boolean
    if (valorVenda <= limite) {
        result = true
    } else {
        result = false
    }
    return console.log(result)
}

compra(2000)

const inverso = function (dado) {
    let num = Number.typeof
    let resultado = 0

    if (dado == true) {
        resultado = false
    } else if (dado == false) {
        resultado = true
    } else if (dado.typeof === num) {
        resultado = dado * -1
    } else {
        resultado = `esperava booleano ou number, mas o tipo do dado é: ${resultado.typeof()}`
    }
    return console.log(resultado)
}

inverso(8)

////////////////////////////////////////////////*/
/*const pessoa = {
    nome: "adsda",
    idade:10,
    numero: 992213931
}

const removerPropriedade = function(obj,param){
    const copia = Object.assign({},obj)
    delete copia[param]
    return console.log(copia)
    
}

removerPropriedade(pessoa,"idade")*/


/*var arrayProdutos = [{nome: "jornal",categoria: "info",preco:2},
{nome: "celular",categoria:"cotidiano",preco:1500}]

const despesasTotais = function(array){
    let precoTotal = 0

    for(i in array){
        Object.entries(array[i]).forEach(e =>{
            if(e[0] =="preco"){
                precoTotal += e[1]
            }
         })
    }
    return console.log(`o preço total é: ${precoTotal}`)
}
despesasTotais([{nome: "jornal",categoria: "info",preco:2},
{nome: "celular",categoria:"cotidiano",preco:1500}])*/

/*const pessoa = {
    nome: "davi",
    idade: 12,
    peso:20
}

function desfazeratributos(obj){
    let arrayObj = Object.values(pessoa)
    let palavraEmbara = []
    
    for(i in arrayObj){
        palavraEmbara += arrayObj[i].reverse().join('')
    }
    return console.log(palavraEmbara)
}

desfazeratributos(pessoa)*/

/*const menorNum = function (array){
    let menorNum = array[0]
    
    for(i in array){
    if(array[i] < menorNum){
        menorNum = array[i]
    }   
}
return console.log(menorNum)
}
menorNum([15,-5,35,65])*/


/*const repetir = function(elemento,qtde){
    let element = [ ]
    let contador = 0
    while(contador < qtde){
        contador++
        element.push(elemento)
    }
    return console.log(element)
}

repetir("davi",5)*/

