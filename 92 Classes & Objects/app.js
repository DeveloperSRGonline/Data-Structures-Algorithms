class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}


let obj = new Student('shivam',21)
let obj2 = new Student('sagar',12)
// console.log(obj2);

// class - syntactical sugar

// if there is no class in object so why we created class here 
// now we know object creation by there ways
// constructre function 
// literal objects 
// class 

// the ques is in js there is no class so how we say that js is a oop language ??????
// js is a prototype language 

// prototype === object 

// for ex : java , c++ -> class
// inheritance -> ek bani banai property ko ek object mein inherate karna 

// but in js we use prototype object to inherite 

// inheritance 
// ek object se kisi property ko dusre object ka andar use karna hai toh hum use karte hai prototype 
// kyoki js mein there is no class 

let object = {
    display(){
        console.log("something");
    }
}

// console.log(object);


let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push()// par hamne toh ye push banahi nahi toh ye aaya kaha se - ye aaya hai prototype se 
// ex : agar tumhare papa ke paas 10 ekad jamin hai toh vo tumhari ho gi due to inheritance 
// same genes bhi vaise hi 
// and why we need prototype taki mai kuch existing properties ko use kar saku
// isse ye cristal clear hai ki js ek prototype based language hai 
const student = {
   name : "age",
   age : 21
}

const personPrototype = {
        greet() {
                console.log(`Hello, my name is ${this.name}`);
        },
        isAdult() {
                return this.age >= 18;
        },
};

student.__proto__ = personPrototype // inherite kar diya  //  customize prototype


student.greet(); // Hello, my name is Amit
console.log(student.isAdult()); // true