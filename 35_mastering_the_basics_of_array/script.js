/*What is a Strong Number?

A Strong Number is a special type of number in mathematics where the sum of the factorials of its digits is equal to the number itself. In other words, if you take each digit of the number, compute its factorial, and then sum these factorials, the result should be the original number.

Examples

Example 1

Consider the number 145:

The digits are 1, 4, and 5.

The factorial of 1 is 1! = 1.

The factorial of 4 is 4! = 24.

The factorial of 5 is 5! = 120.

Summing these factorials: 1 + 24 + 120 = 145.*/
/*
yane aisa samjho ki 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145
                          |     |    |
                          |_____|____|
                          sabhi individual factorial ka sum 145 hai yane vo number strong number hai 
    do loop lagege ek -> ek loop - digit ko seperate karega 
                      -> ek loop - digit ka factorial nikalega

let prompt = require("prompt-sync")();
let num = prompt("Enter the number: ");

let ans = 0;

while(n>0){
    let digit = n%10;
    let fact = 1;
    for(let i=0; i<=digit; i++){
        fact = fact * i;
    }
    ans = ans + fact;
    n = Math.floor(n/10)
}
if(ans == num)console.log("Strong Number");
else console.log("Not a Strong Number");























































*/ 