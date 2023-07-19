let aperson = {
    name: 'arjun'
}

let bperson = Object.assign({}, aperson)
console.log(aperson, bperson)

aperson.name = 'priya'
console.log(aperson, bperson)