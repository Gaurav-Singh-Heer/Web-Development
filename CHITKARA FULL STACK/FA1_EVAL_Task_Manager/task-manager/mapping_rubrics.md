
---

## ✅ **Mapping Your Project to Rubric Criteria**
 
| 🔢  | **Criterion**               | ✅ **Where It’s Used in Your Project**                                                                                                                                        |
| ---- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1️⃣  | **Functionality (45%)**     | - All menu options work: Add, Update, Delete, Search, List <br> - Task ID is auto-generated correctly <br> - Data is saved/loaded from file properly using file system       |
| 2️⃣  | **Input Validation (15%)**  | - Username/password checked for exact match in `user.txt` <br> - Task ID uniqueness check before adding (when manual) <br> *Can be enhanced for stricter validation*         |
| 3️⃣  | **Error Handling (15%)**    | ✅ Used `try-catch` blocks:<br> - `addTask()` throws and catches duplicate ID<br> - All file operations (read/write) are inside `try-catch`<br> - Logs error messages clearly |
| 4️⃣  | **HTTP Errors (Simulated)** | 🛠️ Though it's a console app, errors are explained like:<br> - "Task not found" (404-like)<br> - "Login failed" (401-like)<br> - "ID already exists" (409-like conflict)    |
| 5️⃣  | **Promises (Async/Await)**  | ✅ `index.js` uses `async/await` to handle user input using `readline`:<br>`js const title = await prompt("Enter task title"); `                                              |
| 6️⃣  | **Synchronous Code**        | ✅ All file operations using `fs.readFileSync`, `writeFileSync` <br> This is synchronous I/O                                                                                  |
| 7️⃣  | **Code Quality (15%)**      | ✅ Clean, modular structure: <br> - Separated auth, tasks, logger <br> - Custom NPM package <br> - File comments like: `// Load tasks from file`                              |
| 8️⃣  | **Class Behaviour (10%)**   | - Your active response to bugs (e.g., fixing ID, adding validation)<br> - Creation of your own package<br> - Sticking to FA-1 guidelines                                     |

---

## 🧠 **Where Exactly Are the Key Concepts Used?**

### ✅ **1. Exception Handling**

> ✅ Used via `try...catch`

```js
function addTask(taskTitle) {
    try {
        const tasks = loadTasks();
        ...
    } catch (err) {
        log(err.message, "error");
    }
}
```

Also, login validation:

```js
if (!login(username, password)) {
    log("Login failed", "error"); // Like a 401 Unauthorized
}
```

---

### ✅ **2. Promises & Async/Await**

> ✅ Used with `readline` interface wrapped in a promise:

```js
async function prompt(question) {
    return new Promise(resolve => rl.question(question, ans => resolve(ans.trim())));
}
```

Then used like:

```js
const username = await prompt("Enter username: ");
```

---

### ✅ **3. Sync Code**

> ✅ File I/O operations are synchronous:

```js
const data = fs.readFileSync(TASK_FILE, 'utf-8');
fs.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 2));
```

This keeps the console app simple without callbacks.

---

### ✅ **4. Error Types Simulated**

Though it's a console app (not HTTP), you simulate HTTP-like errors:

| HTTP Code | Simulated Message     | Where                                |
| --------- | --------------------- | ------------------------------------ |
| 400       | Invalid input         | If empty username/password (can add) |
| 401       | Login failed          | `if (!login(...))`                   |
| 404       | Task not found        | `searchTask()`                       |
| 409       | Duplicate task ID     | `addTask()` with duplicate check     |
| 500       | File operation failed | Inside `try-catch` blocks            |

---

### ✅ **Code Quality**

> Clean separation:

* `index.js` → Routing and prompt flow
* `auth/userAuth.js` → Login/signup logic
* `tasks/taskManager.js` → Task operations
* `utils/logger.js` → Your own npm module

**Each file has clear responsibilities** and can be easily tested or extended.

---

## ✅ Recommendations to Score Full Marks:

To get **100% marks** on your rubric:

✅ Add more input validations (e.g. reject empty title or whitespace passwords)

✅ Wrap file I/O in `try/catch` in all functions (e.g., `loadTasks`, `saveTasks`)

✅ Add custom errors like:

```js
if (!taskTitle.trim()) {
    throw new Error("Task title cannot be empty");
}
```

✅ You can log HTTP-like messages:

```js
log("401 Unauthorized - Invalid Login", "error");
log("404 Not Found - Task ID does not exist", "warn");
```

---

Would you like me to:

* Add these **error codes + comments** directly into your files for final submission?
* Or make a **markdown report file** explaining all this for your evaluator?

You're almost submission-ready! 🔥
