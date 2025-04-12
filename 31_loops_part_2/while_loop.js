let prompt = require('prompt-sync')();
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 3) break;
//     i++; // Increment i to avoid an infinite loop
// }

//declare/initialize , condition , change -- for
//declare/initialize
// while(condition){
    // change
// }

//printing n times hello world
// let n = Number(prompt('Enter a number : '))
// let i = 1;
// while(i<=n){
//     console.log('Hello world')
//     i++;
// }

//sum of n terms
let n = Number(prompt('Enter a number : '))
let i = 1,sum = 0;

while(i<=n){
    sum = sum + i
    i++
}
console.log(sum)

//for aur while me farak kya hai 
// for --> jab bhi hame iteration pata ho toh 
// while --> jab hame iteration pata na ho