/*
Given an array of integers and a value, determine if there are any two integers in the array which sum equal to the given value.
[5, 7, 1, 2, 8, 4, 3]
Target Sum -> 10 -> [7, 3], [2, 8]
Target Sum -> 19 -> NOPE
*/

const addUpToInput = (arr, target) => {
  const resultsObj = {};
  const sumTuples = [];
  for (let i = 0; i < arr.length; i++) {
    let inverse = target - arr[i];
    if (resultsObj[inverse] !== undefined) {
      sumTuples.push([inverse, arr[i]]);
    } else {
      resultsObj[arr[i]] = target - arr[i];
    }
  }
  return sumTuples;
};

console.log(addUpToInput([5, 5, 7, 1, 2, 8, 4, 3], 10));
