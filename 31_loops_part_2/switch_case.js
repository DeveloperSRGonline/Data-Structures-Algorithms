let prompt = require('prompt-sync')()
let n = Number(prompt('Enter a day : '))

switch(n){
    case 1: console.log('Monday')
    break;
    case 2: console.log('Tuesday')
    break;
    case 3: console.log('Wednesday')
    break;
    case 4: console.log('Thusday')
    break;
    case 5: console.log('Friday')
    break;
    case 6: console.log('Satarday')
    break;
    case 7: console.log('Sunday')
    break;

    default:console.log('Mai toh chalunga')
}

// agar break nhi mila toh ye fall thourgh condition me chala jayega


// multiple cases handling
switch(n){
    case 1:
    case 2:
    case 3:
    case 4:
         console.log('Monday')
    break;
    case 5:
    case 6:
    case 7: console.log('tuesday')

    default:console.log('Mai toh chalunga')
}


//handling different cases

switch(n){
    case "a": console.log('Monday')
    break;
    case "b": console.log('Tuesday')
    break;
    case "c": console.log('Wednesday')
    break;
    case "d": console.log('Thusday')
    break;
    case "e": console.log('Friday')
    break;
    case "f": console.log('Satarday')
    break;
    case "g": console.log('Sunday')
    break;

    default:console.log('Mai toh chalunga')
}

// based on condition 
switch(true){
    case 19>12 : console.log('Monday')
    break;
    case 42<55 && 12>2 : console.log('Tuesday')
    break;
    default:console.log('Mai toh chalunga')
}
