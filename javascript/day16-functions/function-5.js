let a = 10, b = 20
function add(){
    a = 100, b = 200
    return a+b
}
console.log(a, b)//10, 20
console.log(add())//300
console.log(a, b)//100, 200