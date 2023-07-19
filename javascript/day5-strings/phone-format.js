function phoneFormat(str){
const first = str.slice(0,3)//'123'
const second = str.slice(3,6)//'456'
const third = str.slice(6)//'789'

// es5 string concat

return '(' + first + ')' + ' ' + second + '-' + third

//es6 template string

return(`(${first}) ${second}-${third}`)

return(`(${str.slice(0,3)}) ${str.slice(3,6)}-${str.slice(6)}`)


}

console.log(phoneFormat('1234567890')) // '(123) 456-7890'
console.log(phoneFormat('5555550000')) // '(555) 555-0000'

 