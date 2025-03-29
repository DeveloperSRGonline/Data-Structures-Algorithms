
// Select the button element from the DOM
let btn = document.querySelector('button');

// Select the h1 element from the DOM where the OTP will be displayed
let h1 = document.querySelector('h1');

// Variable to store the last generated OTP
let lastOtp = null;

// Add a click event listener to the button
btn.addEventListener('click', function() {
    let otp; // Variable to store the newly generated OTP

    // Generate a new OTP until it is different from the last OTP
    do {
        // Generate a random 4-digit number between 1000 and 9999
        otp = Math.floor(Math.random() * 9000 + 1000);
    } while (otp === lastOtp); // Repeat if the new OTP is the same as the last one

    // Update the lastOtp variable with the newly generated OTP
    lastOtp = otp;

    // Display the new OTP in the h1 element
    h1.innerHTML = otp;
});