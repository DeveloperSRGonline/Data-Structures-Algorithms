let prompt = require('prompt-sync')();
let unit = Number(prompt('Enter a unit : '))
let amount = 0;

// top to bottom approch
// if(unit>400){
//     amount += (unit - 400) * 13;
//     unit = 400;
// }
// if(unit>200 && unit<=400){
//     amount += (unit - 200) * 8;
//     unit = 200;
// }
// if(unit>100 && unit<=200){
//     amount += (unit - 100) * 6;
//     unit = 100;
// }
// if(unit>0 && unit<=100){
//     amount += unit * 4.2;
// }
// console.log(amount)


if(unit>0 && unit<=100){
    amount = unit * 4.2;
}else if(unit > 100 && unit <=200){
    amount = 100 * 4.2 + (unit - 100) * 6;
}else if(unit > 200 && unit <= 400){
    amount = 100 * 4.2 + 100 * 6 + (unit-200) * 8;
}else if(unit > 400){
    amount = (100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400) * 13; 
}

console.log(amount)