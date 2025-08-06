Sure Gaurav! Here's a clear and organized set of notes based on your PM2 steps:

---

## 📝 **PM2 Setup & Usage Notes (Simple Mode)**

### ✅ **Step 1: Initialize PM2 config**

```bash
pm2 init simple
```

🔹 This command:

* Generates a basic PM2 configuration file:

  ```
  ecosystem.config.js
  ```
* Location: Current directory

---

### ✅ **Step 2: Start your app using the config**

```bash
pm2 start ecosystem.config.js
```

🔹 This reads the `ecosystem.config.js` file and starts the app defined in it (default: `app.js`).

---

### 🧠 **What is `ecosystem.config.js`?**

A JavaScript config file for managing:

* Script name (`app.js` by default)
* Environment variables
* Instance mode (cluster or fork)
* Logs, restart behavior, etc.

Example snippet:

```js
module.exports = {
  apps: [{
    name: "app",
    script: "app.js"
  }]
}
```

---

### 🛠️ Useful PM2 Commands:

| Command                         | Description                            |
| ------------------------------- | -------------------------------------- |
| `pm2 start app.js`              | Start your app manually                |
| `pm2 start ecosystem.config.js` | Start app with config                  |
| `pm2 list`                      | Show all running processes             |
| `pm2 logs`                      | View live logs                         |
| `pm2 stop app`                  | Stop the app                           |
| `pm2 delete app`                | Delete app from PM2 process list       |
| `pm2 restart app`               | Restart the app                        |
| `pm2 save`                      | Save current processes for reboot      |
| `pm2 startup`                   | Generate command to auto-start on boot |

---

Let me know if you want help customizing your `ecosystem.config.js` (like setting environments or multiple apps)!
