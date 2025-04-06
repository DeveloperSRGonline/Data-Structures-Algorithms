// string are immuatable in nature (na badalne wala)
// kahi log bolte hai -- string are basically array of character --> which is wrong❌
// strings are sequence of character
// string shows bahaviour like array 

// let arr = [10,20,30,40,50];
// arr[3] = 100;
// console.log(arr);// 40


// let s = "sheryians"; // string bhi indexing show karti hai
// s[3] = 'x' // but ye change hai ho sakti i.e.not immutable
// console.log(s)

// let Name = 'shivam'
// Name = 'sagar' // bhai yaha par string change nahi ho rahi hai replace ho rahi hai 
// // ye bol sakte ho ki data reassign kiya hai
// console.log(Name)

// let temp = 10;
// temp = 20; // replace kar rahe hai yaha par

// let s = 'Sheryians';
// console.log(s.length)// give length of the string
// console.log(s.substring(3,8)) // 3 se 8 ke pahele tak ke parameter
// console.log(s.substring(-3)) // negative me value input nahi leta 
// substring me optional chalta hai 
// slice ye negative me value bhi accept karta hai 
// console.log(s.slice(-4))
// console.log(s.toLowerCase())
// console.log(s.toUpperCase())
// console.log(s.concat(' is ','love.'))
// console.log(s.trim())
// console.log(s.indexOf('y'))

// let arr = [10,20,30,40,50]
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// for straight 
// let s = 'Sheryians'
// for(let i = 0; i<s.length; i++){
//     console.log(s[i])
// }

// for reverse
// let s = 'Sheryians'
// for(let i = s.length; i>=0; i--){
//     console.log(s[i])
// }



let s = 'Sheryians'
let rev = ''
for(let i = s.length; i>=0; i--){
    rev = rev + s.charAt(i);//"s.charAt(i)" is ke jagah "s[i]" ye bhi likh sakte ho
}
console.log(rev)