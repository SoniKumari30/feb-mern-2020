const players = ['sachin', 'virat']
//const result = []
//players.forEach(function(ele){
//result.push(ele.toUpperCase())

//})
//console.log(result)
const result = players.map(function(ele){
    return ele.toUpperCase()
})
console.log(result)