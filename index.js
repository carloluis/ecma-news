const test = require('./util');
const { letConst, templateLiteral, dataStructures, generators, proxy } = require('./es6');
const { arrayIncludes, exponentialOperator } = require('./es7');
const { asyncAwait, objectValues, stringPadding, trailingCommas } = require('./es8');

// ES6
// (arg = 'ES6') => {}; { ...objectSpread }; // enhanced object literals
// promises // classes, modules
test('data structures (set)', dataStructures);
test('generators', generators);
test('let - const', letConst); // block scoped constructs (let, const)
test('Proxy', proxy);
test('Template Literal', templateLiteral); // templates literals, multiline strings

// ES7
test('array.includes', arrayIncludes);
test('exponential operator', exponentialOperator);
// console.info('exponential operator', Math.pow(2, 3) === 2 ** 3);

// ES8
test('async-await', asyncAwait);
test('Object .values | .entries', objectValues);
test('String padding', stringPadding);
test('Trailing commas', trailingCommas);

// ES9 (lifting template literal restriction) \u \x
