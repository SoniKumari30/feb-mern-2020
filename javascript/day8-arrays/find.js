 const prices = [10, 15, 30, 35, 40]

// find a value based on a condition-> 25

// c style

function findElement(prices, n){
    let result
    for(let i = 0; i < prices.length; i++){
    if(prices[i] > n){
        result = prices[i]
        break
    }
}
return result
}
console.log(findElement(prices, 25)) // 30
console.log(findElement(prices, 255)) // undefined

const result2 = prices.find(function(ele){
    return ele % 2 == 0
}) 
console.log(result2)//10

 
// js style

function findElementjs(prices, n){
    const result = prices.find(function(ele){
        return ele > n

    })
    return result
}
console.log(findElement(prices, 25))//30
console.log(findElement(prices, 250))//undefined

// es6 - arrow function

console.log(prices.find (ele => ele > 25)) //30
