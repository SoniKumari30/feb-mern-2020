//good practice


let a=10, b=20
function add(a,b){ //parameter - like a local variable
    
    a=100, b=200
   return a+b 

}
//pass by value - primitives

console.log(add(a,b))//300
console.log(a,b)//10 20
