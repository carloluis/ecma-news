const countries = {
	AR: 'Argentina',
	BR: 'Brazil',
	CU: 'Cuba',
	UY: 'Uruguay'
};

function test() {
	console.log('object', countries);
	console.log('values', Object.values(countries));
	console.log('entries', Object.entries(countries));
	console.log('getOwnPropertyDescriptors', Object.getOwnPropertyDescriptors(countries));

	console.log('iterate over Object.entries');
	for (const [key, value] of Object.entries(countries)) {
		console.log(`key: ${key}, value: ${value}`);
	}
}

module.exports = test;
