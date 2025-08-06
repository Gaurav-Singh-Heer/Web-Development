const fs = require('fs');
const readline = require('readline');

const USER_FILE = 'user.txt';

function signup(username, password) {
    if (!username || !password || username.includes(":") || password.includes(":")) {
        throw new Error("400 Bad Request - Invalid username or password format");
    }

    if (!isStrongPassword(password)) {
        throw new Error("400 Bad Request - Password must have at least 8 characters, 1 uppercase, 1 digit, and 1 special character");
    }

    fs.appendFileSync(USER_FILE, `${username}:${password}\n`);
    console.log("201 Created - Signup successful ✅");
}

function isStrongPassword(password) {
    let hasUpper = 0;
    let hasDigit = 0;
    let hasSpecial = 0;
    const specialChars = "!@#$%^&*";

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= 'A' && char <= 'Z') hasUpper++;
        else if (char >= '0' && char <= '9') hasDigit++;
        else if (specialChars.includes(char)) hasSpecial++;
    }

    if (password.length >= 8 && hasUpper > 0 && hasDigit > 0 && hasSpecial > 0) {
        return true;
    }
    return false;
}


function login(username, password) {
    const users = fs.readFileSync(USER_FILE, 'utf-8').split('\n');
    for (const line of users) {
        const [user, pass] = line.split(':');
        if (user === username && pass === password) return true;
    }
    return false;
}

module.exports = { signup, login };
