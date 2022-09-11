//console.log(global)

//assim que eu adicionar isso ao global, qualquer outro arquivo terá acesso;
global.myApp = {
    saudacao(){
        return "estou em todos os lugares"
    },
    nome: "sistema legal"
}