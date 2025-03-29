// circumference.

let r = Number(prompt('Enter a number'));

if (isNaN(r) || r <= 0) {
    console.log('Please enter a valid positive number.');
} else {
    console.log(2 * (Math.PI) * r);
}

console.log(Math.PI)