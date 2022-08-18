//this e uma referencia ao "dono" do que está sendo executado no contexto

function f1() { a = (this === window) 
    return a}
vd = (f1 ? "true" : "false" )               //o this pode mudar de acordo com a função executada
console.log(vd)

//usando arrow é mais seguro, pq o this n vai variar
// usando a forma padrão de function faz com q o this varie de acordo com quem o chamou
// o this é definido quando a function for definida, que vai relacionar o this ao contexto

const f3 = () => console.log(this === window)


