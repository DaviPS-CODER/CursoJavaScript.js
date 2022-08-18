const fabricantes =["mercedes", "audi", "bmw"]

function Imprimir(nome,indice){
    console.log(`${indice + 1}. ${nome}`)

}

//para cada elemento dentro do array, ele vai chamar de volta, por isso o termo "callback"

fabricantes.forEach(Imprimir) 
fabricantes.forEach(fabricante => console.log(fabricante))

// callback é passar uma função que será chamada quando um evento acontecer