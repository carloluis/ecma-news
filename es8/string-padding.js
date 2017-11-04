function test() {
	const string = 'es8';

	console.log('string:', string);
	console.log('.padStart(10):', string.padStart(10));
	console.log(".padStart(10, 'es6,es7,'):", string.padStart(10, 'es6,es7,'));
	console.log(".padStart(10, '0'):", string.padStart(10, '0'));
	console.log("padEnd(10, 'wow'):", string.padEnd(10, 'wow'));
}

module.exports = test;
