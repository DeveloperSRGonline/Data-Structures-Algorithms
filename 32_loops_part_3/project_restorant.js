// Restaurant Digital Menu Program

console.log("Welcome to the Restaurant Digital Menu!");

let exitProgram = false;

do {
    console.log("\nPlease select an option:");
    console.log("1. Starter");
    console.log("2. Main Course");
    console.log("3. Dessert");
    console.log("4. Exit");

    let choice = Number(prompt("Enter your choice: "));

    switch (choice) {
        case 1:
            let exitStarter = false;
            do {
                console.log("\nStarter Menu:");
                console.log("1. Soup");
                console.log("2. Salad");
                console.log("3. Go Back");

                let starterChoice = Number(prompt("Enter your choice: "));
                switch (starterChoice) {
                    case 1:
                        console.log("You selected Soup.");
                        break;
                    case 2:
                        console.log("You selected Salad.");
                        break;
                    case 3:
                        exitStarter = true;
                        break;
                    default:
                        console.log("Invalid choice. Please try again.");
                }
            } while (!exitStarter);
            break;

        case 2:
            let exitMainCourse = false;
            do {
                console.log("\nMain Course Menu:");
                console.log("1. Pasta");
                console.log("2. Pizza");
                console.log("3. Go Back");

                let mainCourseChoice = Number(prompt("Enter your choice: "));
                switch (mainCourseChoice) {
                    case 1:
                        console.log("You selected Pasta.");
                        break;
                    case 2:
                        console.log("You selected Pizza.");
                        break;
                    case 3:
                        exitMainCourse = true;
                        break;
                    default:
                        console.log("Invalid choice. Please try again.");
                }
            } while (!exitMainCourse);
            break;

        case 3:
            let exitDessert = false;
            do {
                console.log("\nDessert Menu:");
                console.log("1. Ice Cream");
                console.log("2. Cake");
                console.log("3. Go Back");

                let dessertChoice = Number(prompt("Enter your choice: "));
                switch (dessertChoice) {
                    case 1:
                        console.log("You selected Ice Cream.");
                        break;
                    case 2:
                        console.log("You selected Cake.");
                        break;
                    case 3:
                        exitDessert = true;
                        break;
                    default:
                        console.log("Invalid choice. Please try again.");
                }
            } while (!exitDessert);
            break;

        case 4:
            console.log("Thank you for visiting! Goodbye!");
            exitProgram = true;
            break;

        default:
            console.log("Invalid choice. Please try again.");
    }
} while (!exitProgram);