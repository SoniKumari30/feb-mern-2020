function sayAgain(str, count){
    let result = ' '
    while(count > 0){
        result = result+str

     count--

    }
    return result
    
}
console.log(sayAgain('hello',3))//'hellohellohello'