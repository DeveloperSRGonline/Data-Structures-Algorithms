let prompt = require("prompt-sync")();
let gender = prompt("Enter gender(male/female): ");
let yearOfService = Number(prompt("Enter year of service : "));
let qualification = prompt("Enter qualification (Graduate/post-Graduate): ");

let salary = 0;

if (gender !== "Male" && gender !== "Female") {
  console.log("Invalid input for gender.");
} else if (isNaN(yearOfService)) {
  console.log("Invalid input for year of service.");
} else if (qualification !== "Graduate" && qualification !== "Post-Graduate") {
  console.log("Invalid input for qualification.");
} else {
  if (gender === "Male") {
    if (yearOfService >= 10) {
      if (qualification === "Post-Graduate") {
        salary = 15000;
      } else if (qualification === "Graduate") {
        salary = 10000;
      }
    } else if (yearOfService < 10) {
      if (qualification === "Post-Graduate") {
        salary = 10000;
      } else if (qualification === "Graduate") {
        salary = 7000;
      }
    }
  } else if (gender === "Female") {
    if (yearOfService >= 10) {
      if (qualification === "Post-Graduate") {
        salary = 12000;
      } else if (qualification === "Graduate") {
        salary = 9000;
      }
    } else if (yearOfService < 10) {
      if (qualification === "Post-Graduate") {
        salary = 10000;
      } else if (qualification === "Graduate") {
        salary = 6000;
      }
    }
  }
  if (salary > 0) {
    console.log("salary : " + salary);
  }
}
