const source = 'bangalore' , destination = 'mysore',
distance = 140, time = '3 hours 30 mins'

// the distance between bangalore and mysore is 140 kms and the time taken to travel is 3 hours 30 mins

console.log('the distance between ' + source + ' and ' + destination + ' is ' + (distance + 4) + ' kms and the time taken to travel is '+time)

//es6 - string literals || template string || template literals

const name = 'soni'
console.log('hello ' + name) // 'hello soni'
console.log(`hello ${name}`)
console.log(`the distance between ${source} and ${destination} is ${distance + 4} kms and the time taken to travel is ${time}.`)