// Activity 1 if-else statements

let num1=20;
if(num1>0)
    console.log("num1 is positive number");
else if(num1<0)
    console.log('num1 is negative number');
else
    console.log('num1 is zero');

let age = 60;
if(age>=18)
    console.log('Person can vote');
else
    console.log('Person cant vote');

// Activity 2 nested if-else statement

let a = 10,b=20,c=30;
if(a>b){
    if (a>c) {
        console.log("a is the largest number");
    }
}
else if(b>a){
    if(b>c){
        console.log("b is the largest nunber");
    }
}
else
    console.log('c is the largest number');

//Activity 3 switch case
let dayNum = 3;
switch (dayNum) {
    case 1:
        console.log("Today is sunday");
        break;
    case 2:
        console.log("Today is monday");
        break;
    case 3:
        console.log("Today is tuesday");
        break;
    case 4:
        console.log("Today is wednessday");
        break;
    case 5:
        console.log("Today is thrusday");
         break;
    case 6:
        console.log("Today is friday");
        break;
    case 7:
        console.log("Today is saturday");
        break;
    default:
        console.log("Wrong number");
        break;
}

let score = 52;
switch (true) {
    case score<20:
        console.log("f");
        break;

    case score<40:
        console.log("D");
        break;

    case score<60:
        console.log("C");
        break;

    case score<80:
        console.log("B");
        break;

    case score<=100:
        console.log("A");
        break;

    default:
        console.log("fail");
        break;
}
// Activity 4 conditional Ternary operator
(num1>0)?  console.log("Positive") : console.log("negative");

// Activity 5 combinin Conditions
let year =100;
if(!(year%4) && (year%100) || !(year%400)){
    console.log(" Leap Year");
}
else{
    console.log("Not a leap year");
}