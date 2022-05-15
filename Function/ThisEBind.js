const pessoa = {
    saudacao: "bom dia",
    falar(){
        console.log(this.saudacao)  //usando um atributo de um objeto com o this
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()             //paradigma entre a programação estruturada e a OO

const falarDePessoa = pessoa.falar.bind(pessoa) //bind amarra um objeto para ser o dono da execução de um método