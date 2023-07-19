const numbers = [10,15,20,25,30] 
function filterNumbers(numbers){
    const evens = [], odds = []

    for(let i = 0;i<numbers.length;i++){
        if(numbers[i]%2==0){
            evens.push(numbers[i])
        }
        else{
            odds.push(numbers[i])
        }
    }
    return [evens, odds]
}
console.log(filterNumbers(numbers))// [[10,20,30], [15,25]]