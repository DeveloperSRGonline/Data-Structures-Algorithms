let prompt = require('prompt-sync')();
let movieName = prompt("Enter the movie name: ");
let movieRating = parseFloat(prompt("Enter your rating (1-5):"));

if(isNaN(movieRating) || movieRating < 1 || movieRating > 5) {
    console.log("Invalid rating. Please enter a number between 1 and 5.");
}
else {
    let categary = "";
    if(movieRating >= 0.0 && movieRating<=2.0){
        categary = "flop";
    }else if(movieRating > 2.0 && movieRating <=3.4){
        categary = "semi-hit";
    }else if(movieRating > 3.4 && movieRating <=4.5){
        categary = "hit";
    }else{
        categary = "super-hit";
    }
    console.log(`The movie "${movieName}" is a ${categary}.`);
}