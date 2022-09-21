//middleware pattern (chain of responsability)

//ctx(contexto) é um objeto que vai sendo passado de um middleware para o outro.
//ele que vai carregar os dados de um passo para o outro.

//next é a função que quando for chamada, vai chamar o próximo middleware.

const passo1 = (ctx,next) => {
    ctx.valor1 = "mid1"
    next()
}

const passo2 = (ctx,next) =>{
    ctx.valor2 ="mid2"
    next()
}

const passo3 = ctx => ctx.valor3 = "mid3"

const exec = (ctx, ...middlewares) => {     //o "...middlewares" é um array que contém os passos q foram passados
    const execPasso = indice =>{            //para cada passo que eu quiser executar, eu passo o indice
        middlewares && indice < middlewares.length && 
        middlewares[indice](ctx, () => execPasso(indice + 1))  //aqui temos um exemplo de recursividade,
                                                                //em que a função vai chamar ela mesma
    }
    execPasso(0)
}

const ctx = {}

exec(ctx, passo1,passo2,passo3)  //a função vai pegar os 3 passos e juntar todos em um Objeto,
                                // e vai fazendo as verificações.

console.log(ctx)