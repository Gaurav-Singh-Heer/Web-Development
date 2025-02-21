```markdown
# Blocking vs Non-Blocking Code

## Blocking vs Non-Blocking Code

Blocking and non-blocking refer to how operations are handled, especially with respect to I/O operations, like file reading, database queries, or HTTP requests.

### Blocking Code
- In blocking code, the execution of one operation prevents subsequent operations from starting until the current one is complete.
- This means the thread handling the request is blocked and cannot perform other tasks during this time.
- Blocking code is typically synchronous.

### Non-Blocking Code
- In non-blocking code, operations are initiated, and the thread moves on to handle other tasks. When the operation is complete, a callback, promise, or async/await is used to handle the result.
- This is how Node.js and Express are designed to operate by default, using an event-driven, non-blocking I/O model.
- Non-blocking code is typically asynchronous.

### Comparison

| Aspect            | Blocking                        | Non-Blocking                  |
|------------------|--------------------------------|-------------------------------|
| Execution Flow   | Synchronous (one task at a time). | Asynchronous (tasks run concurrently). |
| Server Capacity  | Handles fewer requests concurrently. | Handles many requests concurrently. |
| Responsiveness   | Can become unresponsive if one operation takes a long time. | Remains responsive even with long-running tasks. |
| Code Complexity  | Simpler to write and understand. | Requires managing callbacks, promises, or async/await. |

---

## Example (Complete focus on Blocking vs Non-Blocking Code)

### File Operations

- `'fs'` is the predefined module in NodeJS.
- `fs` stands for file system.
- `fs` module is used to work with files.
- `fs` is a native module, so no need to download it.
- `fs` module is available with the Node engine.

There are two modes:
- **Synchronous mode (Blocking code)**
- **Asynchronous mode (Non-Blocking code)**

### Reading data from files
- `readFile(-,-)` is the predefined function in the `fs` module.
- This function is used to read data asynchronously.
- `readFileSync(-)` is the predefined function in the `fs` module.
- This function is used to read data synchronously.

---

## File Structure

```
- path.js
- static
  - sample.txt
- readSync.js
- readAsync.js
```

---

### sample.txt
```
Welcome to fs module
```

---

### path.js
```javascript
module.exports = "../static/sample.txt"
```

---

### readAsync.js
```javascript
// Import fs module
let fs = require('fs')
// Read data asynchronously
fs.readFile(require('../path'), "utf-8", (err, data) => {
    if (err)
        console.log('Error while reading data ', err.code)
    else
        console.log(data)
})
console.log('I am here')
```

---

#### Explanation
```javascript
// Import the 'fs' (File System) module, which provides functions for interacting with the file system.
let fs = require('fs')
// Read data from a file asynchronously using 'fs.readFile()'.
// Asynchronous reading means the script won't wait for the file to be read before moving on to the next task.
fs.readFile(
  require('../path'), // Specify the file path to read from
  "utf-8", // Specify the encoding of the file
  (err, data) => { // Callback function to handle the result
    // Check if an error occurred during file reading
    if (err) {
      // Log the error code to the console if an error occurred
      console.log('Error while reading data ', err.code)
    } else {
      // Log the file contents to the console if no error occurred
      console.log(data)
    }
  }
)
// Log a message to the console
// This will be executed immediately, before the file reading is complete
console.log('I am here')
```

---

### readSync.js
```javascript
// Import fs module
let fs = require('fs')
// Read data synchronously
let data = fs.readFileSync(require('../path'),'utf-8')
console.log(data)
console.log('I am here')
```

---

#### Explanation
```javascript
// Import the 'fs' (File System) module, which provides functions for interacting with the file system.
let fs = require('fs')
// Read data from a file synchronously using 'fs.readFileSync()'.
// Synchronous reading means the script will wait for the file to be read before moving on to the next task.
// This can potentially block other tasks from running, so use with caution.
let data = fs.readFileSync(
  require('../path'), // Specify the file path to read from
  'utf-8' // Specify the encoding of the file
)
// Log the file contents to the console
console.log(data)
// Log a message to the console
// Because 'fs.readFileSync()' is synchronous, this message will be logged after the file contents.
console.log('I am here')
```
```

