let prompt = require('prompt-sync')(); // User input lene ke liye prompt-sync module ka use kar rahe hain
let year = Number(prompt('Enter a year : ')) // User se ek year input lene ke liye prompt karte hain

let isLeap = false; // Leap year check karne ke liye ek flag variable banate hain
if(year % 4 == 0){ // Agar year 4 se divisible hai to check karte hain
    if(year % 100 == 0){ // Agar year 100 se divisible hai to aur check karte hain
         if(year % 400 == 0) isLeap = true; // Agar year 400 se divisible hai to leap year hai
         else isLeap = false; // Agar 400 se divisible nahi hai to leap year nahi hai
    }else {
        isLeap = true; // Agar 100 se divisible nahi hai to leap year hai
    }
}else isLeap = false; // Agar 4 se divisible nahi hai to leap year nahi hai

console.log(isLeap ? `${year} is a leap year` : `${year} is not a leap year`) // Result print karte hain

// Conclusion :

// Yeh program yeh check karta hai ki diya gaya saal leap year hai ya nahi, Gregorian calendar ke rules ke hisaab se.Rules: Agar saal 4 se divisible hai, to leap year ho sakta hai.Lekin agar saal 100 se divisible hai, to leap year tabhi hoga jab wo 400 se bhi divisible ho.Agar saal 4 se divisible nahi hai, to wo leap year nahi hoga.


// different way of solving this question :

// let prompt = require('prompt-sync')();
// let year = Number(prompt('Enter a year : '))

// let isLeap = false;

// if(year % 4 == 0 && year % 100 != 0){
//     isLeap = true; // 2024 , 2020 , 2028
// }else if(year % 400 == 0){
//     isLeap = true; // 400 , 800 , 1200
// }

// if(isLeap){
//     console.log('Leap year');
// }else{
//     console.log('No Leap year');
// }



//                              Thank you                   