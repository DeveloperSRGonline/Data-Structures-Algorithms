let prompt = require("prompt-sync")();
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

// let amount = Number(prompt("Enter an amount"))
// let dis = 0;

// if (amount >= 0 && amount <=5000) dis = 0;
// else if(amount >= 5000 && amount <=7000) dis = 5
// else if(amount >= 7000 && amount <=9000) dis = 10
// else if(amount >= 9000) dis = 20
// else console.log("Invalid input") 

// console.log(amount - ((dis*amount)/100))


// unit              |        Price 
// 0 - 100           |        Rs.4.2/unit
// 101 - 200         |        Rs.6/unit
// 201 - 400         |       Rs.8/unit
// more than 400     |       Rs.13/unit


// broutforce technique [#Aam jindgi]
// let unit = Number(prompt("Enter a unit"))
// let amount = 0;
// if (unit>0 && unit<=100){
//     amount = unit*4.2;
// }else if (unit>100 && unit<=200){//120
//     amount = (100*4.2) + (unit-100)*6
// }else if (unit>200 && unit<=400){// 250
//     amount = (100*4.2) + (100*6) + (unit-200)*8
// }else if(unit>400){
//     amount = (100*4.2) + (100*6) + (200*8) + (unit-400)*13
// }

// console.log(amount)

// Q.Bijli Bill calculator:

    let unit = Number(prompt("Enter a unit : "))
    // 700=>400=>200=>100 
    let amount = 0;
    if(unit>400){
    amount = (unit-400)*13;
    unit = 400;
    }
    if(unit>200 && unit<=400){
    amount = amount + (unit-200)*8;
    unit = 200;
    }
    if(unit>100 && unit<=200){
    amount = amount + (unit-100)*6;
    unit = 100;
    }
    amount = amount + unit*4.2;

    console.log("You have to pay : " + amount);


    // Q.Print karo 5 baar "hello world!"
    //    Le Begineer :
        //  console.log("Hello World!")
        //  console.log("Hello World!")
        //  console.log("Hello World!")
        //  console.log("Hello World!")
        //  console.log("Hello World!")
        //  console.log("Hello World!") 😂😂 // (it is bad practice)

        // loop me kaam karvane ke liye do tarike hai pahela hai loop and dusra hai recursion
        // Loop kya hota hai? ==> ek block of code hota hai jo repetedily task perform karvata hai at a certain condition.
        // Types of loop in js:
            // 1.Entry control (task excute karvane ke pahele condition puchi jayegi)
                    // a.for 
                        // -->(declare/initialization , condition, change) #optional📌
                            for(let i = 0; i<=5; i++){
                                console.log("Hello World!")// output: 5️⃣hello world!
                            }
                            // [ ye mcq's me puchha jata hai ]
                            // (let i = 0; i<=5;) -- kya ye valid code hai => yes it is a valid code 🛑 ♾️times chalega    
                            // (let i = 0;;) -- kya ye valid code hai => yes it is a valid code 🛑 ♾️times chalega
                            // (;;) -- kya ye valid code hai => yes it is a valid code 🛑 ♾️times chalega
                            // (;) -- agar ek bhi semicolon hat gaya toh ye ek invaid ❌code hai

                            // b.while
            // 2.Exit control (ek baar chalgaya ab dubara chalne ke liye condition aap ko valid karvani padegi)
                    // a.do while
                     