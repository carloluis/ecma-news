function commas(arg1, arg2,) {
	console.info('commas args:', arguments);
}

function test() {
	console.info('exec. `commas(1,2,)`');
	commas(1, 2,);
}

module.exports = test;
