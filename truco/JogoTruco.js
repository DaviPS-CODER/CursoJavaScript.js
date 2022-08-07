

const Truco = function carta1 (n1,naipe1,n2,naipe2){
let ponto1 = 0
     if(n1 == 4 && naipe1 == "paus" || n1 == 7 && naipe1 == "copas" || n1 == "a" && naipe1 == "espada"|| n1 == 7 && naipe1 == "ouro"){
        switch(naipe1){
            case "paus": ponto1 += 14
            break
            case "copas": ponto1 += 13
            break
            case "espada": ponto1 += 12
            break
            case "ouro": ponto1 += 11
         }
 } else {

    switch(n1){
        case 3: ponto1 += 10
        break
        case 2: ponto1 += 9
        break
        case "a": ponto1 += 8
        break
        case "k": ponto1 += 7
        break
        case "j": ponto1 += 6
        break
        case "q": ponto1 += 5
        break
        case 7: ponto1 += 4
        break
        case 6: ponto1 += 3
        break
        case 5: ponto1 += 2
        break
        case 4: ponto1 += 1
    }
}


 let ponto2 = 0
         if(n2 == 4 && naipe2 == "paus" || n2 == 7 && naipe2 == "copas" || n2 == "a" && naipe2 == "espada"|| n2 == 7 && naipe2 == "ouro"){
            switch(naipe2){
                case "paus": ponto2 += 14
                break
                case "copas": ponto2 += 13
                break
                case "espada": ponto2 += 12
                break
                case "ouro": ponto2 += 11
             }
     } else {
    
        switch(n2){
            case 3: ponto2 += 10
            break
            case 2: ponto2 += 9
            break
            case "a": ponto2 += 8
            break
            case "k": ponto2 += 7
            break
            case "j": ponto2 += 6
            break
            case "q": ponto2 += 5
            break
            case 7: ponto2 += 4
            break
            case 6: ponto2 += 3
            break
            case 5: ponto2 += 2
            break
            case 4: ponto2 += 1
        }
        
    }
    
    if(ponto1 > ponto2){
        console.log(`o primeiro jogador`)

    } else if (ponto1 == ponto2){
        console.log(" EMPATE! ")
    
    } else{
    console.log("o segundo jogador ganhou ! ")
    }
    return ponto1, ponto2
}

Truco(4,"paus",3,"ouro")