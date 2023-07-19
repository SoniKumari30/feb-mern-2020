const person = {
    id:1,
    name:'soni' ,
    details:function(){//inside method, this refer to the current object
        return this

    }

}
console.log(person.details())//{ id: 1, name: 'soni', details: [Function: details] }

function printThis(){ //inside a function this refers to the global object
    return this

}
console.log(printThis())

//outside a function this refers to a empty object
console.log(this) //{}