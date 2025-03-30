let amount = Number(prompt('Enter the amount'))

if (amount >= 0 && amount <= 5000) {
    console.log(amount);
} else if (amount > 5000 && amount <= 7000) {
    console.log(amount - (5 * amount) / 100);
} else if (amount > 7000 && amount <= 9000) {
    console.log(amount - (10 * amount) / 100);
} else if (amount > 9000) {
    console.log(amount - (20 * amount) / 100);
} else {
    console.log('Invalid input');
}
