export function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateAge(age) {
    return /^\d+$/.test(age) && parseInt(age) > 0;
}
