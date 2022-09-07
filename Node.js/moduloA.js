//No back vc n precisa se preocupar em compactar tudo, como no front.
// Dentro do node, um arquivo representa um módulo.

//Uma aplicação backend no node é organizada em pastas e arquivos, e cada arquivo é um módulo.
//Os módulos em node tem os códigos visíveis apenas dentro de si mesmos
// para fazer esse tráfego de informação é necessário exportar e importar esses dados.

// 1 forma de exporta algo no NODE:
// this é um objeto, e eu acabo de colocar um atributo dentro dele
this.ola = "fala pessoal"

//2 forma de exportar algo no NODE:
//o exports é um objeto  tbm, então "bemVindo" tbm acabou de ser criado dentro de "exports"
exports.bemVindo = "bem vindo ao node"

//3 forma de exportar algo no NODE:
module.exports.ateLogo ="até mais"