console.log('                            10 task');

function removeDuplicationLetters(str) {
	let dupLet = '';
	for (i = 0; i < str.length; i++) {
		if(dupLet.toLowerCase().indexOf(str[i].toLowerCase())==-1 || str.charAt(i) == ' ') {
			dupLet+= str[i];
		}
	}
	return dupLet;
}
removeDuplicationLetters('Hello I am Iron Man')


