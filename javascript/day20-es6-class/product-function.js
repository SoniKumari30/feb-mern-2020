//es5-constructor function
//properties-id, name, price
//methods-details

function Product(id,name,price){

//assigning initial values to our properties is done inside function 

this.id=id
this.name=name
this.price=price

this.details=function(){
    return this.id + ' ' + this.name + ' '+this.price
}

}

const p1=new Product(1,'marker',15)
console.log(p1.details())//1 marker 15