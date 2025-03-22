/*
✨ 1. Increment and Decrement Operators: ✨

// Q.1:
let i = 11; // 🚀 i ko 11 se initialize kiya gaya hai.
i = i++ + ++i; //  yahan do operations ho rahe hain: post-increment (i++) aur pre-increment (++i).
// i++ ➡️ matlab 'i' ki current value (11) use karo, phir 'i' ko 1 badhao.
// ++i ➡️ matlab 'i' ko 1 badhao, phir 'i' ki nayi value use karo.
// 🔍 let's break it down:
// 1. i++: i ki current value 11 hai, toh expression mein 11 use hoga. phir i 12 ho jayega.
// 2. ++i: i ki current value 12 hai, toh pehle i 13 ho jayega, phir 13 use hoga.
// 3. 11 + 13 = 24.
console.log(i); // 💯 isliye i ki value 24 print hogi.


// Q.2:
let a = 11; // 🚀 a ko 11 se initialize kiya gaya hai.
let b = 22; // 🚀 b ko 22 se initialize kiya gaya hai.
let c; // 📦 c ko declare kiya gaya hai, abhi iski value undefined hai.

c = a + b + a++ + b++ + ++a + ++b; // 🤯 complex expression, step by step dekhte hain.

// 🔍 Step-by-step evaluation:
// 1. a + b: 11 + 22 = 33.
// 2. a++: a ki current value 11 hai, toh 33 + 11 = 44. phir a 12 ho jata hai.
// 3. b++: b ki current value 22 hai, toh 44 + 22 = 66. phir b 23 ho jata hai.
// 4. ++a: a ki current value 12 hai, toh pehle a 13 ho jata hai, phir 66 + 13 = 79.
// 5. ++b: b ki current value 23 hai, toh pehle b 24 ho jata hai, phir 79 + 24 = 103.

console.log("a = " + a); // 💯 a ki final value 13 hogi.
console.log("b = " + b); // 💯 b ki final value 24 hogi.
console.log("c = " + c); // 💯 c ki final value 103 hogi.


// Q.3:
let z = 0; // 🚀 z ko 0 se initialize kiya gaya hai.
z = z++ - --z + ++z - z--; // 🤯 complex expression, step by step dekhte hain.

// 🔍 Step-by-step evaluation:
// 1. z++: z ki current value 0 hai, toh expression mein 0 use hoga. phir z 1 ho jata hai.
// 2. --z: z ki current value 1 hai, toh pehle z 0 ho jata hai, phir 0 use hoga.
// 3. 0 - 0 = 0.
// 4. ++z: z ki current value 0 hai, toh pehle z 1 ho jata hai, phir 1 use hoga.
// 5. 0 + 1 = 1.
// 6. z--: z ki current value 1 hai, toh expression mein 1 use hoga. phir z 0 ho jata hai.
// 7. 1 - 1 = 0.

console.log(z); // 💯 z ki final value 0 hogi.



// Q.4:
let boolValue = true; // 🚀 Variable 'boolValue' ko boolean value 'true' se initialize kiya gaya hai.

boolValue++; //  Increment operator '++' boolean 'boolValue' par apply kiya ja raha hai.
// JavaScript mein, boolean 'true' ko number '1' mein convert kiya jata hai.
// Phir, increment operator '1' ko '2' kar deta hai.
// Isliye, 'b' ki value '2' ho jati hai.

console.log(boolValue); // 💯 Console mein 'boolValue' ki value print ki jati hai, jo '2' hogi.

✨ 2. Complex increment and decrement operations : ✨

// Q5:
let i = 1, j = 2, k = 3; // 🚀 i, j, aur k ko initialize kiya gaya hai.
let m = i-- - j-- - k--; // 🤯 m ko calculate kiya ja raha hai post-decrement operators ke saath.

// 🔍 Step by step calculation of m:
// 1. i--: i ki current value 1 hai, toh 1 use hoga, phir i 0 ho jayega.
// 2. j--: j ki current value 2 hai, toh 2 use hoga, phir j 1 ho jayega.
// 3. k--: k ki current value 3 hai, toh 3 use hoga, phir k 2 ho jayega.
// m = 1 - 2 - 3 = -4

console.log("i = " + i); // 💯 i ki final value 0 hogi.
console.log("j = " + j); // 💯 j ki final value 1 hogi.
console.log("k = " + k); // 💯 k ki final value 2 hogi.
console.log("m = " + m); // 💯 m ki final value -4 hogi.

// Q6:
let a = 1, b = 2; // 🚀 a aur b ko initialize kiya gaya hai.
console.log(--b - ++a + ++b - --a); // 🤯 complex expression with pre-increment and pre-decrement.

// 🔍 Step by step calculation:
// 1. --b: b ki current value 2 hai, b 1 ho jayega, 1 use hoga.
// 2. ++a: a ki current value 1 hai, a 2 ho jayega, 2 use hoga.
// 3. ++b: b ki current value 1 hai, b 2 ho jayega, 2 use hoga.
// 4. --a: a ki current value 2 hai, a 1 ho jayega, 1 use hoga.
// 1 - 2 + 2 - 1 = 0

// Output: 💯 0

// Q7:
let i = 19, j = 29, k; // 🚀 i aur j ko initialize kiya gaya hai. k declare kiya gaya hai.
k = i-- - ++j + --j - ++j + --i - j-- + ++i - j++; // 🤯 very complex expression.

// 🔍 Step by step calculation:
// 1. i--: i ki current value 19, use 19, i 18.
// 2. ++j: j ki current value 29, j 30, use 30.
// 3. --j: j ki current value 30, j 29, use 29.
// 4. ++j: j ki current value 29, j 30, use 30.
// 5. --i: i ki current value 18, i 17, use 17.
// 6. j--: j ki current value 30, use 30, j 29.
// 7. ++i: i ki current value 17, i 18, use 18.
// 8. j++: j ki current value 29, use 29, j 30.

// k = 19 - 30 + 29 - 30 + 17 - 30 + 18 - 29 = -36

console.log("i = " + i); // 💯 i ki final value 18.
console.log("j = " + j); // 💯 j ki final value 30.
console.log("k = " + k); // 💯 k ki final value -36.

✨ 3. Syntax Errors and Logical Issues: ✨

// Q8:
let i = 11; // 🚀 i ko 11 se initialize kiya gaya hai.
let j = --(i++); // 🚨 This line will result in an error.

// 🚨 Explanation:
// i++ (post-increment) returns the current value of i (11) and then increments i to 12.
// --(11) is invalid syntax. You cannot apply the pre-decrement operator directly to a value.

// 💥 This code will throw a "SyntaxError: Invalid left-hand side expression in prefix operation"

// Q9:
let m = 0,
let n = 0; // 🚀 m aur n ko 0 se initialize kiya gaya hai.
let p = --m * --n * n-- * m--; // 🤯 Complex expression with pre/post decrement.

// 🔍 Step-by-step calculation:
// 1. --m: m becomes -1, use -1.
// 2. --n: n becomes -1, use -1.
// 3. n--: use -1, n becomes -2.
// 4. m--: use -1, m becomes -2.
// p = (-1) * (-1) * (-1) * (-1) = 1

console.log(p); // 💯 Output: 1

// Q10:
let a = 1; // 🚀 a ko 1 se initialize kiya gaya hai.
a = a++ + ++a * --a - a--; // 🤯 Complex expression.

// 🔍 Step-by-step calculation:
// 1. a++: use 1, a becomes 2.
// 2. ++a: a becomes 3, use 3.
// 3. --a: a becomes 2, use 2.
// 4. a--: use 2, a becomes 1.
// a = 1 + 3 * 2 - 2 = 1 + 6 - 2 = 5

console.log(a); // 💯 Output: 5

// Q11:
let a = 11++; // 🚨 This line will result in an error.

// 🚨 Explanation:
// You cannot use the post-increment operator directly on a numeric literal (11).
// It must be applied to a variable.

// 💥 This code will throw a "SyntaxError: Invalid left-hand side expression in postfix operation"

// Q12:
let i = 0, j = 0; // 🚀 i aur j ko 0 se initialize kiya gaya hai.
console.log(--i * i++ * ++j * j++); // 🤯 Complex expression.

// 🔍 Step-by-step calculation:
// 1. --i: i becomes -1, use -1.
// 2. i++: use -1, i becomes 0.
// 3. ++j: j becomes 1, use 1.
// 4. j++: use 1, j becomes 2.
// (-1) * (-1) * 1 * 1 = 1

// 💯 Output: 1

*/
