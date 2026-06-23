class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         let list=new Map();
         
           for (let word of strs) {
               let key = word.split("").sort().join("")
                   if (list.has(key)) {
                       list.get(key).push(word)
                       }    else {
                           list.set(key, [word])
                    }
                
                  }
                  return Array.from(list.values())
    }
    }
