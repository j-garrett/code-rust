/*

  Given a large array of integers and a window of size W, find current maximum in the window as the window slides through the entire array

  [-4, 2, -5, 3, 6], W = 3

  0 - 2 index elements, the max is 2
  1 - 3 index elements, the max is 3
  2 - 4 index, max is 6

  time complexity: O(n);
  memory complexity: O(w)

*/

const maxSlidingWindow = (array, windowSize) => {

  let largest = Math.max.apply(null, array);
  return largest;
};

console.log('should be 6: ', maxSlidingWindow([-4, 2, -5, 3, 6], 3));
console.log('or should it be [2, 3, 6]?: ', maxSlidingWindow([-4, 2, -5, 3, 6], 3));

