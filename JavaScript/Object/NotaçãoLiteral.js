const a = 1;
const b = 2;
const c = 3;
const d = 132;
//Versão Antiga:
const ob1 = {a: a, b: b, c: c}
//Versão Nova:

//Obs:  essa forma só funciona na criação de um objeto
const ob2 = {a,b,c}

console.log(ob1,ob2)
//{ a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }

const nomeAtri = "fulano";
const valorAtri = 10;

const obj3 = {}

//no caso abaixo, eu estou colocando um atributo dentro de "obj3" 
//em que "nomeAtri"vai ser o nome do atributo e "valorAtri" vai ser o dado guardado dentro dele.
obj3[nomeAtri] = valorAtri

//Nesse caso eu acabei de criar um novo atributo que vai receber um valor,
//desse forma o JS aceita eu acrescentar um atributo no objeto.
obj3["numero d"] = d

console.log(obj3)

const obj4 = {
    
    //Versão convencional de criar funções:
    funcao1: function(){
        //...
    },
    //versão nova:
    funcao(){
        //...
    }
}

