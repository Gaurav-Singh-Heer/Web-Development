# Blocking vs Non-Blocking Code

Blocking and non-blocking refer to how operations are handled, especially with respect to I/O operations, like file reading, database queries, or HTTP requests.

## Blocking Code

In blocking code, the execution of one operation prevents subsequent operations from starting until the current one is complete.

- This means the thread handling the request is blocked and cannot perform other tasks during this time.
- Blocking code is typically **synchronous**.

## Non-Blocking Code

In non-blocking code, operations are initiated, and the thread moves on to handle other tasks.

- When the operation is complete, a callback, promise, or `async/await` is used to handle the result.
- This is how **Node.js** and **Express** are designed to operate by default, using an event-driven, non-blocking I/O model.
- Non-blocking code is typically **asynchronous**.

## Comparison

| Aspect          | Blocking                      | Non-Blocking                   |
|---------------|-----------------------------|--------------------------------|
| Execution Flow | Synchronous (one task at a time) | Asynchronous (tasks run concurrently) |
| Server Capacity | Handles fewer requests concurrently | Handles many requests concurrently |
| Responsiveness | Can become unresponsive if one operation takes a long time | Remains responsive even with long-running tasks |
| Code Complexity | Simpler to write and understand | Requires managing callbacks, promises, or `async/await` |

## Example: Blocking vs Non-Blocking Code

### File Operations

`fs` is the predefined module in Node.js.

- `fs` stands for **File System**.
- `fs` module is used to work with files.
- `fs` is a native module, so no need to install it.
- `fs` module is available with the Node engine.
- There are two modes:
  - **Synchronous mode (Blocking code)**
  - **Asynchronous mode (Non-Blocking code)**

### Reading Data from Files

- `readFile()` is a predefined function in the `fs` module used to read data asynchronously.
- `readFileSync()` is a predefined function in the `fs` module used to read data synchronously.

---

## File Structure

```
|-- path.js
|-- static
|   |-- sample.txt
|-- readAsync.js
|-- readSync.js
```

### sample.txt
```
Welcome to fs module
```

### path.js
```javascript
module.exports = "../static/sample.txt";
```

### readAsync.js (Non-Blocking Code)
```javascript
// Import fs module
let fs = require('fs');

// Read data asynchronously
fs.readFile(require('../path'), "utf-8", (err, data) => {
    if (err) {
        console.log('Error while reading data:', err.code);
    } else {
        console.log(data);
    }
});

console.log('I am here');
```

### readSync.js (Blocking Code)
```javascript
// Import fs module
let fs = require('fs');

// Read data synchronously
let data = fs.readFileSync(require('../path'), 'utf-8');
console.log(data);

console.log('I am here');
```

## Explanation

- **`readFile()` (Asynchronous/Non-Blocking)**: Reads the file without stopping execution, so "I am here" is printed before file content.
- **`readFileSync()` (Synchronous/Blocking)**: Waits for the file to be read before proceeding, so file content is printed before "I am here".

This demonstrates how non-blocking operations enhance performance in Node.js.

