const person = {
    name : 'arjun',
    city : 'bangalore',
    designation : 'full stack developer'
}
// get all the keys / properties

console.log(Object.keys(person)) //['name', 'city', 'designation']

// get all the values

console.log(Object.values(person)) //['arjun', 'bangalore', 'full stack developer']

// how to check if a key is present within an object

console.log(Object.keys(person).includes('city')) //true
console.log(Object.keys(person).includes('gender')) //false

console.log(person.hasOwnProperty('city')) //true

//how to check if a value is Present

console.log(Object.values(person).includes('bangalore')) //true



