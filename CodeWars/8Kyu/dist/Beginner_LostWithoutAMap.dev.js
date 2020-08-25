"use strict";

/*

8kyu - Beginner - Lost Without a Map

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

*/
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
function maps(x) {
  return x.map(function (n) {
    return n * 2;
  });
}