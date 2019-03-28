console.log('                            4 task')
function sumRange(start, end) {
	let sumOfRange = 0;
	while (start <= end) {
		sumOfRange += start;
		start++;
	}
	return sumOfRange;
}
console.log(sumRange(2, 4));
console.log(sumRange(-1, 3));