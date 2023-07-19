const numbers = [1,2,3,4,5]

numbers.push(6) // new array length 
numbers.unshift(0) // new array length

console.log(numbers)//[ 0, 1, 2, 3,4, 5, 6]


const fruits = ['apple', 'mango', 'kiwi', 'banana']

fruits.pop() // removed element 
fruits.shift() // removed element

console.log(fruits)//[ 'mango', 'kiwi' ]

// splice() 
// add element to a given index 
console.log(fruits.splice(1, 0, 'strawberry')) // []
console.log(fruits)//[ 'mango', 'strawberry', 'kiwi' ]

// remove element/elements from a given index
console.log(numbers.splice(3, 1)) // [ 3 ]
console.log(numbers.splice(3, 2)) // [ 4,5 ]]
console.log(numbers)//[ 0, 1, 2, 6 ]
