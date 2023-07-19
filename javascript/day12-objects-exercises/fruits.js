const fruits = ['apple', 'mango', 'kiwi']
function fruitsObj(fruits){
    const result = {}
    for(let i=0; i<fruits.length;i++){
        result [fruits[i]] = fruits[i].length 

 }
 return result

}
console.log(fruitsObj(fruits))// {apple:5, mango:5, kiwi:4}
console.log(fruitsObj(['apple']))// {apple:5}