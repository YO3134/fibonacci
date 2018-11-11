'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = fib( n - 1 ) + fib( n - 2);
    memo.set(n, value); 
    return value;
}
const len = 40;
for (let i = 0; i <= len; i++){
    console.log(fib(i));
}
//関数の定義のなかで関数自信を呼び出すことを再帰と呼びます