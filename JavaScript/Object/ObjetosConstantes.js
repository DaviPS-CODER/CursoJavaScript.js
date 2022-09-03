
// a variavel "pessoa" aponta para um endereço na memória, e nesse endereço está o objeto em questão.

const pessoa = {nome: "davi"}
pessoa.nome = "pedro" // quando eu altero uma informação dentro do objeto, 
                    // eu não estou alterando o endereço da memória, mas apenas o dado.

console.log(pessoa) // vai imprimir "Pedro"

pessoa = {nome: "Ana"}  // nesse caso, a constante pessoa está recebendo um novo objeto
                        // Porém esse novo objeto aponta para um novo endereço na memória.

/*Em resumo, a constante ela vai apontar 
para o endereço na memória que lhe foi inicialmente atribuido*/

Object.freeze(pessoa) /*Esse método CONGELA o objeto pessoa, 
                      /  e eu n posso mais mudar seus atributos a partir da linha em que ele foi estabelecido.*/

//Da seguinte forma eu posso criar um objeto para jamais ser alterado:
 const PessoaConstante = Object.freeze({nome: "davi"})

