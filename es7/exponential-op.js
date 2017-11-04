const pow = (base, power) => base ** power;

function test() {
	console.info('Math.pow(base,pow) === base ** pow:', Math.pow(2, 3), pow(2,3));
}

module.exports = test;
