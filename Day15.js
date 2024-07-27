// //Activity 1 Understanding clouser
// function outerFn(){
//     let num=4
//     function innerFn() {
//         console.log(num);
//     }
//     return innerFn
// }
// let a = outerFn()
// a()

// function createCounter(){
//     let counter=0
//     function increament(){
//         counter++
//     }

//     function getValue(){
//         console.log(counter);
//     }

//     return {increament,getValue}
// }

// let privateCounter=createCounter()
// privateCounter.increament()
// privateCounter.increament()
// privateCounter.getValue()

// //Activity 2 Pratical clouser
// function id(){
//     let lastID=0
//     function generateId(){
//         return ++lastID
//     }
//     return generateId
// }
// let generateUniqueId=id()
// console.log(generateUniqueId());
// console.log(generateUniqueId());
// console.log(generateUniqueId());
// console.log(generateUniqueId());

// function greetByName(uname){
//     function greet(){
//         console.log("Hello ",uname);
//     }
//     return greet
// }
// let a = greetByName("dipu")
// let b= greetByName("kumar")
// let c= greetByName("sah")
// a()
// b()
// c()

// //Activity 3 Closures in loop
// const createFunctions = (n) => {
//     const functions = [];
  
//     for (let i = 0; i < n; i++) {
//       functions.push((function(index) {
//         return function() {
//           console.log(index);
//         };
//       })(i));
//     }
  
//     return functions;
//   };
  
//   const functionsArray = createFunctions(5);
  
//   functionsArray.forEach(func => func());

// //Activity 4 Module pattern
// function manageItems(){
//     let items=[]
//     function add(item){
//         items.push(item)
//     }
//     function listItem(){
//         console.log(items);
//     }
//     function remove(item){
//         const index = items.indexOf(item);
//         if (index > -1) {
//           items.splice(index, 1);
//           console.log(`${item} removed.`);
//         } else {
//           console.log(`${item} not found.`);
//         }
//     }
//     return {add,listItem,remove}
// }

// let item= manageItems()
// item.add("code")
// item.add("laptop")
// item.add("laptop7")
// item.add("laptop4")
// item.add("laptop2")
// item.remove("laptop7")
// item.listItem()

//Activity 5 Memoization
function memo(){
    let map1 = new Map()

    function incMemo(n){
        if(map1.has(n)){
            console.log("memo");
            return map1.get(n)
        }
        else{
            map1.set(n,(n+2))
            return map1.get(n)
        }
    }

    function inBy2(n){
        return incMemo(n)
    }

    return inBy2
}

let memoizedFunction = memo();

console.log(memoizedFunction(5));
console.log(memoizedFunction(5)); 
console.log(memoizedFunction(10)); 
console.log(memoizedFunction(10));


// function fact(){
//     let map1= new Map()

//     function memo(n){
//         if(map1.has(n)){
//             return map1.get(n)
//         }
//         else{
//             if(n==0 || n==1){
//                 map1.set(n,1)
//                 return 1
//             }
//             else{
//                 let res= n * memo(n-1)
//                 map1.set(n,res)
//                 return res
//             }
//         }
//     }

//     function memoFact(n){
//         if(map1.has(n)){
//         console.log("return from memo");
//             return map1.get(n)}
//         else{
//             map1.set(n,memo(n))
//             return map1.get(n)
//         }
//     }

//     return memoFact

// }

// let memoizedFunction = fact();

// console.log(memoizedFunction(5));
// console.log(memoizedFunction(5)); 
// console.log(memoizedFunction(10)); 
// console.log(memoizedFunction(10));