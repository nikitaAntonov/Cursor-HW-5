console.log('                            7 task');

function firstAndLastToUpper(str) {
	let newString = str[0].toUpperCase() + str.slice(1, -1) + str[str.length-1].toUpperCase();
	console.log(newString);
}
firstAndLastToUpper('abc')
