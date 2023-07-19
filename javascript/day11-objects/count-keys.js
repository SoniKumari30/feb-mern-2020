const person = {
    name : 'arjun',
    city : 'bangalore',
    designation : 'full stack developer'
}
function countKeys(person){
    //const keys = Object.keys(person)
    //return keys.length

    let count = 0
    for(const key in person){
        count += 1
    }
    return count


    

}
console.log(countKeys(person))//3