function temp(n){
    if(n==0) return// base case 
    temp(n-1)//recursive change
    process.stdout.write(n+ " ")// task
}
temp(10)