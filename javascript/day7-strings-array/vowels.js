//function countVowels(str){
  //  let result = 0
    //for(let i=0; i<str.length;i++){
      //  if((str[i]=='a') ||(str[i]=='e') ||(str[i]=='i') ||(str[i]=='o')||(str[i]=='u')){


        //result++
        //}
    //}
    //return result
//}

//console.log(countVowels('dctacademy'))//3

function countVowels(str){
    str=str.toLowerCase()
    let result = 0
    const vowels = 'aeiou'
    for(let i = 0;i<str.length;i++){
        if(vowels.includes(str[i])){
            result++
        }
    }
    return result
}
console.log(countVowels('academy')) // 3