function greet(){
    var msg = 'hi there'  
    if(true) {
        (function(){
        var msg = 'hello there'
        console.log('inside block (if)',msg)

        })()
    }
    console.log('outside block (if)',msg)


}
greet()