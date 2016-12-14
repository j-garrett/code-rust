/*
Given an integer array, move all elements containing 0 to the left while maintaining the order of other element.
[1, 10, 20, 0, 59, 63, 0, 88, 0] --> [0, 0, 0, 1, 10, 20, 59, 63, 88]
Linear time and constant Space.
*/

const moveZeros = (arr) => {
  // constant space means mutate input
  // linear time means we have to touch each value at least once
  // Want two pointers
  // One for where zeroes go and the other for where rest do
  // We could start at end and have zeroes float forward as group
  // have tuple to track start/end indices of array group
  const zeroIndices = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // check if current value is a zero
    if (arr[i] === 0) {
      // if ZeroIndices is length 0 then we don't have group yet
      if (zeroIndices.length === 0) {
        zeroIndices[1] = i;
      }
      zeroIndices[0] = i;
    } else { // it's not zero, so we need it to swap with zero (if one exists)
      if (zeroIndices.length > 0) {
        // swap last array index value with current index value
        const interim = arr[i];
        arr[i] = 0;
        arr[zeroIndices[1]] = interim;
        zeroIndices[1]--;
        zeroIndices[0]--;
        // that's how we float them down
      }
      // else just continue since this doesnt need to float up
    }
  }
  return arr;
};

console.log('expected output[0, 0, 0, 1, 10, 20, 59, 63, 88]: ', moveZeros([1, 10, 20, 0, 59, 63, 0, 88, 0]));
console.log('empty arr: ', moveZeros([]));
console.log('[1] arr: ', moveZeros([1]));

