// //Activity 1 Template literals
let myname = "Dipu"
let age = 23
// console.log(`My name is ${myname} and my age is ${age}`);

// let introduction = `I am MERN Full Stack Developer.
// I am also a Spring Boot Developer`
// console.log(introduction);

// //Activity 2 Destructuring
let arr=[1,2,3,4,5]
// let [a,b]=arr
// console.log(a,b);

let book = {
    'title' : "cs",
    'author' : "Dipu",
    "year":2024
}

// let {title,author}=book
// console.log(title,author);

//Activity 3 Spread and Rest Operators
let newArr=[...arr,6,7]
// console.log(newArr);

function sum(...num){
    let total=0;
    for(n of num)
            total += n
    console.log(total);
}
// sum(1,2,3,4,5,6,7,8,9,10)

//Activity 4 Default Parameters
let productFun= (num1,num2=1) => num1 * num2
// console.log(productFun(4,5));
// console.log(productFun(9));

//Activity 5 Enhanced Object Literals
let obj= {
    "myname":"Dipu",
    greet(){
        console.log(`Good Morning ${this.myname}`);
    }
}
obj.greet()

let newObj={
    [myname]:"Sah"
}
console.log(newObj);