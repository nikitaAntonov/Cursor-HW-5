console.log('                            9 task');

function toUppercase(str) {
	let  newStr = "";
	for (let i = 0; i < str.length; i++) {
		newStr += String.fromCharCode(str.charCodeAt(i) & 223);
	}
	return newStr;
}
toUppercase(`abc`)



