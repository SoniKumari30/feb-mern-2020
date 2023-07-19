// c++, java, python 

// first create a class
// then create an object 

// class is a blueprint for an object - it contains all the methods and properties for an object
// class - user defined data type

// class like features in javascript is done via Constructor Function

// es5 - constructor function
 
// properties - firstName, lastName 
// methods - fullName
function Person(fName, lName) {
    // properties 
    this.firstName = fName
    this.lastName = lName
    
    // methods
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName
    }
}

const p1 = new Person('sachin', 'tendulkar')
console.log(p1)
console.log(p1.fullName())

const p2 = new Person('dhoni', 'mahendra')
console.log(p2)
console.log(p2.fullName())

const p3 = new Person('virat', 'kohli')
console.log(p3)
console.log(p3.fullName()) 




