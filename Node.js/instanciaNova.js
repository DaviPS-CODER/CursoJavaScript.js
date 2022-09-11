//como retornar uma nova instancia já que o node coloca em cache?
//uma factory retorna um novo objeto

module.exports = () =>{
    return{
        valor:1,
        inc(){
            this.valor++
        }
    }
}