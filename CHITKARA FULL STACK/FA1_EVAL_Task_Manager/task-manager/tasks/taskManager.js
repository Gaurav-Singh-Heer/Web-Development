// tasks/taskManager.js
const fs = require('fs');
const { log } = require('task-manager-gaurav-1574');

const TASK_FILE = 'tasks.txt';
let requestTimestamps = [];

// Load tasks from file
function loadTasks() {
    try {
        if (!fs.existsSync(TASK_FILE)) return [];
        const data = fs.readFileSync(TASK_FILE, 'utf-8');
        return data ? JSON.parse(data) : [];
    } catch (err) {
        log("500 Internal Server Error - Could not read tasks file", "error");
        return [];
    }
}

// Save tasks to file
function saveTasks(tasks) {
    try {
        fs.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 2));
    } catch (err) {
        log("500 Internal Server Error - Could not write to tasks file", "error");
    }
}

// Generate the smallest missing natural number ID
function getNextTaskId(tasks) {
    const ids = tasks.map(t => parseInt(t.id)).sort((a, b) => a - b);
    let smallest = 1;
    for (const id of ids) {
        if (id === smallest) {
            smallest++;
        } else if (id > smallest) {
            break;
        }
    }
    return smallest;
}

// Add task with auto-generated ID
function addTask(taskTitle) {
    try {
        // Simulate 429: Max 5 requests in 5 seconds
        const now = Date.now();
        requestTimestamps = requestTimestamps.filter(ts => now - ts < 5000);
        if (requestTimestamps.length >= 5) {
            log("429 Too Many Requests - Please wait before adding more tasks", "warn");
            return;
        }
        requestTimestamps.push(now);

        if (!taskTitle || !taskTitle.trim()) {
            throw new Error("400 Bad Request - Task title cannot be empty");
        }

        const tasks = loadTasks();
        const id = getNextTaskId(tasks);
        tasks.push({ id, title: taskTitle });
        saveTasks(tasks);
        log(`201 Created - Task added with ID ${id}: ${taskTitle}`, "success");
    } catch (err) {
        log("500 Internal Server Error - Failed to add task", "error");
        log(err.message, "error");
    }
}



function listTasks() {
    const tasks = loadTasks();

    if (tasks.length === 0) {
        log("No tasks found", "warn");
        return;
    }

    // 🔽 Sort by ID (ascending)
    tasks.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    console.log("┌────┬──────────────────────────┐");
    console.log("│ ID │ Title                    │");
    console.log("├────┼──────────────────────────┤");
    
    tasks.forEach(t => {
        const paddedTitle = t.title.padEnd(24, ' ');
        const paddedId = String(t.id).padEnd(2, ' ');
        console.log(`│ ${paddedId} │ ${paddedTitle} │`);
    });
    
    console.log("└────┴──────────────────────────┘");

    /*
    console.log("\n📋 Task List (Sorted by ID):\n");
    tasks.forEach(t => {
        console.log(`ID: ${t.id}, Title: ${t.title}`);
    });
    */
}


function deleteTask(id) {
    const tasks = loadTasks();
    const index = tasks.findIndex(t => t.id == id);

    if (index === -1) {
        log("404 Not Found - Task not found", "warn");
        return;
    }

    tasks.splice(index, 1);
    saveTasks(tasks);
    log(`200 OK - Task deleted: ID ${id}`, "success");
}


function updateTask(id, newTitle) {
    try {
        if (!newTitle || !newTitle.trim()) {
            throw new Error("400 Bad Request - Title cannot be empty");
        }

        const tasks = loadTasks();
        const task = tasks.find(t => t.id == id);
        if (task) {
            task.title = newTitle;
            saveTasks(tasks);
            log(`200 OK - Task updated: ID ${id}`, "success");
        } else {
            log(`404 Not Found - No task found with ID ${id}`, "warn");
        }
    } catch (err) {
        log(err.message, "error");
    }
}

function searchTask(id) {
    const tasks = loadTasks();
    const task = tasks.find(t => t.id == id);
    if (task) {
        log(`Found Task: ID ${task.id}, Title: ${task.title}`);
    } else {
        log("404 Not Found - Task does not exist", "warn");
    }
}

module.exports = { addTask, listTasks, deleteTask, updateTask, searchTask };
