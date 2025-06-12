
# 📘 DSA with JavaScript - Beginner Friendly Hinglish Guide

---

## 1. ✅ Conditional Statements

**📌 Jab hume kisi condition ke basis par decision lena ho, tab conditional statements ka use hota hai.**

### 🔹 Types:
- `if`, `if-else`, `if-else if`, `switch`

### 🔑 Key to Remember:
> Condition ke base par code execute karna ho toh conditional statement use karo.

### 💡 Example:
```js
let age = 18;
if(age >= 18){
  console.log("Eligible for vote");
} else {
  console.log("Not eligible");
}
```

### 💬 Interview Q:
**Q: Switch vs if-else?**  
A: `switch` specific values ke liye, `if-else` conditions ke liye.

### 🧠 Practice:
- Write a program to check if a number is positive, negative or zero.

---

## 2. 🔁 Loops and Patterns

**📌 Repeatable tasks ke liye loops ka use hota hai.**

### 🔹 Types:
- `for`, `while`, `do-while`
- `break`, `continue`

### 🔑 Key to Remember:
> Loop = Repeat until condition false.

### 💡 Example:
```js
for(let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
```

### 💬 Interview Q:
**Q: Difference between while and do-while?**  
A: `while` pehle condition check karta hai, `do-while` pehle run karta hai.

### 🧠 Practice:
- Print triangle pattern.
- Print reverse number triangle.

---

## 3. 🧺 Arrays

**📌 Similar elements ka ordered collection.**

### 🔹 Important Methods:
`push`, `pop`, `shift`, `unshift`, `splice`, `slice`

### 🔑 Key to Remember:
> Arrays are mutable and index starts from 0.

### 💡 Example:
```js
let fruits = ["apple", "banana"];
fruits.push("mango");
```

### 💬 Interview Q:
**Q: How to remove duplicates from array?**  
A: Use `Set`: `let unique = [...new Set(arr)]`

### 🧠 LeetCode:
- Two Sum
- Move Zeroes

---

## 4. 🧱 OOP in JS

**📌 Real-world modeling: class + object.**

### 🔹 Core Concepts:
- Class, Object, Constructor
- `this`, `new` keyword

### 🔑 Key to Remember:
> Object = Data + Behavior

### 💡 Example:
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}
```

### 💬 Interview Q:
**Q: Class vs Object?**  
A: Class is blueprint; object is instance.

### 🧠 Practice:
- Create Student class and greet.

---

## 5. ✂️ Strings

**📌 Characters ka collection.**

### 🔹 Methods:
`slice`, `substring`, `replace`, `includes`, `split`

### 🔑 Key to Remember:
> Strings are immutable.

### 💡 Example:
```js
let str = "Hello";
console.log(str.toUpperCase());
```

### 🧠 LeetCode:
- Valid Anagram
- Reverse String

---

## 6. ⏱ Time & Space Complexity

**📌 Code ki efficiency measure karne ke liye.**

### 🔹 Big-O:
- O(1), O(n), O(n²)

### 🔑 Key to Remember:
> Nested loop = High complexity

### 💬 Interview Q:
**Q: Best way to reduce complexity?**  
A: Avoid nested loops, use efficient algorithms.

---

## 7. ➕ Math

**📌 Maths logic coding mein kaam aate hain.**

### 🔹 Useful Methods:
`Math.pow()`, `Math.sqrt()`, `Math.floor()`

### 🔑 Key to Remember:
> Use for calculations, digits, prime, etc.

### 💡 Example:
```js
console.log(Math.pow(2, 3)); // 8
```

---

## 8. 🔁 Advanced Arrays

### 🔹 Concepts:
- Prefix Sum, Sliding Window, Two Pointers

### 💡 Prefix Example:
```js
let arr = [1, 2, 3];
let prefix = [arr[0]];
for(let i=1;i<arr.length;i++){
  prefix[i] = prefix[i-1] + arr[i];
}
```

### 🧠 LeetCode:
- Subarray Sum Equals K

---

## 9. 📊 Sorting

**📌 Elements ko order mein lana.**

### 🔹 Types:
- Bubble, Selection, Insertion, Merge, Quick

### 🔑 Key to Remember:
> Always know time complexity.

### 💡 Example (Bubble Sort):
```js
for(let i=0;i<n-1;i++){
  for(let j=0;j<n-i-1;j++){
    if(arr[j] > arr[j+1]){
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
  }
}
```

---

## 10. 🔍 Binary Search

**📌 Fast searching on sorted array.**

### 🔑 Key to Remember:
> Divide and conquer approach

### 💡 Example:
```js
function binarySearch(arr, target){
  let start=0, end=arr.length-1;
  while(start<=end){
    let mid = Math.floor((start+end)/2);
    if(arr[mid] === target) return mid;
    else if(arr[mid] < target) start = mid+1;
    else end = mid-1;
  }
  return -1;
}
```

---

## 11. 🧠 Hashing (Set, Map)

**📌 Fast search, frequency count**

### 🔑 Key to Remember:
> Constant time access

### 💡 Example:
```js
let set = new Set([1,2,3]);
console.log(set.has(2)); // true

let map = new Map();
map.set("name", "shivam");
```

### 🧠 LeetCode:
- Two Sum using Map

---

## 12. 🔗 Linked List

**📌 Node-based linear structure**

### 🔹 Node = data + next

```js
class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
```

### 🔑 Key to Remember:
> Dynamic memory, sequential

---

## 13. 📥 Queue

```js
class Queue {
  constructor(){ this.items = []; }
  enqueue(val){ this.items.push(val); }
  dequeue(){ return this.items.shift(); }
}
```

---

## 14. 📤 Stack

```js
class Stack {
  constructor(){ this.items = []; }
  push(val){ this.items.push(val); }
  pop(){ return this.items.pop(); }
}
```

---

## 15. 🌀 Recursion & Backtracking

**📌 Function that calls itself**

```js
function fact(n){
  if(n === 0) return 1;
  return n * fact(n - 1);
}
```

### 🔑 Key to Remember:
> Base case is must

---

## 16. 🌳 Tree

```js
class TreeNode {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

---

## 17. 🌲 Binary Search Tree

**📌 Sorted tree structure**

```js
class BSTNode {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
```

---

**🎯 Final Tips:**
- Har topic pe 2-3 question banake solve karo.
- Dry-run karna mat bhoolna.
- Apna logic notebook banao.

**🚀 Happy Coding!**
