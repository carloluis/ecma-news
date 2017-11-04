const fibIterator = {
	[Symbol.iterator]() {
		let x = 0, y = 1;
		return {
			next() {
				[x, y] = [y, x + y];
				return { done: false, value: x };
			}
		};
	}
}

function* fibonacci(n) {
	let x = 0,
		y = 1;
	while (n > 0) {
		[x, y] = [y, x + y];
		yield x;
		n -= 1;
	}
}

function test() {
	console.info('consume iterators with `for item of Iterator`');

	for (let n of fibonacci(5)) {
		console.log(n);
	}
}

module.exports = test;
