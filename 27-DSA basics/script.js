// var ko pahele use kar sakte hai declare karne se pahele all because of hoisting
// console.log(a); // it will print undefined 
// var a = 10;
// -- In the DSA you should use "let"
// -- console.log pe kuchh bhi "black" aaya to vo sring hota hai  
// -- console.log pe kuchh bhi "blue" aaya to vo number hota hai

// let a = 10;
// console.log(a); // it will print 10

// integer yane aisa number jisme koi decimal na ho eg.23 , 3443, 345545

// Q.sum of two integer:

    // let a = 12;
    // let b = 23;

    // console.log(a+b) // it will print 35

// Q.Relation between integer and string:

/*
string + string = string (concatenation)
    let a = "hello";
    let b = "world";
    console.log(a + b); // Output: helloworld
    console.log(typeof(a + b)); // Output: string 

    let a = "hello"
    let b = "shivam"
    console.log(a + b) // it will print : helloshivam
    console.log(typeof(a + b)) // it will print : string

string + int = string (concatenation)
    let a = "hello";
    let b = 12;
    console.log(a + b); // Output: hello12
    console.log(typeof(a + b)); // Output: string

    let a = "hello"
    let b = 23;
    console.log(a + b); // it will print : hello23
    console.log(typeof(a + b)) // it will print : string

int + int = int (addition)[arithmatic operation]
    let a = 12;
    let b = 12;
    console.log(a + b); // Output: 24
    console.log(typeof(a + b)); // Output: number

    Q.sum and message.(do number ka sum and message print karna)

    hamara brain is condition me kaisa kaam karega :
     1 + 2 + 3 = 3 + 3 = 6 -- js ka engine bhi aise hi kaam karta hai

    let a = 10
    let b = 20
    console.log(a + b); // it will print : number
    console.log("sum of " + a + " and " + b + " is " + a + b)❌
                "sum of 10" + " and " + b + " is " + a + b
                "sum of 10 and " + b + " is " + a + b
                "sum of 10 and 20" + " is " + a + b
                "sum of 10 and 20 is " + a + b                   
                "sum of 10 and 20 is 10 + b                   
                "sum of 10 and 20 is 1020     
    console.log("sum of " + a + " and " + b + " is " + (a + b))✅[BODMOS]          
    console.log( (a + b) + " is " + "sum of " + a + " and " + b) // it will print : 30 is sum of 10 and 20    
    
    -- "type coercion" : operator ko dekh kar operation perform karna ya type change karna
    console.log(1 + 1) --> agar operator ke dono side int hai to ye arithmatic operation karega 
    and 
    if 
    console.log(1 + "1") --> agar operator ke koi ek bhi side string hai toh ye concatinate karega
    
    // "-" operator ka ek hi kaam hai subtraction. 
    
    console.log(1 - 1) --> toh ye print karega : 0
    console.log(1 - "1") --> toh ye print karega : 0  // ye string ko convert kardega "int" me
    console.log("1" - "1") --> toh ye print karega : 0 // ye string ko int me convert kar dega ok..
    
    console.log("1" - "1") // output : 0

    #.Type Coercion : means operator ko dekh kar (operation perform karna / "ya type change karna") 

    console.log(5 * "2") --> output : 10 🤔

    👂KYA HOTA HAI SIRF "+" OPERATOR HAI JISKE DO KAAM HAI EK "ADDITION" AND DUSRA "CONCATINATION"
    BAKI SABHI OPERATOR KA EK EK HI KAAM HOTA HAI : type coercion
    "-" : "SUBSTRACTION" 
    "*" : "MULTIPLICATION"
    "/" : "DIVIDE" 
    "%" : "MODULUS" 
    "**" : "EXPONENCIATION" 

    let age = 10; // ye hard coded value hai par hame toh user se value chahiye toh hum "prompt" use karenge.

    Q.Accept and print the answer.

    let age = prompt("Enter your age") -- eg. output : 54 [in black color] => means "string"
    console.log(age) 
    -- prompt ye jo hai input "string" ke format me leta hai 
    -- toh input string se number me convert karne ke liye 
    aisa karna padega :
        age = Number(age) // pahela tarika -- eg. output : 17 [in blur color] => means "Number"
        let age = Number("Enter your age") // dusra tarika -- eg. output : 12 [in blur color] => means "Number"


    Q.Swap two variables via 3 methods

    #.METHOD - 1: USING THIRD VARIABLE 

    let a = 12;
    let b = 23;

    let c;
    c = a;
    a = b;
    b = c;


    a = | 12 |     b = | 23 |    c = |    |   // pagele aisa 
        |____|         |____|        |____|

    a = | 12 |     b = | 23 |    c = | 12 |   // phir aisa  [c = a;] // a me c ki value bacha ke rakh di 
        |____|         |____|        |____|

    a = | 23 |     b = | 23 |    c = | 12 |   // phir aisa  [a = b;] // b ki value a me  and c me a ki value reserve to thi hi
        |____|         |____|        |____|

    a = | 23 |     b = | 12 |    c = | 12 |   // phir aisa  [b = c;]
        |____|         |____|        |____|

    console.log(a,b) Output : a = 23 , b = 12


    #.METHOD - 2: USING NORMAL MATHEMATICS 

    a = |    |   a => | 12 |  +  b => | 23 |   // a = a + b // a = 12 , b = 23 [pahele] 
        |____|        |____|          |____|

    a = | 35 |   a => | 12 |  +  b => | 23 |   // a = a + b // a = 35 , b = 23
        |____|        |____|          |____|

    b = | 12 |   a => | 35 |  -  b => | 23 |   // b = a - b // a = 35 , b = 12
        |____|        |____|          |____|

    a = | 23 |   a => | 35 |  -  b => | 12 |   // a = a - b // a = 23 , b = 12 [baad mein]
        |____|        |____|          |____|

    
#.METHOD - 1: Desturcting Assignment (using square brackets)

let a = 2;
let b = 4;
[a , b] = [b , a]

console.log(a,b) // output : a = 4 , b = 2 (swaped) 


Arithametic operators 

console.log(10%2)// modulus kya hai ye divide hi karta hai and ye reminder like deta hai
    (10   %    2)
(dividend % diviser ) // agar kabhi dividend ye diviser se chhota ho to answer divided as it is aajaye ga 

In DSA 
    -- integer % integer = integer
    -- integer / integer = float 
    -- integer / integer = integer (when we use Math.floor() function)
    
console.log(4%10) // what will be the output 

console.log(10/2) // divide sign quotient nikal kar deta hai 


arithmetic operators 
+ --> addition , concetination 
- --> substraction
* --> multiplication 
/ --> divide --> it will give quoetient in answer
% --> modulus --> it will give reminder in answer 
< --> less than 
> --> greater than 
<= --> less than equal to (is me se koi ek condition bhi sahi ho jaye to ye true ho jata hai)
>= --> greater than equal to (is me se bhi koi ek condition bhi sahi ho jaye to ye true ho jata hai)
= --> assignment operator 
== --> equal to (only check value)
=== --> equal to (check value and type also) 
!= --> not equal to (only check value)

Logical operators
    && --> saari ki saari condition true hai toh true nahi toh false
       --> agar ek bhi condition false hai toh aage check karne ka sense nahi banta  
    || --> agar puri condition me ek bhi true hai toh ye true dedega
       --> agar ek bhi condition true hai toh aage check karne ka sense nahi banta  
    ! --> not operator --> true to false and false to true

Unary operator 
    ++ --> increment operator
        --> Pre-increment 
            -- pahele jaha se aaya hai vaha change kar do value ko and then use kari jaha bhi use karna hai.
        --> post-increment
            -- pahele jaha use karna hai vaha use kar lo phir jaha se aaya hai vaha change kar lo
    -- --> decrement operator -->

    eg. -- let a = 20
     console.log(a++ + ++a)
                 20 + 22 => 42    

    console.log(++10);❌// constant ko increment operator nahi laga sakte    
    // output : SyntaxError: Invalid left-hand side expression in prefix operation

    console.log(++(++a)) // ye bhi nahi chalega ❌

    let a = 10;
    let b = 20;
    // console.log("sum : " + a + b)// abhi output : sum : 1020
    // console.log("sum : " + (a + b))// abhi output : sum : 30










*/
