//Exercicio 1:
function SSMD(a,b){
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
console.log(SSMD(3,5))
//---------------------------------------------------------------------------------------
//Exercicio 2
function classificaTriangulo (lado1, lado2, lado3) {
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
console.log(classificaTriangulo(2, 3, 4));
//-------------------------------------------------------------------------------------
//Exercicio 3
function power(base,expoen){
   pot =  Math.pow(base,expoen)
    return ` o resultado é: ${pot}`
}
console.log(power(2,4))
//-------------------------------------------------------------------------------------
//Exercicio 4
function div (dividendo,divisor){
    divisao = dividendo / divisor
    resto = dividendo & divisor
    return `o resultado da divisão é: ${divisao}, e o restante da divisão é: ${resto}`
}
console.log(div(4,2))
//------------------------------------------------------------------------------------
//Exercicio 5
function flut(n1,n2){
    soma = n1 + n2
    flu = soma.toFixed(2)
    return `o valor da soma é: R$${flu}`
}
console.log(flut(0.1,0.2))
console.log(flut(0.1,0.2))
//------------------------------------------------------------------------------------
//Exercicio 6
function simples(CI,TJ,T){
    calc = CI + (CI * TJ * T)
    return `o montante é de: ${calc}`
}
console.log(simples(1000,10/100,2))

function compost(CI,TJ,T){
    
    calc = (CI * (1 + TJ)** T).toFixed(2)
    return `o montante é: ${calc}`
}
console.log(compost(1000,10/100,2))
//----------------------------------------------------------------------------------
//Exercicio 7 (BASKHARA)
function baskhara(ax2,bx,c){
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
console.log(x1)
//---------------------------------------------------------------------
//Exercicio 8    
let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
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

console.log(avaliaPontuacoes(stringPontuacoes))
//=======================================================================
//exercicio 10
function int(n){
    let number;
    if(n%3 == 0){
        number = true
    } else {
        number = false
    }
    return console.log(`o numero é: ${number}`)
}
int(4)

//exercicio 11
function bi(ano){
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
bi(2020)
//=====================================================================
//Exercicio 12

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))
//=====================================================================
//EXERCICIO 13

const diaSemana =  function(dia){
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
diaSemana(7)
//=========================================================================
//Exercicio 14

const opcao = function escolha(fruta){

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
opcao("melancia")
//===========================================================================
//Exercicio 15
const revenda = function venda(modelAuto){
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
revenda("hatch")
//==========================================================================
//Exercicio 16
const calculadora = function calc(n1,sinal,n2){
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
calculadora(2,"**",3)
//============================================================================
//Exercicio 17
const aumento = function qualPlano(plano, salAtual) {
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
aumento("c",1000)
//=================================================================================
//Exercicio 18
const contador = function contagem(n){
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
contador(2134)
//===================================================================================
//Exercicio 19
const lanchonete = function cardapio(cod,quant){
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
lanchonete("600",1)
//===============================================================================================
//Exercicio 20

function sacarDinheiro(valorSaque) {
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

console.log(sacarDinheiro(253));
//================================================================================================
const convenio = function(idade){
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
console.log(convenio(15))
//====================================================================================================
const anuidade = function(mes,valor){
    
    let Omes = 12 - mes
    
    let Mont=  (valor * (1 + 0.05) ** Omes).toFixed(2)
    
    return console.log(`voce precisa pagar R$${Mont} em janeiro`)
}
anuidade(1,100)
//================================================================================================
//Exercicio 23

const calcMedia = function(cod,m1,m2,m3){
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
calcMedia(01,8,9,9)
//=======================================================================================================
//Exercicio 24
const contador = function(frase){
    let n = 1
    while(n <= 5){
        n++
        console.log(`${frase}`)}
}
contador("hello world")
//=======================================================================================================
//Exercicio 25
const conta = function(){
    let n = 0
    while( n < 50){
        n++
        console.log(n)
    }
}
conta()
//======================================================================================================
//Exercicio 26
const outroContador = function(){
    let n = 1
   
    while(n < 100){
        n++
        if(n%2 == 0){
        console.log(n)
    } else {}
}

}
outroContador()
//========================================================================================================
//Exercicio 27

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));
//==============================================================================================================
//Exercicio 28
function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)
//====================================================================================================
//Exercicio 29
const contador = function(vetor){
    let Qtd = 0
    for(let i = 0; i < vetor.length;i++){
        if(vetor[i]>= 10 && vetor[i] <= 20){
            Qtd++
        }
    }
return Qtd

}
vetor = [2,3,4,5,6,7,10]
console.log(contador(vetor))
//=======================================================================================================
//Exercicio 30
const LerVetor = function(vetor){
    let QtdMaior = 0
    let QtdMenor = 0
    for(let i = 0; i<vetor.length;i++){
        if(vetor[i] > QtdMaior){
            QtdMaior = vetor[i]
        }
            QtdMenor = vetor[0]
        if(vetor[i] < QtdMenor){
            QtdMenor = vetor[i]
        }
        
    }
return `o maior é ${QtdMaior} e o menor é ${QtdMenor}`

}
vetor = [12,324,645,23,677,2345,87]
console.log(LerVetor(vetor))
//========================================================================================================
//Exercicio 31
const ContaNega = function(vetor){
    let negativos = 0
    for(let i = 0; i < vetor.length;i++){
        if(vetor[i] < 0){
            negativos++
        }

    }
return `existem ${negativos} números negativos`
}
vetor = [123,534,764,85,65,-34,6754,-1,-45]
console.log(ContaNega(vetor))
//==========================================================================================================
//Exercicio 32

const MediaAriti = function(vetor){
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    let media = soma / vetor.length

    return `a media aritimética do vetor é: ${media}`
}
vetor = [20,20]
console.log(MediaAriti(vetor))
//============================================================================================================
//Exercicio 33
const concatenar = function(vetorInteiro,vetorString){
    let uniao= vetorInteiro.concat(vetorString)

    return uniao
}
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']

console.log(concatenar(vetorInteiro,vetorString))
//=========================================================================================================
//Exercicio 34
function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abc','cba'))
//=========================================================================================================
//exercicio 35
let vetor1 = [1,2,3,4,5]
let vetor2 = [6,7,8,9,10]

let vetorTotal =[]
Array.prototype.push.apply(vetor1,vetor2)
Array.prototype.push.apply(vetorTotal,vetor1)
console.log(vetorTotal)
//======================================================================================================
//exercicio 36
const calc = function mult(vetor1,n1){
    let result=[]
    for(let i = 0;i < vetor1.length;i++){
      result.push(vetor1[i] * n1)

    }
return result
}
const calc2 = function(vetor2,n2){
    let result=[]
    for(let i = 0;i < vetor2.length;i++){
        if(vetor2[i] > 5){
          result.push(vetor2[i] * n2)
        } else{
         result.push(vetor2[i] * 1)
        }
    }
return result
}
let vetor1 = [2,2,4,6]
let n1 = 2
console.log(calc(vetor1,n1))
console.log(calc2(vetor1,n1))
//============================================================================================
//Exercicio 37
const progreAriti = function(a1,n,r){
    let termos = []
    let rodada = 0
    let N = n - 1
    while( rodada < N){
         termos.push(a1 + r)
        rodada++
        a1 += r
    }
return console.log(`os termso são: ${termos[0]-r},${termos}`)
}
progreAriti(1,10,2)
//============================================================================================
//Exercicio 38
function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim        
    }

    for (let i = inicio; i <= fim; i++) {        
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

imprimirImpares(19, 3)
//============================================================================================
//Exercicio 39
const troca = function(vetor1,vetor2){
    troca1 = []
    troca2 = []
    for(let i = 0; i < vetor2.length;i++){
       troca1 += vetor2[i]
    }
    for( let j = 0; j < vetor1.length; j++){
       troca2 += vetor1[j]
    }

    return console.log(troca1,troca2)
}
vetor1 = [2]
vetor2 = [4] 
console.log(troca(vetor1,vetor2))
//============================================================================================
//Exercicio 40
const notas = function(vetorNotas){

    for(let i = 0; i < vetorNotas.length; i++){
       
     if(vetorNotas[i] >= 0 && vetorNotas[i]<= 4.9){
        console.log(`o aluno de nota ${vetorNotas[i]} está na classe D`)
       
    }   
     else if(vetorNotas[i] >= 5 && vetorNotas[i]<= 6.9){
         console.log(`o aluno de nota ${vetorNotas[i]} está na classe C`)
        
    } 
     else if(vetorNotas[i] >= 7 && vetorNotas[i]<= 8.9){
         console.log(`o aluno de nota ${vetorNotas[i]} está na classe B`)
        
    }
     else if(vetorNotas[i] >= 9 && vetorNotas[i]<= 10){
         console.log(`o aluno de nota ${vetorNotas[i]} está na classe A`)
        
    }

    }
}
let vetor = [2,5,8,10]
notas(vetor)
