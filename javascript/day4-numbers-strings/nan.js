// NaN - not a number
 
const result = 10/'a'
const price = 25 
console.log(result) // NaN
console.log(typeof result) // 'number'
console.log(result==NaN) // false
console.log(10==10) //true
console.log(Number.isNaN(result)) // true
console.log(Number.isNaN(price)) // false
