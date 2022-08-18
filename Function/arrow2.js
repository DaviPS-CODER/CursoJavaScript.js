function pessoa (){
    this.idade = 0

setInterval(()=>{
    this.idade++                //quando se usa this em um arrow, o this reconhece o contexto léxico que está inserido
    console.log(this.idade)
},1000)
}
new pessoa

///////////////////////////////////////////////////////////////////////////
function falar(){
    this.fala ="olá"

    setInterval(() => {
       console.log(this.fala)
    },1000);


}
new  falar