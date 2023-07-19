function chopStr(str, limit){
    let result =[]
    for(let i=0;i<str.length;i++){
        result=result.push(str[i])
        result=str.split()
    }
    return result

}
console.log(chopStr('resource', 2)) //['re', 'so', 'ur', 'ce']
console.log(chopStr('resource', 3)) //['res', 'our', 'ce']