const player = {
    firstName:'sachin',
    lastName : 'tendulkar',
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    }
    }
    console.log(player.fullName()) //sachin tendulkar
