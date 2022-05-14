function area(larg, alt){
    const area = larg*alt
    if(area > 20){
        console.log(`valor acima de: ${area}m2`)
    }else{
        return area
    }
}
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(3,2,1,4))
console.log(area(5,5))