//o "..." significa que eu posso colcar quantos parametros eu quiser
module.exports = function(...nome){
    return nome.map(nome => `boa semana ${nome}`)
}