function fetchSomething() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('some data [after 2sec.]'), 2000);
	});
}

async function getData() {
	const data = await fetchSomething();
	console.log('getData:', data);
}

function test() {
	console.log('calling async function (getData)');
	getData();
	console.log('...getData was called');
}

module.exports = test;
