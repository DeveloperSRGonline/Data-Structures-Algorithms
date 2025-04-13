let prompt = require('prompt-sync')()
let com = Math.floor(Math.random()*100) + 1

let userinput;
do{
    userinput = Number(prompt('Guess the number b/w 1 to 100 : '))
    if(isNaN(userinput) || userinput < 0 || userinput>100){
        console.log('please enter valid number');
        continue
    }
    if(userinput > com) console.log('too high , try again');
    else if(userinput < com) console.log('too low , try again');
    else console.log('Congrats 🎉 and number was : ' + com);
    
}while(userinput !== com)