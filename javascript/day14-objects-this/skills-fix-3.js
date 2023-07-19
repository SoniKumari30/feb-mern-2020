const developer ={
    id:1,
    name:'soni',
    skills:['js', 'react'],
    details:function(){
        this.skills.forEach(function(skill){
           console.log(`${this.name} knows ${skill}`)
        }.bind(this))
    }
    
}
developer.details()/*soni knows js
soni knows react*/
