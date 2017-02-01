/*
  Given a sorted array of integers, return index of given key.
  Return -1 if key not found.
*/

const binarySearch = (target, arr) => {
  let maxIdx = arr.length;
  let minIdx = 0;
  let midIdx;
  // Let's try this with a while loop
  while (maxIdx >= minIdx) {
    midIdx = Math.floor((maxIdx - minIdx) / 2) + minIdx;
    if (arr[midIdx] === target) {
      return midIdx;
    } else if (arr[midIdx] > target) {
      maxIdx = midIdx - 1;
    } else {
      minIdx = midIdx + 1;
    }
  }
  return -1;
};

console.log('Result should be 0: ', binarySearch(1, [1, 2, 5, 6, 7, 8, 9]));
console.log('Result should be 1: ', binarySearch(2, [1, 2, 5, 6, 7, 8, 9]));
console.log('Result should be 2: ', binarySearch(5, [1, 2, 5, 6, 7, 8, 9]));
console.log('Result should be 5: ', binarySearch(8, [1, 2, 5, 6, 7, 8, 9]));
console.log('Result should be 6: ', binarySearch(9, [1, 2, 5, 6, 7, 8, 9]));
console.log('Result should be 7: ', binarySearch(10, [1, 2, 5, 6, 7, 8, 9, 10]));
console.log('Result should be -1: ', binarySearch(20, [1, 2, 5, 6, 7, 8, 9]));
