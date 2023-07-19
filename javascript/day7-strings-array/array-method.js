const fruits = ['apple', 'mango']

// element, value, item all mean the same

// arrays are ordered, integer indexed, collection of values

const players = ['sachin','virat']
console.log(players[0]) // 'sachin'
console.log(players[1]) // 'virat'
console.log(players[2]) // 'undefined'

// properties

console.log(players.length) // 2

// methods

//add element/s to the end of the array

console.log(players.push('dhoni')) //3
console.log(players)//[ 'sachin', 'virat', 'dhoni' ]

console.log(players.push('suresh', 'yuvraj','shikar')) // 6
console.log(players)//[ 'sachin', 'virat', 'dhoni', 'suresh', 'yuvraj', 'shikar' ]

//add element/s to the begining of the array

console.log(players.unshift('shewag')) //7
console.log(players)/*[
    'shewag', 'sachin',
    'virat',  'dhoni',
    'suresh', 'yuvraj',
    'shikar'
  ]*/

//remove element/s from the end of the array

console.log(players.pop()) // 'shikar
console.log(players)//[ 'shewag', 'sachin', 'virat', 'dhoni', 'suresh', 'yuvraj' ]

//remove element/s to the begining of the array

console.log(players.shift())// 'shewag'
console.log(players)//[ 'sachin', 'virat', 'dhoni', 'suresh', 'yuvraj' ]

//check if an element is present in the array

console.log(players.includes('sachin')) // true
console.log(players.includes('zaheer')) //false


// check the index of the element

console.log(players.indexOf('yuvraj')) //4
console.log(players.indexOf('ashwin')) //-1
console.log(players)//[ 'sachin', 'virat', 'dhoni', 'suresh', 'yuvraj' ]

console.log(players.slice(2)) // ['dhoni', 'suresh', 'yuvraj']
console.log(players)//[ 'sachin', 'virat', 'dhoni', 'suresh', 'yuvraj' ]

console.log(players.sort())//[ 'dhoni', 'sachin', 'suresh', 'virat', 'yuvraj' ]
console.log(players)//[ 'dhoni', 'sachin', 'suresh', 'virat', 'yuvraj' ]

console.log(players.reverse())//[ 'yuvraj', 'virat', 'suresh', 'sachin', 'dhoni' ]
console.log(players)//[ 'yuvraj', 'virat', 'suresh', 'sachin', 'dhoni' ]

const n = [10, 20],m = [30, 40]
console.log(n+m) // '10,2030,40'

const result = n.concat(m)
console.log(result) // [10, 20, 30,40]
const student = {
    id : 1,
    name : 'soni' 
}





