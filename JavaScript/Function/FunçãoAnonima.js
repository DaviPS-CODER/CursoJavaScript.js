const soma = function(x,y){             //cria uma função sem nome, e usa ela como parametro na outra
    return x + y
}

const Imprimir = function(a,b,operacao = soma){
    console.log(operacao(a,b))
}

Imprimir(2,5)
Imprimir(3,4) 

const  sub = function(x,y){            //tem como passar uma função inteira como parametro
    return x - y
}

Imprimir(3,4, (x,y) => x*y)

const pessoa = {
    falar: () => console.log("ola")
}
pessoa.falar()

const calcular = function(x,y,operacao){
    return console.log(operacao(x,y))
}
calcular(10,2, (x,y) => y+x)