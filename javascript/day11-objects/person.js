// unordered,string indexed,collection of values

const person = {
    name : 'arjun',
    city : 'bangalore'
}
console.log(person) //{ name: 'arjun', city: 'bangalore' }

// how to read properties

console.log(person.name)//'arjun'
console.log(person['city'])//'bangalore'
console.log(person.age)//undefined
console.log(person['age'])//undefined

//how to add new properties (key value pair)

person.designation = 'sr software developer'
console.log(person)/*{
    name: 'arjun',
    city: 'bangalore',
    designation: 'sr software developer'
  }*/

person['company'] = 'amazon'
console.log(person)/*{
    name: 'arjun',
    city: 'bangalore',
    designation: 'sr software developer',
    company: 'amazon'
  }*/

// how to update the property value

person.designation = 'full stack developer'
console.log(person)/*{
    name: 'arjun',
    city: 'bangalore',
    designation: 'full stack developer',
    company: 'amazon'
  }*/

// delete a property

delete person.company 
console.log(person)/*
{
  name: 'arjun',
  city: 'bangalore',
  designation: 'full stack developer'
}*/
