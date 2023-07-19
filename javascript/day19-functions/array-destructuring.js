//es5

var fruits=['apple', 'mango', 'kiwi']
var f1=fruits[0], f2=fruits[1]
console.log(f1,f2)//apple mango


//es6-array destructuring

 const players = ['dhoni', 'virat', 'sachin']
// const [p1, p2]=players
// console.log(p1, p2)//dhoni virat

const [p1, , p2]=players
console.log(p1, p2)//dhoni sachin

const [,a1, a2]=players
console.log(a1, a2)//virat sachin

