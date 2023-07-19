const tags = 'js, react, node, express'

const result = tags.split(', ')
console.log(result) // [ 'js', 'react', 'node', 'express']

console.log(result[0]) //js

const result2 = tags.split('-')
console.log(result2) //[ 'js, react, node, express']

console.log(result2[0]) // 'js, react, node, express'

const fruits = 'apple.mango.watermelon'
const result3 = fruits.split('.')
console.log(result3) //[ 'apple', 'mango', 'watermelon' ]
const emails = '1@gmail.com, 2@gmail.com, 3@gmail.com'
const result4 = emails.split(', ')
console.log(result4) //[ '1@gmail.com', '2@gmail.com', '3@gmail.com' ]

const result5 = tags.split('')
console.log(result5)/*[
    'j', 's', ',', ' ', 'r',
    'e', 'a', 'c', 't', ',',
    ' ', 'n', 'o', 'd', 'e',
    ',', ' ', 'e', 'x', 'p',
    'r', 'e', 's', 's'
  ]*/