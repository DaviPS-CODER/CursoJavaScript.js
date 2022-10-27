const { reject } = require("lodash");

//lidando com uma possibilidade de erro
function funcionarOuNao (valor,chancheErro){
    return new Promise((resolve,reject) =>{
        try{
/*erro:*/   con.log('temp')                      // o erro cai no catch, mas chamando "funcionarOuNao",
            if(Math.random() < chancheErro){    //e vai cair no primeiro tratamento que ele "ver"
                reject('ocorreu um erro')
            }else{
                resolve(valor)
            }
        } catch(e){
            reject(e)
        }
    })
}

//o try ele justamente "tenta" executar, mas caso dê erro, vai cair no catch
        
funcionarOuNao('testando...',0.5)       
    .then(v => `valor: ${v}`)
    .then(v => console.log(),
    err => console.log(`Erro esp: ${err}`)          //uma forma de tratar um erro específico em um "then"
    )                                               //o catch n será chamado se o erro já for tratado no "then"
    .catch(err => console.log(`erro: ${err}`))   
    .then(() => console.log("fim!"))            //nenhum valor será obtido dps do catch