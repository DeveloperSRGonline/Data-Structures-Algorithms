//do while loop -- exit control loop dobara chalne se pahele condiion check

// let i = 1;
// do {
//     console.log("hello world")
//     i++
// } while (i<=5);

let userinput;

do {
    console.log('namaste duniya')
    userinput = prompt('Are you sure to want to continue?type yes/no').toLowerCase()
} while (userinput == 'yes');