//como o node faz cache das instancias, mesmo eu armazenando em  duas "const"
//diferentes, o que eu fizer no contadorA será feito no B
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//novas instancias estão sendo criadas a partir de uma factory
const contadorC = require('./instanciaNova')()
//usando o "()" estou invocando a factory que vai retornar o objeto
const contadorD = require('./instanciaNova')()

//incrementou mais duas unidades
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

//mesmo incrementando no contadorC, o "D" não é afetado, pois tem uma factory que
//gera um novo objeto, e assim apenas o "C" será afetado.
contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)