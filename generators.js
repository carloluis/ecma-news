function* fibonacci(n) {
	let x = 0,
		y = 1;
	while (n > 0) {
		[x, y] = [y, x + y];
		yield x;
		n -= 1;
	}
}

const fibonacciGenerator = fibonacci(5);
console.log(fibonacciGenerator.next());

for (let n of fibonacci(5)) {
	console.info(n);
}
