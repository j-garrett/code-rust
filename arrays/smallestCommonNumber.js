/*
Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays. For example, let's look at the below three arrays. Here 6 is the smallest number that's common in all the arrays.
*/
const arr1 = [6, 7, 10, 25, 30, 63, 64];
const arr2 = [-1, 4, 5, 6, 7, 8, 50];
const arr3 = [1, 6, 10, 14];

const smallestCommon = (arr1, arr2, arr3) => {
  let idx1 = 0;
  let idx2 = 0;
  let idx3 = 0;
  // iterate over all 3 arrays
  while (idx1 < arr1.length
        && idx2 < arr2.length
        && idx3 < arr3. length) {
    // iterate over each array until they are no longer <= to that highest number
    if (arr1[idx1] === arr2[idx2] && arr2[idx2] === arr3[idx3]) {
      return arr1[idx1];
    }
    if (arr1[idx1] < arr2[idx2] || arr1[idx1] < arr3[idx3]) {
      idx1 += 1;
    }
    if (arr2[idx2] < arr1[idx1] || arr2[idx2] < arr3[idx3]) {
      idx2 += 1;
    }
    if (arr3[idx3] < arr1[idx1] || arr3[idx3] < arr2[idx2]) {
      idx3 += 1;
    }
  }
  return null;
};

console.log(smallestCommon(arr1, arr2, arr3), ' should be 6.');
console.log(smallestCommon(arr2, arr1, arr3), ' should be 6.');
console.log(smallestCommon(arr2, arr3, arr1), ' should be 6.');
console.log(smallestCommon(arr2, arr3, []), ' should be null.');
console.log(smallestCommon([1, 4, 9], [7, 8, 9], [1, 2, 3, 4, 5, 9]), ' should be 9.');
