class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dup= new Set(nums);
       return dup.size!==nums.length;
    }
}
