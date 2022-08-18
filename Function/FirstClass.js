// funcção em JS é First-class object ou função de alta ordem

// criar de forma literal
function fun1(){ }

// armazenar em uma variavel
const fun2 = function () { }

// armazenar em um array
const array = [ function (a,b){return a + b }, fun1, fun2]
console.log(array[0](2,3))

// armazenar em um atributo de um objeto
const obj = {}
obj.falar = function() {return "olá"}
console.log(obj.falar())

//função como parametro
function run(fun){
    fun()               // a execução dessa função está sendo feita aqui dentro do escopo
}
run((function(){ console.log("exec...")}))

//uma função pode retornar/conter uma função 
function soma(a,b){
    return function (c){
        console.log( a + b + c)         
    }
}
soma(2,3)(5)            //por haver uma função dentro de outra, é necessário colocar os parametros da primeira e os da que está dentro.

const cinco_mais = soma(2,3)(5)
cinco_mais(5)                       //pode armazenar essa função em uma variavel e passar o parametro da que está dentro