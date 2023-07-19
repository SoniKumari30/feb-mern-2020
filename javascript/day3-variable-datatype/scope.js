// var

function greet(){
    console.log(msg) // undefined
    if(true) {
        var msg = 'hello there'
        console.log('inside block (if)',msg)//inside block (if) hello there

    
    }
    console.log('outside block (if)',msg)//outside block (if) hello there


}
greet()

// let

function artical(){

    //console.log(title)//ReferenceError: title is not defined
    
    if(true){
        let title = 'javascript is awesome'
        console.log('inside block (if)',title)//inside block (if) javascript is awesome

    }
   // console.log('outside block (if)',title) //ReferenceError: title is not defined

}
artical()
