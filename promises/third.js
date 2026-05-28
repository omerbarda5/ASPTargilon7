/**
 * OUTPUT: 4 1 5 2 3
 * 
 * Explanation: 
 * 1. Synchronous code runs first so 4 print first.
 * then demo() is called, printing 1, and the first await loaded the continuation into the microtask queue.
 * then 5 is printed because it is synchronous code.
 *  
 * 2. Then microtasks (promises) are executed so the first continuation runs and 2 print.
 * then the second await loaded the continuation into the microtask queue.
 * then the second continuation runs so 3 print.
 */

async function demo() {
console.log(1);
await Promise.resolve();
console.log(2);
await Promise.resolve();
console.log(3);
}
console.log(4);
demo();
console.log(5);