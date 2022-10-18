//colocando uma callback dentro de outra
/*setTimeout(function(){
    console.log("executando callback...")

    setTimeout(function(){
        console.log("executando callback...")
    },2000)
},2000)*/

//usando uma promise...
function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("executando...")
            resolve('vissh')               //quando passar o tempo, o "resolve" será executado
        },tempo)
    })

}

esperarPor(3000).then(texto => console.log(texto))  //o "then" está recebendo o valor de "resolve"