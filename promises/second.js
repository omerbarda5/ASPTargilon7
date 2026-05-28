/**
 * OUTPUT: 2 4 1 3
 * 
 * Explanation: 
 * 1. Synchronous code runs first:
 * then the first timeout loaded into the macrotask queue. 
 * then the first promise loaded into the microtask queue.
 *  
 * 2. Then microtasks (promises) are executed so 2 print first.
 * then the second timeout loaded into the macrotask queue.
 * then the inner promise loaded into the microtask queue and executed so 4 print.
 * 
 * 3. Then macrotasks (setTimeout) are executed in queue order so 1 print, then 3 print.
 */

setTimeout(() => console.log(1), 0);
Promise.resolve().then(() => {
console.log(2);
setTimeout(() => console.log(3), 0);
Promise.resolve().then(() => {
console.log(4);
});
});