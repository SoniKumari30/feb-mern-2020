//es5

function add(a, b){
    a = typeof a == 'undefined' ? 0 : a
    b = typeof b == 'undefined' ? 0 : b

    console.log(a, b)
    return a+b 
 }
 console.log(add())//0
 console.log(add(10))//10
 console.log(add(10, 20))//30

 //es6
 function total(m = 0, n = 0){
     console.log(m, n)
     return m + n
 }
 console.log(total())//0
 console.log(total(10))//10
 console.log(total(10, 20))//30
