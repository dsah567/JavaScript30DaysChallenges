function linearSearch(arr,val){
    for (let i = 0; i < arr.length; i++) {
        if(val==arr[i]){
            console.log(`The index of ${val} is ${i}`);
        }
        
    }
}
let a=[ 1, 9, 3, 55, 8, 7 ]
linearSearch(a,5)
linearSearch(a,3)

