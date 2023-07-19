const values = [
    [10,20,5,7],
    [30,40,10],
    [50,60],
    [10]
]
//function printArray(values){
    
    //for(let i=0;i<values.length;i++){
      //  console.log('row',i)
        //for(let j=0;j<values[i].length;j++){
          //  console.log(values[i][j])
        
   //}
//}
////}
function printArray(values){
    values.forEach(function(ele,i){
      console.log('row',i, ele)
        ele.forEach(function(n){
            console.log(n)
        })

    })
}

printArray(values) //undefined
/*
row 0
10
20
5
7
row 1
30
40
10
row 2
50
60
row 3
10
*/
