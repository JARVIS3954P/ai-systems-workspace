// Async JavaScript - Quick Revision Notes

/*
- JavaScript is synchronous by default and runs code line by line.
- It is single-threaded, so only one task runs at a time in the call stack.
- Blocking code stops the program until a task finishes.
- Non-blocking code allows other tasks to continue while waiting.
- Browsers and Node.js provide extra APIs like setTimeout, fetch, event listeners, and file I/O.
- The event loop checks the call stack and callback queue to run async tasks.
- Even setTimeout(0) does not run immediately; it waits until the current stack is clear.
- Promises help manage async work and are the foundation for async/await.
*/

console.log("Start");

setTimeout(() => {
  console.log("Async task executed");
}, 0);

console.log("End");
