//PROBLEM 35 Search Insert Position    


// var searchInsert =function(nums,target ){
//     let i=0;
//     let j=nums.length;
//     while(i<=j){
//         const middle=Math.floor((i+j)/2)
//         if(nums[middle]===target){
//             return middle
//         }else if(nums[middle]<target){
//             i+=1;
//         }else{
//             j-=1;
//         }
//     }
//     return i ;
   
// }; console.log(searchInser());

//PROBLEM 5 Longest Palindromic Substring   

// var longestPalindrome = function(s) {
//     var start = 0;
//     var end = 0;
//     var len = s.length;
//     var num = 0;
//     for (var i = 0; i < len; i++) {
//       num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
//       if (num > end - start) {
//         start = i - Math.floor((num - 1) / 2);
//         end = i + Math.floor(num / 2);
//       }
//     }
//     return s.slice(start, end + 1);
//   };
  
//   var expandAroundCenter = function (s, left, right) {
//     var l = left;
//     var r = right;
//     var len = s.length;
//     while (l >= 0 && r < len && s[l] === s[r]) {
//       l--;
//       r++;
//     }
//     return r - l - 1;
//   };






//PROBLEM 15 3Sum 
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     var result = [];
//     //Less than three elements, return null
//     if(nums.length < 3){
//         return result;
//     }
//     //Order first (from small to large)
//     nums = nums.sort(function(a,b){return a-b})
//     //Because it is in ascending order, if the first element is larger than 0, there must be no matching array
//     if(nums > 0){
//         return result;
//     }
//     for(var i = 0;i < nums.length - 2;i++){
//         //Remove duplicate results
//         if (i > 0 && nums[i] === nums[i - 1]) {
//             continue;
//         }
//         var left = i+1;
//         var right = nums.length - 1;
//         while(left < right){
//             var sum = nums[i] + nums[left] + nums[right];
//             if(sum === 0){
//                 result.push([nums[i],nums[left],nums[right]])
//                 left++;
//                 right--;
//                 //Remove duplicate results and move the pointer directly to different elements
//                 while(left < right && nums[left] === nums[left - 1]){
//                     left++;
//                 }
//                 while(left < right && nums[right] === nums[right + 1]){
//                     right--;
//                 }
//             }else if(sum > 0){
//                 right--;
//             }else{
//                 left++;
//             }
//         }
//     }
//     return result;
// };



//PROBLEM 125  Valid Palindrome   

/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     s = s.toLowerCase();
//     var beg = 0;
//     var end = s.length - 1;
    
//     while(beg < end) {
//         if(!s[beg].match(/[a-z0-9]/)) {
//             beg++;
//         } else if(!s[end].match(/[a-z0-9]/)) {
//             end--;
//         } else if(s[beg] !== s[end]) {
//             return false;
//         } else {
//             end--;
//             beg++;
//         }
//     }
    
//     return true;
// };

//PROBLEM 145  Binary Tree Postorder Traversal    

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    var result = [];
    var stack = [];
    var prev = null;
    var curr = null;
    
    if(root === null) {
        return result;
    }
    
    stack.push(root);
    
    // use prev and curr to figure out the direction of tree traversal
    while(stack.length !== 0) {
        curr = stack[stack.length - 1];
        
        if(prev === null || prev.left === curr || prev.right === curr) { // traverse down the tree
            if(curr.left !== null) {
                stack.push(curr.left);
            } else if(curr.right !== null) {
                stack.push(curr.right);
            }
        } else if(curr.left === prev) { //traverse up the tree from the left
            if(curr.right !== null) {
                stack.push(curr.right);
            }
        } else {
            // it means that curr === prev 
            result.push(curr.val);
            stack.pop();
        }
        
        prev = curr;
    }
    
    return result;
};