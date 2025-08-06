// utils.js

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function getTimestamp() {
  const now = new Date();
  return now.toISOString().replace(/[:.]/g, "-");
}

module.exports = { validateEmail, getTimestamp };
