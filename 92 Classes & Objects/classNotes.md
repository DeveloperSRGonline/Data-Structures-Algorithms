
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
