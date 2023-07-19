//type conversions

//string to number
const a = '10'    
console.log(typeof a) // 'string'
console.log(typeof parseInt(a)) // 'number'


// + operators

console.log(5 + 5) // 10
console.log('dc' + 't') // 'dct'
console.log('10' + 5) // '105'
console.log(parseInt(a)+5) // 15
const b = '12.6'
console.log(parseInt(b)) // 12
console.log(parseFloat(b)) // 12.6
console.log(parseFloat(a)) // 10
console.log(Number(a)) // 10
console.log(Number(b)) // 12.6

// number to string

const x = 19
console.log('' + x) // '19'
console.log(String(x)) // '19'
