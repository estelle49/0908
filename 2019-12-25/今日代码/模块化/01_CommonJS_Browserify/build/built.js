(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * 
 */
// 引入模块
const m1 = require('./module1')
const m2 = require('./module2')

console.log(m1);
console.log(m2);
console.log(m1(20, 50));
console.log(m2.sum(100, 50));
},{"./module1":2,"./module2":3}],2:[function(require,module,exports){
// 定义模块
function add(x, y) {
    return x + y
}
// 暴露模块
module.exports = add
},{}],3:[function(require,module,exports){
// 定义模块
function sum(x, y) {
    return x - y
}
// 暴露模块
exports.sum = sum
},{}]},{},[1]);
