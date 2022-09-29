//ES8: Object.values/Object.entries

const obj = {a:1,b:2,c:3}

//o "values" vai me retornar um array apenas com os valores de cada atributo
// o "keys" vai retornar um array apenas com os nomes dos atributos
console.log(Object.values(obj))

//irá retornar uma matriz com os nomes e valores dos atributos
console.log(Object.entries(obj))

//melhorias na notação literal
const nome = "carla"
const pessoa = {
    nome,            //nesse caso n precisa de colocar "nome: nome"

    ola(){           // a forma de gerar as funcões ficou mais fácil também
        return "oi gente!"
    }
}

console.log(pessoa.nome,pessoa.ola())

//class

class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'au au'
    }
}

console.log(new Cachorro().falar())  //em classe, o new vai gerar um novo objeto (função construtora funciona assim)