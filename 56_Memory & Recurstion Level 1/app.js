// stack -- it is a static memory 
// 5%  -- stack 
// 95% -- heap 
// stack --> primitive variable --> string,number,boolean , null,undefined,BigInt
// stack --> function call 

// stack  based on LIFO
// push & pop - are operations 
// peak is the position
// stack memory mein variables and function ko rakha jata hai 

// agar aap function me kuch bhi return nahi kar rahe phir bhi function me by default return laga hota  hai 
// agar return nahi lagi hoti toh app ka function kabhi terminate nahi hota 

// great()
// function great(){
//     console.log('good morning pineapple')
//     fun()
// }

// function fun(){
//     console.log('funnning guyssss...')
//     kuchBhi()
// }

// function kuchBhi(){
//     console.log('kuchBhi ke andar kuchBhi')
// }


// function temp(a){
//     if(a == 0) return
//     console.log('mai toh chalunga')
// }
// temp(0)

// return type - void , number, string,etc.

// void ek aisa return type hai jise aap return toh karte ho par value nahi deta 
// --  yane function return hote waqt value ko leke aaye toh us value ka toh type toh hoga hi use hi return type bolte hai 

// for the leatcode technique 

// function temp(a){
//         if(a == 0) return 10
//         console.log('mai toh chalunga')
//         return 0 // ye ek achhi practice
//     }
//     temp(0)


// Recursion 
// 1.what
// -- the function call itself until and unless it not found base case condition(rukhne wali condition)
// 2.why
// -- badi badi problems ko chhoti chhoti problems mein convert kar deta hai 
            

// printing n times hello world 

let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a number : '))

// using normal for loop
// for(let i = 1;i<=n;i++){
//     console.log('hello world')
// }


// using recursion
// temp(n)
// function temp(n){
//     console.log('hello world')
//     temp(n)
//} it will give : maximum call stack size exceeded
// stack overflow 


// temp(n)
// function temp(n){
//     if(n == 0) return
//     console.log('hello world')
//     temp(n-1)//(a--) ye nahi likh sakte lekin (--a) ye likh sakte ho
// }


// printing values in dreceasing order from n to 1.
temp(n)
function temp(n){
    if(n == 0) return
    process.stdout.write(n + " ")
    temp(n-1)
}
// output : 10 9 8 7 6 5 4 3 2 1