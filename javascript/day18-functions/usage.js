const numbers = [10,15,20,25,30]

// filter - get all numbers which are even

//const result = numbers.filter(function(ele){
  //  return ele%2==0
//})
//console.log(result)//[ 10, 20, 30 ]



//const result = numbers.filter((ele)=>{
  //  return ele%2==0
//})
//console.log(result)//[ 10, 20, 30 ]



//option 1- if only 1 argument is passed to the function, () are optional

//const result = numbers.filter(ele=>{
  //   return ele%2==0
  //})
  //console.log(result)//[ 10, 20, 30 ]


  // option 2- if there is only one statement to be executed inside a function, {} and the return keyword is optional

  const result = numbers.filter(ele=>ele%2==0)
  console.log(result)//[ 10, 20, 30 ]