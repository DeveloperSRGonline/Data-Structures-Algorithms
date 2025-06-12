let Animal = function(username , age ,gender) {
        this.username = username,
        this.age = age,
        this.gender = gender
        // yaha par this yane current calling object yane jo object new karke call kar rahe uska .jobhi uske liye
}

let student1 = new Animal("ravi", 15, "male");
let student2 = new Animal("sara", 14, "female");
let student3 = new Animal("john", 16, "male");
let student4 = new Animal("anita", 15, "female");
let student5 = new Animal("mike", 17, "male");
let student6 = new Animal("lisa", 16, "female");

console.log(student3);