const classificar = function(N,naipe){
    if(N == 4 && naipe == "paus" || N == 7 && naipe == "copas" || N == "a" && naipe == "espada"|| N == 7 && naipe == "ouro"){

        if(N == 4 && naipe == "paus"){
            console.log("você está com a carta mais poderosa, Vulgo PIF")
        } else if ( N == 7 && naipe == "copas"){
            console.log("você está com a segunda carta mais poderosa")
        } else if( N == "a" && naipe == "espada"){
            console.log("você está com a terceira carta mais poderosa")
        } else if (N == 7 && naipe == "ouro"){
            console.log("você está com a quarta carta mais poderosa")
        }

    } else {

        switch(N){

            case 4:
                console.log("essa é a carta mais fraca")
                break
            case 5: 
                console.log(" Essa carta está na posição 13 do ranking")
                break
            case 6:
                console.log(" Essa carta está na posição 12 do ranking")
                break
            case 7:
                console.log(" Essa carta está na posição 11 do ranking")
                break
            case "q":
                console.log(" Essa carta está na posição 10 do ranking")
                break
            case "j":
                console.log(" Essa carta está na posição 9 do ranking")
                break
            case "k":
                console.log(" Essa carta está na posição 8 do ranking")
                 break
            case "a":
                console.log(" Essa carta está na posição 7 do ranking")
            case 2:
                console.log(" Essa carta está na posição 6 do ranking")
                break
            case 3:
                console.log(" Essa carta está na posição 5 do ranking")
                break
            
            }
        }

}
classificar(2,"paus")



