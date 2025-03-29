let year = Number(prompt('Enter a year:'));

// Check if the input is a valid positive number
if (isNaN(year) || year <= 0) {
    console.log('Please enter a valid positive year.');
} else {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If divisible by 4, check if it is divisible by 100
        if (year % 100 === 0) {
            // If divisible by 100, check if it is divisible by 400
            if (year % 400 === 0) {
                console.log(`${year} is a leap year.`);
            } else {
                console.log(`${year} is not a leap year.`);
            }
        } else {
            // If not divisible by 100, it is a leap year
            console.log(`${year} is a leap year.`);
        }
    } else {
        // If not divisible by 4, it is not a leap year
        console.log(`${year} is not a leap year.`);
    }
}