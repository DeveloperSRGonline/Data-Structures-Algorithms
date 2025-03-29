let a = Number(prompt('Enter the first number:'));
let b = Number(prompt('Enter the second number:'));
let c = Number(prompt('Enter the third number:'));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Please enter valid numbers.');
} else {
    if (a >= b && a >= c) {
        console.log(`${a} is the greatest number.`);
    } else if (b >= a && b >= c) {
        console.log(`${b} is the greatest number.`);
    } else {
        console.log(`${c} is the greatest number.`);
    }
}
