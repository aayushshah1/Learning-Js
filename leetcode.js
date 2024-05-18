//Two sum
// function twoSum(nums , target) {
//     const map = new Map();
//     for(let i=0; i < nums.length;i++) {
//         const complement= target-nums[i];
//         if (map.has(complement)){
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
//     return [];
// }

//palindrome
function isPali(x) {
    
    if (x<0) return false;
    const str= x.toString();
    let revStr ='';
    
    for (let i= str.length-1; i>=0; i--) {
        revStr +=str[i];
    }
    return str === revStr;
}