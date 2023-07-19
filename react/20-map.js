// const numbers = [10, 15,20]
// const evens = numbers.map(function(ele){
//     if(ele%2==0){
//         return ele
//     }
// })
// console.log(evens)

const numbers = [10, 15,20]
const evens = numbers.filter(function(ele){
    if(ele%2==0){
        return true
    }
})
console.log(evens)
