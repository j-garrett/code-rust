/*
  O(log n) time
  O(log n) memory complexity (bonus points: constant);

  Find value in a sorted array that has been rotated. (Rotated means end index has been moved to 0 index and all values pushed back.)

  [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188]

  rotated 4 times:

  [155, 162, 176, 188, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133]
*/

const searchRotatedArray = (array, target, startIdx, endIdx) => {
  startIdx = startIdx || 0;
  endIdx = endIdx || array.length - 1;
  const midIdx = Math.floor((endIdx - startIdx) / 2) + startIdx;
  // console.log(
  //   'startIdx: ', startIdx,
  //   '\nendIdx: ', endIdx,
  //   '\nmidIdx: ', midIdx,
  //   '\ntarget: ', target,
  //   '\narray[midIdx]: ', array[midIdx]
  //   );
  // Base case is our target is at mid index
  if (array[midIdx] === target) {
    return midIdx;
  }
  // check values at each index to determine which half of array is sorted
  if (array[startIdx] < array[midIdx]) {
    // console.log('first half is sorted');
    if (array[startIdx] <= target
        && target <= array[midIdx]) {
      // console.log('and first half contains target');
      return searchRotatedArray(array, target, startIdx, midIdx);
    } else {
      // console.log('target is in partially sorted second half');
      return searchRotatedArray(array, target, midIdx, endIdx);
    }
  } else if (array[midIdx] < array[endIdx]) {
    // console.log('second half is sorted');
    if (array[midIdx] <= target
        && target <= array[endIdx]) {
      // console.log('and second half contains target');
      return searchRotatedArray(array, target, midIdx, endIdx);
    } else {
      // console.log('target is somewhere in partially sorted first half');
      return searchRotatedArray(array, target, startIdx, midIdx);
    }
  }
  // if value is inside sorted portion then continue with normal binary search in that portion
  // otherwise it's in the unsorted half so we'll recurse into that with searchRotatedArray
  return null;
};

console.log(searchRotatedArray([3, 4, 1, 2], 1), ' should be 2');
console.log(searchRotatedArray([3, 4, 1, 2], 3), ' should be 0');
console.log(searchRotatedArray([10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9], 13), ' should be 3');
console.log(searchRotatedArray([3, 4, 1, 2], 5), ' should be null');
console.log(searchRotatedArray([10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9], 13), ' should be 3');
console.log(searchRotatedArray([10, 11, 13, 1, 2, 3, 4, 5, 6, 7, 9], 11), ' should be 1');



// Find which portion of array is sorted
// check if mid is greater than start
// THEN WITH ANOTHER IF (not else if)
// check if mid is less than end
// (at some point the entire portion of array we are looking at will be sorted)
// Inside sorted portion, check if target is greater than start and less than end
// If it's not, we will recurse with unsorted half
// If it IS then we will do normal binary search on that sorted half