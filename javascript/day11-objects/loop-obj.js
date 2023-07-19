const person = {
    name : 'arjun',
    city : 'bangalore',
    designation : 'full stack developer'
}
const prop = 'name'
console.log(person.prop) // undefined
console.log(person[prop]) // ==person['name']=='arjun'

//how to loop

//for in

for(const key in person){
    console.log(typeof key)//strings
    console.log(key, person[key])
}