// contain properties, methods
const person = {
    id:1, 
    name:'arjun',
    details: function(){
        return 'this is details method'

    }
}
console.log(person)//{ id: 1, name: 'arjun', details: [Function: details] }
console.log(person.name)//arjun
console.log(person.details())//this is details method

// this refers to the current object

const person = {
    id:1, 
    name:'arjun',
    details: function(){
        return `${this.id}-${this.name}`

    }
}
console.log(person.details())//1-arjun

