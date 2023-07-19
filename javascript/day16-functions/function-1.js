 function add(a, b){
    console.log(a, b)
    return a+b 
 }
 console.log(add())//NaN
 // undefined undefined

 console.log(add(10))//NaN
 // 10 undefined

 console.log(add(10, 20))//30
 // 10 20

 console.log(add(10,5,20))//15
 //10,5 20 is ignored

