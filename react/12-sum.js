function sumtotal(prices){
    let total = 0
    prices.forEach(function(n){
        total += n
    })
    return total
}
console.log(sumtotal([10,20,30,40]))
console.log(sumtotal([10,20,50,40]))
console.log(sumtotal([10,200,30,40]))