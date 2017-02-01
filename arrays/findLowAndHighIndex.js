/*
  In a sorted array, find the low and high index of target value
  Return -1 if not found
  Use binary search since array COULD BE GAZILLIONS
*/

const findLowHigh = (target, arr, lowIdx = 0, maxIdx = arr.length, midPoint = Math.floor((maxIdx - lowIdx) / 2)) => {
  // We'll set targetLow to -1 since our base case will be not finding val
  let targetLow = -1;
  let targetHigh;
  let count = 0;
  // We will need to do two binary searches
  // One will be looking for low index
  // The other will look for high index
  // find midIndex
  // check if index is larger or smaller than target
  while (maxIdx >= lowIdx && count < 100) {
    count++;
    // set max index to mid index - 1 if current target is larger
    // set max index to end of array if current target is smaller
      //recursive call to find LowHigh with left and right portions to set result tuple
    // if current target is target value
    // then we need to start looking for high and low
    // split into two binary searches at this time
    // using minimum index and current index - 1 for smaller index portion
    // and use current index + 1 and current max index for larger index portion

  }
  return targetLow > -1 ? [targetLow, targetHigh] : targetLow;
};

console.log('Result should be [0, 0]: ', findLowHigh(1, [1, 2, 5, 5, 5, 6, 7, 8, 9]));
console.log('Result should be [1, 1]: ', findLowHigh(2, [1, 2, 5, 5, 5, 6, 7, 8, 9]));
console.log('Result should be [2, 4]: ', findLowHigh(5, [1, 2, 5, 5, 5, 6, 7, 8, 9]));
console.log('Result should be -1: ', findLowHigh(20, [1, 2, 5, 5, 5, 6, 7, 8, 9]));


