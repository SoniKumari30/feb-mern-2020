const myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Phil", ["groundhog", 11]]
]
function element(myZoo){
    
    const result = myZoo.map(function(item){
        
        return `${item[0]} the ${item[1][0]} is ${item[1][1]}`
    
  })
    return result
}
console.log(element(myZoo)) /*[
    'King Kong the gorilla is 42',
    'Nemo the fish is 5',
    'Phil the groundhog is 11'
  ]
  */