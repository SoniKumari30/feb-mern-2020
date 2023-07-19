
//es5
/*
function declaration - gets hoisted
function add(){

}
*/

//function expression - do not get hoisted
const greet = function(name){
    return 'hi there '+ name
}
console.log(greet('soni'))