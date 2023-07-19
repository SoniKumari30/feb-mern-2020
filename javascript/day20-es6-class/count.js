//property - count=0
//methods - getCount()
class Counter{
    constructor(){
        this.count=0
    }
    getCount(){
        return this.count
        
    }
        up(){
            this.count++
            return this.count
    }
    down(){
        this.count--
        return this.count
    }
    incrementBy(n){
        this.count+=n
        return this.getCount()
    }

}
const c1=new Counter()
console.log(c1.getCount())//0 
console.log(c1.up())//1
console.log(c1.incrementBy(5))//6