let prompt = require("prompt-sync")();

let ch = prompt("Enter single alphabet : ");

if (ch.length === 1 && ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))) {
  if (
    ch === "a" ||
    ch === "e" ||
    ch === "i" ||
    ch === "o" ||
    ch === "u" ||
    ch === "A" ||
    ch === "E" ||
    ch === "I" ||
    ch === "O" ||
    ch === "U"
  ) {
    console.log("Vowel");
  } else {
    console.log("Consonant");
  }
} else {
  console.log("Invalid input. Please enter a single English alphabet letter.");
}
