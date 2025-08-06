# 📚 Student Profile Manager

## 📘 Scenario:
You are building a **Student Profile Manager**. Each student’s data will be stored in a **separate folder**. Inside that folder, a `profile.txt` file will contain the student’s **name**, **age**, and **course**.

---

## 📌 Requirements:

Create a program `studentManager.js` that performs the following:

### 🔹 1. `createStudentFolder(studentName)`
- Creates a folder named after the student (e.g., `students/John`).
- If the folder already exists, skip creation.

---

### 🔹 2. `writeStudentProfile(studentName, age, course)`
- Inside that student’s folder, create or overwrite a file `profile.txt` with the following content:

```

Name: John
Age: 21
Course: Computer Science

```

---

### 🔹 3. `readStudentProfile(studentName)`
- Read and print the content of `profile.txt` from the corresponding student folder.

---

## 📁 Folder Structure Example:

```

students/
└── John/
└── profile.txt
└── Priya/
└── profile.txt

```

---

## 🔀 Version Requirements:

Implement the entire logic **twice**:

---

### ✅ Version 1 – Synchronous Version

Use the following Node.js methods:
- `fs.existsSync()`
- `fs.mkdirSync()`
- `fs.writeFileSync()`
- `fs.readFileSync()`

---

### ✅ Version 2 – Asynchronous Version

Use Node.js **Promises API** with `async/await`:
- `fs.promises.mkdir()`
- `fs.promises.writeFile()`
- `fs.promises.readFile()`

---

## ✅ Expected Output (Console):

```

✅ Created folder: John
✅ Wrote profile for John

📖 Reading Profile for John:
Name: John
Age: 21
Course: Computer Science

```

---

## 💡 Bonus (Optional Enhancements):
- Allow dynamic user input via the `readline` module.
- Validate inputs and handle errors gracefully.
- Implement CLI version using `process.argv`.

---

```

Let me know if you'd like me to include the full source code blocks for both versions inside this `.md` too.
