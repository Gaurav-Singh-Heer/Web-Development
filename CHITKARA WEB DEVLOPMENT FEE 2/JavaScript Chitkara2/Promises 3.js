// First promise
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operation 1 successful!");
    }, 2000);
});

// Handling the first promise and chaining another promise
promise1
    .then((result) => {
        console.log(result); // Output: Operation 1 successful!
        
        // Returning a new promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Operation 2 successful!");
            }, 2000);
        });
    })
    .then((result) => {
        console.log(result); // Output: Operation 2 successful!
    })
    .catch((error) => {
        console.error("Error:", error);
    });