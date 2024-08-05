// Leet code easy
//Activity 1 Two Sum 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let targetMap = new Map()
//     let numsArray = nums.length
//     for (let i = 0;i<numsArray;i++){
//         let num = nums[i]
//         if(targetMap.has(num)){
//             return [targetMap.get(num),i]
//         }
//         else{
//             targetMap.set((target-num),i)
//         }
//     }
//     return []
// };

// //Activity 2 Reverse String
// var reverse = function(x) {
//     let revInt
//     if(x>0){
//      revInt = Number(rever(x))
//     }
//     else if(x<0){
//         revInt= Number(`-${rever(x * -1)}`)
//     }
//     else{
//         return 0
//     }

//     if(revInt  > Math.pow(2, 31) - 1 || revInt < -Math.pow(2, 31)){
//         return 0
//     }
//     return revInt
// };

// function rever(s){
//     return s.toString().split("").reverse().join("")
// }

//Activity 3 Palindrome Number
// var isPalindrome = function(x) {
//     x=x.toString()
//     let a=0
//     let b=x.length-1
//     while(a<=b){
//         if(x[a]!=x[b]){
//             return false
//         }
//         a++
//         b--
//     }
//     return true
// };

// //Activity 4 Merge Two sorted List
// var mergeTwoLists = function(list1, list2) {
//     let dummy =new ListNode()
//     let current= dummy

//     while(list1 && list2){
//         if(list1.val<list2.val){
//             current.next=list1
//             list1=list1.next
//         }
//         else{
//             current.next=list2
//             list2=list2.next
//         }
//         current=current.next
//     }
//     current.next=list1||list2
//     return dummy.next
// };


//Activity 5 Valid Parenthesis
var isValid = function(s) {
    let stack =[]

    let re=/[\( \) \{ \} \[ \]]/g
    let found = s.match(re)
    let bracketMap= new Map()
    bracketMap.set("(",")")
    bracketMap.set("{","}")
    bracketMap.set("[","]")

    for(let i =0;i<found.length;i++){
        if(bracketMap.has(found[i])){
            stack.push(found[i])
        }
        else{
            let a=stack.pop()
            if(bracketMap.get(a)!=found[i]) return false
        }
    }
    return !Boolean(stack.length)
};