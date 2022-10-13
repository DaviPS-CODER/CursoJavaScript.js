//Promise é usado quando queremos ter algum processamento assícrono
// e o final de uma promise são apenas 2, resolvida ou rejeitado
//você basicamente seta uma callback, uma para o caso de dar certou, outra se der errado;

const { reject } = require("lodash");

//criando uma função com 2 param, q retorna uma promessa, 
//e quando a promessa for atendida, o "resolve" será executado
function falarDepoisDe(segundo,frase){
    return new Promise((resolve, reject) =>{     //resolve será chamado quando a promessa for atendida
        setTimeout(() => {
            resolve(frase)
        },segundo * 1000)
})
}

//a promise tem a função "then" é chamada quando vc resolve a promise 
//passando o objeto que deseja
falarDepoisDe(3,"que legal!")
    .then(frase => frase.concat("!?!?!"))
    .then(outraFrase => console.log(outraFrase))


//OBS: as promises aceitam apenas um parametro






//uso simples de uma promise (EXEMPLO PARA O BROWSER)
const myPromise = new Promise((resolve,reject) =>{
    const nome = "davi"
    if(nome == "davi"){
        resolve("usuário encontrado!")
    } else {
        reject("usuário não encontrado!")
    }
})

myPromise.then((data) =>{
    console.log(data)
})

//USANDO O THEN PARA ENCADEAMENTO

const myPromise2 = new Promise((resolve,reject) =>{
    const nome = "davi"
    if(nome == "davi"){
        resolve("usuário encontrado!")
    } else {
        reject("usuário não encontrado!")
    }
})

//estarei tratando o dado que chega pela
myPromise2.then((data) =>{
    return data.toLowerCase()
}).then((stringModificada) => {        //nessa parte eu estarei esperando a string q foi modificada
    console.log(stringModificada)
})


//Usando o Catch para tratar melhor a resposta do reject
const myPromise3 = new Promise((resolve,reject) =>{
    const nome = "fulano"
    if(nome == "davi"){
        resolve("usuário encontrado!")
    } else {
        reject("usuário não encontrado!")
    }
})

myPromise3.then((data) =>{
    console.log(data)
}).catch((erro) =>{
    console.log("ocorreu um erro" + erro)
})


//RESOLVENDO VÁRIAS PROMESSAS
//com o uso do método "all", eu posso ter um retorno de todas as promises escolhidas
const p1 = new Promise((resolve,reject) =>{
    resolve("p1,ok")
})

const p2 = new Promise((resolve,reject) =>{
    resolve("p2,ok")
})

const p3 = new Promise((resolve,reject) =>{
    resolve("p3,ok")
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) =>{console.log(data)})

//obs: no "all" é preciso esperar todas as promesas terem retorno, para que possa executar


//USANDO O MÉTODO "RACE" (A PRIMEIRA QUE FOR RESOLVIDA, QUE SERÁ A RETORNADA)
const p4 = new Promise((resolve,reject) =>{
    resolve("p1,ok")
})

const p5 = new Promise((resolve,reject) =>{
    resolve("p2,ok")
})

const p6 = new Promise((resolve,reject) =>{
    resolve("p3,ok")
})
const resolveOnlyRace = Promise.race([p4,p5,p6]).then((data) =>{console.log(data)})


