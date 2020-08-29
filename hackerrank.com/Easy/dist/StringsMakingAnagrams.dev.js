/*

Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?
Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.
For example, if  and , we can delete  from string  and  from string  so that both remaining strings are and  which are anagrams.
Function Description
Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.
makeAnagram has the following parameter(s):

a: a string
b: a string
Input Format

The first line contains a single string, . 
The second line contains a single string, .

Constraints

The strings  and  consist of lowercase English alphabetic letters ascii[a-z].
Output Format
Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

Sample Input

cde
abc
Sample Output

4
Explanation

We delete the following characters from our two strings to turn them into anagrams of each other:

Remove d and e from cde to get c.
Remove a and b from abc to get c.
We must delete  characters to make both strings anagrams, so we print  on a new line.
*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
'use strict';

var fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString = '';
var currentLine = 0;
process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});
process.stdin.on('end', function () {
  inputString = inputString.replace(/\s*$/, '').split('\n').map(function (str) {
    return str.replace(/\s*$/, '');
  });
  main();
});

function readLine() {
  return inputString[currentLine++];
} // Complete the makeAnagram function below.


function makeAnagram(stringA, stringB) {
  var la = stringA.length;
  var lb = stringB.length;
  var count = la + lb;
  var map = {};

  for (var i = 0; i < la; i++) {
    var str = stringA[i];
    map[str] = ++map[str] || 1;
  }

  for (var _i = 0; _i < lb; _i++) {
    var _str = stringB[_i];

    if (!map[_str]) {
      continue;
    }

    map[_str]--;
    count -= 2;
  }

  return count;
}

function main() {
  var ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  var a = readLine();
  var b = readLine();
  var res = makeAnagram(a, b);
  ws.write(res + '\n');
  ws.end();
}