//Entendendo o operador "new"
//quando o new é usado, vc n apenas cria um objeto, 
//mas passa o protótipo da função construtora para esse novo objeto

function aula(nome,videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula("bem vindo", 123)
const aula2 = new aula("até breve",456)

console.log(aula1,aula2)

//simulando  o new

function novo(f,...params){
    const obj = {} //criei um objeto novo
    obj.__proto__ = f.prototype  //associei o protótipo do obj ao da função passada
    f.apply(obj,params) //vai executar a função "f" tendo como contexto o obj gerado, e passando os parametros que recebi no metodo novo
    return obj
}

const aula3 = novo(aula,"bem vindo", 123)
const aula4 = novo(aula,"até breve", 456)
console.log(aula3,aula4)