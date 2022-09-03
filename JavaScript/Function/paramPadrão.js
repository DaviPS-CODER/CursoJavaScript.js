//1 estrategia para gerar valor padrão

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(3), soma1(0),soma1()) // se quiser somar 0, não vai dar porque o 0 é lido como false

// estrategia 2 , 3 e 4 para gerar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1          //  se "a" for diferente de undefined, pegue "a", se n, pegue1
    b = 1 in arguments ? b : 1          // se tiver o indice 1 dentro de b, pegue, se n... 1
    c = isNaN(c) ? 1 : c                // caso seja um NaN pegue 1, se não, pegue c 
    return a + b + c
}

console.log(soma2(), soma2(1,2,3), soma2(0,0,0))

//valor padrão de EC2015
function soma3(a = 1, b = 1, c = 1){            //forma mais adequada
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))
