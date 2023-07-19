//es5

var person = {
    name:'soni',
    details:function(){
        return 'hi, my name is ' + this.name

    }
}
console.log(person.details())//hi, my name is soni

// es6-concise method

const student ={
    name:'soni',
    details(){
        return `hi, my name is  ${this.name}`

    }
}
console.log(student.details())//hi, my name is soni