const target = { bar: 'bar' };
const foo = () => console.info('foo called');

const handler = {
	get(target, property, receiver) {
		if (!target[property]) {
			return `No property named ${property} was found`;
		}
		return `.${property}: ${target[property]}`;
	},
	apply(target, thisArg, args) {
		console.info('from Proxy handler!');
		target.call(thisArg, ...args);
	}
};

const targetProxy = new Proxy(target, handler);
const fooProxy = new Proxy(foo, handler);

function test() {
	console.info('proxy - get:', targetProxy.bar);
	console.info('proxy - get:', targetProxy.hmm);

	console.info('proxy - call:', fooProxy());
}

module.exports = test;
