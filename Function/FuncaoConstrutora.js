function carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0    

    // se quiser tornar visivel para fora do escopo da função, usa o this

    //METODO PUBLICO
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getvelocidadeAtual = function(){
        return velocidadeAtual
    }
}
const uno = new carro               // aqui estou instanciando, usando o new e chamando a função,
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual(image.png))