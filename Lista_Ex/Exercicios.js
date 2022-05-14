//Exercicio 1:
/*function SSMD(a,b){
soma = a + b
console.log(`o valor da soma é: ${soma}`)
sub = a - b
console.log(`o valor da subtração é: ${sub}`)
mult = a * b
console.log(`o valor da multiplicação é: ${mult}`)
div = a / b
console.log(`o valor da divisão é: ${div}`)

return "fim"
}
console.log(SSMD(3,5))*/
//---------------------------------------------------------------------------------------
//Exercicio 2
/*function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));*/
//-------------------------------------------------------------------------------------
//Exercicio 3
/*function power(base,expoen){
   pot =  Math.pow(base,expoen)
    return ` o resultado é: ${pot}`
}
console.log(power(2,4))*/
//-------------------------------------------------------------------------------------
//Exercicio 4
/*function div (dividendo,divisor){
    divisao = dividendo / divisor
    resto = dividendo & divisor
    return `o resultado da divisão é: ${divisao}, e o restante da divisão é: ${resto}`
}
console.log(div(4,2))*/
//------------------------------------------------------------------------------------
//Exercicio 5
/*function flut(n1,n2){
    soma = n1 + n2
    flu = soma.toFixed(2)
    return `o valor da soma é: R$${flu}`
}
console.log(flut(0.1,0.2))
console.log(flut(0.1,0.2))*/
//------------------------------------------------------------------------------------
//Exercicio 6
/*function simples(CI,TJ,T){
    calc = CI + (CI * TJ * T)
    return `o montante é de: ${calc}`
}
console.log(simples(1000,10/100,2))

function compost(CI,TJ,T){
    
    calc = (CI * (1 + TJ)** T).toFixed(2)
    return `o montante é: ${calc}`
}
console.log(compost(1000,10/100,2))*/
//----------------------------------------------------------------------------------
//Exercicio 7 (BASKHARA)
/*function baskhara(ax2,bx,c){
    b2 = Math.pow(bx,2)
    delta = b2 - 4 * ax2 * c
    if (delta < 0){
        console.log("delta é negativo ")
    } else {
        x1 = (-bx + Math.sqrt(delta)) / (2*ax2)
        x2 = (-bx - Math.sqrt(delta))/ (2*ax2)

        return `o valor de x1 é: ${x1} e o valor de x2 é: ${x2}`
    }
    return "fim"
}
console.log(baskhara(2,3,1))
console.log(x1)*/
//---------------------------------------------------------------------
//Exercicio 8    
/*let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
*function avaliaPontuacoes(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {   //"se i for menor que o valor atual, mostre o próximo"
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))*/
//=======================================================================
//exercicio 10
/*function int(n){
    let number;
    if(n%3 == 0){
        number = true
    } else {
        number = false
    }
    return console.log(`o numero é: ${number}`)
}
int(4)*/

//exercicio 11
/*function bi(ano){
    if(ano % 4 == 0){
        if(ano % 100 == 0){
            if(ano % 400 == 0){
                console.log(`o ano é bissexto`)
            }
        } else {
            console.log(`o ano é bissexto`)
        }
    } else {
        console.log(`o ano não é bissexto`)
    }
        return
}
bi(2020)*/
//=====================================================================
//Exercicio 12

/*function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))*/
//=====================================================================
//EXERCICIO 13

/*const diaSemana =  function(dia){
    switch(dia){
        case 1: 
            console.log( " esse dia é domingo")
            break
        case 7:
            console.log("esse dia é sabado")
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log("esse dia é dia útil")
            break
       
         default: console.log( "esse dia não é valido")        



    }
}
diaSemana(7)*/
//=========================================================================
//Exercicio 14

