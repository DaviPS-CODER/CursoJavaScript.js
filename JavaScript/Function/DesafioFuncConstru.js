class Pessoa {
    constructor(nome){
        this.nome= nome
    }
    falar(){
        console.log(`meu nome é: ${this.nome}`)
    }
}

const p1 = new Pessoa("davi")
p1.falar()



function person(nome){
    this.falar = () => {
        console.log(`meu nome é ${nome}`)
    }

    return this.falar()
}
const davi = new person("bia")