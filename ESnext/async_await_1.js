//a ideia do async/await é ter um código que é assícrono, mas parece sícrono.
//ou seja, ao invés de chamar o "then", ele vai ficar "parado" aguardando a execução

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() =>{ resolve()},tempo)
    })

}

/*esperarPor(2000)
    .then(() => console.log("executando promise 1..."))
    .then(esperarPor)
    .then(() => console.log("executando promise 2..."))
    .then(esperarPor)*/

function retornarValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10),5000)
    })
}

    // usando o async eu consigo esperar dentro da função para ir executando o código,
    //sem precisar do "then"
async function executar(){
    let valor = await retornarValor() //vou precisar desse valor resolvido, para executar os de baixo
    
    await esperarPor(2000)    //sempre que tiver uma função que retorna uma promise, eu posso usar com o await
    console.log(`async/await: ${valor}`)
    
    await esperarPor(2000)
    console.log(`async/await: ${valor + 1}`)
    
    await esperarPor(2000)
    console.log(`async/await: ${valor + 2}`)

    return valor + 3
}

executar().then(console.log)  //apenas com o "then" eu consigo pegar o valor final como se fosse sícrono