// //Activiy 1 Basic Recursin
// function factorial(n){
//     if(n==0||n==1){
//         return 1
//     }
//     return n * factorial(n-1)
// }

// console.log(factorial(5));
// console.log(factorial(9));

// function fibo(n){
//     if(n<=1){
//         return n
//     }
//     return fibo(n-1) + fibo(n-2)
// }
// console.log(fibo(5));
// console.log(fibo(3));
// console.log(fibo(8));

// //Activity 2 Recursion with Arrays
// function recArrAsum(arr, lastIndex){
//     if(lastIndex==0)
//         return arr[lastIndex]
//     return arr[lastIndex] + recArrAsum(arr,lastIndex-1)
// }
// let a=[1,9,6,7,2,1]
// console.log(recArrAsum(a,5));

// function recArrMax(arr,n){
//     if(n==1)
//         return arr[0]
//     return Math.max(arr[n-1],recArrMax(arr,n-1))
// }
// let a=[1,9,6,7,2,1]
// console.log(recArrMax(a,a.length));

// //Activity 3 Recursive Search 
// function revStringRecr(str,n){
//     if(n==1){
//         return str[0]
//     }
//     return str[n-1]+revStringRecr(str,n-1)
// }
// let a = "Dipu"
// let b= "Sah"
// console.log(revStringRecr(a,a.length));
// console.log(revStringRecr(b,b.length));

// function palindromeCheckRec(str,f, n){
//     if( f==n ){
//         // console.log(f==n);
//         return true
//     }

//     if(str[n]!=str[f]){
//         return false
//     }
//     if(f<n+1)
//     return palindromeCheckRec(str,f+1,n-1)
    
// }
// let a= "dipu"
// let b ="saas"
// let c= "sas"
// console.log(palindromeCheckRec(a,0,a.length-1));
// console.log(palindromeCheckRec(b,0,b.length-1));
// console.log(palindromeCheckRec(c,0,c.length-1));

// //Activity 4 Recursive Search
// function binarySearch(arr,f,l,n){
//     while(f<=l){

//         let m=Math.floor(( f+l)/2)
//         if(n==arr[m]){
//             return m 
//         }
//         else if(n>arr[m]){
//             return binarySearch(arr,m+1,l,n)
//         }
//         else {
//             return binarySearch(arr,f,m-1,n)
//         }
//     }
// }
// let a = [1,2,4,5,7,9]
// console.log(binarySearch(a,0,a.length-1,7));
// console.log(binarySearch(a,0,a.length-1,8));

