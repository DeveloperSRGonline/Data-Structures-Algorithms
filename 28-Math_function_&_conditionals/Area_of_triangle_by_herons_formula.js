// Area of triangle by herons formula.
let a = Number(prompt('Enter a first number'))
let b = Number(prompt('Enter a second number'))
let c = Number(prompt('Enter a third number'))


if(a+b <= c || a+c <= b || b+c <= a){
    console.log('Not possible')
}else {
    let s = (a+b+c)/2
    console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
}
