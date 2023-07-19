function strcount(str, char){


let count = 0

// initialization; condition; incrementation

for(let i= 0;i< str.length; i++){
    if(str[i] == char){
        count = count + 1

    }
}
return count
}
console.log(strcount('hello','o')) //1
console.log(strcount('hello','l')) //2
