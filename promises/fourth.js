/**
 * OUTPUT: 6 4 1 2 3 5 7
 * 
 * Explanation: 
 * 1. Synchronous code runs first:
 * - level1() is called, printing 6, then calls and awaits level2().
 * - level2() is called, printing 4, then calls and awaits level3().
 * - level3() is called, printing 1, and executes the new Promise synchronously because of the resolve() is called immediately, printing 2.
 * - Then the await inside level3 suspends its continuation and loads it into the microtask queue.
 *  
 * 2. Then microtasks (promises) are executed:
 * - The continuation of level3 runs so 3 print. Since level3 is complete, it resolves and loads level2's continuation into the microtask queue.
 * - The continuation of level2 runs so 5 print. Since level2 is complete, it resolves and loads level1's continuation into the microtask queue.
 * - The continuation of level1 runs so 7 print.
 */

async function level3() {
console.log(1);
await new Promise((resolve,reject) => {
console.log(2)
resolve()
});
console.log(3);
}
async function level2() {
console.log(4);
await level3();
console.log(5);
}
async function level1() {
console.log(6);
await level2();
console.log(7);
}
level1();