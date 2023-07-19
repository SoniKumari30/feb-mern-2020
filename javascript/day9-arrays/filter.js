const values= [10, 'dct', 20, 'academy', 'bangalore',15]
function filterStr(values){
   // const result = []
    //for(let i=0;i<values.length;i++){
      //  if(typeof values[i]=='string'){
        //    result.push(values[i])
        //}
        
    //}
    //return result

   // const result = []
  //values.forEach(function(ele){
    //if(typeof ele=='string'){
      //  result.push(ele)
    //}
//})
//return result

const result = values.filter(function(ele){
    return typeof ele == 'string'
})
return result

}
console.log(filterStr(values)) //['dct', 'academy', 'bangalore']

