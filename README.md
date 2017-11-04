# ecma-news

[![ecmascript](https://img.shields.io/badge/new--features-JS-F1E05A.svg)](https://github.com/carloluis/ecma-news)

ECMAScript new features (ES6, ES7, ES8).

This projects is intended for learning purposes, and was created for a meetup at the office.
Feel free to check it out, modify it, etc.

## Getting started

Download, or clone this project:

```bash
git clone https://github.com/carloluis/ecma-news.git
```

Then, run `index.js`:

```bash
node index.js
```

### Prerequisites

You need a `Node.js` engine with version `8`, or above.

### ECMAScript features

## ES6
* default parameters
* enhanced object literals
* arrow functions
* promises
* [template literals](./es6/template-literals.js)
* [new data structures](./es6/data-structures.js)
* [block scoped constructs](./es6/let-const.js)
* [generators](./es6/generators.js)
* [proxy objects](./es6/proxy.js)
* classes
* modules

Top ten features [here](https://webapplog.com/es6/)

## ES7
 * [exponential operator](./es7/exponential-op.js)
 * [array includes](./es7/array-includes.js)

## ES8
* [async / await](./es8/async-await.js)
* [new object functions](./es8/object-values.js)
* [string paddings](./es8/string-padding.js)
* function args with [trailing commas](./es8/trailing-commas.js)
* shared memory and atomics
    * shared memory: we can allow multiple threads read and write the same data with the new SharedArrayBuffer constructor
    * Atomics: We can use the Atomics object to make sure nothing that is being written or read will be interrupted in the middle of the process. So the operations are finished before a the next one starts.

### More

I have intentions to update this repo with the rest of `ecmascript` features...

## License

Licensed under the MIT License © 2017.

See [LICENSE](LICENSE) for more information.
