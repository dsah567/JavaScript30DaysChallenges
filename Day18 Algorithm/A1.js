function swap(arr,i,j){
 [arr[j],arr[i]]=[arr[i],arr[j]]
    //arr[j]=arr[i]
}
// function bubbleSort (arr){
//     let step=0
//     for (let i = 0; i < arr.length-1; i++) {
//         for(let j= 0;j<arr.length-i-1;j++){
//             console.log(++step);
//             if(arr[j]>arr[j+1]){
//                     swap(arr,j,j+1)
//                 console.log(arr)
//             }
//         }    
//     }
//     console.log(arr);
// }

// function selectionSort(arr){
//     let minIndex;
//     for (let i = 0; i < arr.length-1; i++) {
//         minIndex=i
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[minIndex]>arr[j]){
//                 minIndex=j
//             }
//         }
//         swap(arr,i,minIndex)
//         console.log(arr);
//     }
//     console.log(arr);
// }

function quickSort(arr,i,j){
    if(i>=j){
        return
    }
    let p=i
    let low=i
    let high=j
    while (i<j){

        while (arr[p]>arr[i]){
            i++
        }
        while (arr[p]<arr[j]){
            j--
            
        }   
        swap(arr,j,p)
    }
    quickSort(arr,low,j-1)
    quickSort(arr,j+1,high)
    console.log(arr);

}

let a=[1,9,3,55,8,7]
// bubbleSort(a)
// selectionSort(a)
quickSort(a,0,(a.length-1))