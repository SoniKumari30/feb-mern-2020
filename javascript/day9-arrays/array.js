//const array = ['soni', 'soni']
function removeDup(soni){
    let str = ""
    for (let i=0; i<soni; i++){
        if(!str .includes(soni[i])){
            str = str.concat (soni[i])
        }
    }
    return str
}
let str = 'sonisoni'
console.log(removeDup(str))
