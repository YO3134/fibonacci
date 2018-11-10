'use strict';
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
const len = 40;
for (let i = 0; i <= len; i++){
    console.log(fib(i));
}
//関数の定義のなかで関数自信を呼び出すことを再帰と呼びます