// printing values from 1 to n 
function temp(n){
    if(n==0) return//base case condition
    temp(n-1)//recursive call
    process.stdout.write(n + " ")//ye har baar hold par rahega and backtracking ke waqt printing hoga (1-n)
}
temp(10)