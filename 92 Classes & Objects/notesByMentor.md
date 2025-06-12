
## ✅ **1. What is OOPs?**

**OOP (Object-Oriented Programming)** is a programming paradigm based on the concept of "objects", which contain data and methods.

### Key Concepts:

* Encapsulation
* Abstraction
* Inheritance
* Polymorphism

---

## ✅ **2. Why Do We Need OOPs?**

* **Organized code:** Structure large applications better.
* **Reusability:** Inheritance allows reuse of code.
* **Maintenance:** Easier to update or change behavior.
* **Scalability:** Better suited for complex and growing applications.

### 🔄 Difference Between OOP and Procedural Programming:

| Feature          | OOP                              | Procedural                   |
| ---------------- | -------------------------------- | ---------------------------- |
| Focus            | Objects (data)                   | Functions (procedures)       |
| Code reuse       | High (via inheritance)           | Low                          |
| Structure        | Modular                          | Linear                       |
| Example Language | Java, JS (with class/prototypes) | C, early JS (function-based) |

---

## ✅ **3. Class and Object**

### 🔸 Class

A blueprint for creating objects with properties and methods.

### 🔸 Object

An instance of a class.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const p1 = new Person("Rahul", 25); // Object
p1.greet(); // Hello, I'm Rahul
```

---

## ✅ **4. Literal Object**

An object created directly using curly braces.

```js
const car = {
  brand: "Toyota",
  start() {
    console.log("Car started");
  },
};

car.start(); // Car started
```

---

## ✅ **5. Constructor & Constructor Function**

### 🔸 Constructor Function (Pre-ES6)

```js
function Student(name, roll) {
  this.name = name;
  this.roll = roll;
  this.display = function () {
    console.log(`Name: ${this.name}, Roll: ${this.roll}`);
  };
}

const s1 = new Student("Ravi", 101);
s1.display();
```

### 🔸 ES6 Constructor in Class

```js
class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }

  display() {
    console.log(`Name: ${this.name}, Roll: ${this.roll}`);
  }
}
```

---

## ✅ **6. `this` Keyword**

Refers to the current object that is calling the method.

```js
const user = {
  name: "Ankit",
  showName() {
    console.log(this.name); // 'Ankit'
  },
};

user.showName();
```

> **Note:** In arrow functions, `this` is lexically bound.

```js
const user = {
  name: "Ravi",
  showName: () => {
    console.log(this.name); // undefined
  },
};

user.showName();
```

---

## ✅ **7. Prototype Object**

Every function in JS (used as constructor) has a prototype object that is shared by all instances created by that constructor.

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise`);
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a noise
```

---

## ✅ **8. How to Create Custom Prototype Object**

You can assign your own prototype to an object using `__proto__` or `Object.setPrototypeOf()`.

```js
const parent = {
  greet() {
    console.log("Hello from parent");
  },
};

const child = {};
child.__proto__ = parent; // or use Object.setPrototypeOf(child, parent);
child.greet(); // Hello from parent
```

Or:

```js
const customProto = {
  sayHi() {
    console.log("Hi from prototype!");
  },
};

const obj = Object.create(customProto);
obj.sayHi(); // Hi from prototype!
```

Displaying Day 92.md.