
# 📄 Interactive Resume Generator & File Uploader (Node.js CLI Project)

## 🎯 AIM
Build a Node.js Command Line Interface (CLI) application that allows users to:
- Generate a **resume** in both **PDF** and **JSON** formats based on user input.
- Automatically upload the generated resume to a **separate file server**, simulating cloud-based file storage.

---

## 🔧 Part 1: Interactive Resume Builder (CLI App)

### 👤 User Interaction
- Prompt user for:
  - Name
  - Age
  - Education
  - Experience
- Let the user **choose between multiple resume templates**.
- Let the user select the **output format**:
  - `PDF`
  - `JSON`

### 🧰 Technologies & Packages Used
- [`prompt-sync`](https://www.npmjs.com/package/prompt-sync) – for CLI input
- [`inquirer`](https://www.npmjs.com/package/inquirer) – for prompt menus & selections
- [`pdfkit`](https://www.npmjs.com/package/pdfkit) – for PDF generation
- `fs` – for file creation

---

## ⚡ Part 2: Command Flags for Quick Resume Building

### 🧪 Command-Line Execution
Supports quick resume building using flags:
```bash
node index.js --name="Ravi" --email="ravi@example.com" --education="MCA" --exp="2 years" --age="22"
````

### 🛡️ Input Validation

* Ensure `email` is in **valid format**
* Ensure `age` is a **number**

### 📁 Resume Versioning

* Save resumes with **timestamps** to avoid overwriting:

```
Example: 2025-07-29-14-30.pdf or 2025-07-29-14-30.json
```

---

## 🌐 Part 3: Resume File Server (Cloud Storage Simulation)

### 🔌 Objective

Create a **file server** that will:

* Accept **PDF resumes** via POST request
* Save them in a local `uploads/` folder

### 💡 Hints

1. Create a server using [`Express`](https://expressjs.com/).
2. In your CLI app, **upload the generated PDF** using:

   * [`axios`](https://www.npmjs.com/package/axios)
   * [`form-data`](https://www.npmjs.com/package/form-data)

---

## ✅ Project Flow Summary

1. Prompt user or accept command-line flags
2. Validate input
3. Generate resume (`JSON` or `PDF`)
4. Save with timestamp in `resumes/`
5. Upload to `file server` if PDF

---

## 📁 Folder Structure

```
resume-cli/
│
├── templates/
│   ├── template1.js
│   └── template2.js
│
├── resumes/
│   ├── 2025-07-29-14-30.json
│   └── 2025-07-29-14-30.pdf
│
├── index.js
├── utils.js
└── fileserver/
    ├── server.js
    └── uploads/
```

---

## 📦 Future Enhancements (Optional)

* Add `template selector` via CLI flag
* Include profile photo or skills section
* Store uploaded resumes in cloud (e.g., AWS S3)

---

> 🧠 Developed as a learning project for Node.js CLI and backend file handling using Express.

---
---
---

Great project idea, Gaurav! You're combining **Node.js CLI**, **file handling**, **validation**, and **microservice communication**. Here’s a complete breakdown of how to structure and build your **Interactive Resume Generator & File Uploader** in 3 parts:

---

## 🔧 Part 1: Interactive Resume Builder (CLI App)

### ✅ Features:

* Input via `prompt-sync` or `inquirer`
* Output format: JSON or PDF (via `pdfkit`)
* Template selection

### 📦 Required Packages:

```bash
npm install prompt-sync inquirer pdfkit fs
```

### 🧱 Folder Structure:

```
resume-cli/
│
├── templates/
│   ├── template1.js
│   └── template2.js
│
├── resumes/
│   ├── 2025-07-29-14-30.json
│   └── 2025-07-29-14-30.pdf
│
├── index.js
└── utils.js
```

### 🧠 Example: `index.js`

```js
const fs = require("fs");
const PDFDocument = require("pdfkit");
const prompt = require("prompt-sync")();
const inquirer = require("inquirer");
const { getTimestamp, validateEmail } = require("./utils");

(async () => {
  const name = prompt("Enter your name: ");
  const age = prompt("Enter your age: ");
  const education = prompt("Enter your education: ");
  const experience = prompt("Enter your experience: ");
  const email = prompt("Enter your email: ");

  if (!validateEmail(email)) return console.log("❌ Invalid Email");
  if (isNaN(age)) return console.log("❌ Age must be a number");

  const { format } = await inquirer.prompt([
    {
      type: "list",
      name: "format",
      message: "Select output format:",
      choices: ["PDF", "JSON"],
    },
  ]);

  const timestamp = getTimestamp();
  const fileName = `resumes/${timestamp}`;

  const data = { name, age, education, experience, email };

  if (format === "JSON") {
    fs.writeFileSync(`${fileName}.json`, JSON.stringify(data, null, 2));
    console.log("✅ JSON Resume created!");
  } else {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(`${fileName}.pdf`));
    doc.fontSize(25).text("Resume", { align: "center" });
    Object.entries(data).forEach(([k, v]) => doc.text(`${k}: ${v}`));
    doc.end();
    console.log("✅ PDF Resume created!");
  }
})();
```

---

## 🧾 Part 2: Command-Line Flags + Versioning

### 📦 Install:

```bash
npm install yargs
```

### ✨ Modify `index.js` to support flags

```js
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;
if (argv.name && argv.email && argv.education && argv.exp && argv.age) {
  if (!validateEmail(argv.email)) return console.log("❌ Invalid Email");
  if (isNaN(argv.age)) return console.log("❌ Age must be a number");

  const data = {
    name: argv.name,
    email: argv.email,
    education: argv.education,
    experience: argv.exp,
    age: argv.age,
  };

  const timestamp = getTimestamp();
  const fileName = `resumes/${timestamp}.json`;
  fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
  console.log(`✅ Resume created: ${fileName}`);
}
```

### ✅ Example Usage:

```bash
node index.js --name="Ravi" --email="ravi@example.com" --education="MCA" --exp="2 years" --age="22"
```

---

## 🌐 Part 3: File Server (Simulated Cloud Storage)

### 📦 File Server Setup:

```bash
npm install express multer
```

### 📁 `fileserver/server.js`

```js
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

app.post("/upload", upload.single("resume"), (req, res) => {
  console.log("✅ File received:", req.file.filename);
  res.send("File uploaded successfully");
});

app.listen(PORT, () => console.log(`📁 File server running on http://localhost:${PORT}`));
```

> Ensure you create an `uploads/` directory in the `fileserver/` folder.

---

### 📤 Resume CLI: Upload to Server using `axios`

```bash
npm install axios form-data
```

### 🔄 Add in `index.js` after file creation:

```js
const axios = require("axios");
const FormData = require("form-data");

const uploadFile = async (filePath) => {
  const form = new FormData();
  form.append("resume", fs.createReadStream(filePath));

  try {
    const res = await axios.post("http://localhost:3000/upload", form, {
      headers: form.getHeaders(),
    });
    console.log("✅ Uploaded to server:", res.data);
  } catch (err) {
    console.error("❌ Upload failed:", err.message);
  }
};

uploadFile(`${fileName}.${format.toLowerCase()}`);
```

---

## 📦 Output Example

```
? Select output format: PDF
✅ PDF Resume created!
✅ Uploaded to server: File uploaded successfully
```

---

## 🏁 Final Notes:

* You can customize templates using `ejs` or dynamic layouts.
* Add a `--template=1` flag for different design choices.
* Ensure both the resume CLI and file server are running in different terminals.

Let me know if you want the complete source code zipped!
