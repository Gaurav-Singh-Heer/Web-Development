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
