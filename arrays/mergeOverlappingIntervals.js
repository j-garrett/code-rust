/*
Given an array (list) of intervals as input where each interval has a start and end timestamps. Input array is sorted by starting timestamps. You are required to merge overlapping intervals and return output array (list).

Consider below input array. Intervals (1, 5), (3, 7), (4, 6), (6, 8) are overlapping so should be merged to one big interval (1, 8). Similarly intervals (10, 12) and (11, 15) are also overlapping intervals and should be merged to (10, 15).

O(n) time complexity and O(1) memory complexity
*/

const mergeOverlaps = (arr) => {
  // Build new interval.
  const merged = [arr[0]];
  // Iterate over input array
  for (let i = 0; i < arr.length; i++) {
    const curMerge = merged[merged.length - 1];
    // If new interval end is between next intervals timestamped
    if (curMerge[1] >= arr[i][0] && curMerge[1] < arr[i][1]) {
      // Update new interval end with next intervals end
      curMerge[1] = arr[i][1];
    } else if (curMerge[1] < arr[i][0]) {
      // Else start a NEW new interval
      merged.push(arr[i]);
    }
  }
  return merged;
};

console.log(mergeOverlaps([[1, 5], [3, 7], [4, 6], [6, 8]]));
console.log(mergeOverlaps([[10, 12], [11, 15]]));

