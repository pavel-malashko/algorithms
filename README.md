# algorithms
*Algorithms practiceon on cite https://leetcode.com/problemset/all/*

### 3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/

**Given a string, find the length of the longest substring without repeating characters.**

#### Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

 #### Resolve: 
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
