//Let e Const

// o  let tem escopo de bloco, e só pode ser acessado no seu contexto

{
    var a = 2
    let b = 3  //não irei conseguir acessar o let, pq só é válido dentro das chaves
}
console.log(a)
//console.log(b) ( vai dar  erro)


//template string
const produto  = "ipad"
console.log(`${produto} é caro!`)

//destructuring (usado para remover elementos de dentro de algo)
const [d, e,...tras] = "coder"  // a letra "c" será atribuida para a letra "d", e assim vai...

console.log(d, e, tras) //como se cada "const" recebesse uma letra da palavra

//usando em um array:
const [x,y] = [1,2,3] //vai pegar oq está no indice 0 e 1
console.log(x,y)

//usando em um objeto:
const {idade, nome} = {nome: "davi", idade: 20}
console.log(idade, nome)

//se eu quiser renomear, eu posso colocar um "i": {idade: i , nome}