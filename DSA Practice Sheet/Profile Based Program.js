let prompt = require("prompt-sync")();
let age = Number(prompt("Enter your age: "));

if (age >= 0) {
  if (age <= 12) {
    console.log("you are kid");
  } else if (13 <= age && age <= 19) {
    console.log("you are teenager");
  } else if (20 <= age && age <= 59) {
    console.log("you are adult");
  } else if (age >= 60) {
    console.log("you are senior citizen");
  }
} else {
  console.log("Invalid age. Please enter a valid age.");
}
