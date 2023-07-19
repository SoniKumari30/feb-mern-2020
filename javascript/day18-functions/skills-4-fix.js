 // const developer ={
//     id:1,
//     name:'soni',
//     skills:['js', 'react'],
//     details:function(){
//         this.skills.forEach((skill)=> {
//             console.log(`${this.name} knows ${skill}`)
//         })
//     }
    
// }
// developer.details()/*soni knows js
// soni knows react*/


//inside an arrow function, the value of this, will always be the value of outside the function, because inside an arrow function, this does not have a value of this own


console.log(this)//{}

// const printEs5 = function(){
//     console.log(this)//global object
// }
// printEs5()


const printEs5 = ()=>{
         console.log(this)//{}
     }
     printEs5()//{}



