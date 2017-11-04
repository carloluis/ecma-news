// Map, Set, WeakMap, WeakSet

function test() {
	// SET
	console.info('SET');
	const set = new Set();
	set.add('hello').add('world').add('hello');
	console.log('set - size:', set.size);
	console.log('set - has:', set.has('hello'), set.has('world'));
	// clear, delete, entries, forEach, has, keys, values
	for (const item of set) {
		console.info(`set - item: ${item}`);
	}

	// WEAK SET
	console.info('WEAK SET');
	let hello = { hello: 42 };
	const weakSet = new WeakSet([hello, set, /* 'hmm' */]);
	console.info('weak set - has:', weakSet.has(hello));
	hello = null;
	console.info('weak set - has:', weakSet.has(hello));

	// MAP
	console.info('MAP');
	const map = new Map([[1, 'one']]);
	map.set('hello', 'world').set(set, 'the Set');
	console.log('map - size:', map.size);
	console.log('map - get:', map.get(set));
	// clear, delete, entries, forEach, has, keys, values,
	for (const [key, value] of map) {
		console.info(`map - key: ${key}, value: ${value}`);
	}

	// WEAK MAP
	console.info('WEAK MAP');
	let world = { world: 'hello' };
	const weakMap = new WeakMap();
	weakMap.set(world, 1);
	console.info('weak map - get:', weakMap.get(world));
	world = null;
	console.info('weak map - get:', weakMap.get(world));
}

module.exports = test;
