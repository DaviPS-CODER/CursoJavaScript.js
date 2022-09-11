//o this se referencia ao module.exports
console.log(module.exports === this)

//o "exports"também se referencia ao "modelo.exports"
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

//Sempre que eu precisar atribuir um novo objeto para ser exportado,
//eu preciso usar o "module.exports" porque o que será retornado é o "module.exports"
//por isso normalmente se usa mais o "module.exports"