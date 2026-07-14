class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let count = {};
      for(let num of nums){
        if(num in count){
          count[num]+=1
        }
        else{
          count[num]=1
        }
      }
      let key = Object.keys(count);
      key.sort((a,b)=> count[b]-count[a]);
       return key.slice(0,k).map(Number);

    }
}
