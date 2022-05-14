let contador = 1             // essa estrutura faz com que o contador vá até 10, e quando passar, indicará negativo
while(contador <= 10){
    console.log(`contador: ${contador}`)
    contador++
}

for(let i = 1;i <= 10; i++){         //vai ter uma contagem até 10   
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 5, 7.9]
for(let i=0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}