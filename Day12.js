//Activity 1 Error Handling with Try-Catch 
// function err(){
//     throw new Error("something went wrong");
// }

// try {
//     let a =err()
//     console.log(a);
// } catch (error) {
//     console.log("error while calling err function");
//     console.log(error);
// }

// function divide(a,b){
//     if(b==0){
//         throw new Error("something went wrong");
//     }
//     return a/b
// }

// try {
//     let a = divide(9,0)
// } catch (error) {
//     console.log("dividing by 0");
//     let a = divide(9,1)
//     console.log(a);
// }

//Activity 2 Finally block
// function divide(a,b){
//     if(b==0){
//         throw new Error("something went wrong");
//     }
//     return a/b
// }

// try {
//     let a = divide(9,0)
// } catch (error) {
//     console.log("dividing by 0");
//     let a = divide(9,1)
//     console.log(a);
// }
// finally{
//     console.log("task solved");
// }

//Activity 3 custom error objects
// class Err extends Error{
//     constructor(message){
//         super(message)
//     }
// }

// function err(){
//     throw new Err("something went wrong");
// }

// try {
//     let a =err()
//     console.log(a);
// } catch (error) {
//     console.log("error while calling err function");
// }

// function validateInput(str){
//     if(!str)
//         throw new Error("String is empty")
// }

// try {
//     let a =""
//     validateInput(a)
// } catch (error) {
//     console.log("error while calling err function",error);
// }

// //Activity 4 Error Handling in Promises
// let myPromisie= new Promise((res,rej)=>{
//     let num =Math.floor(Math.random() * 5)
//     console.log(num);
//     if(num%2==0){
//         res("Everything Ok")
//     }
//     else{
//         rej("rejected")
//     }
// })

// myPromisie.then(res=>console.log(res))
//             .catch(err=>console.log(err))

// async function prom(){
//     try {
//         let data=await myPromisie
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// prom()

//Activity 5 Graceful Error Handling in fetch
fetch("https://dog.ceo/api/breeds/ime/random")
    .then(v=>v.json())
    .then(v=>{
        if(v.status != "success"){
                            throw new Error("Err")
                            }
        console.log(v)
    })
    .catch(e=>console.log("link is not valid err"))

// async function publicApi(){
//     try {
//         let data= await fetch("https://dog.ceo/api/breeds/ime/random")
//         let jsonData= await data.json()
//         if(jsonData.status != "success"){
//             throw new Error("Err")
//         }
//         console.log(jsonData);
//     }
//      catch (error) {
//         console.log("Link is in valid");
//     }
// }
// publicApi()