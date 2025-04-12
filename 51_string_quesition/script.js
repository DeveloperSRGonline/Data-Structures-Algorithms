let s = "hello bhai kya haal chal"
let ans = "";
let arrStr = s.split(" ");
for(let i = 0;i<arrStr.length;i++){
    let word = arrStr[i]
    if(word.length<=2) ans = ans + word.toUpperCase() + " ";
    else{
        ans = ans + word.charAt(0).toUpperCase()
                  + word.substring(1,word.length-1)
                  + word.charAt(word.length-1).toUpperCase() + " ";
    }
}
console.log(ans)