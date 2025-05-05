// 🔢 Basic Input/Output & Operators

// Q.Write a program to take two numbers from the user and print their:

//     Sum 
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    console.log("Sum:" , sum)

//     Difference
    let diff = num2 - num1;
    console.log("Difference : ",diff)

//     Product
    let product = num1 * num2;
    console.log("Product : ",product)

//     Quotient
    let Quotient = num2 / num1;
    console.log("quotient : ", Quotient)

//     Remainder
    let Remainder = num2 % num1;
    console.log("Remainder : ",Remainder)

//     Take one number as input and:
    let prompt = require('prompt-sync')();
    let number = Number(prompt("Enter a number : "));
    console.log("Number : ",number)

//     Increment it using a unary operator.
    number++;
    console.log("Incremented Number : ",number)

//     Decrement it using a unary operator.
    number--;
    console.log("Decremented Number : ",number)

// 🔄 Swapping Numbers
// Q.Take two numbers and swap them using:

//     using third variable
    let a = 5;
    let b = 10;
    console.log("Before Swapping : a = " + a + "b = " + b)
    let temp = a; // here temp is a third variable
    a = b; // a becomes 10
    b = temp; // b becomes 5
    console.log("After Swapping : a = " + a + "b = " + b)

//     No third variable (use arithmetic)
     a = a + b; 
     b = a - b; 
     a = a - b;
     console.log("After Swapping : a = " + a + "b = " + b)

//     Destructuring method: [a, b] = [b, a]
     [a , b] = [ b , a]
     console.log("After Swapping : a = " + a + "b = " + b)


// 🔍 Relational and Logical Operators

// Q.Write a program to check if the first number is greater than the second.

let number1 = 10;
let number2 = 20;

if(number1 > number2) console.log("Number 1 is greater than Number 2")
else if(number1 < number2) console.log("Number 1 is less than Number 2")
else console.log("Both numbers are equal")

// Q.Take two boolean inputs and demonstrate:

//         Logical AND (&&)

//         Logical OR (||)

//         Logical NOT (!)

// 🧠 Conceptual Thinking

// Q.Check if a given number is positive, negative, or zero.

// Q.Take three numbers and find the largest among them using relational operators.

// Q.Write a program to check if a number is even or odd using the modulus operator.

// Q.Take two numbers and check if both are even using logical operators.