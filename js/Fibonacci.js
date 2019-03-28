console.log('                            11.1 task');

function fibonacci3(n) {
	let sqrt = Math.sqrt(5);
	let a = (1 + sqrt) / 2;
	let b = (1 - sqrt) / 2;
	return (Math.pow(a, n) - Math.pow(b, n)) / sqrt;
}
console.log(fibonacci3(3));
console.log(fibonacci3(5));
console.log(fibonacci3(7));

console.log('                            11.2 task');

function fibonacci(n) {
	let a = 1,
		b = 1;
	for (let i = 3; i <= n; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
}
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));