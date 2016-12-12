/* Given an array of integers, rotate the array by 'N' elements.

[1, 2, 3, 4, 5] => length 5, offset 2, start index 3
after -1 rotations:
[2, 3, 4, 5, 1]
and after 2 rotations:
[4, 5, 1, 2, 3]


Time complexity: O(n)
Memory complexity: O(1)
*/

const rotateArray = (arr, rotations) => {
  // This does not work if num > arr.length
  // We can use modulo to find remainder which is how many rotations beyond a perfect rotation it will be
  // rotations 5 with length 5 means everything rotates back to place
  // rotations 8 with length 5 means we only need to rotate 3 times
  // we can't use 8 - length 5 to find 3 though
  // larger numbers require module
  // 13 % 5 === 3 && 13 - 5 !== 3
  num = rotations % arr.length;
  // reverse array
  // first group is 0 index to num-1 index
  // second group is num index to end
  // each group needs to be unreversed
  // we'll need to do this unreverse manually
  arr.reverse();
  const secondGroupStart = num > 0 ? num : arr.length + num;
  for (var i = 0, j = secondGroupStart - 1; i < j; i++, j--) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (var i = secondGroupStart, j = arr.length - 1; i < j; i++, j--) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
// Test for positive num
console.log('is it [4, 5, 1, 2, 3]?: ', rotateArray([1, 2, 3, 4, 5], 2));
// Test for num larger than arr.length
console.log('is it [3, 4, 5, 1, 2]?: ', rotateArray([1, 2, 3, 4, 5], 3));
console.log('is it [3, 4, 5, 1, 2]?: ', rotateArray([1, 2, 3, 4, 5], 8));
// Test for negative num
console.log('is it [3, 4, 5, 1, 2]?: ', rotateArray([1, 2, 3, 4, 5], -2));
console.log('is it [10, 20, 0, 59, 86, 32, 11, 9, 40, 1]?: ', rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -1));

