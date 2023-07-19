//without using Object.keys() method

const person = {
    id:1,
    name:'arjun',
    city:'bangalore'
}
function findkeys(person){
    const result = []
    for(const key in person) {
        result.push(key)
    }
    return result

}
console.log(findkeys(person)) //[ 'id', 'name', 'city' ]