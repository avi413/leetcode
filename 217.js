/**
 * 
 * @param {number[]} nums 
 * @returns {boolean}
 * 
 * Given an integer array nums, 
 * return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 */
var containsDuplicate = function(nums) {
    const set = new Set();
    //O(n)
    for( let i = 0 ; i < nums.length ; i++) {
        //O(1)
        if(set.has(nums[i])) return true;
        //O(1)
        set.add(nums[i]); 
    }
    return false;
};