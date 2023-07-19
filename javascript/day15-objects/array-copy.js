let xnumbers = [10,20]


// 1st approach - concat 
// let znumbers = [].concat(xnumbers)
// console.log(xnumbers, znumbers) // [10,20] [10,20]
// xnumbers.push(30)
// console.log(xnumbers, znumbers)//[ 10, 20, 30 ] [ 10, 20 ]

//2nd approach - slice
let ynumbers = xnumbers.slice(0)

console.log(xnumbers, ynumbers) // [10,20] [10,20]
xnumbers.push(30)
console.log(xnumbers, ynumbers) // [10,20,30] [10,20]
