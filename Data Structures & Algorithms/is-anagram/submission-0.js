class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let count1 = {};
        let count2 = {};

        for (let char of s) {
            if (char in count1) {
                count1[char] += 1;
            } else {
                count1[char] = 1;
            }
        }

        for (let char of t) {
            if (char in count2) {
                count2[char] += 1;
            } else {
                count2[char] = 1;
            }
        }

        for (let key of Object.keys(count1)) {
            if (count1[key] !== count2[key]) {
                return false;
            }
        }
        return true;
    }
}