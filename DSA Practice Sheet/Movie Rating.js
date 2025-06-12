let prompt = require("prompt-sync")();
let movieRating = Number(prompt("Enter your movie rating (1 - 10) : "));

// condition
/* 
1 - 3 : "Bad"
4 - 6 : "Average"
7 - 8 : "Good"
9 - 10 : "Excellent"
*/

if (movieRating >= 1 && movieRating <= 3) {
  console.log("Bad");
} else if (movieRating >= 4 && movieRating <= 6) {
  console.log("Average");
} else if (movieRating >= 7 && movieRating <= 8) {
  console.log("Good");
} else if (movieRating >= 9 && movieRating <= 10) {
  console.log("Excellent");
} else {
  console.log("Invalid rating. Please enter a number between 1 and 10.");
}
