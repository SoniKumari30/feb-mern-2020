function copyStr(str){
    let result = ''
    for(let i=0;i<str.length;i++){
        result = result + str[i]
    }
    return result
}
console.log(copyStr('dct')) // 'dct'
function swapCase(str){
    let result = ''
    for(let i=0;i<str.length;i++){
if(str[i].toUpperCase()== str[i]){
    result =result + str[i].toLowerCase()
}
else{
    result = result+str[i].toUpperCase()
}
}
return result
}
console.log(swapCase('BaNgaLOre')) // 'bAnGAloRE'
console.log(swapCase('dctDCT')) // 'DCTdct'