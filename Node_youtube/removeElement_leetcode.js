//https://leetcode.com/problems/remove-element/
/**
 * 
 * @param {array of integers} nums 
 * @param {integer} val 
 */
var removeElemnet = function (nums,val){
    let i = 0;
    while(i < nums.length){
        if(nums[i]== val){
            nums.splice(i,1);
            i--;
        }
        else{
            i++
        }
    }
    return nums.length
}

console.log(removeElemnet([0,1,2,2,3,0,4,2], 2))