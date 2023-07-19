const myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Phil", ["groundhog", 11]]
]

// console.log(myZoo.length) // 3
// console.log(myZoo[0]) // ["King Kong", ["gorilla", 42]]
// console.log(myZoo[0][0]) // 'King Kong'
// console.log(myZoo[0][1]) // [ 'gorilla', 42 ]
// console.log(myZoo[0][1][0]) // 'gorilla'
// console.log(myZoo[0][1][1]) // 42


function zooInventory(myZoo){
const result = []
for(let i =0;i<myZoo.length;i++){
    const str = `${myZoo[i][0]} the ${myZoo[i][1][0]} is ${myZoo[i][1][1]}`
    result.push(str)
}
return result
}
console.log(zooInventory(myZoo)) /*[
    'King Kong the gorilla is 42',
    'Nemo the fish is 5',
    'Phil the groundhog is 11'
  ]
   */