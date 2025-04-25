// using recursion

function fiboNTerms(n,first,second){
    if(n==0) return
    let third = first + second
    process.stdout.write(third+" ")
    fiboNTerms(n-1,second,third)
}
let n = 12;
let first = 0,second = 1;
process.stdout.write(first+" " + second+ " ")
fiboNTerms(n-2,first,second)