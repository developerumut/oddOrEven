function oddishOrEvenish(myNumber){
    let array = myNumber.toString().split("");
    let toNumber = array.map(function(item){
        return parseInt(item)
    } 
    
    )
    let sum = toNumber.reduce(function(acc,curr){
        acc = acc + curr
        return acc
    })
    if (sum % 2 == 0){
        return "Even"
    }else{
        return "Odd"
    }
}

console.log(oddishOrEvenish(5000))