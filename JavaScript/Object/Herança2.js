//cadeia de protótipo(prototype chain)

//Acima do avo nesse caso só está o "Object.prototype"
//Object.prototype é o pai de todos os objetos

const avo = { attr1: "a"}
const pai = { __proto__: avo, attr2: "b"}
const filho = { __proto__: pai, atrr3: "c"}

console.log(filho.attr1,filho.attr2,filho.atrr3) // o atributo será procurado nos objetos q o antecedem

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const carro = {
    velAtual: 0,
    velMax: 200,
    
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} KM/h de ${this.velMax} Km/h`
    }
}

const ferrari = {      //quando eu determino "ferrari" como um filho do objeto "carro", 
                        //as propriedades de ferrari vão estar por cima das do carro.
    modelo: "F40",
    velMax: 324  //shadowing
}

const Volvo = {
    modelo: "V40",
    status(){
        return ` ${this.modelo}: ${super.status()}`  //o "super" vai invocar o método do protótipo
    }
}

//A função que estabelece a relação de protótipos:
Object.setPrototypeOf(ferrari,carro)  //"Ferrari tem carro como protótipo"
Object.setPrototypeOf(Volvo,carro)

console.log(ferrari)   //inicialmente será mostrado apenas oq foi instanciado dentrode ferrari
console.log(Volvo)     // mas é possível acessar os outros atributos, herdados dos protótipos.

Volvo.acelerarMais(150) //estou usando um metódo q foi criado no "pai"
console.log(Volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())  // nesse caso o metódo vai ler a velMax que está dentro de ferrari,e n de carro.

