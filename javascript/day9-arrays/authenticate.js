const passwords = ['password123',
'dct@academy',
'qwerty',
'secret123',
'gopro123']
function authenticate(passwords, str){
    let result = 'not authenticated'
    for(let i = 0; i<passwords.length; i++){
        if(passwords [i]== str){
            result = 'authencated'
            break
        }
    }
    return result
}
console.log(authenticate(passwords, 'password123'))//'authenticated'
console.log(authenticate(passwords, 'qwerty'))//'authenticated'
console.log(authenticate(passwords, 'xyz'))//'not authenticated'