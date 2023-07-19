//falsy = 0, '',false, undefined, NaN, null
//truthy = 1, -1, 'dct', true, [], ['a'], {}

const values = [0, '',false, undefined, NaN, null,
1, -1, 'dct', true, [], ['a'], {}]
function filterValues(values){
   // const result = []
    //for(let i=0;i<values.length;i++){
    //if(values[i]){
      //  result.push(values[i])
    //}
//}
//return result

    
    
     const result = values.filter(function(ele){
        return ele
    })
    return result
    }
    console.log(filterValues(values)) //[ 1, -1, 'dct', true, [], [ 'a' ], {} ]

    function filterFalseValues(values){
       // const result = []
        //for(let i= 0;i<values.length;i++){
          //  if(!values[i]){
            //    result.push(values[i])
        //}
    
        //}
        //return result
        const result = values.filter(function(ele){
            return !ele
        })
        return result
    
    
}
console.log(filterFalseValues(values)) //[ 0, '', false, undefined, NaN, null ]

