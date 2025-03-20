// mirror right angle triangle ye inverted and right angle triangle ka combination hota hai
// mirror right = inverted + right angle

let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a number: '));


// Yeh program ek mirror right-angled triangle print karega.

// for (let i = 1; i <= n; i++) {  // Outer loop rows ke liye (1 se lekar n tak)
  
//     // Pehle spaces print karna taaki right-angled triangle mirror effect lage
//     for (let j = 1; j <= n - i; j++) {  
//       process.stdout.write(' '); // Space print karega
//     }
  
//     // Fir "*" print karna, har row mein increasing order mein
//     for (let j = 1; j <= i; j++) {  
//       process.stdout.write('* '); // Ek "*" aur ek space print karega
//     }
  
//     console.log(); // Har row complete hone ke baad new line print karega
//   }
  

// Yeh program ek pyramid pattern print karega.

// for (let i = 1; i <= n; i++) {  // Outer loop har row ke liye chalega (1 se n tak)

//     // Pehle spaces print karna taaki pyramid center aligned ho
//     for (let j = 1; j <= n - i; j++) {  
//       process.stdout.write(' '); // Space print karega
//     }
  
//     // Fir "*" print karna, har row mein increasing order mein
//     for (let j = 1; j <= i; j++) {  
//       process.stdout.write('* '); // Ek "*" aur ek space print karega
//     }
  
//     console.log(); // Har row complete hone ke baad new line print karega
//   }
  


// printing X pattern 

// -- left diagonal ke liye condition = "i==j"
// -- right diagonal ke liye condition = "i+j == n+1"


// printing V pattern
// -- V ka left diagonal ke liye condition = "i==j"
// -- V ka right diagonal ke liye condition = "i+j == n+1"
// This program prints a pattern of stars in the shape of an "X" for a given value of n.

// Yeh program ek "V" shape ka pattern print karta hai using nested loops.

// for (let i = 1; i <= n; i++) {  // Outer loop har row ke liye chalega (1 se lekar n tak)
    
//     for (let j = 1; j <= (n * 2) - 1; j++) {  // Inner loop har row ke andar columns ko handle karega
        
//         // Condition jo "V" shape banane ke liye "*" print karegi
//         if (j == i || j == (n * 2) - i) {  
//             process.stdout.write("* "); // Agar condition true hai, toh "*" print hoga
//         } else {
//             process.stdout.write("  "); // Agar condition false hai, toh space print hoga
//         }
//     }
    
//     console.log(); // Har row complete hone ke baad new line print karega
// }




