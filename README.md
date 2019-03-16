# algorithms
*Algorithms practiceon on cite https://leetcode.com/problemset/all/*

### 3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/

**Given a string, find the length of the longest substring without repeating characters.**

#### Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

 #### Solution: 
```javascript
var lengthOfLongestSubstring = function(s) {
    let symLen = s.length,
        maxLen = 0,
        maxStr = '',
        symStr,
        pos;

  for( let i = 0 ; i < symLen; i++ ) {

    symStr = s[i];
    pos = maxStr.indexOf(symStr);

    if(pos > -1){
      maxStr = maxStr.substring(pos + 1);
    }

    maxStr += symStr;
    maxLen = Math.max(maxLen, maxStr.length);
  }
    return maxLen;
};
```
### 1. Two Sum
https://leetcode.com/problems/two-sum/submissions/

**Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.**

#### Example 1:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

 #### Solution: 
```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      for (var i = 0; i < nums.length; i++) {
        for (var k = i + 1; k < nums.length; k++) {
            if (nums[i] + nums[k] === target) {
                return [i, k];
            }
        }
    }
};
```
