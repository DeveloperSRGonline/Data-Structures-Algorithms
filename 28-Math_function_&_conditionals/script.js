console.log("Hey Shivam!")
/*
Math.ceil() --> ye koi bhi value ko upper ki value me covert kar deta hai 
    -- eg. 
    console.log(Math.ceil(2.3)) --> ye print karega : 3 

Math.floor() --> ye koi bhi value ko lower ki value me covert kar deta hai
    -- eg.
    console.log(Math.floor(2.7)) --> ye print karega : 2

Math.round() --> ye 0.4 se nichhe ki value rahi to floor ki tarah beheave karega and agar value 0.5 ya 0.5 se upper ki value rahi to ye ceil ki tarah beheave karega 

Math.abs() --> ye tum negative value do mai positive me convert karke dunga [ye positive me hi convert karta hai tumhe lage ki ye opposite sign me convert karta hai to tum galat ho]
console.log(Math.abs(-8))

Math.trunc() --> ye kya karta hai value me decimal ke baad koi bhi value ko hata deta hai 

Math.pow(2,5) --> iska matlab jo paheli value hai uske power me dusri value 
    -- eg. 2^5 = 2*2*2*2*2 = 32

Math.sqrt(40) --> used to calculate square root 
Math.cbrt(27) --> used to calculate cube root 

Math.max(23,456,4,34) --> ye kya batata hai ki saari values me se sabse badi value konsi hai , output : 456
Math.min(23,456,4,34) --> ye kya batata hai ki saari values me se sabse chhoti value konsi hai , output : 4

Math.random() --> ye  0 se 1 ke bichh me random value dega

let a = 234.223452
a.toFixed(2) // yane point ke baad kitni value chahiye
console.log(a.toFixed(3)) // output : 234.223

CP = p * (1 + r/100)^t - p
let p = Number(prompt("Enter principle"))
let r = Number(prompt("Enter rate")) 
let t = Number(prompt("Enter time"))

    A = p * (1 + r/100)^t 
    CP = A - p 

    console.log(p*Math.pow(1 + r/100,t) - p)

    Interview question : [might be]
Math.floor(10.5)  output : 10 -|
                               |----> pharak kya hai motive ka floor niche ki value le raha hai and trunc kya kar raha hai decimal ke baad ki value ko hata raha hai  
Math.trunc(10.5)  output : 10 -|


Q.Generate otp :

    console.log(Math.trunc((Math.random()*9000)+1000))

    steps:

        // 0 to 1 Math.random()
        // 0 to 9000 [* 9000]
        // 1000 to 10000 [+ 1000]
        // Math.trunc / Math.floor

    Explanation :

        hum ne kya kiya Math.random se random values gererate kar di par ye 0 se 1 ke beech me values dega and otp to 4 digit ki hoti hai toh hum ise 9000 se multiply kar deta hai par ab bhi ye value 0 se 9000 ke bich ki values dega par hum toh 4 digit values chahiye toh hum kya karenge isme 1000 ko add kar denge and toh ye 1000 se 10000 ke bich ki value dega but ab bhi ek problem hai ki ye value decimals me aa rahi hai to hum kya karange ise Math.turnk me rakh denge ab sab sahi hai.


    Q.finding area of triangle by heron's formula

        let a = Number(prompt("Enter a first number"))
        let b = Number(prompt("Enter a second number"))
        let c = Number(prompt("Enter a third number"))

    // heron's formula 
        // sqrt of s * (s-a) * (s-b) * (s-c)
     
        // where  s = (a + b + c)/2
            // s - semi parameter
        // -- lekin koi bhi do side ka sum tisre side ke barar hona chahiye 

        if (a+b <= c || a+c <= b || b+c <=a){
            console.log("Not possible")
        }else{
        let s = (a + b + c)/2
        console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
        }

    Q.circumference of circle

        let r = Number(prompt("Enter radius of circle"))

        console.log(2*Math.PI*r)
    
    Q.finding greatest number between two number
        let a = Number(prompt("Enter first number"))
        let b = Number(prompt("Enter second number"))

        if(a>b) console.log(a + " is greatest")
        else console.log(b + " is greatest")

    Q.check if number is odd or even:
        let a = Number(prompt("Enter number"));
        if (a % 2 != 0) console.log(a + " is odd number")
        else console.log(a + " is even number")

    Q.finding a person is eligible for vote or not :

        let age = Number(prompt("Enter age"))
        let yourname = (prompt("Enter your name"))
        if(age >= 18){
            console.log(yourname + " you can vote")
        }else{
            console.log(yourname + " you can't vote")
        }

*/  

                            // THANK YOU //
