// function countString(str) {
//     let charCounts={}
//     for (let i = 0; i < str.length; i++) {
//         if(!charCounts.hasOwnProperty(str[i])){
//             charCounts[str[i]]=1
//         }
//         else{
//             charCounts[str[i]]++

//         }
        
//     }
//     console.log(charCounts);
// }
// let a ="Dipu"
// let b="saias"
// countString(a)
// countString(b)

function lengthOfLongestSubString(str){
    if(str.length<=1){
        return
    }
    let lengthLargestStr=0
    let subStr=""
    
    for(let i=0;i<str.length;i++){
        if(lengthLargestStr>=(str.length-i)){
            return lengthLargestStr
        }
        subStr=""
        for(let j=i;j<str.length;j++){
            if(!subStr.includes(str[j])){
                subStr +=str[j]
            }
            else{
               
                break
            }
           
        }
        if(subStr.length>lengthLargestStr){
            lengthLargestStr=subStr.length
        }
        if(subStr.length>=(str.length-1)){
            return subStr.length
        }
    }
    return lengthLargestStr
}

console.log(lengthOfLongestSubString("abcabcd"));
console.log(lengthOfLongestSubString("abca"));








