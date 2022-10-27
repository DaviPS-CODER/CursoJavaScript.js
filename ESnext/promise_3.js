function gerarNumero(min,max){
    if(min > max){
        [max,min]=[min,max]
    }
    return new Promise(resolve =>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })

}
gerarNumero(1,60)
    .then(num => num * 10)  //posso ir alterando o resultado, e tratando o dado
    .then(numX10 => `o número gerado foi ${numX10}`)
    .then(console.log)