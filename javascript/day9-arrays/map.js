const numbers = [10, 15, 20, 25]
// c style

function alterElements(numbers){
    const result = []
    for(let i = 0; i<numbers.length;i++){
    result.push(numbers[i] + 2)

}
return result
}
console.log(alterElements(numbers)) // [12, 17, 22, 27]
console.log(numbers) //[ 10, 15, 20, 25 ]


// js style

function alterElementsjs(numbers){
    const result = numbers.map(function(ele){
        return ele+2
})
return result
}
console.log(alterElementsjs(numbers)) // [12, 17, 22, 27]
console.log(numbers) //[ 10, 15, 20, 25 ]

// es6 arrow

console.log(numbers.map(ele=>ele + 2)) //[ 12, 17, 22, 27 ]