/**
 * 
 * @param {number[]} nums 
 * @returns {boolean}
 * 
 * Given an integer array nums, 
 * return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 * time O(n)
 * space O(n)
 */
var containsDuplicate = function(nums) {
    //space O(n)
    const set = new Set();
    //time O(n)
    for( let i = 0 ; i < nums.length ; i++) {
        //time O(1)
        if(set.has(nums[i])) return true;
        //time O(1)
        set.add(nums[i]); 
    }
    return false;
};