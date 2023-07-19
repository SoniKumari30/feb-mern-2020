const numbers = [10, 20, 30]
const result = numbers.map(function(ele){
    if(ele==20){
        return ele+1
    }
    // else{
    //     return ele
    // }
    
})
console.log(result)//[ undefined, 21, undefined ]