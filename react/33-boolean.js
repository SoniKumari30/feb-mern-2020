const values ={
    name:true,
    email:true,
    passwors:true
}
function changeValue(values, bool){
    for(const key in values){
        values[key]=bool
    }
    return values
}
console.log(values)
console.log(changeValue(values, false))

//in react

//this.ListeningStateChangedEvent(changeValue(values, false))