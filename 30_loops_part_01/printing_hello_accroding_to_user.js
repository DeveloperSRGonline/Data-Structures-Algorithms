let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a number : '));
if (isNaN(n)) {
  console.log('please enter a valid input');
} else {
  let i;
  for (i = 1; i <= n; i++) {
    console.log('Hello world');
  }
  console.log('fail at ' + i);
}
