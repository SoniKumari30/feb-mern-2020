const developer ={
    id:1,
    name:'soni',
    skills:['js', 'react'],
    details:function(){
        // this-current object
        //this.skills.forEach(function(skill){
            //this-global object
           // console.log(`${this.name} knows ${skill}`)
        //})

        // stick to using for loop
        for(let i=0; i<this.skills.length; i++){
console.log(`${this.name} knows ${this.skills[i]}`)
        }
    }
    }
developer.details()/*soni knows js
soni knows react*/
