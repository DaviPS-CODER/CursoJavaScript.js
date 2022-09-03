// No fim das contas a classe é convertida em função,
//e a herança continua a ser por prototype

//HERANÇA EM CLASSE: 

class avo{
    constructor(sobrenome){
        this.nome = sobrenome
        
    }
}


//dessa forma que eu determino que uma classe tem outra classe como prototype
class pai extends avo{
        constructor(sobrenome,profissao = "professor"){
            super(sobrenome)  //"super" chama o construtor de "avo"
            this.profissao = profissao
        }
}

class Filho extends pai{
    constructor(){
        super("silva")
    }
}


//o filho  recebe os atributos de seus protótipos
const filho = new Filho
console.log(filho)
