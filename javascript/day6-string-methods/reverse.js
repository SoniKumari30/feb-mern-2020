//const name = 'dct'
// let result = ''
// result = result+name[0] //'d'
// result = result+name[1] //'dc'
// result = result+name[2] //'dct'

// console.log(result)//dct


// result=name[0]+result //'d'
// result= name[1]+result //'cd'
// result=name[2]+result //'tcd


// console.log(result)//tcd

function reverseStr(str){
    let result = ''
    for(let i = 0; i < str.length;i++){
        result = str[i] + result
    }
return result
}
console.log(reverseStr('dct')) //'tcd
//   const name = 'soni'
//  console.log(name.split('').reverse().join(''))