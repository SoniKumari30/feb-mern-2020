const user={
    email:'a@gmail.com',
    password:'secret123',
    allowAccess:true,
    checkAccess:function(){
        return this.allowAccess
    },
    disableAccess:function(){
        this.allowAccess=false
        return this.allowAccess
    },
    enableAccess:function(){
        this.allowAccess=true
        return this.allowAccess
    },
    confirmPassword:function(pass){
         if(this.password==pass){
return true
        }
        else{
           return 'password confirmation does not match'
        }
        if(this.allowAccess==true){
            return true
        }

    }
}
console.log(user.confirmPassword('secret')) //'password confirmation does not match'
console.log(user.confirmPassword('secret123')) //true  

//it should return the value of allowAccess

console.log(user.checkAccess())//true

//it should make the value of allowAccess to false

console.log(user.disableAccess())//false
console.log(user.checkAccess())//false

//it should make the value of allowAccess to true
console.log(user.enableAccess())//true
console.log(user.checkAccess())//true
