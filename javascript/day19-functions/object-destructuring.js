//es5

var person ={
    fname:'soni',
    ccity:'bangalore'

}
var name = person.fname, city=person.ccity
console.log(name,city)//soni bangalore


//es6- object destructuring

const product ={
    id:1,
    rating:4.5,
    pname:'marker',
    price:15
}
const{id,pname}=product
console.log(id,pname)//1 marker
