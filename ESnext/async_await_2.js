function gerarNumero(min,max, numerosProibidos){
    if(min > max){
        [max,min]=[min,max]
    }
    return new Promise((resolve,reject) =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('número repetido')
        }else{
            resolve(aleatorio)
        }
        resolve(aleatorio)
    })

}

async function gerarMegaSena(qtdeNumeros,tentativas = 1)  {
    try{
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
             numeros.push(await gerarNumero(1,60, numeros))  //o await precisa estar com a função q retorna a promise
        }
        return numeros 
    }catch(e){
        if(tentativas > 100){
            throw "não deu certo!"  
        }else{
        return gerarMegaSena(qtdeNumeros,tentativas + 1 )        // dentro do "catch" eu posso estar tratando o erro     
    }
}
    
}

gerarMegaSena(20)
    .then(console.log)
    .catch(console.log)

gerarNumero(1,5,[1,2,4])
    .then(console.log)
    .catch(console.log)