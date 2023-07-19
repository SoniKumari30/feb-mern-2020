// variables - are used to store values within a program

// name, price, description, category, stock

// string,number,boolean,array, object

var name = 'marker'
console.log(name, typeof name) // string
console.log(name) //marker 

var price = 15
console.log(price, typeof price) //number

var description = 'white board marker'
console.log(description, typeof description) //string

var stock = 150
console.log(stock, typeof stock) //number

var codEligible = true
console.log(codEligible, typeof codEligible) // boolean

var fruits = ['mango', 'kiwi', 'water melon']
console.log(fruits, typeof fruits) //(array) object

var article = {
    title: 'javascript',
    body: 'FULL STACK JAVASCRIPT'
}
console.log(article, typeof article) //object

var greet = function(){ // anonymous function
    return 'HI There'

}
console.log(greet) //[Function: greet]
console.log(greet())//HI There