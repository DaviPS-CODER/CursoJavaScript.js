//usando o "process" que é uma das funções do node
//e nesse caso ela tenta pegar a flag "-a"
const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo){
    process.stdout.write("fala anonimo!\n")
    process.exit()
}else{
    process.stdout.write("informe o seu nome: ")
   //evento disparado quando o usuário escreve e digita algo:
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n','')

        process.stdout.write(`fala ${nome}!! \n`)
        process.exit()
    })
}