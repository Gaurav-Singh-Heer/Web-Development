https://shorturl.at/G2IAP  
19 Feb 2025  

20 Feb 2025  

G17 BEE  
- Blocking vs non blocking code  
- Read  
- Write  
- Append  

=================================================  
Blocking vs non-blocking code  
=================================================  
Blocking and non-blocking refer to how operations are handled, especially with respect to I/O operations, like file reading, database queries, or HTTP requests.  

### Blocking Code  
- In blocking code, the execution of one operation prevents subsequent operations from starting until the current one is complete.  
- This means the thread handling the request is blocked and cannot perform other tasks during this time.  
- Blocking code is typically synchronous.  

### Non-Blocking Code  
- In non-blocking code, operations are initiated, and the thread moves on to handle other tasks. When the operation is complete, a callback, promise, or async/await is used to handle the result.  
- This is how Node.js and Express are designed to operate by default, using an event-driven, non-blocking I/O model.  
- Non-Blocking code is typically asynchronous.  

### Comparison  
| Aspect | Blocking | Non-Blocking |  
|--------|----------|--------------|  
| Execution Flow | Synchronous (one task at a time). | Asynchronous (tasks run concurrently). |  
| Server Capacity | Handles fewer requests concurrently. | Handles many requests concurrently. |  
| Responsiveness | Can become unresponsive if one operation takes a long time. | Remains responsive even with long-running tasks. |  
| Code Complexity | Simpler to write and understand. | Requires managing callbacks, promises, or async/await. |  

## Example (Complete focus on Blocking vs non-blocking code)  
==============================================================  
### File Operations:-  
==============================================================  
- 'fs' is the predefined module in NodeJS.  
- fs stands for file system.  
- fs module is used to work with files.  
- fs is a native module, so no need to download it.  
- fs module is available with the node engine.  

There are two modes  
- Synchronous mode (Blocking code)  
- Asynchronous mode (Non - Blocking code)  

### Reading data from files  
- `readFile(-,-)` is the predefined function in the fs module.  
- This function is used to read data asynchronously.  
- `readFileSync(-)` is the predefined function in the fs module.  
- This function is used to read data synchronously.  

#### Folder Structure  
```
<>  
- path.js  
- static  
  - sample.txt  
- read  
  - readSync.js  
  - readAsync.js  
```

#### sample.txt  
```
Welcome to fs module  
```

#### path.js  
```javascript
module.exports = "../static/sample.txt"  
```

#### readAsync.js  
```javascript
//import fs module
let fs = require('fs')
//read data asynchronously
fs.readFile(require('../path'), "utf-8", (err, data) => {
    if (err)
        console.log('Error while reading data ', err.code)
    else
        console.log(data)
})
console.log('I am here')
```

#### readSync.js  
```javascript
//import fs module
let fs = require('fs')
//read data synchronously
let data = fs.readFileSync(require('../path'),'utf-8')
console.log(data)
console.log('I am here')
```

## 20 Feb 2025  
### Writing Data to files  
- `writeFile(-,-,-)` is the predefined function in the `fs` module, used to write data to files asynchronously.  
- `writeFileSync(-,-)` is the predefined function in the `fs` module, used to write data to files synchronously.  

#### Folder Structure  
```
write  
  - writeSync.js  
  - writeAsync.js  
```

#### writeAsync.js  
```javascript
//import fs module
let fs = require('fs')
//write data asynchronously
fs.writeFile(require('../path'), "hi", (err) => {
    if (err)
        console.log('Error while writing data')
    else
        console.log('Data write success')
})
console.log('I am here')
```

#### writeSync.js  
```javascript
//import fs module
let fs = require('fs')
//write data synchronously
fs.writeFileSync(require('../path'),'Hello...!')
console.log('Write Success')
console.log('I am here')
```

### Appending data to files  
- `appendFile(-,-,-)` is the predefined function in the `fs` module used to append data to files asynchronously.  
- `appendFileSync(-,-)` is the predefined function in the fs module used to append data to files synchronously.  

#### Folder Structure  
```
append  
  - appendSync.js  
  - appendAsync.js  
```

#### appendAsync.js  
```javascript
//import fs module
let fs = require('fs')
let path = require('../path')
//append data asynchronously
fs.appendFile(path, 'Good Morning...!', (err) => {
    if (err)
        console.log('Error while appending data')
    else
        console.log('Append Success')
    console.log(fs.readFileSync(path, 'utf-8'))
})
console.log('I am here')
```

#### appendSync.js  
```javascript
//import fs module
let fs = require('fs')
let path = require('../path')
//append data synchronously
fs.appendFileSync(path, '\tWelcome')
console.log('Data appended\n', fs.readFileSync(path, 'utf-8'))
console.log('I am here')
```