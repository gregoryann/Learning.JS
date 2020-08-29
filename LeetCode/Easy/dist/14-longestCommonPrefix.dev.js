"use strict";

/*  
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';
  var firstString = strs[0];
  var commonLength = firstString.length;

  for (var i = 1; i < strs.length; i++) {
    for (var j = 0; j < commonLength; j++) {
      if (!strs[i][j]) break;
      if (firstString[j] !== strs[i][j]) break;
    }

    commonLength = j;
  }

  return firstString.substring(0, commonLength);
}; // a better way


var longestCommonPrefix = function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }

  return strs.reduce(function (pre, str) {
    while (str.indexOf(pre) !== 0) {
      pre = pre.slice(0, pre.length - 1);
    }

    return pre;
  }, strs[0]);
};