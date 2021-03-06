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
### 7. Reverse Integer

https://leetcode.com/problems/two-sum/submissions/

**Given a 32-bit signed integer, reverse digits of an integer.**

#### Example 1:
Input: 123
Output: 321

#### Example 2:
Input: -123
Output: -321

#### Example 3:
Input: 120
Output: 21

 #### Solution: 
```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x;
    let maxInteger = 2147483647;
       if(sign >= 0 ) sign = "";             
       else sign = "-";
    x = (sign + Math.abs(x).toString().split("").reverse().join(""));
    return (x <= maxInteger && x >= -maxInteger) ? x : 0;
};
```
### 27. Remove Element

https://leetcode.com/problems/remove-element/

**Given an array nums and a value val, remove all instances of that value in-place and return the new length.**

#### Example 1:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === val) {
            nums.splice(i,1); 
            i--
        }              
    }
    return nums.length;
};
```
### 26. Remove Duplicates from Sorted Array

**Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.**

#### Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
      for (i = 0; i < nums.length; i++) {  
          if (nums[i] == nums[i+1]) {
                nums.splice(i, 1);
                i--;
          }
      }
      return nums.length;
};
```
### 35. Search Insert Position

**Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.**

#### Example 1:

Input: [1,3,5,6], 5;

Output: 2
#### Example 2:

Input: [1,3,5,6], 2;

Output: 1

#### Example 3:

Input: [1,3,5,6], 7;

Output: 4

#### Example 4:

Input: [1,3,5,6], 0;

Output: 0

```javascript
/**
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let min = Math.min( ...nums ),
        max = Math.max( ...nums );
    for(let i = 0; i <= nums.length; i++){
         if(target > max)return nums.length;
         if(target < min) return 0;
         if(nums[i]<target && nums[i+1]>target) return i+1;
         if(target == nums[i]) return i;                                                                        
    }   
};
```

### 34. Find First and Last Position of Element in Sorted Array

**Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].**

#### Example 1:

Input: nums = [5,7,7,8,8,10], target = 8

Output: [3,4]

#### Example 2:

Input: nums = [5,7,7,8,8,10], target = 6

Output: [-1,-1]

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let arr = [],
        beginPos =  nums.indexOf(target),
        endPos =  nums.lastIndexOf(target);
    arr.push(beginPos,endPos);
    return arr;
};
```

