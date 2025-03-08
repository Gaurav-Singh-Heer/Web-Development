const fs = require("fs");
const path = require("path");

// Define the file where the data will be saved
const patientDataFile = path.join(__dirname, "../patient.json");

// Logic for submitting patient data
// In patientController.js
exports.submitPatientData = (req, res) => {
  const formData = req.body;
  console.log(formData); // Log the form data to verify it's being received
  fs.readFile(patientDataFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading patient data:", err);
      res.status(500).send("Error reading data.");
      return;
    }

    let patients = [];
    if (data) {
      try {
        patients = JSON.parse(data);
      } catch (parseError) {
        console.error("Error parsing patient data:", parseError);
        res.status(500).send("Error parsing data.");
        return;
      }
    }

    patients.push(formData);

    fs.writeFile(
      patientDataFile,
      JSON.stringify(patients, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing patient data:", err);
          res.status(500).send("Error saving data.");
          return;
        }
        res.status(200).json({ message: "Appointment Submitted Successfully" });
      }
    );
  });
};
