class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let count= {}
      for(let num of nums){
        if(num in count){
            count[num]+=1;
        }
        else{
            count[num]=1;
        }
      }
      let keys=Object.keys(count);
      keys.sort((a,b)=> count[b]-count[a])
   return keys.slice(0,k).map(Number);
      
    }
}
