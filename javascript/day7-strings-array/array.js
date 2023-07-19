const p1 = 'sachin'
const p2 = 'virat'
const p3 = 'dhoni'

console.log(p1)//sachin

const players = ['sachin', 'virat', 'dhoni']
console.log(players[0]) // 'sachin'
console.log(players) //[ 'sachin', 'virat', 'dhoni' ]
console.log(typeof players) // 'object'
console.log(Array.isArray(players)) // true
const student = {
    id : 1,
    name : 'soni'

}
console.log(student)//{ id: 1, name: 'soni' }
console.log(typeof student) // 'object'
console.log(Array.isArray(student)) //false

//const values = [10, 'sachin', true, undefined, [], {}]