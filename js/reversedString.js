console.log('                            2 task');

function reverse(str) {
	var newStr = '';
	for (i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
}
console.log(reverse('abc'));


// Самый простой способ используя кодировку написания справа на лево.
var str = 'Самый простой способ';
console.log('\u202E' + str);
