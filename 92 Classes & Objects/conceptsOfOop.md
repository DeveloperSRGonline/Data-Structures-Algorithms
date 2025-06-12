# 📘 Object-Oriented Programming (OOP) – Key Concepts

OOP is a programming paradigm based on the concept of **"objects"**, which can contain data and code to manipulate that data.

---

## 🧱 The 4 Pillars of OOP

---

### 1. 🔒 Encapsulation (Data Hiding)
**Definition:** Wrap data and the methods that operate on that data into a single unit (class). It restricts direct access to some of the object's components.

**Benefits:**
- Protects internal state
- Enhances security
- Makes code modular

**Example (JavaScript):**
```js
class Person {
  constructor(name) {
    let _name = name; // private using closure
    this.getName = () => _name;
  }
}
```

---

### 2. 🎭 Abstraction
**Definition:** Hide internal implementation details and show only the essential features to the user.

**Benefits:**
- Simplifies complex systems
- Reduces code complexity
- Promotes cleaner interfaces

**Example:**
```js
class Car {
  start() {
    console.log("Car started"); // hides engine internals
  }
}
```

---

### 3. 🧬 Inheritance
**Definition:** A mechanism where one class (child/subclass) inherits properties and behaviors (methods) from another class (parent/superclass).

**Benefits:**
- Promotes code reuse
- Supports hierarchical classification

**Example:**
```js
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}

const d = new Dog();
d.eat();  // Inherited
d.bark(); // Own method
```

---

### 4. 🔁 Polymorphism
**Definition:** Ability to take many forms. Same method behaves differently based on the object.

**Types:**
- **Method Overriding** (JS supports)
- **Method Overloading** (Not supported directly in JS, but available in Java, C++, etc.)

**Example (Overriding):**
```js
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

const c = new Cat();
c.speak();  // Output: Meow
```

---

## 🧩 Additional Concepts

- **Class & Object**: Classes are blueprints, objects are instances.
- **Constructor**: Special method to initialize objects.
- **`this` keyword**: Refers to the current object instance.
- **Access Modifiers**: (`public`, `private`, `protected`) – Used in other languages like Java, C++, etc., not natively in JS.

---

## 🧠 Summary Table

| Concept        | Purpose                          | Key Benefit          |
|----------------|----------------------------------|----------------------|
| Encapsulation  | Bundle data + methods            | Data hiding & safety |
| Abstraction    | Hide complexity, show essentials | Simplicity           |
| Inheritance    | Parent-child relationship        | Code reuse           |
| Polymorphism   | Same interface, different behavior | Flexibility         |

---

> 🔁 Use these principles to write modular, maintainable, and scalable object-oriented programs.