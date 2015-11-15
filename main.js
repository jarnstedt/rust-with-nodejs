var n = 44;
var result;

// -------------------------------------------------
// Rust version
// -------------------------------------------------

console.time('rust-timer');

var FFI = require('ffi');

var lib = FFI.Library('./target/release/libmylib.so', {
    fibonacci: ['int', ['int']]
});

result = lib.fibonacci(n);
console.log('Fibonacci ' + n + ': ' + result);
console.timeEnd('rust-timer');

// -------------------------------------------------
// Pure JavaScript version
// -------------------------------------------------

console.time('pure-js-timer');

var fibonacci = function(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

result = fibonacci(n);
console.log('Fibonacci ' + n + ': ' + result);
console.timeEnd('pure-js-timer');
