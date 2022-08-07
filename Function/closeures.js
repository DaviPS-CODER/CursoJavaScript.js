// é o escopo criado quando vc define a função
//esse escopo permite a função acessar e manipular variaveis externas á função

//contexto léxico em ação!

const x = "global"

function fora(){
    const x = "local"
    function dentro(){
        return x
    }
    return dentro
}

const minhaFunção = fora()
console.log(minhaFunção())