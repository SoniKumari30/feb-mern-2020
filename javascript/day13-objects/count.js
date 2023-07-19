const count = {
    value:0,
    getValue:function(){
        return this.value

    },

up: function(){
        return this.value =this.value+1
        return this.value
        
},
down:function(){
    return this.value=this.value-1
   // return this.value
   return this.getValue()
} ,
reset:function(){
    this.value =0
    return this.value
},
incrementBy:function(n){
    this.value = this.value+n
    return this.value
},
decrementBy: function(n){
    this.value =this.value-n
    return this.value

}

}
console.log(count.getValue()) //0
console.log(count.up()) //1
console.log(count.up()) //2
console.log(count.getValue()) //2
console.log(count.down()) //1
console.log(count.getValue()) //1
console.log(count.reset()) //0
console.log(count.incrementBy(4)) //4
console.log(count.incrementBy(5)) //9
console.log(count.decrementBy(2)) //7


