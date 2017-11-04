function helper(strings, ...keys) {
	const str1 = strings[0]; // hello
	const str2 = strings[1]; // !
	return `-> ${str1} ${keys[0]} ${str2.repeat(4)}`;
}

function test() {
	const bar = 'bar';
	const result = helper`hello ${bar}!`;
	console.info('template literal:', result);
}

module.exports = test;
