const values = [10, 20, 30, 40, 50]
function randomEle(values){
    
    const result =Math.floor(Math.random() * values.length)


return values[result]
}
console.log(randomEle(values))