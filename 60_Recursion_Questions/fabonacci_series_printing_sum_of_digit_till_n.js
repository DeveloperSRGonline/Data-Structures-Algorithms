// f(n) = f(n-1) + f(n-2)// it is called as recurance relation
// printing sum of digit till n in fabonacci series
function fibo(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fibo(n-1) + fibo(n-2);
}
n = 7;
console.log(fibo(n))