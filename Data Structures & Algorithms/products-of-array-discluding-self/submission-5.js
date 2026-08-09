class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n=nums.length
      let prefix;
      let suffix;
      let result;

      for(let i=0;i<nums.length;i++){
        prefix[i]=prefix[i-1]*nums[i-1];
      }
      for(let i=n-2;i>=0;i--){
        suffix[i]=suffix[i+1]*nums[i+1];
      }
      for(let i=0; i<n;i++){
        result[i]=prefix[i]*suffix[i]
      }
      return result
    }
}
