const numbers = [10,15,20,25,30]

function filterNumbers(numbers){
    const evens = numbers.filter(function(item){
        return item %2 == 0

    })
    const odds = numbers.filter(function(item){
        return item %2!=0 
    
})
return [evens, odds]
}
console.log(filterNumbers(numbers))// [[10,20,30], [15,25]]