let a = 1

/*let p = new Promise() - a Promise é uma função, 
mas quando vc cria uma nova Promise, ela se torna um objeto*/

let p = new Promise(function(cumprirPromessa) {   //como parametro eu passo uma função
    cumprirPromessa(["ana","bia","carlos","daniel"]) 
})  


//através do then eu consigo ir fazendo um tratamento de dados

p
.then(valor => valor[0])
.then(primeiro => primeiro[0])
.then(letra => letra.toLowerCase())
.then(letraMinuscula => console.log(letraMinuscula))

/*vc pode criar funções externas que façam alguma tarefa específica,
e dps só ir chamando essas funções dentro do "then"*/