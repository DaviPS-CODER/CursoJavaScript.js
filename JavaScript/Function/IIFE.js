//  IIFE -> immediately invoked function expression

// uma forma muito simples para tratar dados fora do global
//para não afetar ou alterar o escopo global
(function(){
    console.log("será executado!")
    console.log("fugindo do escopo")
})()