console.log('                            8 task');

function cursorCheck(str) {
	let newStr = str.toLowerCase();
	if(newStr.includes("ostap") || newStr.includes("ironman") || newStr.includes("cursor")) {
		console.log('true');
	} else {
		console.log('false');
	}
}
cursorCheck('Hello I am OstaP')
cursorCheck('Superman is here')