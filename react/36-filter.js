const numbers = [10, 20, 30, 40]

// const i=numbers.indexOf(30)
// numbers.splice(i, 1)
// console.log(numbers)

const result = numbers.filter(function(ele){
    return ele!= 30
})
console.log(result)