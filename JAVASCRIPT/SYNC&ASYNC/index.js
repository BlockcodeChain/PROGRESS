// // async and sync 

// Synchronous (Sync)
// Runs line by line in call stack.
// Each operation waits for the previous one to finish.
// Example:
// console.log("A");
// console.log("B");
// console.log("C");

// Output:

// A
// B
// C
// Asynchronous (Async)
// Does not block the code.
// Uses things like setTimeout, setInterval, APIs, Promises, async/await.
// Other code can run while waiting for async task to complete.
// Example:
// console.log("A");

// setTimeout(() => {
//   console.log("B"); // runs later
// }, 1000);

// console.log("C");

// Output:

// A
// C
// B


// 2."JavaScript is single-threaded, so it executes one task at a time. But async tasks like setTimeout, API calls, or Promises run in the background, so they don’t block the main thread. When they finish, the event loop pushes them back to the call stack to execute."

// Example:

// console.log("Start");

// setTimeout(() => {
//   console.log("Async Task done");
// }, 1000);

// console.log("End");

// 3.Blocking code is code that stops the execution of the next lines until it finishes.
// Basically, JS waits for that task to complete before moving to the next task.
// Most synchronous code is blocking.
// ..........blocking code
console.log("Start");

for(let i = 0; i < 1000000000; i++) {
  // heavy computation
}

console.log("End");

// : Non-Blocking (Async) Code
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");