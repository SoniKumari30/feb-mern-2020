const developer ={
    id:1,
    name:'soni',
    skills:['js', 'react'],
    details:function(){
        const _this = this
        this.skills.forEach(function(skill){
            console.log(`${_this.name} knows ${skill}`)
        })
    }
    
}
developer.details()/*soni knows js
soni knows react*/
