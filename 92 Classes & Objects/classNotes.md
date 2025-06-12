
# 🧑‍💻 OOPS - Object Oriented Programming System

OOPS is a **paradigm** (procedure/process) based on **Object**.

## 🌍 Object - Real World Entity

A **system/environment** is made up of **objects**.

---

## ❓ Why Do We Need OOPS?

An **Object** is a **collection of**:
- **Data** (properties)
- **Behavior** (methods)

Example:

**Student:**
- Property: `age` 🏷️
- Behavior: `wake up early` ⏰

OOPS provides a structured **procedure/model**.

### 🔄 Analogy

Traveling from A --------- B:

- 🚲 Cycle  
- 🏍️ Bike  
- 🚗 Car  
- 🚙 Jeep  

🛵 Bike - is one of the ways to travel (like OOPS is one of the ways to program).

---

## ⚔️ OOPS vs Functional Programming

### Functional Programming:
- ❌ Data (property) and method (behavior) are **separated**
- 😓 **Hard to manage**

### OOPS:
- ✅ **Combines** data and behavior into one entity (object)
- 😃 Easy to manage
- 🔁 Reusability
- ⚡ Efficiency
- 🔒 Security

---

## 🏛️ 4 Pillars of OOPS

*(To be covered later)*

---

## 👨‍💻 Class & Object in JavaScript

In JS, **everything is an object**.

### 🔹 Literal Object Example:

```js
let person = {
  name: "shivam",
  age: 21,
  gender: "M",
  getSurname() {
    return "garade";
  }
};

console.log(person.getSurname()); // garade
console.log(person);
// { name: 'shivam', age: 21, gender: 'M', getSurname: [Function: getSurname] }
```

🔁 **Problem:** If we want 20 or 50 such objects, we’ll have to manually copy and edit — **redundancy**!

---

## 🏠 Blueprint vs Real Object Analogy

- 🧾 50 Homes = 50 Blueprints?
- 👨‍🎓 1000 Students = 1000 Forms?

✅ **Create 1 Blueprint (class)** → Reuse it to make 1000 actual objects

- Class = Blueprint (🧾 does **not** occupy memory)
- Object = Real instance (🏠 occupies memory)

---

## 🔧 Constructor Function

A **constructor** is a **special type of method** used to create/initialize objects.

### 💡 Syntax:

```js
let Animal = function(username, age, gender) {
  this.username = username;
  this.age = age;
  this.gender = gender;
};
```

### 🧪 Object Creation:

```js
let student1 = new Animal("ravi", 15, "male");
let student2 = new Animal("sara", 14, "female");
let student3 = new Animal("john", 16, "male");
let student4 = new Animal("anita", 15, "female");
let student5 = new Animal("mike", 17, "male");
let student6 = new Animal("lisa", 16, "female");

console.log(student3);
// Output: Animal { username: 'john', age: 16, gender: 'male' }
```

🗣️ `this` refers to the **current object being created** using `new`.

---

# 📘 JavaScript - Class, Prototype, and OOP Explained

## ✅ Class in JavaScript (Syntactic Sugar)

```js
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let obj = new Student('shivam', 21);
let obj2 = new Student('sagar', 12);
In JavaScript, class is just syntactic sugar.

Internally, it still uses functions and prototypes.

This makes JS appear similar to class-based languages like Java or C++.

But under the hood, it’s prototype-based.

❓ If JS has no true classes, then why use class?
JS is object-oriented not because of class, but because of prototypes.

There are 3 major ways to create objects in JS:

Object Literals

Constructor Functions

Classes (Syntactic Sugar)

🧬 JavaScript is a Prototype-Based Language
➕ What is a Prototype?
A prototype is an object from which other objects inherit properties.

It’s used for inheritance in JavaScript.

🔄 Inheritance in JS
In languages like Java or C++, inheritance is class-based.

In JS, inheritance is object-to-object using prototypes.

js
Copy
Edit
let object = {
    display() {
        console.log("something");
    }
};
🧪 Prototype Example with Arrays
js
Copy
Edit
let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(); // Works because push() is from Array prototype
🧠 Note: We never created push() — it came from the Array.prototype.

📚 Analogy:

Like inheriting land or traits from your parents.

Similarly, objects in JS inherit methods and properties via prototype chain.

📦 Custom Prototype Inheritance Example
js
Copy
Edit
const student = {
    name: "Amit",
    age: 21
};

const personPrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
    isAdult() {
        return this.age >= 18;
    }
};

student.__proto__ = personPrototype; // Manual prototype inheritance

student.greet(); // Hello, my name is Amit
console.log(student.isAdult()); // true
⚡ Summary:
JS is prototype-based, not class-based.

Classes are just syntactic sugar for constructor functions and prototype inheritance.

Prototype allows inheritance and reuse of existing functionality.

Every object in JS has a hidden [[Prototype]] (accessed using __proto__).