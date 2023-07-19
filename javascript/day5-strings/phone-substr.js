function phoneFormat(str){
    const first = str.substr(0,3)
    const second = str.substr(3,3)
    const third = str.substr(6)
    
    //es6 template string
    
    return(`(${first}) ${second}-${third}`)
         
    }
    console.log(phoneFormat('1234567890')) // '(123) 456-7890'
    console.log(phoneFormat('5555550000')) // '(555) 555-0000'
    
    





    