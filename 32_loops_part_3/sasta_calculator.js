// let prompt = require('prompt-sync')()
let userInput;
do {
    let num1 = Number(prompt('Enter a first number : '))
    let num2 = Number(prompt('Enter a second number : '))
    let operator = prompt('Enter a valid operator(+,-,*,/) : ')

    switch(operator){
        case '+': 
            console.log(num1+num2)
        break;
        case '-':
            console.log(num1-num2)
        break;
        case '*':
            console.log(num1*num2)
        break;
        case '/':
            if(num2 !== 0) console.log('result' + (num1/num2))
            else console.log('please enter valid input')
        break;
        default:
            console.log('Please enter valid operator')
    }
    userInput = prompt('Kya aap dobara chalana chahte hai? yes/no : ').toLowerCase()
} while (userInput === 'yes');