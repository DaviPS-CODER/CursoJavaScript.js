// break causa desvio de fluxo para fora do laço de execução
//o continue ele pula a execução de um elemento, e continua os outros até o final. 

const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){             // o break age em cima do while, for e switch epenas
    if(x==5) break          // o break interrompe o laço e sai para a próxima senteça de código  que ele está relacionado!
    console.log(`${x} igaul a ${nums[x]}`)
}

for (y in nums){            //o continue age em cima do for e do while
    if (y==4){   
        continue           // o continue ele pula a execução da sentença indicada,e vai para a próxima, até terminar.
    } 
   console.log(`${y} é igual a ${nums[x]}`)
}

externo: for (a in nums){            /*o break ele age em cima da senteça mais próxima, 
                                    caso precise fazer o braek de uma sentença mais externa, é necessário fazer um rótulo*/
             for (b in nums){
        if(a==2 && b==3)break externo
        console.log(`par = ${a},${b}`)
    }
}