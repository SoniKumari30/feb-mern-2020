const name = 'dct'
console.log(name.toUpperCase()) // 'DCT'
console.log(name.toLowerCase()) // 'dct'
console.log(name)  //'dct'
console.log(name[0])  //'d'
console.log(name[name.length - 1]) // 't'
console.log(name[name.length]) // undefined
console.log(name.charAt(0)) // 'd'
console.log(name.indexOf('c')) // 1
console.log(name.includes('c')) // true
console.log(name.indexOf('z')) // -1
console.log(name.includes('z')) // false
console.log(name.indexOf('c') >=0) // true
console.log(name.indexOf('z')>=0) // false

// extract a  part of string

const city = 'bangalore'
console.log(city) // 'bangalore'
console.log(city.slice(0,3)) // 'ban'
console.log(city.slice(3,7)) //'galo'
console.log(city.slice(1)) // 'angalore'

// capitalize

console.log(city.charAt(0).toUpperCase() + city.slice(1).toLowerCase())//'Bangalore
 



