function pessoa(){
    this.idade = 0

    const self = this               //usar o self se referenciando ao this.
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }.bind(this),1000)               //dispara uma função a partir de determinado intervalo passado. a cada 1 segundo essa função será disparada

}
new pessoa