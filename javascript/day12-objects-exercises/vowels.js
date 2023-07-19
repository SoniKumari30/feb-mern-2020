const str = 'dctacedamy'

// find the count of vowels in the given string
function countVowels(str){
    let count = 0
    const vowels = 'aeiou'
    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count

}
console.log(countVowels(str)) //3
                      
// count number of times, each of the vowels appear in the string
function countEach(str){
    const result = {a:0, e:0, i:0, o:0,u:0}
    //const vowels = 'aeiou'
    for(let i = 0; i<str.length; i++){
       // if(vowels.includes(str[i])){
           //result[str[i]]=result[str[i]]+1
            //result['a']=result['a']+1
           //}
        if(result.hasOwnProperty(str[i])){
            result[str[i]]= result[str[i]]+1
            
        }
    }

return result
}
console.log(countEach(str)) // {a:2, e:1, i:0, o:0,u:0}
console.log(countEach('aaaeeiiooouaeiou')) //{ a: 4, e: 3, i: 3, o: 4, u: 2 }