// Q.2 
let a = 11;
let b = 22;
let c;

c = a + b + a++ + b++ + ++a + ++b;

console.log("a = " + a)//13
console.log("b = " + b)//24
console.log("c = " + c)//103