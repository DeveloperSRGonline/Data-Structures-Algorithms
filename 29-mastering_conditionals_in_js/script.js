console.log("Hello Shivam!")

// let year = Number(prompt("Enter the year "))
// let isLeap = false;

// if(year % 4 == 0){
//     if(year % 100 == 0){
//         if(year % 400 == 0) isLeap = true;
//         else isLeap = false;
//     }else isLeap = true;
// }else isLeap = false;

// console.log(isLeap ? "Your year is leap YEAR!✅😁🌟" : "Your year is not leap YEAR!❌")


// agar koi year 4 se chala jaye toh ye leap year hai except 100 (bas vo 100 se nahi jana chahiye ) , par agar vo 4 se bhi chala gaya and 100 se bhi chala gaya toh ye must hai ki vo 400 se bhi jana chahiye. 

// ab dusri condition 

// if((year % 4 == 0 && year % 100 != 0)){// 2024 2028 2020
//     console.log("Leap Year");
// } else if(year % 400 == 0){ // 1200 1600 2000
//     console.log("Leap Year");
// }else console.log("not leap year")


// Q.shop discount: price user give you have to calculate payable amount
/* 
        Amount         |     Discount 
     0 - 5000          |        0%
     5001 - 7000       |        5%
     7001 - 9000       |       10%
     more than 9000    |       20%
*/

// let amount = Number(prompt("Enter an amount"))

// if (amount >= 0 && amount <=5000){
//     console.log("No Discount")
// }else if(amount >= 5000 && amount <=7000){
//     console.log(amount - ((5*amount)/100))
// }else if(amount >= 7000 && amount <=9000){
//     console.log(amount - ((10*amount)/100))
// }else if(amount >= 9000){
//     console.log(amount - ((20*amount)/100))
// }else{
//     console.log("Invalid input")
// }

// more efficent code 

let amount = Number(prompt("Enter an amount"))
let dis = 0;

if (amount >= 0 && amount <=5000) dis = 0;
else if(amount >= 5000 && amount <=7000) dis = 5
else if(amount >= 7000 && amount <=9000) dis = 10
else if(amount >= 9000) dis = 20
else console.log("Invalid input") 

console.log(amount - ((dis*amount)/100))