/*const opcao = function escolha(fruta){

    switch(fruta){
        case "maça":
            console.log("não vendemos essa fruta aqui")
            break   
        case "kiwi":
            console.log("estamos em falta de kiwi")
            break
        case "melancia":
            console.log("aqui está, 3 reais o quilo") 
            break
        default:
            console.log("não trabalhamos com esse produto citado")              
    }

}
opcao("maça")
opcao("kiwi")
opcao("melancia")*/
//===========================================================================
//Exercicio 15
/*const revenda = function venda(modelAuto){
    switch(modelAuto){
        case "hatch":
           console.log("compra efetuada com sucesso!")
            break
        case "moto": case "caminhonete": case "sedan":
            console.log("tem certeza que não quer outro modelo?")    
            break
        default: console.log("não trabalhamos com esse modelo aqui!")    
        } 
}
revenda("hatch")*/
//==========================================================================
//Exercicio 16
/*const calculadora = function calc(n1,sinal,n2){
    switch(sinal){
        case "+":
            let soma = n1 + n2
            console.log(`o valor da soma é: ${soma}`)
            break
        case "-":
            let sub = n1 - n2
            console.log(`o valor da soma é: ${sub}`)
            break
        case "*": 
            let mult = n1 * n2
            console.log(`o valor da soma é: ${mult}`)
            break
        case "/":
            let div = n1 / n2
            console.log(`o valor da soma é: ${div.toFixed(2)}`)
            break
        case "**":
            let pow = n1 ** n2
            console.log(`o valor da soma é: ${pow}`)
            break


            default: console.log("digite um sinal válido")
    }
}
calculadora(2,"+",3)
calculadora(2,"-",3)
calculadora(2,"*",3)
calculadora(2,"/",3)
calculadora(2,"**",3)*/
//============================================================================
//Exercicio 17
/*const aumento = function qualPlano(plano, salAtual) {
    switch (plano) {
        case "a": {
            let salNovo = salAtual + (salAtual * 0.10)
            console.log(`seu novo salário será de: ${salNovo}`)
            break
        }
        case "b": {
            let salNovo = salAtual + (salAtual * 0.15)
            console.log(`seu novo salário será de: ${salNovo}`)
            break
        }
        case "c":{
            let salNovo = salAtual + (salAtual * 0.20)
            console.log(`seu novo salário será de: ${salNovo}`)
            break
        }
            default: console.log("seu plano é inválido")
    }
}
aumento("a",1000)
aumento("b",1000)
aumento("c",1000)*/
//=================================================================================
//Exercicio 18
/*const contador = function contagem(n){
    switch(n){
        case 0:
            console.log("zero")
            break
        case 1:
            console.log("um")
            break
        case 2:
            console.log("dois")
            break
        case 3:
            console.log("três")
            break
        case 4:
            console.log("quatro")
            break
        case 5:
            console.log("cinco")
            break
        case 6:
            console.log("seis")
            break
         case 7:
            console.log("sete")
            break  
        case 8:
            console.log("oito")
             break  
        case 9:
            console.log("nove")
            break
         case 10:
            console.log("dez")
            break

            default: console.log("esse dado não é válido")
            break
        }
} 
contador(2)
contador(5)    
contador(2134)*/
//===================================================================================
//Exercicio 19
/*const lanchonete = function cardapio(cod,quant){
    switch(cod){
        case "100":{
            let valor = quant * 3
            console.log(`o total a ser pago é de: R$${valor}`)
            break
        }
        case "200":{
            let valor = quant * 4
            console.log(`o total a ser pago é de: R$${valor}`)
            break
        }
        case "300":{
            let valor = quant * 5.5
            console.log(`o total a ser pago é de: R$${valor.toFixed(2)}`)
            break
        } 
        case "400":{
            let valor = quant * 7.5
            console.log(`o total a ser pago é de: R$${valor.toFixed(2)}`)
            break
        }
        case "500":{
            let valor = quant * 3.5
            console.log(`o total a ser pago é de: R$${valor.toFixed(2)}`)
            break
        }
        case "600":{
            let valor = quant * 2.5
            console.log(`o total a ser pago é de: R$${valor.toFixed(2)}`)
            break
        }
        default: console.log("não temos esse produto no cardapio")

    }
}
lanchonete("100",5)
lanchonete("200",3)
lanchonete("300",4)
lanchonete("600",1)*/
//===============================================================================================
//Exercicio 20

/*function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0          //declarou cada cotador
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)           //função que determina quanto vale a nota, para cortar o contador desnecessário
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {        //função que contabiliza qual o nivel de valor da nota
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {  //determina quais strings vão aparecer de acordo com os valores__
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(253));*/
//================================================================================================
/*const convenio = function(idade){
        let resultado = ""
        if(idade <= 9){
            resultado += `O TOTAL A SER PAGO É DE R$ ${100 + 80}`
        }if(idade >= 10 && idade <= 30){
            resultado += `O TOTAL A SER PAGO É DE R$ ${100 + 50}`
        }if(idade > 30 && idade <= 60){
            resultado += `O TOTAL A SER PAGO É DE R$ ${100 + 95}`
        }if(idade>60){
            resultado += `O TOTAL A SER PAGO É DE R$ ${100 + 130}`
        }
        return resultado

}
console.log(convenio(15))*/
//====================================================================================================
/*const anuidade = function(mes,valor){
    
    let Omes = 12 - mes
    
    let Mont=  (valor * (1 + 0.05) ** Omes).toFixed(2)
    
    return console.log(`voce precisa pagar R$${Mont} em janeiro`)
}
anuidade(1,100)*/
//================================================================================================
//Exercicio 23

/*const calcMedia = function(cod,m1,m2,m3){
   let n = 0
    while(n != 1){
   
    let m = ((m1 * 4 + m2 * 3 + m3 * 3) / 10).toFixed(1)
    if(m >= 5){
        console.log(`parabens aluno do codigo: ${cod}, sua media foi de ${m} pontos e vc foi aprovado`)
    } else {
        console.log(`infelizmente vc n atingiu a meta`)
    }

}
   
           
}
calcMedia(01,8,9,9)*/
//=======================================================================================================
//Exercicio 24
/*const contador = function(frase){
    let n = 1
    while(n <= 5){
        n++
        console.log(`${frase}`)}
}
contador("hello world")*/
//=======================================================================================================
//Exercicio 25
/*const conta = function(){
    let n = 0
    while( n < 50){
        n++
        console.log(n)
    }
}
conta()*/
//======================================================================================================
//Exercicio 26
const outroContador = function(){
    let n = 1
   
    while(n < 100){
        n++
        if(n%2 == 0){
        console.log(n)
    } else {

    }
    
}

}
outroContador()