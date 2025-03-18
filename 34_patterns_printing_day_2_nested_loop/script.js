// mirror right angle triangle ye inverted and right angle triangle ka combination hota hai
// mirror right = inverted + right angle

let prompt = require('prompt-sync')();
let n = prompt('Enter a number: ');

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n-i ; j++) {
    process.stdout.write('  ');
  }
  for(let j=1; j<=i; j++){
    process.stdout.write('* ');
  }
  console.log();
}
