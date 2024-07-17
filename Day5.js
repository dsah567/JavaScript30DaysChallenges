// //Activity 1 Function Declearition
// function checkNumber(num){
//     if(num%2==0)
//       console.log("num is even");
//     else
//         console.log('num is odd');
// }
// checkNumber(5)
// checkNumber(8)
// checkNumber(-3)
// checkNumber(-6)

// function squareOfNum(num){
//     return num*num;
// }
// console.log(squareOfNum(4));

// //Activity 2 Function expression
// let maxOfTwoNumber= function(num1,num2){
//     if(num1>num2)
//         console.log("num1 is greater than num2");
//     else
//         console.log("num2 is greater than num1");
// }

// let concateString= function(str1,str2){
//     return str1+str2;
// }
// maxOfTwoNumber(5,9)
// console.log(concateString("dipu","sah"))

// //Activity 3 Arrow Functions
// let sumofTwoNumbers=(num1,num2)=>num1+num2
// let checkCharacter=(str,char)=>{
//     if(str.includes(char))
//         return true;
//     else
//         return false;
// }
// console.log(sumofTwoNumbers(5,4));
// console.log(checkCharacter("Dipusah","s"));
// console.log(checkCharacter("Dipusah","j"));

// //Activity 4 function parameters and Default value
// let productFun= (num1,num2=5) => num1 * num2
// let greeting = (name,age=18)=>"Hello "+name + " goodmoring, your age is " + age
// console.log(productFun(5,6));
// console.log(productFun(4));
// console.log(greeting("Dipu",20 ));
// console.log(greeting("Sah"));

//Activity 5 Higher Order functions
function greet(){
    console.log("Hello World");
}

function greeting(func,num){
    let i =1
    while (i<=num) {
        func()
        i++
    }
}

greeting(greet,8)

let incre=(num)=>num+2
let sq=(num)=>num*num
function higherOrder(func1,func2,num){
    console.log(func1(func2(num)));
}
higherOrder(sq,incre,5)