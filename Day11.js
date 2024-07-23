// //Activity 1 Understanding Promises
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //   resolve("foo");
//     reject(msg())
//     }, 2000);
//   });

// let msg= ()=>{return "foo"}
  
//   myPromise
//     .then((v)=>console.log(v))
//     .catch((v)=>console.log(v));

// //Activity 2 chaining promisses
// let specificOrder= new Promise((res,rej)=>{
//     res(777)
// })
// specificOrder.then((v)=>v+1)
//             //   .then((v)=>console.log(v))
//             .then((v)=>console.log(v * new Promise))
//               .catch((v)=>console.log("err"))

// //Activity 3 Using Async Await
// function myProm(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("foo");
//             //reject(msg())
//         }, 2000);
//     });
// } 

// let val=async ()=>{
//     let res = await myProm()
//     console.log(res);
// }
// val()

//Activity 4 fetching Data from api
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then((v)=>{
//         if(!v.ok){
//             throw new Error('Network response was not ok ' + v.statusText);
//         }
//         return v.json()
//     })
//     .then(v=>console.log(v))
//     .catch((e)=>console.log(e))

// async function publicApi(){
//     try {
//         let data= await fetch("https://dog.ceo/api/breeds/image/random")
//         let jsonData= await data.json()
//         console.log(jsonData);
//     }
//      catch (error) {
//         console.log("error",error);
//     }
// }
// publicApi()

//Activity 5  Concurrent promises
let p1 = Promise.resolve("foo");
let p2 = 42;
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve("dipu"), 100);
});

// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values);
// });


Promise.race([p1, p2, p3]).then((values) => {
    console.log(values);
  });