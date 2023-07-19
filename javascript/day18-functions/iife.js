//immediately invoked function expression

//we declare a function, and use it immediately after declaring, not reuse it again
(function(){
    console.log('hello there')
}())

/*
scenario
function add(a,b){
    return a+b

}
console.log(add(10,20))
add(15,15)
add(1,2)


const total = function(m,n){
    return m+n
}
console.log(total(10,20))
total(2,3)
total(1,1)
*/
