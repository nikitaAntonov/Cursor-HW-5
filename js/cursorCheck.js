console.log('                            8 task');

function cursorCheck(str) {
	let newStr = str.toLowerCase();
	if (newStr.includes("ostap") || newStr.includes("ironman") || newStr.includes("cursor")) {
		return true;
	}
	return false;
}
console.log(cursorCheck('Hello I am OstaP'));
console.log(cursorCheck('Superman is here'));
