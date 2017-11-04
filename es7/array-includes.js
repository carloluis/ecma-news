function test(list, item) {
	console.info('array.includes:', list.includes(item));
	console.info('array.indexOf:', list.indexOf(item));
}

function arrayIncludesTest() {
	console.info('Difference between array.includes and array.indexOf');

	const numbers = [1, 2, 3, 4, NaN];
	console.info('list:', numbers);

	test(numbers, 1);
	test(numbers, 4);
	test(numbers, NaN);
}

module.exports = arrayIncludesTest;
