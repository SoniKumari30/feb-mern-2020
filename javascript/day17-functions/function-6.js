let a=10, b=20
function add(){
   //we have declared a variable with const keyword a, b
   const a=100, b=200
   return a+b 

}
console.log(a,b)//10 20
console.log(add(a,b))//300
console.log((a,b))//10 20