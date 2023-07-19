const prices = [10, 15, 30, 35, 40]

// find all elements greater than 25

 // c style

 function filterElement(prices, n){
     const result = []
     for(let i =0; i < prices.length; i++){
         if(prices[i]>n){
             result.push(prices[i])
         }
     }
     return result
 } 
 console.log(filterElement(prices, 25))//[30, 35, 40]
 console.log(filterElement(prices, 250))//[]
 console.log(filterElement(prices, 38))//[40]
 
 // js style
 
 function filterElementjs(prices, n){
     const result = prices.filter(function(ele){
         return ele > n

     })
     return result
 }
 console.log(filterElementjs(prices, 25)) //[30, 35, 40]
 console.log(filterElementjs(prices, 250))//[]
 

 //es6 arrow function

 console.log(prices.filter(ele=>ele>25)) //[ 30, 35, 40 ]