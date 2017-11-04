function foo() {
	{
		let x = 'root:x';
		var v = 'old var hoisting';
		{
			let x = 'inner:x';
			{
				const x = 'inner:const:x';
				// x = 1; // re-assign error
				console.log(x);
			}
			console.log(x);
			x = 1;
		}
		console.log(x);
	}
	console.log(typeof x);
	console.info(typeof v, v);
}

module.exports = foo;
