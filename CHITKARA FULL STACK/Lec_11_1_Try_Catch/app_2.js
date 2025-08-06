// Method 1
console.log("Start of program");
try {
    let name;
    console.log(name.length);
} catch (err) {
    console.error("Caught an exception");
    
}
console.log("End of program");

// Method 2
// You can catch any uncaught errors globally using:
process.on('uncaughtException', (err) => {
    console.error("Uncaught Exception caught:", err.message);
    process.exit(1)
})
console.log("Start of program");
let name;
console.log(name.length);
console.log("End of program");