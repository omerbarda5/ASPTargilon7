
/**
 * OUTPUT: 1 4 3 2
 * 
 * Explanation: 
 * 1. Synchronous code runs first so 1 print first. 
 * then the timeout loaded into the macrotask queue. 
 * then the promise loaded into the microtask queue.
 * then 4 is printed because it is synchronous code.
 *  
 * 2. Then microtasks (promises) are executed so 3 print.
 * 
 * 3. Then macrotasks (setTimeout) are executed so 2 print.
 */

console.log(1);
setTimeout(() => {
console.log(2);
}, 0);
Promise.resolve().then(() => {
console.log(3);
});
console.log(4);