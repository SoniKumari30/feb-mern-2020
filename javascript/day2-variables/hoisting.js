// es5

//declar - var - hoisted

console.log(name) // undefined
var name = 'dct'
console.log(name) //'dct'

// es6

//declare - let or const - do not get hoisted

//variable not found

//referenceError: city is not defined

// console.log(city)

let city = 'bangalore'
console.log(city) // 'bangalore'