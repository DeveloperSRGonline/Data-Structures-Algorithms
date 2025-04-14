let prompt = require('prompt-sync')()
let target = Number(prompt('Enter a target value'))
let arr = [10,5,3,15,19,69,20]
let index = -1;// yaha -1 ke jagah kuchh bhi likh sakte ho ye bas ek chij depctic karta hai ki index mila ya na nahi , mila nahi toh -1

for(let i=0;i<arr.length;i++){
    if(arr[i] == target){
        index = i;
        break
    }
}
if(index == -1) console.log('Element not found')
else console.log('Element found at ' + index + " index")
