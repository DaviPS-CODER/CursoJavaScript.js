    
    /*o switch é usado para várias seleções,e a expressão n retorna true/false, mas sim um valor
    e cada case funciona como um "caso" que tem uma senteça para ser executada */
    
    const imprimaResultado = function(nota){
        switch (Math.floor(nota)){              //a expressão junto com o switch n retorna true or false, é apenas um elemento que vc está colocando
           case 10:     
            case 9:              
                console.log("quadro de honra") // if for 10 or 9, irá executar o que está no console.log
                break      
                case 8: case 7:                 // break: vai encerrar a leitura ali
                    console.log("aprovado") 
                    break
                case 6: case 5: case 4:
                    console.log("recuperação") 
                    break
                case 3:  case 2: case 1: case 0:
                    console.log("reprovado")
                    break
                    default: console.log ("nota invalida")
        }
    }
imprimaResultado(5)
imprimaResultado(10)
imprimaResultado(4.6)  
imprimaResultado(-1)