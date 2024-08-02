function rotateArray(arr,pos){
    
    let newArr=arr.slice(pos+1)
    console.log(newArr);
    for (let i = 0; i <= pos; i++) {
        newArr.push(arr[i])
    }
    console.log(newArr);
}
let a=[-1,-100,3,99] //[ 1, 9, 3, 55, 8, 7 ]
rotateArray(a,2)