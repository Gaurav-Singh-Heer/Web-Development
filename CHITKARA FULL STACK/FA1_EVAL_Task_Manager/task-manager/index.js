const readline = require('readline');
const { signup, login } = require('./auth/userAuth');
const taskManager = require('./tasks/taskManager');
const { log } = require('task-manager-gaurav-1574');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function prompt(question) {
    return new Promise(resolve => rl.question(question, ans => resolve(ans.trim())));
}

async function main() {
    console.log("Welcome to the Task Manager App");

    const choice = await prompt("1. Login\n2. Signup\nChoose: ");
    const username = await prompt("Enter username: ");
    const password = await prompt("Enter password: ");

    if (choice === '2') {
        signup(username, password);
        log("User signed up successfully");
    }

    if (!login(username, password)) {
        log("401 Unauthorized - Login failed", "error");
        rl.close();
        return;
    }

    log("200 OK - Login successful", "success");

    while (true) {
        const opt = await prompt(
            "\n1. Add Task\n2. Update Task\n3. Delete Task\n4. List Tasks\n5. Search Task\n6. Exit\nChoose: "
        );
        switch (opt) {
            case '1':
                const title = await prompt("Enter task title: ");
                taskManager.addTask(title);  // ✅ Only pass title string
                break;

            case '2':
                const uid = await prompt("Enter task ID to update: ");
                const newTitle = await prompt("Enter new title: ");
                taskManager.updateTask(uid, newTitle);
                break;
            case '3':
                const did = await prompt("Enter task ID to delete: ");
                taskManager.deleteTask(did);
                break;
            case '4':
                taskManager.listTasks();
                break;
            case '5':
                const sid = await prompt("Enter task ID to search: ");
                taskManager.searchTask(sid);
                break;
            case '6':
                log("Goodbye!");
                rl.close();
                return;
            default:
                log("Invalid option", "warn");
        }
    }
}

main();
