/* Given an array of integers, rotate the array by 'N' elements.

[1, 2, 3, 4, 5] => length 5, offset 2, start index 3
after -1 rotations:
[2, 3, 4, 5, 1]
and after 2 rotations: 
[4, 5, 1, 2, 3]


Time complexity: O(n)
Memory complexity: O(1)
*/

const rotateArray = (arr, num) => {
	// let's start with O(n) memory complexity then optimize
	// loop through array at num offset from length
	let loopStart = arr.length - num;
	if (loopStart > arr.length) {
		loopStart = loopStart - arr.length;
	}
	for(var i = 0; i < arr.length; i++) {
		let placeHolder = arr[i];
		arr[i] = arr[loopStart];
		arr[loopStart] = placeHolder;
	}
	return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

