/*
Given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one number 'x'. We have to find 'x'. The input array is not sorted.

For example, let's look at the below array.

n = 8
[3, 7, 1, 2, 8, 4, 5]

Missing Number = 6

*/

const findMissingNumber = (arr) => {

  // initialize arrTotal to length of array to account for missing value
  // Since values in array start at 1, but indices start at 0, we add 1
  let arrTotal = arr.length + 1;
  let numTotal = arr.reduce((acc, val, idx) => {
    // We want to find total sum of all values that SHOULD be there
    // Index will represent a SORTED version of all intended values
    arrTotal += (idx + 1);
    // Now we need to track the sum of all present numbers
    return acc + val;
  }, 0);

  console.log('arrtotal: ', arrTotal);
  console.log('numTotal: ', numTotal);
  return arrTotal - numTotal;
};

console.log('findMissingNumber: ', findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Should be 6
