function test(feature, testerFunction) {
	console.info(`----> START Test: ${feature}`);
	testerFunction();
	console.info(`END Test <----`);
	console.info('');
}

module.exports = test;
