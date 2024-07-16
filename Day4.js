//Activity 1 For Loop
for(let i=1;i<11;i++){
    console.log(i);
}

for (let i = 1; i < 11; i++) {
    console.log("5 * "+i+ " = " + 5*i);
}

//Activity 2 While loop
let j=1;
let sum=0;
while(j<=10){
    sum +=j;
    j++;
}
console.log(sum);

let num=10;
while(num>=1){
    console.log(num);
    num--;
}

//Activity 3 Do while loop
let x=1;
do {
    console.log(x);
    x++;
} while (x<=5);

let factorial =1;
let number=5;
do{
    factorial=factorial * number
    number--;
}while(number>=2);
console.log("factorial is "+ factorial);

//ACtivity 4 Nested loop
for(let a=1;a<=5;a++){
    let pattern="";
    for(let b=1;b<=a;b++){
        pattern=pattern + "* "
    }
    console.log(pattern);
}

//Activity 5 Loop control Statement
for(let i=1;i<11;i++){
    if(i==5)
        continue;
    console.log(i);
}

for(let i=1;i<11;i++){
    if(i==7)
        break
    console.log(i);
}