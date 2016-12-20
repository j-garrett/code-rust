/*
Given an array of integers, sort it using quickSort algorithm
Quick sort uses a pivot method ->
  Select a pivot (either randomly or starting at 0 index)
  Compare that number with all values in the array
  Smaller numbers will end up to the left and larger nums to the right
  Choose next pivot (randomly or at 0) for left portion of array
  Repeat
  After all values to the left of original pivot are sorted, move to the right
*/

const quickSort = (arr, startIdx, endIdx) => {
  // Start pivot at 0 index and grab its value
  pivot = startIdx || 0;
  let pivotVal = arr[pivot];
  // If left group and right group are overlapping, we can return... if recursing
  // Iterate over array
  let largerStart = pivot + 1;
  let largerEnd = endIdx || arr.length - 1;
  let smallerStart = startIdx || pivot + 1;
  let smallerEnd;
  for (let i = pivot + 1; i < arr.length; i += 1) {
      console.log('smallerStart and End: ', smallerStart);
  console.log('smallerStart and End: ', smallerEnd);
  console.log('larger Start and End: ', largerStart);
  console.log('larger Start and End: ', largerEnd);
    console.log('arr: ', arr);
    if (arr[i] > pivotVal) {
      // If val is larger than pivot, leave it in place
      console.log('arr[i] is larger than pivot with val: ', arr[i]);

      largerEnd = i;
    } else if (arr[i] <= pivotVal) {
      if (smallerStart === null) {
        smallerStart === i;
      }
      console.log('arr[i] is smaller than pivot with val: ', arr[i]);
      // If val is smaller than pivot, swap it with furthest left 'larger' group
      let temp = arr[i];
      arr[i] = arr[largerStart];
      arr[largerStart] = temp;
      smallerEnd = largerStart;
      largerStart += 1;
      largerEnd += 1;
    }
  }
  // After iteration, swap pivotVal with furthest right 'smaller' group
  arr[pivot] = arr[smallerEnd];
  arr[smallerEnd] = pivotVal;
  smallerStart -= 1;
  smallerEnd -= 1;
  // The pivot value is now in the right place
  // Repeat this process with 'smaller' group then 'larger' group
  // Do this with recursive calls passing bounds of group
  console.log('smallerStart and End: ', smallerStart);
  console.log('smallerStart and End: ', smallerEnd);
  console.log('larger Start and End: ', largerStart);
  console.log('larger Start and End: ', largerEnd);
    console.log('arr: ', arr);
  if (smallerStart < smallerEnd) {
    console.log('calling quickSort on left portion');
    quickSort(arr, smallerStart, smallerEnd);
  }
  if (largerStart < largerEnd) {
    console.log('calling quickSort on right portion');
    quickSort(arr, largerStart, largerEnd);
  }
  return arr;
};

console.log(quickSort([3, 2, 0, 5, 1]));