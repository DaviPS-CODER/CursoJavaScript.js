//aqui tem uma referencia do "file system", que é um modulo que já vem interno no node

const fs = require ('fs')


const caminho = __dirname + '/arquivo.json'

//forma SINCRONA:
//cuidado pq pode travar o event loop
//FORMA NÃO RECOMENDADA
//importante especificar o uncode (utf-8) para o arquivo ser interpretado da forma correta
const conteudo = fs.readFileSync(caminho,'utf-8') //comando para ler de forma sincrona
console.log(conteudo)  //o arquivo.json será lido

//FORMA ASSINCRONA:
//nesse caso é chamado uma callback para fazer o tratamento
fs.readFile(caminho,'utf-8', (err,conteudo) =>{
    const config = JSON.parse(conteudo)
    //só vai funcionar se o "config" for um objeto
    console.log(`${config.db.host}: ${config.db.port}`)
})

//mas também tem essa forma bem mais simples de acessar 
//um arquivo JSON
const config = require('./arquivo.json')
console.log(config.db)


//nesse caso também é retornado uma callback
//e ele le um diretório 
fs.readdir(__dirname,(err,arquivos) => {
    console.log("conteudo...")
    console.log(arquivos)
})

//o "__dirname" é uma constante presente em todos os arquivos do node,
//que representa o diretório atual