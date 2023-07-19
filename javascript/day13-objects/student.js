const student = {
    name:'mohan',
    greet:function(name1){
         
    
    return `hi ${name1},my name is ${this.name}`
    }
} 
    
console.log(student.name) //mohan
console.log(student.greet('mahi')) //hi mahi,my name is mohan
console.log(student.greet('sujith')) //hi sujith,my name is mohan