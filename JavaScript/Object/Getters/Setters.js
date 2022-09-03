
//O "Get" e o "Set" são funções usadas para se acessar um valor que n pode ser alterado.
// é muito usado para fazer uma espécie de validação ou algum processo, antes q o valor seja devolvido.

const sequencia = {
    _valor: 1, //convenção usada para dizer que essa variavel será acessada internamente apenas.
    
    get valor(){
        return this._valor++
    },
    
    set valor(valor){
        //nesse caso eu estou usando uma forma de validação, 
        //para ter certeza de que o valor irá sempre aumentar.
        if(valor > this._valor){
             this._valor = valor
        }
    }
}

console.log(sequencia.valor,sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor)