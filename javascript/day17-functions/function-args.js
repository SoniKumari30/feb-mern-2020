function add(){
    console.log(arguments, arguments.length)
    for(let i=0;i<arguments.length;i++){
console.log('arg' + i + ' ' + arguments[i])
    }

}
add(10)
add(10,20)
add(10,20,30)

// Math.min(10,20,4,1)

//numbers.push(10)
//numbers.push(10,20)
//numbers.push(10,20,30,40,50)