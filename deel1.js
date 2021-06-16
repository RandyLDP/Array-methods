const addTheWordCool = ["nice", "awesome", "tof"];

addTheWordCool.push('cool');

console.log(addTheWordCool)

console.log(addTheWordCool.length)
console.log(addTheWordCool[0])
console.log(addTheWordCool [addTheWordCool.length-1])

let presidents = ["Trump", "Obama", "Bush", "Clinton"] 

let president = presidents.slice(1);
let presidente = presidents.splice(1)
 console.log(president);
 console.log(presidente)

const winc = ['Winc', 'Academy', 'is', 'leuk', ';-}']
let stringTogeather = winc.join(' ')
console.log(stringTogeather)

let funct1 = [1,2,3]
let funct2 = [4,5,6]
let combine = funct1.concat(funct2);
console.log(combine)